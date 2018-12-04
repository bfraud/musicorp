import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactOnRails from 'react-on-rails';
import configureStore from './store/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./containers/HomePage";
import AccountsPage from "./containers/AccountsPage";

require('bootstrap');
require('../css/app.scss');

export default class Musicorp extends React.Component {
    render() {
        const store = ReactOnRails.getStore('store');

        return (
            <Provider store={ store }>
                <Router>
                    <Switch>
                        <Route exact path="/" component={ HomePage } />
                        <Route exact path="/accounts" component={ AccountsPage } />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

ReactOnRails.registerStore({ store: configureStore });
ReactOnRails.register({ Musicorp });