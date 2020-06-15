import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

const Expense = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>{description}</Link>
    </h3>
    <p>
      {numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format("MMMM Do, YYYY")}
    </p>
  </div>
);

export default Expense;
