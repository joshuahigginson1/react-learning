// Binding Event Handlers

import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

    getBadgeClasses() {
        let spanClass = "alert m-2 alert-";
        if (this.state.count === 0) {
            spanClass += "warning";
        } else {
            spanClass += "primary";
        }

        return spanClass;
    }

    handleIncrement() {
        console.log("Increment Clicked!", this.state.count);
    }

    render() {
        return (
            <React.Fragment>
                <h1>Counter Example</h1>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </React.Fragment>
        );
    }
}

export default Counter;
