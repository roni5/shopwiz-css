import React, { Component } from 'react';

class Layout extends Component {
    render() {
    return (
        <div>
            <div>
                <h2> - Breaking news - </h2>
            </div>
            <div>
                { this.props.children }
            </div>
        </div>
        );
    }
}

export default Layout;