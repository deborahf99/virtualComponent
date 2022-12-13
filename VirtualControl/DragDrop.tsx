import * as React from 'react';
import './App.css';
import {NeutralColors} from "@fluentui/theme";
import { ChangeEvent, useState } from 'react';

export default function DragDropFile() {
    // drag state
  const [dragActive, setDragActive] = React.useState(false);
  const [fileList, setFiles] = useState<FileList | null>(null);
  // ref
  const inputRef = React.useRef(null);
  
  // handle drag events
  const handleDrag = function(e : any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // triggers when file is dropped
  const handleDrop = function(e : any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };
  
  // triggers when file is selected with click
  const handleChange = function(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
        setFiles(e.target.files);
    }
  };
  
  const files = fileList ? [...fileList] : [];
// triggers the input when the button is clicked.
  const onButtonClick = () => {
    inputRef.current.click();
  };
  
  return (
    <div>
        <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <div style={{textAlign: "left"}}>
                <h3>Upload and attach files</h3>
                <h4 style={{color: NeutralColors.gray100}}>Upload and attach files to this project.</h4>
            </div>
            <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" id="mdi-file-document" viewBox="-20 0 60 24"><path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" /></svg>
                <p style={{color: NeutralColors.gray120}}>
                    <a className="upload-button" onClick={onButtonClick}>Click to upload</a>or drag and drop
                </p>
                <p style={{fontSize: "15px", color: NeutralColors.gray120}}>Maximum file size 50MB</p>
            </div> 
            </label>
            { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
            <button style={{width: "35%", height: "15%", marginRight: "10px", backgroundColor: "white", borderRadius: "6px"}}>Cancel</button>
            <button style={{width: "35%", height: "15%", backgroundColor: "black", color:"white", borderRadius: "6px"}}>Attach files</button>
        </form>
        <div style={{position: "fixed", marginTop: "30%"}}>
            <ul>
                {files.map((file, i) => (
                    <li key={i}>
                        {file.name} - {file.type}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}