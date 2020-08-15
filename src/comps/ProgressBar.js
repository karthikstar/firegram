import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';

const ProgressBar = ({file, setFile}) => {
    const {url, progress} = useStorage(file);
    
    useEffect(() =>{
        if (url){
            setFile(null);
        }
    }, [url,setFile])
// have to add setfile as a depency as well since we are using it inside the function 
// so basically when url changes, use effect fires, and it will cause setfile to set file to null


    return (
        <motion.div className="progress-bar" 
        initial = {{width:0}}
        animate={{width:progress + '%'}}
        ></motion.div>
    )
}

// animating the progressbar using framer motion, in order to make it less jumpy.

export default ProgressBar;

