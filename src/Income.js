const Income = (props) => {
  const green = {
    color: "green",
  };

  const red = {
    color: "red",
  };
  const { description, money, id, type } = props.income;
  return (
    <div>
      <p style={type ? green : red}>
        {description} - {money}zł
        <button onClick={() => props.delete(id)} className="incomeBtn">
          usuń
        </button>
      </p>
    </div>
  );
};

export default Income;
