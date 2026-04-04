<form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl shadow mb-4">

  <h3 className="font-semibold mb-3">Add Transaction</h3>

  <div className="grid grid-cols-4 gap-4">

    <input type="date" name="date" onChange={handleChange} className="border p-2 rounded" />
    <input type="number" name="amount" placeholder="Amount" onChange={handleChange} className="border p-2 rounded" />
    <input type="text" name="category" placeholder="Category" onChange={handleChange} className="border p-2 rounded" />

    <select name="type" onChange={handleChange} className="border p-2 rounded">
      <option value="expense">Expense</option>
      <option value="income">Income</option>
    </select>

  </div>

  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    Add Transaction
  </button>

</form>