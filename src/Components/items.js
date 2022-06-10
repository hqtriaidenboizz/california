import React from "react";
import { FaLocationArrow} from "react-icons/fa";
import '../Assets/Styles/items.css';
export default class Items extends React.Component {
    render() {
        return (
            <div id="items">
                <div className="img">
                    <img src={this.props.img} alt="404" />
                </div>
                <div className="description">
                    <h5>{this.props.location}</h5>
                    <p>{this.props.type}</p>
                    <h5>{this.props.price} ~</h5>
                </div>
            </div>
        );
    }
}
