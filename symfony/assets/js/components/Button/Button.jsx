import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default class Button extends React.Component {
    render() {
        const { type, label, onClick } = this.props;

        return (
            <button className={ `btn btn-${type}` } onClick={ onClick }>
                { label }
            </button>
        );
    }
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};