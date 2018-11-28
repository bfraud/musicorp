import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./containers/Home";
import ReactOnRails from 'react-on-rails';
import configureStore from './store/index';

require('../css/app.css');

export default class Musicorp extends React.Component {
    render() {
        const store = ReactOnRails.getStore('store');

        return (
            <Provider store={ store }>
                <Router>
                    <Route exact path="/" component={ Home } />
                </Router>
            </Provider>
        );
    }
}

ReactOnRails.registerStore({ store: configureStore });
ReactOnRails.register({ Musicorp });