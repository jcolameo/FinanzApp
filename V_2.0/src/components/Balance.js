import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    expenseTransaction => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="balance">
      <h2>DEPOT ÜBERSICHT </h2>
      <h3>CHF {(totalIncome - totalExpenses).toFixed(2)}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Einkommen</h3>
          <p>+CHF {totalIncome}</p>
        </div>
        <div className="minus">
          <h3>Ausgaben</h3>
          <p>-CHF {totalExpenses}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
