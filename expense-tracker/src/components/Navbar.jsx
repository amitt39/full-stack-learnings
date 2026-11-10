function Navbar() {
  return (
    <>
      <div className="flex justify-between w-full px-4 py-2 bg-red-50">
        <h2>PocketPulse</h2>
        <div className="flex gap-2">
          <a href="#">Home</a>
          <a href="#">History</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
