// AuthContext.js
import React, { createContext, useState } from 'react';
import { db, auth } from '../API';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { collection, setDoc, doc, addDoc, getDoc } from "firebase/firestore";
import useError from '../hooks/useError';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const { errorInput, setErrorInput } = useError();

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [successMessage, setSuccessMessage] = useState(false)
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {

                setUser({
                    ...user,
                    username: auth.currentUser.displayName
                })
                navigate("/home")
            })
            .catch((error) => {
                setErrorInput({
                    display: true,
                    message: "The credentials are wrong!"
                })
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    };

    const handleRegister = (e) => {

        e.preventDefault();

        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {

                //Adds displayname on register
                updateProfile(userCredential.user, {
                    displayName: user.username,
                })

                addUserToCollection();

                console.log("usuario registrado con exito");
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    setErrorInput({
                        display: true,
                        message: "The email address is already in use. Please, use another email address."
                    })
                }
            });
    }

    const addUserToCollection = async () => {
        await setDoc(doc(db, "users", user.email), {
            username: user.username,
            email: user.email
        });

        const userDocRef = doc(db, "users", user.email);

        const accountsColl = collection(userDocRef, 'accounts');
        await addDoc(accountsColl, {

        });
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser({ name: '', email: '', password: '', })
            console.log("Sing out")
            setErrorInput({ display: false })
            navigate("/")
        }).catch((error) => {

        });
    }

    const handleSession = () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false)
            } else {
                navigate("/")
            }
        })
    }

    const checkIfUserExists = async (email) => {
        const userRef = doc(db, "users", email)
        const userData = await getDoc(userRef);

        if(userData.data()!=undefined){
            return true;
        }else{
            return false;
        }
    }
 
    const handlePasswordReset = async (e) => {
        e.preventDefault()

        if(await checkIfUserExists(user.email)){
            sendPasswordResetEmail(auth, user.email)
            .then(() => {
                console.log("Password reset sent")
                setSuccessMessage(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });  
        }else{
            setErrorInput({
                display: true,
                message: "That email doesn't correspond with any user in the database."
            })
        }
    }

    return (
        <AuthContext.Provider
            value={{
                handleSubmit,
                user,
                setUser,
                handleChange,
                handleRegister,
                handleSignOut,
                handleSession,
                loading,
                auth,
                errorInput,
                setErrorInput,
                handlePasswordReset,
                successMessage
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };
export default AuthContext;
