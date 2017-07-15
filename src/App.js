import React, { Component } from 'react';
import Player from './VideoPlayer';
import Error from './Error';
import Loading from './Loading';
import './App.css';
import QueryString from 'query-string';

class App extends Component {

  constructor(props){
    super(props);

    const parsed = QueryString.parse(window.location.search);

    this.state = {
      file: '',
      error: false,
      loading: true,
      goahead: false,
      icon: parsed.icon,
      errormsg: ''
    }
  }

  componentWillMount(e){
    if(this.validateUrlParams()){
      this.checkWatermarkStatus();
    };
  }

  validateUrlParams(){
    let errors = false;
    const parsed = QueryString.parse(window.location.search);

    if(parsed.href === undefined){
      errors = true;
    }
    if(parsed.expiration === undefined){
      errors = true;
    }
    if(parsed.signature === undefined){
      errors = true;
    }
    if(errors){
      this.setState({
        error: true,
        errormsg: 'Invalid Video Link.'
      });
      return false;
    }
    this.setState({error: false});
    return true;
  }

  checkResponse(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  checkWatermarkStatus(){
    const url = QueryString.parse(window.location.search).href;
    fetch(url)
      .then(this.checkResponse)
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.status !== 'READY'){
            this.timeout = setTimeout(() => this.checkWatermarkStatus(), 5000);
            return true;
        } else {
          this.setState({
            file: responseJson.href,
            error: false,
            loading: false,
            goahead: true
          });
        }
      })
      .catch((error) => {
        console.log('We are in the catch');
        this.setState({
          error: true,
          loading: true,
          goahead: false,
          errormsg: "Unable to play video."
        });
        console.error(error);
      });
  }

  onFullscreen = ({fullscreen}) => {
    console.log("Full screen");
  }


  render() {
    const parsed = QueryString.parse(window.location.search);
    let color = /((?:[a-fA-F0-9]{6}))\b/g.test(parsed.bgcolor) && parsed.bgcolor.length === 6 ? parsed.bgcolor : 'cecece';
    return (
      <div className="App">
          <Loading
              show={this.state.loading}
              color={color}
              icon={parsed.icon}
          />
          <Error
              show={this.state.error}
              message={this.state.errormsg}
          />
          { this.state.goahead ? (
            <Player
                   file={this.state.file}
                   autostart
                   onFullscreen={this.onFullscreen}
                   width={'100%'}
                   height={'100%'}
                   abouttext="SafeStream"
                   aboutlink="https://www.safestream.com"
               />
           ) : <div></div> }
      </div>
    );
  }
}

export default App;
