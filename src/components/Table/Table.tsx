import React from 'react';
import { CurrencyPairs } from '../../utils';
import styles from './Table.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  cols: Array<string>;
  rows: Array<{
    name: CurrencyPairs;
    first: number;
    second: number;
    third: number;
    min: number;
  }>;
}

const Table: React.FC<Props> = ({ cols, rows }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {cols.map((col, key) => (
            <th key={key} className={styles.tableHead}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, key) => (
          <tr key={key}>
            <td className={styles.tableBody}>{row.name}</td>
            <td className={cx('tableBody', { tableBodyActive: row.first === row.min })}>
              {row.first}
            </td>
            <td className={cx('tableBody', { tableBodyActive: row.second === row.min })}>
              {row.second}
            </td>
            <td className={cx('tableBody', { tableBodyActive: row.third === row.min })}>
              {row.third}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
