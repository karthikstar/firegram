import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => { 
    const [file , setFile] = useState(null);
    const [error,setError] = useState(null);
    const types = ['image/png','image/jpeg']; // allowed types. to prevent ppl from uploading videos 

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected)
        // if we actually have a file.. and that file is a png/jpeg..
        if (selected && types.includes(selected.type)){
            setFile(selected); 
            setError('');
        } else{
            setFile(null);
            setError('Please select an image file (png or jpeg)');

        }

    }

    return (
        <form>
            <label>
                <input type = "file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className = "error">{error}</div>} 
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}
// if theres a error, div w class error will be shown.
// file name will awlways be shown.
// the right side of double enpercent && will only be rendered if the left side is present
export default UploadForm;