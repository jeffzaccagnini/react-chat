import React from 'react';
import { db } from './firebase';

export const useDoc = (path) => {
    const [doc, setDoc] = React.useState(null);
  
    React.useEffect(() => {
        return db.doc(path).onSnapshot(doc => {
            setDoc({
                ...doc.data(),
                id: doc.id,
            })
        })
    }, [path]);
  
    return doc;
}