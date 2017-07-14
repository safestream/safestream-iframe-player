import React, { Component } from 'react';
import Player from './VideoPlayer';
import './App.css';
import QueryString from 'query-string';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      file: 'https://s2-api.shiftk8s.net/1.1/watermark/b0ec38e6-1d6c-4e91-85de-baf7a458e7b8/6c8ae40d1da2a9f74d46f587c97a203bf1feceecf90060708b76246ab235570f/1280x720/3000000/video.m3u8?expiration=1500063135946&signature=N%2B2TFekok3qJ83HpSmDzeE2nWS2GbAZ6%2FX6jgiIK%2BZg%3D',
      file1: 'https://s2-api.shiftk8s.net/1.1/watermark/b0ec38e6-1d6c-4e91-85de-baf7a458e7b8/6c8ae40d1da2a9f74d46f587c97a203bf1feceecf90060708b76246ab235570f/1280x720/3000000/video.m3u8?expiration=1500063135946&signature=N%2B2TFekok3qJ83HpSmDzeE2nWS2GbAZ6%2FX6jgiIK%2BZg%3D',
      file2: 'http://static.mediasilo.com.s3.amazonaws.com/safestreamvideos/short-4.mp4'
    }
  }

  onFullscreen = ({fullscreen}) => {
    console.log("Full screen");
  }

  clip1 = (e) => {
    console.log("Clip 1");
    this.setState({file: this.state.file1});
  }

  clip2 = (e) => {
    console.log("Clip 2");
      this.setState({file: this.state.file2});
  }



  render() {

    return (
      <div className="App">
        <button onClick={this.clip1}>Play 1</button>
        <button onClick={this.clip2}>Play 2</button>
        <Player
            file={this.state.file}
            autostart
            onFullscreen={this.onFullscreen}
            width={'100%'}
            height={'100%'}
        />
      </div>
    );
  }
}

export default App;
