import textData from "./data.txt";

export const getResultDayOne = async () => {
  const text = await fetch(textData).then((r) => r.text());

  const groupTotals = text
    .split("\r\n\r\n")
    .map((g) => {
      const numberGroup = g.split("\r\n").map((i) => parseInt(i));
      const summed = numberGroup.reduce((a, b) => a + b);
      return summed;
    })
    .sort((a, b) => b - a);

  const maxValue = groupTotals[0];
  return maxValue;
};
