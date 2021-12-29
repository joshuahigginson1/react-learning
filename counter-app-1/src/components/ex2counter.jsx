//  Our component returning themed jsx dynamically.

import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

    render() {

        // We should not be polluting our render method like this!
        let spanClass = "alert m-2 alert-";
        if (this.state.count === 0) {
            spanClass += "warning";
        } else {
            spanClass += "primary";
        }

        console.log(spanClass);

        return (
            <React.Fragment>
                <h1>Counter Example</h1>
                <span className={spanClass}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }
}

export default Counter;
