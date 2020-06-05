import { FC, useState } from "react"
import { Table, MobileTableVariant } from "./table"
import styles from "./overview.module.scss"
import { taxStatementData, taxStatementColumns } from "./data.taxStatement"
import { transactionsData, transactionsColumns } from "./data.transactions"
import { holdingsData, holdingsColumns } from "./data.holdings"

export const TableOverview: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Tax statement</h2>
        <Table variant={MobileTableVariant.KEY_VALUE} data={taxStatementData} columns={taxStatementColumns} />
      </div>

      <div className={styles.card}>
        <h2>Transactions</h2>
        <Table variant={MobileTableVariant.SCROLL} data={transactionsData} columns={transactionsColumns} />
      </div>

      <div className={styles.card}>
        <h2>Holdings</h2>
        <Table variant={MobileTableVariant.KEY_VALUE} data={holdingsData} columns={holdingsColumns} />
      </div>
    </div>
  )
}
