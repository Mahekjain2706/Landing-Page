import React,{ useState, useRef } from "react";
import Tesseract from 'tesseract.js';





let DragDropFiles = () => {

  let inputRef = useRef();
  const [files, setFiles] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [text, setText] = React.useState('');
  const [progress, setProgress] = React.useState(0);

  const handleSubmit = () => {
    setIsLoading(true);
    Tesseract.recognize(files, 'eng', {
      logger: (m) => {
        console.log(m);
        if (m.status === 'recognizing text') {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result.data);
        setText(result.data.text);
        setIsLoading(false);
      });
  };

  let handleDragOver = (e) => {
    e.preventDefault();
  };
  let handleDrop = (e) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files)
  };
   
  let handleUpload = () => {
    let formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll());
  };

  if (files) return (
    <div className="uploads">
        <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
        </ul>
        {!isLoading && !text && (
        <>
        <div className="actions">
            <button className="btn btn-primary" onClick={() => setFiles(null)} style={{margin:'5px'}}>Cancel</button>
            <button className="btn btn-primary" onClick={(handleSubmit)} style={{margin: '5px'}}>Upload</button>
        </div>
        </>
        )}
        
    </div>
  )

  return (
    <>
        <div 
            className="dropzone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
          <h1>Drag and Drop Files to Upload</h1>
          <h1>Or</h1>
          {!isLoading && !text && (
            <>
          <input 
            type="file"
            multiple
            onChange={(e) => setFiles(e.target.files)}
            hidden
            accept=" .pdf , image/png, image/jpeg"
            ref={inputRef}
          />
          <button className="btn btn-primary" onClick={(e) => inputRef.current.click()} >Select Files</button>
          </>
          
          )}

          {isLoading && (
            <>
              <progress className="form-control" value={progress} max="100">
                {progress}%{' '}
              </progress>{' '}
              <p className="text-center py-0 my-0">Converting:- {progress} %</p>
            </>
          )}
        </div>
    </>
  );
};

export default DragDropFiles;