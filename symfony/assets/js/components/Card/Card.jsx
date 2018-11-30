import React from "react";
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import './style.css';

export default class Card extends React.Component {
    render() {
        const { img, title, text, buttonType, buttonLabel, buttonOnClick } = this.props;

        return (
            <div className="card">
                <img className="card-img-top" src={ img } />
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">
                        { text }
                    </p>
                    <Button type={ buttonType } label={ buttonLabel } onClick={ buttonOnClick } />
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonType: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    buttonOnClick: PropTypes.func.isRequired,
};