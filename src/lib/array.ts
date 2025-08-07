import { Cat } from "@/types";

export const addScoreToCats = (cats: Cat[]) =>
  cats.map((cat) => ({
    ...cat,
    score: 0,
  }));

export const getRandomCatExcludingId = (
  cats: Cat[],
  excludedId: string
): Cat => {
  const filtered = cats.filter((cat) => cat.id !== excludedId);
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
};

export const sortCatsByScore = (cats: Cat[]): Cat[] =>
  [...cats].sort((firstCat, secondCat) => secondCat.score - firstCat.score);

