import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CgAirplane } from "react-icons/cg";
import {AiOutlineRight} from "react-icons/ai"
import '../Assets/Styles/ticketDetail.css';
import { useParams } from 'react-router-dom';
import Popular from '../Pages/tickets';


export default function DetailTicket() {
    let { id } = useParams();
    console.log(id)
    const [detailTicket, setDetailTicket] = useState([])
    const getData = () => {
        axios.get(`https://628d8c71a339dfef879c3fac.mockapi.io/ticket2s/${id}`)
            .then((res) => {
                setDetailTicket(res.data);
            })
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        getData()
        console.log(detailTicket);
    }, [])
    return (
        <div>
            <div className='link'> <p><a href="/">Home </a><span>/</span><a href=""> Detail</a></p></div>
            <div className='ticketDetai'>
                <h1 className="titel">Journeys</h1>
                <div className="item--Ticket">
                    <div className="item--ticket--top">
                        <div className="place">
                            <p>{detailTicket.Departure}</p>
                            <p> <CgAirplane /> </p>
                            <p>{detailTicket.Destination}</p>
                        </div>
                        <div className="total-time">
                            <p>Total {detailTicket.TotalTime}</p>
                        </div>
                    </div>
                    <div className="item--ticket--bottom">
                        <div className="id--name">
                            <div className='idari'>
                                ID: {detailTicket.FlightNumber}
                            </div>
                            <div className='logoari'>
                                <img src={detailTicket.Logo} alt="" />
                            </div>
                        </div>
                        <div>
                            <h5>price: {detailTicket.Price}</h5>
                        </div>
                        <div className="item--ticket--bottom-btn">
                            <button>Book</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="popular" id="popular">
                <Popular />
            </div>
        </div>


    );
}


