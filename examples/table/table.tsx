import { FC, CSSProperties } from "react"
import styles from "./table.module.scss"
import classNames from "classnames"
import { usePagination, useTable, Column, ColumnInstance } from "react-table"

export enum MobileTableVariant {
  SCROLL = "scroll",
  KEY_VALUE = "keyValue",
}

type TableCustomColumn<T> = {
  classNameHeader?: string
  classNameCell?: string
  className?: string
  cellStyle?: CSSProperties
  headerStyle?: CSSProperties
  accessor?: string | ((data: T) => string | number)
}

export type TableColumn<T extends object> = Column<T> & TableCustomColumn<T>

export type TableColumnInstance<T extends object> = ColumnInstance<T> & TableCustomColumn<T>

export interface TableProps<T> {
  variant?: MobileTableVariant
  data: T[]
  columns: TableColumn<T & object>[]
}

export const Table: FC<TableProps<any>> = ({ data, columns, variant = MobileTableVariant.SCROLL }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  )

  return (
    <>
      <div
        className={classNames(styles.tableContainer, {
          [styles.tableMobileScroll]: variant === MobileTableVariant.SCROLL,
          [styles.tableMobileKeyValue]: variant === MobileTableVariant.KEY_VALUE,
        })}
      >
        <table className={styles.table} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <th
                    className={classNames(column.className, column.classNameHeader)}
                    {...column.getHeaderProps()}
                    style={column.headerStyle}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => {
                    const { Header } = cell.column
                    return (
                      <td
                        className={classNames(cell.column.className, cell.column.classNameCell) || undefined}
                        style={cell.column.cellStyle}
                        {...cell.getCellProps()}
                      >
                        <div className={styles.mobileLabel}>
                          <Header />
                        </div>
                        <div className={styles.tableCell}>{cell.render("Cell")}</div>
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          <svg width="8" height="13" viewBox="0 0 15 24">
            <path d="M14.83 2.83L12 0L0 12L12 24L14.83 21.17L5.66 12L14.83 2.83Z"></path>
          </svg>
        </button>{" "}
        <button onClick={nextPage} disabled={!canNextPage}>
          <svg width="8" height="13" viewBox="0 0 15 24">
            <path d="M0.17 2.83L3 0L15 12L3 24L0.17 21.17L9.34 12L0.17 2.83Z"></path>
          </svg>
        </button>{" "}
      </div>
    </>
  )
}
