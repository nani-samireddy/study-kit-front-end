import {
    React,
    useContext,
    useState,
    useEffect,
    createContext,
} from 'react';
import { auth } from '../config/firebaseAuth';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
// Create a context object
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Create a provider for components to consume and subscribe to changes
const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // create user with email and password  
    const signUp = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user with email and password
    const signIn = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setLoading(false);
            return userCredential;
        }).catch((error) => { console.log(error) });
    }

    // sign out user
    const signOutUser = async () => {
        return signOut(auth);
    }

    const value = {
        currentUser,
        signUp,
        signIn,
        signOutUser,
        loading
    }


    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;