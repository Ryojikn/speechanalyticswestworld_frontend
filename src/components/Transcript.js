import { React, Component} from 'react';

var uniqid = require('uniqid');

class TranscriptComponent extends Component {
      
      render () {
      return (
      <section className="Transcript-section">
                <div className="Transcript-container">
                    <Transcripts 
                        transcriptarray={this.props.transcriptarray} 
                        speakerarray={this.props.speakerarray}/>
                </div>
        </section>)
}
}

export class Transcripts extends Component {
    
    render () {
        const transcriptarray = this.props.transcriptarray;
        const speakerarray = this.props.speakerarray;
        return (
            <div>
            {speakerarray.map((speaker, index) => (
                            <div className="Transcript-subcontainer" key={uniqid()}>
                                <div className="Transcript-speaker" key={uniqid()}>
                                    <p className="speaker" key={uniqid()}>
                                        {speaker}
                                    </p>
                                </div>
                                <div className="Transcript-text" key={uniqid()}>
                                    <p className="transcript" key={uniqid()} >
                                        {transcriptarray[index]}
                                    </p>
                                </div>  
                            </div>
                        ))}
            </div>
        )
    }}



export default TranscriptComponent;