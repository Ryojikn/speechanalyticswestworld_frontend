
import './App.css';
import React from 'react';
import Header from './components/Header'
import Dialog from './components/Dialog'
import TranscriptComponent from './components/Transcript'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alltranscripts: ["Transcript not found", "Transcript not found", "Transcript not found"],
            allspeakers: ["Speaker", "Speaker", "Speaker"]
        }

        this.handleTranscriptChange = this.handleTranscriptChange.bind(this)
        this.handleSpeakerChange = this.handleSpeakerChange.bind(this)
    }

    handleTranscriptChange = (transcriptarray) => {
        this.setState({alltranscripts: transcriptarray});
    }
    handleSpeakerChange = (speakerarray) => {
        this.setState({allspeakers: speakerarray});
    }

  render() { return (
    <div className="App">
        <Header 
            transcriptarray={this.state.alltranscripts}
            speakerarray={this.state.allspeakers}
            handleTranscriptChange = {this.handleTranscriptChange}
            handleSpeakerChange = {this.handleSpeakerChange}
            />
        <TranscriptComponent 
            transcriptarray={this.state.alltranscripts}
            speakerarray={this.state.allspeakers}
        />
        <Dialog />
    </div>)
    }
}

export default App;
