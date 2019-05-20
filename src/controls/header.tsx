import React from 'react';

export const Header = () => {
    return (
        <div id="header-wrapper">
            <div id="header" className="container">
                <div id="logo">
                    <h1><a href={window.location.origin.toString()}>Collection APP</a></h1>
                    <p>Some text</p>
                </div>
            </div>
        </div>
    );
}