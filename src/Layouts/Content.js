import React, { useEffect, useState } from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaRegCalendar, FaPeopleArrows } from "react-icons/fa";
import '../Assets/Styles/Content.css';
import axios from "axios";
import Items from "../Components/items";
export default function Content() {
    const [allInput, setallInput] = useState({
        DEPARTURE :'Hồ CHí Minh',
        ARRIVAL:'Hà Nội',
        DATES: '',
        PASSENGES:null,
    })
    const handleChange = (event) =>{
        let value = event.target.value;
        let name = event.target.name;

        setallInput((prevalue) => {
            return {
                ...prevalue,
                [name]:value
            }
        })
    }
    const handleSubmit =(event) => {
        console.log(allInput)
        // alert(allInput);
        event.preventDefault();

    }
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
                                        <option>Hồ Chí Minh</option>
                                        <option>Hà Nội</option>
                                        <option>Đà Nẵng</option>
                                        <option>Cần Thơ</option>
                                        <option>Hải Phòng</option>
                                        <option>Đà Lạt</option>
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
                                        <option>Hà Nội</option>
                                        <option>Hồ Chí Minh</option>
                                        <option>Đà Nẵng</option>
                                        <option>Cần Thơ</option>
                                        <option>Hải Phòng</option>
                                        <option>Đà Lạt</option>
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
            <div className="popular">
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
            </div>
            <div className="baner2">

            </div>
        </div>
    );

}

