import React from 'react'
import Button from "../Button/Button";
import ButtonTypes from "../../constants/Button";
import './navbar.css'

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Button type={ ButtonTypes.PRIMARY } label={ "Button" } onClick={ function () { alert('plop'); } }/>
            </div>
        );
    }
};