import React, { Component } from 'react';
import loader1 from './assets/svg-loaders/audio.svg';
import loader2 from './assets/svg-loaders/rings.svg';
import loader3 from './assets/svg-loaders/grid.svg';
import loader4 from './assets/svg-loaders/hearts.svg';
import loader5 from './assets/svg-loaders/oval.svg';
import loader6 from './assets/svg-loaders/three-dots.svg';
import loader7 from './assets/svg-loaders/spinning-circles.svg';
import loader8 from './assets/svg-loaders/puff.svg';
import loader9 from './assets/svg-loaders/circles.svg';
import loader10 from './assets/svg-loaders/tail-spin.svg';
import loader11 from './assets/svg-loaders/bars.svg';
import loader12 from './assets/svg-loaders/ball-triangle.svg';

// Icons by http://samherbert.net/svg-loaders/

class Loading extends Component {

  render() {
    const { icon, show, color, ...props} = this.props;
    let currenticon = '';

    switch(icon){
      case '1':
          currenticon = loader1;
          break;
      case '2':
          currenticon = loader2;
          break;
      case '3':
          currenticon = loader3;
          break;
      case '4':
          currenticon = loader4;
          break;
      case '5':
          currenticon = loader5;
          break;
      case '6':
          currenticon = loader6;
          break;
      case '7':
          currenticon = loader7;
          break;
      case '8':
          currenticon = loader8;
          break;
      case '9':
          currenticon = loader9;
          break;
      case '10':
          currenticon = loader10;
          break;
      case '11':
          currenticon = loader11;
          break;
      case '12':
          currenticon = loader12;
          break;
      default:
          currenticon = "none";
          break;
    }

    return (
      <div>
        {show && currenticon!="none" ? (
          <div className="loading" id="loading" style={{ 'background': '#' + color}}>
          <span><img src={currenticon} style={{width: '50px'}} /> </span>
          </div>
        ) : null}
      </div>
    );
  }
}

Loading.defaultProps = {
  icon: 1
}

export default Loading;
