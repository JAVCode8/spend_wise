import { useState } from "react";
import './annimation.css';

export function ContentHeader({ total, budget, setBudget }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
   <header className="mt-5">
      <div className={`rounded-2xl shadow-md transition-colors duration-300 ${total < 0 ? "bg-red-500" : "bg-[#5ae8cf]"}`}>
        
        {isEditing ? (
          <div className="flex flex-col items-center gap-3 p-7">
            <label className="text-white font-semibold text-lg">Set Starting Balance</label>
            <input
              type="number"
              className="w-48 p-2 rounded-lg text-center text-xl font-bold text-gray-700 outline-none shadow-inner"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
            />
            <button 
              onClick={() => setIsEditing(false)}
              className="btn-save bg-[#05a084] hover:bg-[#048a72] mt-5 text-white py-2 px-10 rounded-lg font-bold transition-colors cursor-pointer"
            >
              Save & Close
            </button>
          </div>
        ) : (
          <div className="text-center p-7">
            <h1 className="text-3xl font-bold text-white mb-5">
              Total Balance : Php {Number(total).toLocaleString(undefined, { minimumFractionDigits : 2})}
            </h1>
            <div className="pb-2">
              <button 
                onClick={() => setIsEditing(true)}
                className="btn-edit bg-[#05a084] hover:bg-[#048a72] text-[17px] font-semibold cursor-pointer rounded-lg text-white py-2 px-9 transition-colors shadow-md"
              >
                Edit Starting Balance
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}