import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone';


function Dropzone(props) {

    const onDrop = useCallback(acceptedFiles => {
        var data = new FormData();
        data.append('file', acceptedFiles[0]);

        fetch('http://localhost:5000/transcribe', {
        method: 'POST',
        body: data
        })
        .then(res => res.json())
        .then((res) => { 
            var newtranscriptarray = props.transcriptarray.concat(res['transcriptions'])
            props.handleTranscriptChange(newtranscriptarray);
            var newspeakerarray = props.speakerarray.concat(res['speakers'])
            props.handleSpeakerChange(newspeakerarray);
        })
        .catch(err => console.log(err))
      }, [])
      
    const {getRootProps, getInputProps} = 
    useDropzone({accept: 'audio/flac, audio/wav', 
                 maxFiles: 1,
                 multiple: false, 
                 onDrop});

  return (
    <section className="dropzonebox">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  );
}

export default Dropzone;