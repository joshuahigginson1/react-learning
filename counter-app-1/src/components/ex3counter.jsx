// Rendering Lists

import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"],
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

    render() {
        return (
            <React.Fragment>
                <h1>Counter Example</h1>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <ul>
                    {this.state.tags.map((tag) => {
                        return <li key={tag}>{tag}</li>;
                    })}
                </ul>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }
}

export default Counter;
