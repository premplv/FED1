import { Component } from "react";
import "./styles.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ""
    };
  }
  componentDidMount() {
    this.tick();
  }
  tick = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const updateTime = `${hours}:${minutes}:${seconds}`;
    this.setState({ time: updateTime });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.time !== prevState.time) {
      this.Interval = setInterval(() => {
        this.tick();
      }, 1000);
    }
  }
  componentWillUnmount() {
    clearInterval(this.Interval);
  }
  render() {
    return;
    <div>
      <h1>DigitalClock</h1>
      <h2>{this.State.time}</h2>
    </div>;
  }
}
export default App;


