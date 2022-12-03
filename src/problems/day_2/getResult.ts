import textData from "./data.txt";

type RoundType = ["A" | "B" | "C", "X" | "Y" | "Z"];

export const getResultDayTwo = async () => {
  const text = await fetch(textData).then((r) => r.text());
  const roundData = text.split("\r\n").map((i) => i.split(" ")) as RoundType[];

  const partOneResult = getPartOneResult(roundData);
  const partTwoResult = getPartTwoResult(roundData);
  return [partOneResult, partTwoResult];
};

const getPartTwoResult = (data: RoundType[]) => {
  const remappedData = data.map(remapRound);

  const totalShapeScore = getShapeScore(remappedData);

  const resultScores = remappedData.map((item) => getRoundResult(item));
  const totalResultScore = resultScores.reduce((a, b) => a + b);

  const total = totalResultScore + totalShapeScore;
  return total;
};

const getPartOneResult = (data: RoundType[]) => {
  const totalShapeScore = getShapeScore(data);

  const resultScores = data.map((item) => getRoundResult(item));
  const totalResultScore = resultScores.reduce((a, b) => a + b);

  const total = totalResultScore + totalShapeScore;
  return total;
};

function getShapeScore(data: RoundType[]) {
  const shapeScores = data.map((item) => ({ X: 1, Y: 2, Z: 3 }[item[1]]));
  const totalShapeScore = shapeScores.reduce((a, b) => a + b);
  return totalShapeScore;
}

function getRoundResult(round: RoundType): number {
  if (
    (round[1] === "X" && round[0] === "C") ||
    (round[1] === "Y" && round[0] === "A") ||
    (round[1] === "Z" && round[0] === "B")
  ) {
    return 6;
  } else if (
    (round[1] === "X" && round[0] === "A") ||
    (round[1] === "Y" && round[0] === "B") ||
    (round[1] === "Z" && round[0] === "C")
  ) {
    return 3;
  } else {
    return 0;
  }
}

function remapRound(round: RoundType): RoundType {
  if (
    (round[1] === "X" && round[0] === "B") ||
    (round[1] === "Y" && round[0] === "A") ||
    (round[1] === "Z" && round[0] === "C")
  ) {
    return [round[0], "X"];
  } else if (
    (round[1] === "X" && round[0] === "C") ||
    (round[1] === "Y" && round[0] === "B") ||
    (round[1] === "Z" && round[0] === "A")
  ) {
    return [round[0], "Y"];
  } else if (
    (round[1] === "X" && round[0] === "A") ||
    (round[1] === "Y" && round[0] === "C") ||
    (round[1] === "Z" && round[0] === "B")
  ) {
    return [round[0], "Z"];
  } else {
    throw "never happens";
  }
}
