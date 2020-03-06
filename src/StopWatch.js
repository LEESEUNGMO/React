import React, { Component } from "react";

class StopWatch extends Component {
    state = {
        sec: 0,
        buttonFlag: true,
        intervalFunction: null
    };

    timer = () => {
        this.setState(({sec}) => ({
            sec: sec + 1
        }));
    };

    start = () => {
        this.setState({
            sec: 0,
            buttonFlag: false,
            intervalFunction: setInterval(this.timer, 1000)
        });
    };

    stop = () => {
        clearInterval(this.state.intervalFunction);

        this.setState({
            buttonFlag: true
        });
    };

    render() {
        return (
            <React.Fragment>
                <h1>Stop Watch</h1>
                <div>
                    <b>{this.state.sec}</b>
                    <span>초</span>
                    {this.state.buttonFlag ? (
                        <button onClick={this.start}>start</button>
                    ) : (
                        <button onClick={this.stop}>stop</button>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default StopWatch;