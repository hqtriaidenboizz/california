import React, { useEffect, useState } from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaRegCalendar, FaPeopleArrows } from "react-icons/fa";
import '../Assets/Styles/Content.css';
import axios from "axios";
import Ticket from "../Components/ticket";
import '../Assets/Styles/ticketspage.css';
import Popular from "../Pages/tickets";


export default function Content() {
    const [allInput, setallInput] = useState({
        DEPARTURE: 'Hồ Chí Minh (SGN)',
        ARRIVAL: 'Hà Nội (HAN)',
        DATES: '',
        PASSENGES: 1,
    })

    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        setallInput((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        document.getElementById('popular').style.display = "none";
        document.getElementById('tickets--page').style.display = "block";
        event.preventDefault();
    }

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
        <div id="Content">
            <div className="baner">
                <div className="baner--content">
                    <div className="title">
                        <h2>Begin Your</h2>
                        <h3>Next Aventure</h3>
                    </div>
                    <div className="SearchTickets--form">
                        <form action="" onSubmit={handleSubmit} >
                            <div className="departure">
                                <label htmlFor="">
                                    <FaPlaneDeparture
                                        className="icon"
                                        color="#2276a2"
                                        size="30px"
                                    />
                                    DEPARTURE
                                    <select name="DEPARTURE" onChange={handleChange} class="selectpicker" data-show-subtext="true" data-live-search="true">
                                        <option>Hồ Chí Minh (SGN)</option>
                                        <option>Hà Nội (HAN)</option>
                                        <option>Đà Nẵng</option>
                                        <option>Phú Quốc (PQC)</option>
                                        <option>Hải Phòng</option>
                                        <option>Đà Lạt (DLI)</option>
                                    </select>
                                </label>
                            </div>
                            <div className="arrival">
                                <label htmlFor="">
                                    <FaPlaneArrival
                                        className="icon"
                                        color="#2276a2"
                                        size="30px" />
                                    ARRIVAL
                                    <select name="ARRIVAL" onChange={handleChange} class="selectpicker" data-show-subtext="true" data-live-search="true">
                                        <option>Hà Nội (HAN)</option>
                                        <option>Hồ Chí Minh (SGN)</option>
                                        <option>Đà Nẵng</option>
                                        <option>Phú Quốc (PQC)</option>
                                        <option>Hải Phòng</option>
                                        <option>Đà Lạt (DLI)</option>
                                    </select>
                                </label>
                            </div>
                            <div className="dates">
                                <label htmlFor="">
                                    <FaRegCalendar
                                        className="icon"
                                        color="#2276a2"
                                        size="30px" />
                                    DATES
                                    <input onChange={handleChange} type="date" name="DATES" id="" />
                                </label>
                            </div>
                            <div className="passenges">
                                <label htmlFor="">
                                    <FaPeopleArrows
                                        className="icon"
                                        color="#2276a2"
                                        size="30px" />
                                    PASSENGES
                                    <input onChange={handleChange} type="number" placeholder="1" name="PASSENGES" min={1} max={5} id="" />
                                </label>
                            </div>
                            <div className="btn--search">
                                <button >Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="tickets--page">

                <div className="content">
                    <div className="flight--name">
                        <p>{allInput.DEPARTURE} - {allInput.ARRIVAL} </p>
                        <p>{allInput.DATES}</p>
                        <p>{allInput.PASSENGES} ADULTS</p>
                    </div>
                    <div className="ticket-tiems">
                        {listTicket
                            .filter((tickets) => tickets.Destination === allInput.ARRIVAL && tickets.Departure === allInput.DEPARTURE)
                            .map((tickets) => (
                            
                                    <Ticket
                                        Dates={allInput.DATES}
                                        id={tickets.id}
                                        LandingTime={tickets.LandingTime}
                                        Destination={tickets.Destination}
                                        TakeOffTime={tickets.TakeOffTime}
                                        Departure={tickets.Departure}
                                        Url = {`/detail/${tickets.id}`}
                                    />
                                
                            ))}
                    </div>
                </div>

            </div>
            <div className="popular" id="popular">
                <Popular />
            </div>
            <div className="baner2">

            </div>
            
        </div>
    );
}

