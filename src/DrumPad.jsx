import React from 'react';
import sounds from './SoundsName';
import DrumData from './Sounds Path';
class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.audioRef = React.createRef();
    this.playSound = this.playSound.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.playForMe = this.playForMe.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keydown', this.playForMe);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keydown', this.playForMe);
  }

  handleKeyDown(event) {
    if (event.key.toUpperCase() === this.props.keyTrigger) {
      const button = document.getElementById(this.props.keyTrigger);
      button.classList.add('active');
      setTimeout(() => {
        button.classList.remove('active');
      }, 200);
      button.click();
    }
  }
  playSound() {
    if (this.props.power) {
      this.props.setDisplay(sounds[this.props.mode][this.props.keyTrigger]);
      const audio = this.audioRef.current;
      audio.currentTime = 0; // establecer el tiempo actual a 0 antes de reproducirlo nuevamente
      audio.volume = this.props.volume;
      audio.play();
    }
  }
  playForMe(event) {
    if (event.key.toUpperCase() === ' ') {
      const notes = [
        'Q',
        'W',
        'E',
        'W',
        'A',
        'W',
        'E',
        'W',
        'Q',
        'W',
        'A',
        'W',
        'S',
        'W',
        'D',
        'W',
        'Z',
        'W',
        'D',
        'W',
        'S',
        'W',
        'Z',
      ];
      let j = 0;
      for (let i = 0; i < notes.length; i++) {
        i == notes.length - 1 && j < 6 ? ((i = 0), j++) : null;

        setTimeout(() => {
          const button = document.getElementById(notes[i]);
          button.classList.add('active');
          setTimeout(() => {
            button.classList.remove('active');
          }, 200);
          button.click();
        }, 230 * (i + j * (notes.length - 1)));
      }
    }
  }
  render() {
    return (
      <div
        id={this.props.keyTrigger}
        className="drum-pad"
        onClick={this.playSound}
      >
        {this.props.keyTrigger}
        <audio
          preload="auto"
          id={this.props.keyTrigger}
          ref={this.audioRef}
          className="clip"
          src={DrumData[this.props.mode][this.props.keyTrigger]}
          type="audio/mp3"
        ></audio>
      </div>
    );
  }
}

export default DrumPad;
