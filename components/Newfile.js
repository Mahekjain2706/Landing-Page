import React, { useState, useRef } from "react";
import Tesseract from 'tesseract.js';
import pdfjsLib from 'pdfjs'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


function extractText(url) {
  try {
    let pdf;
    pdf = pdfjsLib.url(useRef);
    let pages = pdf.numPages;
    for (let i = 1; i <= pages; i++) {
      let page = pdf.getPage(i);
      let txt =  page.getTextContent();
      let text = txt.items.map((s) => s.str).join("");
      alltext.push(text);
    }
    alltext.map((e,i) => {
      setText.innerHTML += `<option value="${i+1}">${i+1}</option>`;
    });
    afterProcess();
  }catch(err){
    alert(err.message);
  }
}

function afterProcess() {
  setPdftext = alltext[text.data - 1]; 
  afterupload.style.display = "flex";
}

let Newfile = (props) => {

  let inputRef = useRef();
  const [files, setFiles] = React.useState('');
  // const [isLoading, setIsLoading] = React.useState(false);
  const [text, setText] = React.useState('');
  const [pdftext,setPdftext] = React.useState('');
  // const [progress, setProgress] = React.useState(0);

  const handleSubmit = (e) => {
  //   if (files != undefined && inputRef.files[0].type == "application.pdf") {
  //     let fr = new FileReader(); 
  //     fr.readAsDataURL(file); 
  //     fr.onload = () => {
  //         let res = fr.result; 
  //     }
  // } else {
  //     alert("Select a valid PDF file");
  // }
  Tesseract.recognize(files, 'eng', {
    logger: (m) => {
      console.log(m);
      if (m.status === 'recognizing text') {
        // setProgress(parseInt(m.progress * 100));
      }
    },
  })
    .catch((err) => {
      console.error(err);
    })
    .then((result) => {
      console.log(result.data);
      setText(result.data.text);
      // setIsLoading(false);
    });
  }




  // const handleSubmit = () => {
  //   setIsLoading(true);
  //   Tesseract.recognize(files, 'eng', {
  //     logger: (m) => {
  //       console.log(m);
  //       if (m.status === 'recognizing text') {
  //         setProgress(parseInt(m.progress * 100));
  //       }
  //     },
  //   })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  //     .then((result) => {
  //       console.log(result.data);
  //       setText(result.data.text);
  //       setIsLoading(false);
  //     });
  // };

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
        {Array.from(files).map((files, idx) => <li key={idx}>{files.name}</li>)}
      </ul>
      <div className="actions">
        <button className="btn btn-primary" onClick={() => setFiles(null)} style={{ margin: '5px' }}>Cancel</button>
        <button className="btn btn-primary" onClick={(handleSubmit)} style={{ margin: '5px' }}>Upload</button>
      </div>

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
        {!text && (
          <>
            <input
              type="file"
              multiple
              onChange={(e) => setFiles(URL.createObjectURL(e.target.files[0]))}
              hidden
              accept=" application/pdf, image/png, image/jpeg"
              ref={inputRef}
            />
            <button className="btn btn-primary" onClick={(e) => inputRef.current.click()} >Select Files</button>
          </>

        )}

        {/* {isLoading && (
          <>
            <progress className="form-control" value={progress} max="100">
              {progress}%{' '}
            </progress>{' '}
            <p className="text-center py-0 my-0">Converting:- {progress} %</p>
          </>
        )} */}
      </div>
    </>
  );
};

export default Newfile;