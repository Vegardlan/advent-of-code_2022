import textData from "./data.txt";

export const getResultDayOne = async () => {
  const sortedGroupTotals = await getSortedCalorieSumPerElve();

  const topThreeCalories = sortedGroupTotals.slice(0, 3);
  const totalTopThree = topThreeCalories.reduce((a, b) => a + b);

  const maxValue = sortedGroupTotals[0];
  return [maxValue, totalTopThree];
};

const getSortedCalorieSumPerElve = async () => {
  const groupedCalouries = await getGroupedCalories();

  const sortedGroupTotals = groupedCalouries.map((g) => g.reduce((a, b) => a + b)).sort((a, b) => b - a);
  return sortedGroupTotals;
};

const getGroupedCalories = async () => {
  const text = await fetch(textData).then((r) => r.text());

  const groupedCalouries = text.split("\r\n\r\n").map((g) => {
    const numberGroup = g.split("\r\n").map((i) => parseInt(i));
    return numberGroup;
  });

  return groupedCalouries;
};
