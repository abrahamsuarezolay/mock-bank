// AuthContext.js
import React, { createContext, useState } from 'react';
import { db, auth } from '../API';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { collection, setDoc, doc, addDoc } from "firebase/firestore";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({
        name: '',
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
                // Signed in 
                console.log("Usuario logueado!")
                navigate("/home")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    };

    const handleRegister = (e) => {

        e.preventDefault();

        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                updateProfile(user, {
                    displayName: user.name,
                })

                addUserToCollection();

                console.log("usuario registrado con exito");
            })
            .catch((error) => {
                console.log(error.code + " " + error.message);
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
            setUser({name: '', email: '', password: '',})
            console.log("Sing out")
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
                auth
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };
export default AuthContext;
