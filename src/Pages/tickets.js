import React, { useEffect, useState } from "react";
import '../Assets/Styles/ticketspage.css';
import axios from "axios";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Ticket from "../Components/ticket";
export default function Tickets() {
    const [listTicket, setListTicket] = useState([]);
    const getData = () => {
        axios.get(`https://628d8c71a339dfef879c3fac.mockapi.io/ticket2s`)
            .then((res) => {
                setListTicket(res.data);

            })
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        getData()
        console.log(listTicket);
    }, [])
    return (
        <div id="tickets--page">
            <div className="header">
                <Header />
            </div>
            <div className="content">
                <div className="flight--name">
                    <p>TP.HCM - HA NOI </p>
                    <p>17/5</p>
                    <p>2 ADULTS</p>
                </div>
                <div className="ticket-tiems">
                    {listTicket
                        .map((tickets) => (
                            <Ticket
                                LandingTime={tickets.LandingTime}
                                Destination={tickets.Destination}
                                TakeOffTime={tickets.TakeOffTime}
                                Departure={tickets.Departure}
                            />
                        ))}
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );

}
