import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const Expense = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
  </div>
);

export default connect()(Expense);