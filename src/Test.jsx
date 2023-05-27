import React from 'react';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  playAudio() {
    this.audioRef.current.play();
  }

  pauseAudio() {
    this.audioRef.current.pause();
  }

  render() {
    return (
      <div>
        <audio
          ref={this.audioRef}
          src="src/MI.mp3"
          type="audio/mp3"
          controls
        ></audio>
        <button onClick={() => this.playAudio()}>Reproducir</button>
        <button onClick={() => this.pauseAudio()}>Pausar</button>
      </div>
    );
  }
}

export default AudioPlayer;
