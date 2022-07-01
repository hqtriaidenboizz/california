import React from "react";
import Header from '../Layouts/Header';
import Content from '../Layouts/Content';
import Footer from "../Layouts/Footer";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import DetailTicket from "../Components/detailTicket";
export default class Home extends React.Component {
    render() {
        return (
            <div id="home--page">
                <React.StrictMode>
                    <Header/>
                    <BrowserRouter>
                        <Routes><Route path="/detail/:id" element={<DetailTicket />}></Route>
                        <Route path="/" element={<Content />}></Route></Routes>
                    </BrowserRouter>
                    <Footer/>
                </React.StrictMode>
            </div>
        );
    }
}
