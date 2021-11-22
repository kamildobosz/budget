const YourMoney = (props) => {
  return (
    <div className="money">
      <h1>Twój budżet: {props.myMoney} zł</h1>
    </div>
  );
};

export default YourMoney;
