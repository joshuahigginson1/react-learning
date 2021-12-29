// Passing Event Arguments - Refactor.

import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };

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

    handleIncrement = ({ id }) => {
        console.log("Increment Clicked!");
        console.log(`the ID is ${id}`);
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <React.Fragment>
                <h1>Counter Example</h1>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => {
                        this.handleIncrement({ id: 8 });
                    }}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </React.Fragment>
        );
    }
}

export default Counter;
