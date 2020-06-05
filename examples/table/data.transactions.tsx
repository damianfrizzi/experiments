import { TableColumn } from "./table"

export const transactionsColumns: TableColumn<any>[] = [
  {
    Header: () => <>Date</>,
    accessor: "date",
  },
  {
    Header: () => <>Instrument</>,
    accessor: "instrument",
    cellStyle: {
      minWidth: 250,
    },
  },
  {
    Header: () => <>Transaction</>,
    accessor: "transaction",
  },
  {
    Header: () => <>Quantity Amount</>,
    accessor: "quantityamount",
    cellStyle: {
      minWidth: 150,
    },
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
    instrument: (
      <>
        <span>Vanguard USD Corporate Bond UCITS ETF</span> <i className="infoIcon" />
      </>
    ),
    transaction: "dividend",
    quantityamount: "-",
    currency: "CHF",
    price: "4.37",
    amount: "4.37",
  },
  {
    date: "19.03.2020",
    instrument: (
      <>
        <span>iShares Swiss Domestic Government Bond 7-15 (CH)</span> <i className="infoIcon" />
      </>
    ),
    transaction: "dividend",
    quantityamount: "-",
    currency: "CHF",
    price: "4.37",
    amount: "4.37",
  },
  {
    date: "19.03.2020",
    instrument: (
      <>
        US Dollar <i className="infoIcon" />
      </>
    ),
    transaction: "buy",
    quantityamount: "40",
    currency: "CHF",
    price: "0.97",
    amount: "39.03",
  },
  {
    date: "19.03.2020",
    instrument: (
      <>
        US Dollar <i className="infoIcon" />
      </>
    ),
    transaction: "buy",
    quantityamount: "2",
    currency: "CHF",
    price: "0.93",
    amount: "1.75",
  },
]
