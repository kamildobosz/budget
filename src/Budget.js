import Income from "./Income";

const Budget = (props) => {
  const profits = props.incomes.filter((income) => income.type);
  const expenditure = props.incomes.filter((income) => !income.type);

  const profitsIncomes = profits.map((profit) => (
    <Income delete={props.delete} key={profit.id} income={profit} />
  ));

  const expendituresIncomes = expenditure.map((expenditure) => (
    <Income delete={props.delete} key={expenditure.id} income={expenditure} />
  ));

  return (
    <div className="budget">
      <div className="incomes">
        <h2>Twoje wpłaty</h2>
        {profitsIncomes}
      </div>

      <div className="expenses">
        <h2>Twoje wypłaty</h2>
        {expendituresIncomes}
      </div>
    </div>
  );
};

export default Budget;
