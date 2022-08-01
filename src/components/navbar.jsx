import React, { PureComponent } from "react";

export default class Navbar extends PureComponent {
    render() {
        console.log("navbar");
        return (
            <nav className='navbar'>
                <span className='logo'>🍁</span>
                <h1>Habit Tracker</h1>
                <span className='all-habits'>{this.props.totalCount}</span>
            </nav>
        );
    }
}
