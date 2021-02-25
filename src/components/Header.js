import React from 'react';
import avatar1 from '../westworld dolores.png';
import avatar2 from '../westworld william.png';
import MicRecorder from './ReactMic';
import Dropzone from './Uploader'


function record () {
        document.getElementsByClassName("recorder")[0].style.display = "block";
        document.getElementsByClassName("uploader")[0].style.display = "none" 
}

function upload () {
    document.getElementsByClassName("recorder")[0].style.display = "none";
    document.getElementsByClassName("uploader")[0].style.display = "block"
}

const Header = (props) =>
        <header className="App-header">
            <section className="Header-grid">
                <div className="Header-avatar1">
                    <div className="Header-holder1">
                        <div className="Avatar-logo1">
                            <img src={avatar1} className="App-avatar" alt="avatar" />
                        </div>
                        <div className="Avatar-description1">

                    </div> 
                    </div>
                </div>
                <div className="Header-avatar2">
                    <div className="Header-holder2">
                    <div className="Avatar-description2">

                    </div> 
                        <div className="Avatar-logo2">
                            <img src={avatar2} className="App-avatar" alt="avatar" />
                        </div>
                    </div>   
                </div>
                <div className="Header-recorder">

                <button onClick={record} className="custombutton btn-record">Record audio</button>
                <button onClick={upload} className="custombutton btn-upload">Upload audio</button>
                <div className="recorder">
                <MicRecorder
                    record="false"         // defaults -> false.  Set to true to begin recording
                    pause="false"        // defaults -> false (available in React-Mic-Gold)
                    visualSetting="sinewave" // defaults -> "sinewave".  Other option is "frequencyBars"
                    className="sound-wave"       // provide css class name
                    onStop="false"        // required - called when audio stops recording
                    onData="false"        // optional - called when chunk of audio data is available
                    onBlock="false"       // optional - called if user selected "block" when prompted to allow microphone access (available in React-Mic-Gold)
                    strokeColor="#00fffd"     // sinewave or frequency bar color
                    mimeType="audio/webm"     // defaults -> "audio/webm".  Set to "audio/wav" for WAV or "audio/mp3" for MP3 audio format (available in React-Mic-Gold)
                    echoCancellation="true" // defaults -> false
                    autoGainControl="false"  // defaults -> false
                    noiseSuppression="true" // defaults -> false
                    mimeType = "audio/wav"
                    channelCount="2"     // defaults -> 2 (stereo).  Specify 1 for mono.
                    bitRate={256000}          // defaults -> 128000 (128kbps).  React-Mic-Gold only.
                    sampleRate={22050}        // defaults -> 44100 (44.1 kHz).  It accepts values only in range: 22050 to 96000 (available in React-Mic-Gold)
                    timeSlice={3000}          // defaults -> 4000 milliseconds.  The interval at which captured audio is returned to onData callback (available in React-Mic-Gold).
                    transcriptarray = {props.transcriptarray}
                    speakerarray = {props.speakerarray}
                    handleTranscriptChange = {props.handleTranscriptChange}
                    handleSpeakerChange = {props.handleSpeakerChange}
                />
                </div>
                <div className="uploader">
                <Dropzone 
                    transcriptarray = {props.transcriptarray}
                    speakerarray = {props.speakerarray}
                    handleTranscriptChange = {props.handleTranscriptChange}
                    handleSpeakerChange = {props.handleSpeakerChange}
                    />
                </div>
                </div>
            </section>
        </header>

export default Header;