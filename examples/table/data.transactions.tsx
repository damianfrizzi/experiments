import { TableColumn } from "./table"

export const transactionsColumns: TableColumn<any>[] = [
  {
    Header: () => <>Date</>,
    accessor: "date",
  },
  {
    Header: () => <>Instrument</>,
    accessor: "instrument",
  },
  {
    Header: () => <>Transaction</>,
    accessor: "transaction",
  },
  {
    Header: () => (
      <>
        Quantity
        <br />
        Amount
      </>
    ),
    accessor: "quantityamount",
  },
  {
    Header: () => <>Currency</>,
    accessor: "currency",
  },
  {
    Header: () => <>Price</>,
    accessor: "price",
  },
  {
    Header: () => <>Amount</>,
    accessor: "amount",
  },
]

export const transactionsData = [
  {
    date: "19.03.2020",
    instrument: "iShares Core SPI® ETF (CH)",
    transaction: "dividend",
    quantityamount: "-",
    currency: "CHF",
    price: "4.37",
    amount: "4.37",
  },
  {
    date: "19.03.2020",
    instrument: "US Dollar",
    transaction: "buy",
    quantityamount: "40",
    currency: "CHF",
    price: "0.97",
    amount: "39.03",
  },
  {
    date: "19.03.2020",
    instrument: "US Dollar",
    transaction: "buy",
    quantityamount: "2",
    currency: "CHF",
    price: "0.93",
    amount: "1.75",
  },
]
