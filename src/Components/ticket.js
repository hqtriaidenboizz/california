import React from "react";
import '../Assets/Styles/ticket.css'
import { TbPlane } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
export default class Ticket extends React.Component {
    render() {
        let getdate = this.props.Dates;
        let d = new Date(`${getdate}`);
        let month = d.getMonth();
        let day = d.getDate();
        return (
            <div className="">
                <Link to={this.props.Url} >
            <div className="ticket--item" id={`ticket${this.props.id}`}>
                    <div className="ticket--item--date">
                        <p>{month}-{day}</p>
                        <p>Mon</p>
                    </div>
                    <div className="ticket--item--content">
                        <div className="ticket--item--content__start">
                            <h3>{this.props.LandingTime}</h3>
                            <p>{this.props.Departure}</p>
                        </div>
                        <div className="ticket--item--content_icon">
                            <p> - - - - - <span><TbPlane /></span> - - - - - </p>
                        </div>
                        <div className="ticket--item--content__end">
                            <h3>{this.props.TakeOffTime}</h3>
                            <p>{this.props.Destination}</p>
                        </div>
                    </div>
            </div>
            </Link>
            </div>
        );
    }
}
