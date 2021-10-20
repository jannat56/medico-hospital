import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init'

initializeAuthentication();



const useFirebase =() =>{
    const [user, setUser] = useState({})
    const [error, setError]= useState('')
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
   const signInUsingGoogle = () =>{
       setIsLoading(true);
       const googleProvider = new GoogleAuthProvider();
       signInWithPopup(auth, googleProvider)
       .then(result => {
           setUser(result.user)
       })
       .catch((error) => setError(error.message))
       .finally(()=> setIsLoading(false));

   }

//    email register 
const registerUsingEmail = (email, password)  =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(res =>{
        setUser(res.user)
        console.log('signup')
    })
    .catch((error) => setError(error.message));

}
const loginEmail = (email, password)  =>{
   signInWithEmailAndPassword(auth, email, password)
    .then(res =>{
        setUser(res.user)
        console.log('signin')
    })
    .catch((error) => setError(error.message));

}

   useEffect(()=>{
      const unsubscribed = onAuthStateChanged(auth, user =>{
           if(user){
               setUser(user);

           }
           else{
               setUser({});
           }
           setIsLoading(false);

       });
       return () => unsubscribed

   },[])

const logOut= () =>{
    setIsLoading(true);
    signOut(auth)
    .then(()=>{ })
    .finally(()=> setIsLoading(false));
}
    return {
        user,
        isLoading,
        signInUsingGoogle,
        registerUsingEmail,
        loginEmail,
        error,
        logOut
    }
}

export default useFirebase;

