export function Card({ expense, onDelete }) {
  const catergoryStyle = {
    Food: "bg-orange-100 text-orange-600",
    Rent: "bg-blue-100 text-blue-600",
    Shopping: "bg-pink-100 text-pink-600",
    Entertainment: "bg-green-100 text-green-600",
    Transport: "bg-purple-100 text-purple-600"
  };

  const iconExpense = {
    Food : 'drink.png',
    Rent : 'house.png',
    Shopping : 'shopping-bag.png',
    Entertainment : 'video.png',
    Transport : 'bus.png'
  };

  return (
    <div className={`flex shadow rounded-2xl mt-7 ${catergoryStyle[expense.category] || "bg-gray-100"}`}>
      <div className="flex flex-1 gap-7 p-5">
        <div>
          <img src={`${iconExpense[expense.category] || 'bin.png'}`} width={40} />
        </div>
        <h1 className="text-[25px] text-center font-bold">{expense.name}</h1>
      </div>

      <div className="flex gap-7 flex-1 justify-end p-5">
        <h1 className="text-[25px] font-bold text-center text-red-500">-Php {expense.amount}</h1>
        <button className="bg-[#d1d2d3] p-3 rounded-full cursor-pointer" onClick={() => {onDelete(expense.id)}}>
          <div>
            <img src="bin.png" width={25} />
          </div>
        </button>
      </div>
    </div>
  );
}