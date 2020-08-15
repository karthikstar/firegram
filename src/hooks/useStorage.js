import {useState, useEffect} from 'react';

import {projectStorage, projectFirestore,timestamp} from '../firebase/config';

const useStorage = (file) => {
    //3 pieces of state to be used.
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);
    
    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed',(snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);

            // whenever the state aka progress changes this inner function gets fired.
        }, (err) =>{
            setError(err) // this fires when theres an error with the upload.
        },async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url, createdAt}) // adding two properties, 2 url and a timestamp.
            setUrl(url) // this runs after the image has been uploaded.
        });


    }, [file]);//this useEffect fires whenever its dependency, file, changes

    return {progress, url, error}


} 

export default useStorage;
