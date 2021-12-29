import React, { Component } from "react";
import Navbar from "./components/navbar.jsx";
import Counters from "./components/counters.jsx";

class App extends Component {
    constructor(props) {
        // This method is called when an object is being constructed.
        super(props);
        console.log("App Constructed.");
    }

    componentDidUpdate(prevProps, prevState) {
        // If there is a change, we could make an AJAX call to get new data from a server for example.
        // If there hasn't been a change, then we don't bother.
        console.log("Previous Props", prevProps);
        console.log("Previous State", prevState);
    }
    componentDidMount() {
        // This method is called when an object is mounted into the DOM.
        // It is the perfect place to make AJAX calls, and then set state to that data.
        console.log("App Mounted.");
    }
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 },
        ],
    };

    handleDelete = (counterId) => {
        console.log("Event Handler Called.", counterId);
        const counters = this.state.counters.filter(
            (counter) => counter.id !== counterId
        );
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((counter) => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters });
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value = counters[index].value + 1;
        this.setState({ counters });
    };

    render() {
        console.log("App Rendered.");
        return (
            <React.Fragment>
                <Navbar
                    totalCounters={
                        this.state.counters.filter(
                            (counter) => counter.value > 0
                        ).length
                    }
                />
                <main className="container">
                    <Counters
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        counters={this.state.counters}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
