function Filter() {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Filter by month
        </label>
        <select className="border rounded-lg p-2">
          <option value="">--Select Month</option>
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>

        <button className="bg-gray-300 hover:bg-gray-500 font-semibold text-gray-700 px-2 py-4  ml-2 rounded">
          Reset Filter
        </button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg p-2 text-black bg-white"
        ></input>
      </div>
    </div>
  );
}

export default Filter;
