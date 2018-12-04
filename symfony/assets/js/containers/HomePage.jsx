import React from 'react'
import View from '../components/HomePage/HomePage'
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

class HomePage extends React.Component {
    render() {
        const { history } = this.props;

        return (
            <View onClickCardButton={ function () { history.push('/accounts') } } />
        );
    }
}

export default withRouter(connect()(HomePage));