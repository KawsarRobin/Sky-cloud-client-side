import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  /* Sign in with google */
  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  /* Get Email*/
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  /* Get Password*/
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  /* Get New Name */
  const handleNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  /* Register With email and  password */
  const registrationUsingEmail = (e) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* Update Display name */
  const setName = () => {
    updateProfile(auth.currentUser, { displayName: displayName }).then(
      (result) => {}
    );
  };

  /* Sign in with email and password to existing account */
  const signInUsingEmailAndPassword = (e) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* Observe user activities */
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  /* Log out user */
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => setError(error.message));
  };

  //check Admin by email
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  //Save user to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading,
    handleEmailChange,
    handlePasswordChange,
    registrationUsingEmail,
    signInUsingEmailAndPassword,
    handleNameChange,
    error,
    setError,
    setUser,
    setName,
    saveUser,
    displayName,
    email,
    admin,
  };
};

export default useFirebase;
