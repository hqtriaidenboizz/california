import React from "react";
import '../Assets/Styles/ticket.css'
import { TbPlane } from "react-icons/tb";
export default class Ticket extends React.Component {
    render() {
        return (
            <div id="ticket--item">
                <div className="ticket--item--date">
                    <p>17/5</p>
                    <p>MON</p>
                </div>
                <div className="ticket--item--content">
                    <div className="ticket--item--content__start">
                        <h3>{this.props.LandingTime}</h3>
                        <p>{this.props.Destination}</p>
                    </div>
                    <div className="ticket--item--content_icon">
                        <p> - - - - - <span><TbPlane/></span> - - - - - </p>
                    </div>
                    <div className="ticket--item--content__end">
                        <h3>{this.props.TakeOffTime}</h3>
                        <p>{this.props.Departure}</p>
                    </div>
                </div>
            </div>
        );
    }
}
