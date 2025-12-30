import { useEffect, useState } from "react"
import { Content } from "./components/Content"
import { Header } from "./components/Header"

function App() {
    const [expenses, setExpenses] = useState(() => {
      const saved = localStorage.getItem('my_expenses');
      return saved ? JSON.parse(saved) : [];
    });

    const [budget, setBudget] = useState(() => {
      const savedBudget = localStorage.getItem("my_budget");
      return savedBudget ? JSON.parse(savedBudget) : 5000;
    });

    useEffect(() => {
      localStorage.setItem("my_expenses",JSON.stringify(expenses));
    },[expenses]); 

    useEffect(() => {
      localStorage.setItem("my_budget", JSON.stringify(budget))
    },[budget])

    const addExpenses = (newExpenses) => {
      setExpenses([newExpenses, ...expenses]);
    };

    const deleteExpense= (id) => {
      const updated = expenses.filter((exp) => {
        return exp.id !== id;
      })
      setExpenses(updated);
    };

    let totalSpent = 0;
    expenses.forEach((item) => {
      totalSpent += Number(item.amount);
    });

    const currentBalance = budget - totalSpent;

  return (
    <main>
      <Header />
      <Content 
        expenses={expenses}
        onAdd={addExpenses}
        onDelete={deleteExpense}
        total={currentBalance}
        budget={budget}
        setBudget={setBudget}
      />
    </main>
  )
}

export default App
