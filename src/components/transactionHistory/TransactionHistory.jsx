import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.tableContainer}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr className={css.tableBody} key={item.id}>
              <td className={css.type}>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
