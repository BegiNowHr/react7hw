import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      isRunning: true,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timerId);
  };

  handlePauseResume = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }), () => {
      if (this.state.isRunning) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    });
  };

  handleStop = () => {
    this.setState({
      seconds: 0,
      isRunning: false,
    });
    this.stopTimer();
  };

  render() {
    return (
      <div>
        <div>Прошло: {this.state.seconds} секунд</div>
        <button onClick={this.handlePauseResume}>
          {this.state.isRunning ? "Пауза" : "Возобновить"}
        </button>
        <button onClick={this.handleStop}>Стоп</button>
      </div>
    );
  }
}

export default Timer;
