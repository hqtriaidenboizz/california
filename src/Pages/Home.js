import React from "react";
import Header from '../Layouts/Header';
import Content from '../Layouts/Content';
import Footer from "../Layouts/Footer";
export default class Home extends React.Component {
    render() {
        return (
            <div id="home--page">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}
