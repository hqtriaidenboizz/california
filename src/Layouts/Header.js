import React from "react";
import '../Assets/Styles/header.css'
import Logo from "../Components/logo";
export default class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <div className="logo">
                    <Logo />
                </div>
                <div className="l-nar">
                    <div className="navbar">
                        <ul>
                            <li>Home</li>
                            <li>News</li>
                            <li>Service</li>
                            <li>Help</li>
                        </ul>
                    </div>
                    <div className="accout">
                        <button className="login">Login</button>
                        <p>/</p>
                        <button className="Sign up">Sign up</button>
                    </div>
                </div>
            </div>
        );
    }
}
