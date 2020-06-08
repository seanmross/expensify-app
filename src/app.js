import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getFilteredExpenses from './selectors/expenses';
import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));
store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));

const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(template, document.getElementById("app-root"));
