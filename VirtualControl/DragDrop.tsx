import * as React from 'react';
import './App.css';

export default function DragDropFile() {
    // drag state
  const [dragActive, setDragActive] = React.useState(false);
  const [files, setFiles] = React.useState({});
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
  const handleChange = function(e : any) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
    }
  };
  
// triggers the input when the button is clicked.
  const onButtonClick = () => {
    inputRef.current.click();
  };
  
  return (
    <div>
        <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <h3>Upload and attach files</h3>
            <h4 style={{color: "darkgrey"}}>Upload and attach files to this project.</h4>
            <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" id="mdi-file-document" viewBox="-20 0 60 24"><path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" /></svg>
                <p>
                    <a className="upload-button" onClick={onButtonClick}>Click to upload</a>or drag and drop
                </p>
            </div> 
            </label>
        { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
        </form>
    </div>
  );
}