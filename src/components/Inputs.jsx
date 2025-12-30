import { useState } from "react";

export function Inputs({ onAddExpenses }) {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleAdd = () => {
    if(name.trim() === "" || amount.trim() === "") return;

    const newExpense = {
      id : crypto.randomUUID(),
      name : name,
      amount : amount,
      category : category
    };

    onAddExpenses(newExpense);
    setAmount("");
    setCategory("Food");
    setName("");
    
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-7 shadow rounded-3xl mt-5">
      <div className="flex">
        <input className="flex-1 py-2 pl-7 pr-9 text-[20px] border-[rgba(255, 255, 255)] shadow rounded-2xl"
          type="text"
          placeholder="What did you buy?"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        />
      </div>

      <div className="flex gap-7">
        <div className="flex-1 text-center flex gap-2">
          <label className="font-bold text-gray-600 text-[20px] flex justify-center items-center">Category</label>
          <select className="pl-4 pr-9 py-2 text-[16px] font-semibold shadow rounded"
            value={category}
            onChange={(e) => { setCategory(e.target.value) }}
          >
            <option value="Food">🍔Food & Drinks</option>
            <option value="Rent">🏠Housing/Rent</option>
            <option value="Transport">🚗 Transportation</option>
            <option value="Entertainment">🎬 Entertainment</option>
            <option value="Shopping">🛍️ Shopping</option>
          </select>

        </div>
        <input className="flex-1 py-2 pl-7 pr-9 text-[20px] border-[rgba(255, 255, 255)] shadow rounded-2xl"
          type="text"
          placeholder="How much?"
          value={amount}
          onChange={(e) => {setAmount(e.target.value)}}
        />

        <div className="flex-1 text-center">
          <button className="text-[15px] font-semibold text-white cursor-pointer py-3 px-8 rounded-4xl bg-[rgba(70,132,232)]"
            onClick={handleAdd}
          >Add Expense</button>
        </div>
      </div>
    </div>
  );
}