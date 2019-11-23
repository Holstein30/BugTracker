import React, { Component } from 'react';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login with Google</a>
                    </li>
                );
            default:
                return (
                    <li key="2">
                        <a href="/api/logout">Logout</a>
                    </li>
                );
        }
    }
    render() {
        return (
            <div>
                <ul className="right">{this.renderContent()}</ul>
            </div>
        );
    }
}

export default Header;
