import React, { Component } from 'react';
import { v4 } from 'uuid';
// import 'lib/jwplayer-7.12.2/jwplayer.js';
import 'lib/jwplayer-7.7.4/jwplayer.js';

window.jwplayer.key = 'a9ZxMOMNt+9RUE3DSKbCtbho/l7/WhGfEuWJ1vBcrsTEb/+h';

class Player extends Component {

  constructor(props){
    super(props);


  }

   id = v4();
   container = null;

  componentDidMount(): void {
   this.setup();
 }


 componentWillReceiveProps(nextProps: Props): void {
   if (nextProps.file !== this.props.file) {
     this.player.load(nextProps);
   }
 }

 setup(props: Props = this.props): void {

   const {
     // unfold out all the events
     onViewable, onPlaylist, onPlaylistItem, onPlaylistComplete, onBufferChange,
     onPlay, onPause, onBuffer, onIdle, onComplete, onFirstFrame, onError,
     onPlaybackRateChanged, onSeek, onSeeked, onTime, onMute, onVolume,
     onFullscreen, onResize, onLevels, onLevelsChanged, onVisualQuality,
     onAudioTracks, onAudioTrackChanged, onCaptionsList, onCaptionsChanged,
     onControls, onDisplayClick, onMeta,
     // the rest are configuration options.
     ...setupConfig,
   } = props;

   const events: EventMap = {
     viewable: onViewable,
     playlist: onPlaylist,
     playlistItem: onPlaylistItem,
     playlistComplete: onPlaylistComplete,
     bufferChange: onBufferChange,
     play: onPlay,
     pause: onPause,
     buffer: onBuffer,
     idle: onIdle,
     complete: onComplete,
     firstFrame: onFirstFrame,
     error: onError,
     playbackRateChanged: onPlaybackRateChanged,
     seek: onSeek,
     seeked: onSeeked,
     time: onTime,
     mute: onMute,
     volume: onVolume,
     fullscreen: onFullscreen,
     resize: onResize,
     levels: onLevels,
     levelsChanged: onLevelsChanged,
     visualQuality: onVisualQuality,
     audioTracks: onAudioTracks,
     audioTrackChanged: onAudioTrackChanged,
     captionsList: onCaptionsList,
     captionsChanged: onCaptionsChanged,
     controls: onControls,
     displayClick: onDisplayClick,
     meta: onMeta,
   };
   console.log(window.jwplayer);
   this.player = window.jwplayer(this.id).setup(setupConfig);

   this.bindEvents(events);
 }

 bindEvents(events: EventMap = {}): void {
    for (const eventName of Object.keys(events)) {
      const listener = events[eventName];
      this.player.on(eventName, listener);
    }
  }

  render() {
    const { file, ...props } = this.props;
    console.log(file);
    return (
      <div
         id={this.id}
         ref={(ref) => { this.container = ref; }}
       />
    );
  }
}

export default Player;
