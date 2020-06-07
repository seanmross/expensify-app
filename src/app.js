import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getFilteredExpenses from './selectors/expenses';

const store = configureStore();

store.subscribe( () => {
    const state = store.getState();
    const filteredExpenses = getFilteredExpenses(state.expenses, state.filters)
    console.log(filteredExpenses);
})

store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas bill" }));
store.dispatch(setTextFilter("water"));

ReactDOM.render(<AppRouter />, document.getElementById("app-root"));
