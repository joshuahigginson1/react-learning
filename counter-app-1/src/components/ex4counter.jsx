// Conditional Rendering - Part 1

import React, { Component } from "react";

class Counter extends Component {
    state = {
        tags: ["tag1", "tag2", "tag3"],
    };

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags!</p>;
        }

        return (
            <ul>
                {this.state.tags.map((tag) => {
                    return <li key={tag}>{tag}</li>;
                })}
            </ul>
        );
    }

    render() {
        return (
            <React.Fragment>
                <h1>Counter Example</h1>
                {this.renderTags()}
            </React.Fragment>
        );
    }
}

export default Counter;
