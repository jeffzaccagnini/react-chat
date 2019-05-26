import React from 'react';
import { db } from './firebase';

export const useCollection = (path, orderBy, where=[]) => {
    const [docs, setDocs] = React.useState([]);
  
    const [queryField, queryOperator, queryValue] = where;

    React.useEffect(() => {
      let collection = db.collection(path);
  
      if(orderBy) {
        collection = collection.orderBy(orderBy);
      }

      if(queryField) {
        collection = collection.where(
          queryField,
          queryOperator,
          queryValue
        );
      }
      
      return collection.onSnapshot(snapshot => {
          const docs = [];
          snapshot.forEach(doc => {
            docs.push({
              ...doc.data(),
              id: doc.id
            })
          })
          setDocs(docs);
        })
    }, [path, orderBy, queryField, queryOperator, queryValue]);
  
    return docs;
  }