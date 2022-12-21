import * as React from 'react';
import {useDropzone} from "react-dropzone";
import { NeutralColors } from '@fluentui/react';
import "./assets/css/App.css";
import { Button } from '@fluentui/react-components';
function Dropzone() {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name}
    </li>
  ));

  return (
    <div>
      <h3>Upload and attach files</h3>
      <h4 style={{color: NeutralColors.gray100}}>Upload and attach files to this project.</h4>
      <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />

        <div id="form-file-upload">
          <p className="dropzone-content">
          <svg xmlns="http://www.w3.org/2000/svg" id="file-pic" viewBox="-20 0 60 24"><path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" /></svg>
          
          <a className='upload-button'>Click to upload</a> or drag and drop
          </p>
          <p style={{fontSize: "15px", color: NeutralColors.gray120}}>Maximum file size 50MB</p>
      
        </div>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
      <Button>Cancel</Button>
      <Button>Attach files</Button>
    </div>
  );
}

export default Dropzone;