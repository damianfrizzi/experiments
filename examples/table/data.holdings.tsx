import { TableColumn } from "./table"

export const holdingsColumns: TableColumn<any>[] = [
  {
    Header: () => <>Securities</>,
    accessor: "securities",
    cellStyle: {
      width: "25vw",
      maxWidth: "25vw",
    },
  },
  {
    Header: () => <>Quantity</>,
    accessor: "quantity",
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
    Header: () => <>Price date</>,
    accessor: "priceDate",
  },
  {
    Header: () => <>Position value</>,
    accessor: "positionValue",
  },
  {
    Header: () => <>Percentage</>,
    accessor: "percentage",
  },
]

export const holdingsData = [
  {
    securities: (
      <>
        <span>Vanguard USD Corporate Bond UCITS ETF</span> <i className="infoIcon" />
      </>
    ),
    quantity: "4",
    currency: "USD",
    price: "56.41",
    priceDate: "03.06.20",
    positionValue: "CHF 216.96",
    percentage: "1.8%",
  },
  {
    securities: (
      <>
        <span>iShares Swiss Domestic Government Bond 7-15 (CH)</span> <i className="infoIcon" />
      </>
    ),
    quantity: "15",
    currency: "USD",
    price: "118.08",
    priceDate: "03.06.20",
    positionValue: "CHF 1'771.96",
    percentage: "14.8%",
  },
  {
    securities: (
      <>
        <span>iShares US Property Yield UCITS ETF USD (Dist)</span> <i className="infoIcon" />
      </>
    ),
    quantity: "10",
    currency: "USD",
    price: "24.08",
    priceDate: "03.06.20",
    positionValue: "CHF 3'771.96",
    percentage: "4.8%",
  },
  {
    securities: (
      <>
        <span>UBS ETF (CH) SXI Real Estate® with some extra long title to demonstrate (CHF) A-dis</span>{" "}
        <i className="infoIcon" />
      </>
    ),
    quantity: "20",
    currency: "CHFD",
    price: "33.55",
    priceDate: "03.06.20",
    positionValue: "CHF 671.96",
    percentage: "5.8%",
  },
  {
    securities: (
      <>
        <span>Vanguard USD Corporate Bond UCITS ETF</span> <i className="infoIcon" />
      </>
    ),
    quantity: "4",
    currency: "USD",
    price: "56.41",
    priceDate: "03.06.20",
    positionValue: "CHF 216.96",
    percentage: "1.8%",
  },
  {
    securities: (
      <>
        <span>iShares Swiss Domestic Government Bond 7-15 (CH)</span> <i className="infoIcon" />
      </>
    ),
    quantity: "15",
    currency: "USD",
    price: "118.08",
    priceDate: "03.06.20",
    positionValue: "CHF 1'771.96",
    percentage: "14.8%",
  },
  {
    securities: (
      <>
        <span>iShares US Property Yield UCITS ETF USD (Dist)</span> <i className="infoIcon" />
      </>
    ),
    quantity: "10",
    currency: "USD",
    price: "24.08",
    priceDate: "03.06.20",
    positionValue: "CHF 3'771.96",
    percentage: "4.8%",
  },
  {
    securities: (
      <>
        <span>UBS ETF (CH) SXI Real Estate® with some extra long title to demonstrate (CHF) A-dis</span>{" "}
        <i className="infoIcon" />
      </>
    ),
    quantity: "20",
    currency: "CHFD",
    price: "33.55",
    priceDate: "03.06.20",
    positionValue: "CHF 671.96",
    percentage: "5.8%",
  },
  {
    securities: (
      <>
        <span>Vanguard USD Corporate Bond UCITS ETF</span> <i className="infoIcon" />
      </>
    ),
    quantity: "4",
    currency: "USD",
    price: "56.41",
    priceDate: "03.06.20",
    positionValue: "CHF 216.96",
    percentage: "1.8%",
  },
  {
    securities: (
      <>
        <span>iShares Swiss Domestic Government Bond 7-15 (CH)</span> <i className="infoIcon" />
      </>
    ),
    quantity: "15",
    currency: "USD",
    price: "118.08",
    priceDate: "03.06.20",
    positionValue: "CHF 1'771.96",
    percentage: "14.8%",
  },
  {
    securities: (
      <>
        <span>iShares US Property Yield UCITS ETF USD (Dist)</span> <i className="infoIcon" />
      </>
    ),
    quantity: "10",
    currency: "USD",
    price: "24.08",
    priceDate: "03.06.20",
    positionValue: "CHF 3'771.96",
    percentage: "4.8%",
  },
  {
    securities: (
      <>
        <span>UBS ETF (CH) SXI Real Estate® with some extra long title to demonstrate (CHF) A-dis</span>{" "}
        <i className="infoIcon" />
      </>
    ),
    quantity: "20",
    currency: "CHFD",
    price: "33.55",
    priceDate: "03.06.20",
    positionValue: "CHF 671.96",
    percentage: "5.8%",
  },
  {
    securities: (
      <>
        <span>Vanguard USD Corporate Bond UCITS ETF</span> <i className="infoIcon" />
      </>
    ),
    quantity: "4",
    currency: "USD",
    price: "56.41",
    priceDate: "03.06.20",
    positionValue: "CHF 216.96",
    percentage: "1.8%",
  },
  {
    securities: (
      <>
        <span>iShares Swiss Domestic Government Bond 7-15 (CH)</span> <i className="infoIcon" />
      </>
    ),
    quantity: "15",
    currency: "USD",
    price: "118.08",
    priceDate: "03.06.20",
    positionValue: "CHF 1'771.96",
    percentage: "14.8%",
  },
  {
    securities: (
      <>
        <span>iShares US Property Yield UCITS ETF USD (Dist)</span> <i className="infoIcon" />
      </>
    ),
    quantity: "10",
    currency: "USD",
    price: "24.08",
    priceDate: "03.06.20",
    positionValue: "CHF 3'771.96",
    percentage: "4.8%",
  },
  {
    securities: (
      <>
        <span>UBS ETF (CH) SXI Real Estate® with some extra long title to demonstrate (CHF) A-dis</span>{" "}
        <i className="infoIcon" />
      </>
    ),
    quantity: "20",
    currency: "CHFD",
    price: "33.55",
    priceDate: "03.06.20",
    positionValue: "CHF 671.96",
    percentage: "5.8%",
  },
]
