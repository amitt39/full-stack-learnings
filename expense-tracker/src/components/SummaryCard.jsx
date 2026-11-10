function SummaryCard({ title, amount }) {
  return (
    <>
      <div className="bg-white p-4 border rounded-md">
        <h3 className="text-md uppercase">{title}</h3>
        <span className="text-2xl">${amount}</span>
      </div>
    </>
  );
}

export default SummaryCard;
