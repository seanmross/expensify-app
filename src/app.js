import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getFilteredExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';

const store = configureStore();

const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("app-root"));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(template, document.getElementById("app-root"));
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(`${user} logged in`);
    } else {
        console.log('user logged out');
    }
})