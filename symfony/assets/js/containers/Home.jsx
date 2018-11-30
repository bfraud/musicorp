import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import ButtonTypes from '../constants/Button';
import img from '../../images/spotify.jpg';
import './style.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <Navbar />
                </div>
                <div className='row justify-content-center align-items-center hm-act'>
                    <div className='col-12'>
                        <Card
                            img={ img }
                            title={ 'Connect your account' }
                            text={ 'Connect your favorite music service and start sharing the music you love with your colleagues' }
                            buttonType={ ButtonTypes.PRIMARY }
                            buttonLabel={ "Let's go" }
                            buttonOnClick={ function() {} }
                        />
                    </div>
                </div>
            </div>
        );
    }
};