import { FC, useState } from "react"
import { Table, MobileTableVariant } from "./table"
import styles from "./overview.module.scss"
import { taxStatementData, taxStatementColumns } from "./data.taxStatement"
import { transactionsData, transactionsColumns } from "./data.transactions"
import { holdingsData, holdingsColumns } from "./data.holdings"

export const TableOverview: FC = () => {
  const [taxVariant, setTaxVariant] = useState(MobileTableVariant.SCROLL)
  const [transactionsVariant, setTransactionsVariant] = useState(MobileTableVariant.SCROLL)
  const [holdingsVariant, setHoldingsVariant] = useState(MobileTableVariant.KEY_VALUE)

  const toggleVariant = (variant: MobileTableVariant) =>
    variant === MobileTableVariant.SCROLL ? MobileTableVariant.KEY_VALUE : MobileTableVariant.SCROLL

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Tax statement</h2>
        <button onClick={() => setTaxVariant(toggleVariant)}>Toggle mobile variant</button>
        <Table variant={taxVariant} data={taxStatementData} columns={taxStatementColumns} />
      </div>

      <div className={styles.card}>
        <h2>Transactions</h2>
        <button onClick={() => setTransactionsVariant(toggleVariant)}>Toggle mobile variant</button>
        <Table variant={transactionsVariant} data={transactionsData} columns={transactionsColumns} />
      </div>

      <div className={styles.card}>
        <h2>Holdings</h2>
        <button onClick={() => setHoldingsVariant(toggleVariant)}>Toggle mobile variant</button>
        <Table variant={holdingsVariant} data={holdingsData} columns={holdingsColumns} />
      </div>
    </div>
  )
}
