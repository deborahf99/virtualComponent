/*import * as React from 'react';
import './assets/css/App.css';
import {NeutralColors} from "@fluentui/theme";
import { ChangeEvent, useState } from 'react';
import { Card, CardPreview, CardHeader, CardFooter } from "@fluentui/react-components/unstable";

export default function DragDropFile() {
    // drag state
  const [dragActive, setDragActive] = React.useState(false);
  const [fileList, setFiles] = useState<FileList | null>(null);
  const [showTable, setShowTable] = React.useState(false);
  // ref
  const inputRef = React.useRef<HTMLInputElement>(null);
  
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
      setFiles(e.dataTransfer.files);
      setShowTable(true);
    }
  };
  
  // triggers when file is selected with click
  const handleChange = function(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
        setFiles(e.target.files);
    }
  };
  
  const files = fileList ? [...Array.prototype.slice.call(fileList)] : [];
// triggers the input when the button is clicked.
  const onButtonClick = () => {
    if(inputRef.current != null){
      inputRef.current.click();
    }
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
            <button id="cancel-button">Cancel</button>
            <button id="attach-button">Attach files</button>
        </form>
        <div style={{position: "fixed", marginTop: "30%", marginLeft: "10%", textAlign: "left"}}>
            <table>
                <th>             
                  {files.map((file, i) => (
                    <tr key={i} style={{borderColor: "black", borderWidth: "10"}}>
                      <td style={{fontWeight: "lighter"}}>
                          {file.name}
                      </td>
                    </tr>
                    ))}
                </th>
            </table>
        </div>
    </div>
  );
}*/