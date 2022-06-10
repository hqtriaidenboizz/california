import React from 'react';
// import { Routes, Route , Link } from 'react-router-dom';
import '../Assets/Styles/Loading.css'
import Logo from '../Components/logo';
import Home from './Home';
export default class Loading extends React.Component {
    render() {
        return (
            <div id='loading--page'>
                <Logo/>
                <div className="title">
                    <h3>California AirLine Company</h3>
                </div>
                <div className="go">
                    <a  to="/home"><button>Go</button></a>
                </div>
            </div>
        );
    }
    
}

