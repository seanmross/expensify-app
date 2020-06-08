import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h3>ExpenseList component works!</h3>
        {props.expenses.map( exp => (
            <Expense key={exp.id} {...exp} />
        ))}
    </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};
export default connect(mapStateToProps)(ExpenseList);
