import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
    render() {
        console.log("Counters Rendered");
        const { onDelete, onIncrement, onReset, counters } = this.props;
        return (
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={onReset}
                >
                    Reset
                </button>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    ></Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
