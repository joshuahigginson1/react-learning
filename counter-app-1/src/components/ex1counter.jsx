// Basic Component returning JSX, using State.

import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };

    render() {
        return (
            <React.Fragment>
                <h1>Counter Example</h1>
                <span>{this.state.count}</span>
                <button>Increment</button>
            </React.Fragment>
        );
    }
}

export default Counter;
