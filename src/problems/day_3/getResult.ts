import textData from "./data.txt";

export const getResultDayThree = async () => {
  const text = await fetch(textData).then((r) => r.text());
  const data = text.split("\r\n");

  const partOneResult = getPartOneResult(data);
  const partTwoResult = getPartTwoResult(data);
  console.log({ partTwoResult });

  return [partOneResult, partTwoResult];
};

const getPartOneResult = (data: string[]) => {
  const splitCompartments = data.map((item) => [item.substring(0, item.length / 2), item.substring(item.length / 2)]);
  const doubleChar = splitCompartments.map((item) =>
    item[0].split("").find((letter) => item[1].includes(letter))
  ) as string[];
  const charValues = doubleChar.map(getPriority);
  const summed = charValues.reduce((a, b) => a + b);

  return summed;
};

const getPartTwoResult = (data: string[]) => {
  const divisibleByThree = data.map((_, index) => index).filter((index) => index % 3 === 0);
  const grouped = divisibleByThree.map((index) => data.slice(index, index + 3));

  const charInAllGroup = grouped.map((item) => {
    const uniqueChars = Array.from(new Set(item.join("").split("")));
    const inAllGroups = uniqueChars.find((c) => item.every((g) => g.includes(c)));
    if (inAllGroups == null) throw "should never happen";
    return inAllGroups;
  });
  const summed = charInAllGroup.map(getPriority).reduce((a, b) => a + b);

  return summed;
};

function getPriority(letter: string) {
  const itemPriorityOrder = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return itemPriorityOrder.indexOf(letter) + 1;
}
