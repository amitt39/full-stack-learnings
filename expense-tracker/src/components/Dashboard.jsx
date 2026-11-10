import SummaryCard from "./SummaryCard";

function Dashboard({ income, expense }) {
  const totalBalance = income - expense;
  return (
    <>
      <div className="flex gap-12 bg-amber-50 w-full mx-auto justify-around mt-6">
        <SummaryCard title="Total Balance" amount={totalBalance} />
        <SummaryCard title="Total Income" amount={income} />
        <SummaryCard title="Total Expense" amount={expense} />
      </div>
    </>
  );
}

export default Dashboard;
