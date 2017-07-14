import React, { Component } from 'react';
import ReactJWPlayer from 'react-jw-player';


const propTypes = {
  file: React.PropTypes.string.isRequired
};

class Player extends Component {

  constructor(props){
    super(props);

    this.onError = this.onError.bind(this);
    this.onReady = this.onReady.bind(this);
    this.onVideoLoad = this.onVideoLoad.bind(this);
  }

  shouldComponentUpdate(nextProps){
    console.log(nextProps);

    return true;
  }

  onVideoLoad(event){
    console.log("Video loaded");
    console.log(event);
  }

  onError(event){
    console.log("There was an error");
    console.log(event);
  }

  onReady(event){
    console.log("We're ready");
  }

  render() {
    const { file, ...props } = this.props;
    console.log(file);
    return (
      <div className="App">
        <ReactJWPlayer
           playerId='my-unique-id'
           playerScript='https://content.jwplatform.com/libraries/0Fb1aJzl.js'
           file={file}
           onVideoLoad={this.onVideoLoad}
           onError={this.onError}
           onReady={this.onReady}
           isAutoPlay={true}
           licenseKey='a9ZxMOMNt+9RUE3DSKbCtbho/l7/WhGfEuWJ1vBcrsTEb/+h'
           customProps={{"hlshtml": "true","primary": "html5","abouttext": "SafeStream","withCredentials": true}}
         />
      </div>
    );
  }
}

export default Player;
