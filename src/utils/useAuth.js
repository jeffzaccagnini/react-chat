import React from 'react';
import { firebase, db } from './firebase';

export const useAuth = () => {
    const [user, setUser] = React.useState(null);
  
    React.useEffect(() => {
      return firebase.auth().onAuthStateChanged((firebaseUser) => {
        
        if(firebaseUser) {
          const user = {
            displayName: firebaseUser.displayName,
            photoUrl: firebaseUser.photoURL,
            uid: firebaseUser.uid,
          }
          setUser(user);
          db.collection('users')
            .doc(user.uid)
            .set(user, { merge: true }) 
        } else {
          setUser(null);
        }
      })
    }, []);
  
    return user;
  }
