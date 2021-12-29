import React, { Component } from "react";

// Stateless Functional Components.

const Navbar = ({ totalCounters }) => {
    console.log("Navbar Rendered.");
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Counter App</a>
                <span className="alert alert-secondary">
                    Total Active Counters: {totalCounters}
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
