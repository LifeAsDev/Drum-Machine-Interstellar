import './App.css';
import React from 'react';
import DrumPad from './DrumPad';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 1,
      power: true,
      display: '',
      mode: 0,
    };
    this.setDisplay = this.setDisplay.bind(this);
    this.turnPower = this.turnPower.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.turnInterstellar = this.turnInterstellar.bind(this);
  }
  setDisplay(text) {
    this.setState({ display: text });
  }
  turnPower() {
    let power = 'OFF';

    if (!this.state.power) {
      power = 'ON';
    }

    this.setState({ power: !this.state.power, display: power });
  }
  
  turnInterstellar() {
    const mode = this.state.mode === 0 ? 1 : 0;
    const tars = mode === 1 ? "No. It's necessary" : 'This is not possible';
    this.setState({ mode: mode, display: tars });
  }
  setVolume(event) {
    this.setState({
      volume: event.target.value / 100,
      display: 'Volume: ' + event.target.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const root = document.documentElement;
    if (this.state.power == true) {
      root.style.setProperty('--margin', '0');
    } else {
      root.style.setProperty('--margin', '-100%');
    }
    if (this.state.mode == 0) {
      root.style.setProperty('--margin-kit', '-100%');
    } else {
      root.style.setProperty('--margin-kit', '0');
    }
  }

  render() {
    return (
      <>
        <div className="machine" id="drum-machine">
          <div className="box">
            <DrumPad
              className="drum-pad"
              setDisplay={(text) => this.setDisplay(text)}
              volume={this.state.volume}
              power={this.state.power}
              id="Q"
              keyTrigger="Q"
              mode={this.state.mode}
            />
            <DrumPad
              className="drum-pad"
              setDisplay={(text) => this.setDisplay(text)}
              volume={this.state.volume}
              power={this.state.power}
              id="W"
              keyTrigger="W"
              mode={this.state.mode}
            />
            <DrumPad
              className="drum-pad"
              setDisplay={(text) => this.setDisplay(text)}
              volume={this.state.volume}
              power={this.state.power}
              id="E"
              keyTrigger="E"
              mode={this.state.mode}
            />
            <DrumPad
              className="drum-pad"
              setDisplay={(text) => this.setDisplay(text)}
              volume={this.state.volume}
              power={this.state.power}
              id="A"
              keyTrigger="A"
              mode={this.state.mode}
            />
            <DrumPad
              className="drum-pad"
              setDisplay={(text) => this.setDisplay(text)}
              volume={this.state.volume}
              power={this.state.power}
              id="S"
              keyTrigger="S"
              mode={this.state.mode}
            />
            <DrumPad
              className="drum-pad"
              setDisplay={(text) => this.setDisplay(text)}
              volume={this.state.volume}
              power={this.state.power}
              id="D"
              keyTrigger="D"
              mode={this.state.mode}
            />
            <DrumPad
              className="drum-pad"
              setDisplay={(text) => this.setDisplay(text)}
              volume={this.state.volume}
              power={this.state.power}
              id="Z"
              keyTrigger="Z"
              mode={this.state.mode}
            />
            <DrumPad
              className="drum-pad"
              setDisplay={(text) => this.setDisplay(text)}
              volume={this.state.volume}
              power={this.state.power}
              id="X"
              keyTrigger="X"
              mode={this.state.mode}
            />
            <DrumPad
              className="drum-pad"
              setDisplay={(text) => this.setDisplay(text)}
              volume={this.state.volume}
              power={this.state.power}
              id="C"
              keyTrigger="C"
              mode={this.state.mode}
            />
          </div>
          <div className="infobox">
            <p>Power</p>
            <div onClick={this.turnPower} className="switch-background">
              <div className="switch power"></div>
            </div>
            <div className="display" id="display">
              <p>{this.state.display}</p>
            </div>
            <input
              onChange={this.setVolume}
              className="volume"
              type="range"
              min="0"
              max="100"
              defaultValue="100"
            ></input>
            <p>Interstellar Mode</p>

            <div onClick={this.turnInterstellar} className="switch-background">
              <div className="switch kit"></div>
            </div>
          </div>
        </div>
        <blockquote>by LifeAsDev</blockquote>
      </>
    );
  }
}

export default App;
