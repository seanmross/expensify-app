import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';

const store = configureStore();

const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(template, document.getElementById("app-root"));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById("app-root"));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        });
    } else {
        renderApp();
        history.push('/');
    }
})