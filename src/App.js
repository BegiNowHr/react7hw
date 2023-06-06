import React, { Component } from "react";

class ColorBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
  }

  handleChange = (event) => {
    this.setState({ color: event.target.value });
  };

  componentDidMount() {
    document.body.style.backgroundColor = this.state.color;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.color !== this.state.color) {
      document.body.style.backgroundColor = this.state.color;
    }
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = ""; 
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.color}
          onChange={this.handleChange}
          placeholder="Введите цвет"
        />
        <div>Пожалуйста введите цвет на английском языке, без пробелов</div>
        
      </div>
    );
  }
}

export default ColorBackground;
