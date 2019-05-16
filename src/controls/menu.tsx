import React from 'react';
import { Link } from "react-router-dom";

enum Page {
    Homepage = 1,
    About,
    ContactUs,
}

export class Menu extends React.Component {
    state = {
        currentPage: Page.Homepage,
    };

    onHomeClick = () => {
        this.setState({
            currentPage: Page.Homepage
          });
    }

    onAboutClick = () => {
        this.setState({
            currentPage: Page.About
          });
    }

    onContactClick = () => {
        this.setState({
            currentPage: Page.ContactUs
          });
    }

    render() {
        return (
            <div id="menu-wrapper">
                <div id="menu" className="container">
                    <ul>
                        <li className="current_page_item">
                            <Link to="/" onClick={this.onHomeClick}>Homepage</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={this.onAboutClick}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={this.onContactClick}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    };
}