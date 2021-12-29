// Turning this component into a controlled component.

import React, { Component } from "react";

class Counter extends Component {
    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    componentWillUnmount() {
        // Called just before an object is removed from the DOM.
        // This can help us to prevent memory leaks, by cleaning up OTHER components when something is deleted.

        console.log("Counter unmounted.");
    }

    getBadgeClasses() {
        let spanClass = "alert m-2 alert-";
        if (this.props.counter.value === 0) {
            spanClass += "warning";
        } else {
            spanClass += "primary";
        }

        return spanClass;
    }

    render() {
        console.log(`Counter ${this.props.counter.id} rendered.`);
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    className="btn btn-seconday btn-danger btn-sm m-2"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                    Delete
                </button>
            </React.Fragment>
        );
    }
}

export default Counter;
