// Passing Event Arguments - Refactor.

import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value,
    };

    formatCount() {
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
    }

    getBadgeClasses() {
        let spanClass = "alert m-2 alert-";
        if (this.state.value === 0) {
            spanClass += "warning";
        } else {
            spanClass += "primary";
        }

        return spanClass;
    }

    handleIncrement = ({ id }) => {
        console.log("Increment Clicked!");
        console.log(`the ID is ${id}`);
        this.setState({ value: this.state.value + 1 });
    };

    render() {
        return (
            <React.Fragment>
                {this.props.children}
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
