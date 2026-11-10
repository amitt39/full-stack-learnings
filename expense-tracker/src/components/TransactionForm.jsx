import { useRef } from "react";

function TransactionForm({ getIncome, getExpense }) {
  const amountRef = useRef(0);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = amountRef.current.value;
    const type = formRef.current.elements.transactionType;
    console.log(type);

    if (type.value === "income") {
      getIncome(amount);
    } else if (type.value === "expense") {
      getExpense(amount);
    }
  };

  return (
    <>
      <form
        ref={formRef}
        action=""
        className="bg-amber-200 mt-12 flex flex-col w-full"
      >
        <input type="text" placeholder="Enter Descrition" />
        <input ref={amountRef} type="number" placeholder="Enter Amount" />
        <div className="flex gap-2">
          <div>
            <label htmlFor="transactionType">Income</label>
            <input type="radio" name="transactionType" value="income" />
          </div>
          <div>
            <label htmlFor="transactionType">Expense</label>
            <input type="radio" name="transactionType" value="expense" />
          </div>
        </div>

        <button className="cursor-pointer px-4 py-2" onClick={handleSubmit}>
          Add New Transaction
        </button>
      </form>
    </>
  );
}

export default TransactionForm;
