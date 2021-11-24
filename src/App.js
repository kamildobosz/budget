import React, { useState } from "react";
import Form from "./Form";
import Budget from "./Budget";
import "./App.css";

function App() {
  const [incomes, setIncomes] = useState([]);
  const [key, setKey] = useState(0);

  const deleteIncome = (id) => {
    const finances = [...incomes];
    const index = finances.findIndex((finance) => finance.id === id);
    finances.splice(index, 1);
    setIncomes(finances);
  };

  const addIncome = (description, type, money) => {
    const income = {
      id: key,
      description: description,
      type: type,
      money: money,
    };
    setKey(key + 1);
    setIncomes([...incomes, income]);
  };

  return (
    <div className="app">
      <div className="left">
        <Form add={addIncome} incomes={incomes} />
      </div>
      <Budget delete={deleteIncome} incomes={incomes} />
    </div>
  );
}

export default App;
