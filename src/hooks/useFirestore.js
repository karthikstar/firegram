import {useState , useEffect} from 'react';

import {projectFirestore} from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    
    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt','desc') // order the documents in date order,desc order, before we retrieve them
        .onSnapshot((snap) => { // fires once, and every time a new doc added, then again it runs this and gets a snapshot of all the docs
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id : doc.id})
                // using spread operator to get all the properties of the data and spreads those into properties of the obj. and id as well.
            });
            setDocs(documents);
        }); // after the whole thing runs, it returns a function and that function is used to unsub from the collection
        // hence we can invoke this function for instance when we UNMOUNT this imagegrid component. 
        // every time theres a change, or when we uplaod an img, onSnapshot eventhandler will fire and updates the docs
        return () => unsub();

    },[collection])

    return {docs};   
}

export default useFirestore;