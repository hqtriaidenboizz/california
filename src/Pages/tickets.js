import React, { useEffect, useState } from "react";
import '../Assets/Styles/ticketspage.css';
import axios from "axios"; 
import Items from "../Components/items"
export default function Popular() {
    const [listTicket, setListTicket] = useState([]);
    const getData = () => {
        axios.get(`https://628d8c71a339dfef879c3fac.mockapi.io/tickets`)
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
        <div className="popular1">
            <div className="popularContent">
                <h1>Tickets Hot</h1>
                <p>See which destinations people visited the most this year</p>
            </div>
            <div className="items">
                {listTicket
                    .map((ticket) => (
                        <Items className="item"
                            img={ticket.img}
                            location={ticket.location}
                            type={ticket.type}
                            price={ticket.price} />
                    ))
                }
            </div>
        </div>
    );

}
