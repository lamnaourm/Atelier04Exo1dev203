import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      pasI: 1,
      pasD: 1,
    };

    this.incrementer = this.incrementer.bind(this);
    this.decrementer = this.decrementer.bind(this);
  }
  incrementer() {
    this.setState({ counter: this.state.counter + this.state.pasI });
  }
  decrementer() {
    this.setState({ counter: this.state.counter - this.state.pasD });
  }
  initialiser = () => {
    this.setState({ counter: 0 });
  };
  render() {
    return (
      <div className="counter">
        <h1 className={this.state.counter >= 0 ? "green" : "red"}>
          {this.state.counter}
        </h1>

        <div className="buttons">
          <button onClick={this.incrementer}>Incrementer</button>
          <button onClick={this.decrementer}>Decrementer</button>
          <button onClick={this.initialiser}>Initialiser</button>
        </div>

        <h4>Pas incrementation {this.state.pasI}</h4>
        <div className="pasincr">
          <button onClick={() => this.setState({pasI:1})}>+1</button>
          <button onClick={() => this.setState({pasI:2})}>+2</button>
          <button onClick={() => this.setState({pasI:3})}>+3</button>
          <button onClick={() => this.setState({pasI:4})}>+4</button>
        </div>

        <h4>Pas decrementation {this.state.pasD}</h4>
        <div className="pasdec">
          <button onClick={() => this.setState({pasD:1})}>+1</button>
          <button onClick={() => this.setState({pasD:2})}>+2</button>
          <button onClick={() => this.setState({pasD:3})}>+3</button>
          <button onClick={() => this.setState({pasD:4})}>+4</button>
        </div>
      </div>
    );
  }
}
