import React from 'react';
import {motion} from 'framer-motion';


const Modal = ({selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains("backdrop")){
            // the e.target is impt so as to prevent us fromn closing Modal when we click on the pic.
            // we only want to close the modal if we click the BACKDROP!
            setSelectedImg(null);
// when this occurs, modal is closed. as modal only is rendered when selectedImg has a value.
        }
        
    }
    return (
        <motion.div className="backdrop" onClick={handleClick}
        initial = {{opacity:0}} animate={{opacity:1}}
        >
            <motion.img src = {selectedImg} alt="enlarged pic" 
                initial = {{y: "-100vh"}}
                animate={{y:0}}
            />
        </motion.div>
    )
}


export default Modal;