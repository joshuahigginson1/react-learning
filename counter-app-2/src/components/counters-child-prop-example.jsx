import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 4 },
            { id: 4, value: 0 },
            { id: 5, value: 0 },
        ],
    };
    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <Counter key={counter.id} value={counter.value} selected>
                        {/* This is the Children props passed into our counter component. */}
                        <h3>Counter Number #{counter.id}</h3>  
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
