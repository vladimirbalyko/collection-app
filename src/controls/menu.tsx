import React from 'react';
import { Link } from "react-router-dom";
import { classNames } from '.';

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

    isCurrentPage = (page: Page) => this.state.currentPage === page;

    pageClassName = (page: Page) => classNames({ "current_page_item": this.isCurrentPage(page) });

    render() {
        return (
            <div id="menu-wrapper">
                <div id="menu" className="container">
                    <ul>
                        <li className={this.pageClassName(Page.Homepage)}>
                            <Link to="/" onClick={this.onHomeClick}>Homepage</Link>
                        </li>
                        <li className={this.pageClassName(Page.About)}>
                            <Link to="/about" onClick={this.onAboutClick}>About</Link>
                        </li>
                        <li className={this.pageClassName(Page.ContactUs)}>
                            <Link to="/contact" onClick={this.onContactClick}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    };
}