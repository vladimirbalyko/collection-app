import React from 'react';

export class MainContent extends React.Component {
    render() {
        return (
            <div id="page" className="container">
                <div id="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
  }