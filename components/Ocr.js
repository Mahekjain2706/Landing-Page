import React from 'react';
import pdfjsLib from 'pdfjs'
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


let pdfinput = document.querySelector(".selectpdf");
let upload = document.querySelector(".upload"); 
let afterupload = document.querySelector(".afterupload");
let select = document.querySelector(".select"); 
let download = document.querySelector(".download"); 
let pdftext = document.querySelector(".pdftext"); 


upload.addEventListener('click', () => {
    let file = pdfinput.files[0]; 
    if (file != undefined && file.type == "application/pdf") {
        let fr = new FileReader(); 
        fr.readAsDataURL(file); 
        fr.onload = () => {
            let res = fr.result; 
            if (pwd.value == "") {
                extractText(res, false); 
            } else {
                extractText(res, true);
            }
        }
    } else {
        alert("Select a valid PDF file");
    }
});

let alltext = [];
async function extractText(url, pass) {
    try {
        let pdf;
        if (pass) {
            pdf = await pdfjsLib.getDocument({ url: url, password: pwd.value }).promise; 
        } else {
            pdf = await pdfjsLib.getDocument(url).promise; 
        }
        let pages = pdf.numPages;
        for (let i = 1; i <= pages; i++) {
            let page = await pdf.getPage(i); 
            let txt = await page.getTextContent(); 
            let text = txt.items.map((s) => s.str).join(""); 
            alltext.push(text); 
        }
        alltext.map((e, i) => {
            select.innerHTML += `<option value="${i+1}">${i+1}</option>`; 
        });
        afterProcess();
    } catch (err) {
        alert(err.message);
    }
}

function afterProcess() {
    pdftext.value = alltext[select.value - 1]; 
    download.href = "data:text/plain;charset=utf-8," + encodeURIComponent(alltext[select.value - 1]); 
    afterupload.style.display = "flex";
    document.querySelector(".another").style.display = "unset"; 
}

function Ocr(props) {
  return (
    <div>
    <div className="pdfwork">
        <button className="another" onclick="location.reload()">Extract Another PDF</button>
        <span>Select PDF</span>
        <input type="file" className="selectpdf"/>
        <button className="upload">Upload</button>
        <div className="afterupload">
            <span>Select Page</span>
            <select className="selectpage" onchange="afterProcess()"></select>
            <a href="" className="download" download>Download Pdf Text</a>
            <textarea className="pdftext"></textarea>
        </div>
    </div>
    </div>
  );
}

export default Ocr;