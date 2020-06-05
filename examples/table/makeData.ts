import namor from "namor";

export interface TableData {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  siblings: number;
  children: number;
  status: string;
  "Exact description of assets": string;
  "Gross income Assets subject to Swiss withholding tax": string;
  [key: string]: string | number;
}

const newPerson = (): TableData => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    siblings: Math.floor(Math.random() * 4),
    children: Math.floor(Math.random() * 4),
    "Exact description of assets":
      "Collective entry True Wealth AG - assets with Swiss domicile",
    "Gross income Assets subject to Swiss withholding tax": "CHF 0",
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33
        ? "complicated"
        : "single",
  };
};

export const makeData = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(newPerson());
  }
  return arr;
};
