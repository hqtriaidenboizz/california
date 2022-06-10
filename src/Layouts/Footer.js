import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import '../Assets/Styles/footer.css'
import Logo from "../Components/logo";
export default class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="item--logo">
                    <Logo />
                </div>
                <div className="item--menu">
                    <h5>MENU</h5>
                    <p>DESTINATIONS</p>
                    <p>HOTELS</p>
                    <p>CARS</p>
                    <p>BLOG</p>
                </div>
                <div className="info">
                    <h5>INFORMATION</h5>
                    <p>LUGGAGE</p>
                    <p>PETS</p>
                    <p>POLICIES</p>
                    <p>TEMS</p>
                </div>
                <div className="social">
                    <div className="title">
                        <h5>SOCIAL MEDIA</h5>
                    </div>
                    <div className="icons">
                        <FaFacebookSquare />
                        <FaInstagramSquare />
                    </div>
                </div>
            </div>
        );
    }
}
