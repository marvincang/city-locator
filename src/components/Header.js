import React from "react";
import './Header.css';

export default class Header extends React.Component {
    getIntro() {
        let now = new Date();
        if (now.getHours() < 4) {
            return 'Good evening';
        } else if (now.getHours() < 12) {
            return 'Good morning';
        } else if (now.getHours() < 6) {
            return 'Good afternoon';
        } else {
            return 'Good evening';
        }
    }


    render() {
        return <div className="header-container">
            <h1 className="hello-container">{this.getIntro()}, {this.props.name}</h1>
        </div>;
    }
}