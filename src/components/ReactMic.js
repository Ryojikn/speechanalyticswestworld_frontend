import React from 'react';
import axios from 'axios';  
import { ReactMic } from '@tecsinapse/react-mic';

class MicRecorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
    }
    this.onStop = this.onStop.bind(this)
  }

  startRecording = () => {
    this.setState({ record: true });
  }

  stopRecording = () => {
    this.setState({ record: false });
  }

  onStop(recordedBlob) {
    let data = new FormData();
    data.append('src', 'record')
    data.append('file', recordedBlob.blob);
    return axios
        .post(`http://localhost:5000/transcribe`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(res => {
            var newtranscriptarray = this.props.transcriptarray.concat(res.data['transcriptions'])
            this.props.handleTranscriptChange(newtranscriptarray);
            var newspeakerarray = this.props.speakerarray.concat(res.data['speakers'])
            this.props.handleSpeakerChange(newspeakerarray);
            return res
        });
} 

  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          strokeColor="#00fffd"
          mimeType = "audio/wav"
          backgroundColor="#123740" />
        <button className="custombutton2 startRecording" onClick={this.startRecording} type="button">Start recording</button>
        <button className="custombutton2 stopRecording" onClick={this.stopRecording} type="button">Stop recording</button>
      </div>
    );
  }
}

export default MicRecorder