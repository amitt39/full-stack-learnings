import TransactionForm from "./TransactionForm";

function TransactionDetails({ getIncome, getExpense }) {
  return (
    <>
      <TransactionForm getIncome={getIncome} getExpense={getExpense} />
    </>
  );
}

export default TransactionDetails;
