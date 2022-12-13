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
            <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
            <div>
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