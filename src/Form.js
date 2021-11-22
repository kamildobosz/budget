import React, { useState, useEffect } from "react";

const Form = (props) => {
  let [description, setDescription] = useState("");
  const [money, setMoney] = useState("");
  let [type, setType] = useState(true);
  const [myMoney, setMyMoney] = useState(0);

  useEffect(() => {}, [props.incomes]);

  const setMyMoneyTitle = (type, money) => {
    if (type) {
      let amount = parseInt(money) + myMoney;
      setMyMoney(amount);
    } else {
      let amount = myMoney - money;
      setMyMoney(amount);
    }
  };

  const handleDescription = (e) => setDescription(e.target.value);

  const handleMoney = (e) => setMoney(e.target.value);

  const handleType = (e) => {
    e.preventDefault();
    setType(!type);
  };

  const hanadleClick = (e) => {
    e.preventDefault();
    props.add(description, type, money);
    setMyMoneyTitle(type, money);
    setDescription("");
    setMoney("");
  };

  return (
    <div className="Form">
      <h1>Twój budżet wynosi: {myMoney} zł</h1>
      <form>
        <button className="plusMinus" onClick={handleType}>
          {type ? "Wpłata" : "Wypłata"}
        </button>
        <input
          type="text"
          className="description"
          placeholder="Opis"
          onChange={handleDescription}
          value={description}
        ></input>
        <input
          type="number"
          className="value"
          placeholder="Kwota"
          onChange={handleMoney}
          value={money}
        ></input>
        <button className="confirm" onClick={hanadleClick}>
          Potwierdź
        </button>
      </form>
    </div>
  );
};

export default Form;
