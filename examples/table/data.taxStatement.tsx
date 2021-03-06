import { TableColumn } from "./table"

export const taxStatementColumns: TableColumn<any>[] = [
  {
    Header: () => <>Exact description of assets</>,
    accessor: "description",
    cellStyle: {
      minWidth: 200,
    },
  },
  {
    Header: () => (
      <>
        Tax value
        <br />
        per 31 Dec
      </>
    ),
    accessor: "taxValue",
    cellStyle: {
      minWidth: 120,
    },
  },
  {
    Header: () => (
      <>
        Gross income
        <br />
        Assets subject to
        <br />
        Swiss
        <br />
        withholding tax
      </>
    ),
    accessor: "grossIncome",
    cellStyle: {
      minWidth: 150,
    },
  },
  {
    Header: () => (
      <>
        Gross income
        <br />
        Assets without
        <br />
        Swiss
        <br />
        withholding tax
      </>
    ),
    cellStyle: {
      minWidth: 150,
    },
    accessor: "grossIncomeAssets",
  },
]

export const taxStatementData = [
  {
    description: "Collective entry True Wealth AG - assets with Swiss domicile",
    taxValue: "CHF 4'509",
    grossIncome: "CHF 39",
    grossIncomeAssets: "-",
  },
  {
    description: "Collective entry True Wealth AG - assets with Swiss domicile",
    taxValue: "CHF 5'709",
    grossIncome: "-",
    grossIncomeAssets: "CHF 24",
  },
  {
    description: "Collective entry True Wealth AG - cash accounts subject to Swiss withholding tax",
    taxValue: "CHF 0",
    grossIncome: "CHF 0",
    grossIncomeAssets: "-",
  },
  {
    description: "Collective entry True Wealth AG - cash accounts without Swiss withholding tax",
    taxValue: "CHF 257",
    grossIncome: "-",
    grossIncomeAssets: "CHF 0",
  },
]
