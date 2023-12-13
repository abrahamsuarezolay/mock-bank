import { createContext, useContext, useEffect, useState } from "react";
import { collection, doc, setDoc, getDocs, onSnapshot, getDoc } from 'firebase/firestore';
import { db } from '../config';
import AuthContext from "./AuthContext";

const DataContext = createContext()

const DataProvider = ({ children }) => {

    const { user, auth, userAuth } = useContext(AuthContext)
    const usersColl = collection(db, "users")
    const [accountsData, setAccountsData] = useState([]);

    const getAllAccountsData = async (userEmail) => {

        let accounts = [];
      
        const userDocRef = doc(usersColl, userEmail);
        const accountsCollection = collection(userDocRef, "accounts");
      
        const accountsDocs = await getDocs(accountsCollection);
        accountsDocs.forEach((doc) => {
          accounts.push(doc.data());
        })

      

        const unsubscribe = onSnapshot(accountsCollection, (snapshot) => {
      
          accounts = []
          snapshot.forEach((doc) => {
            accounts.push(doc.data());
          });

          // Filter out the initial account, by its uniqueIdentifier
          accounts = accounts.filter(account => account.id !== 'InitialAccountNotForUse');

          setAccountsData(accounts);
        }) 
        
      }  

    useEffect(() => {
        if (auth.currentUser) {
            getAllAccountsData(auth.currentUser.email)
        }
        console.log("Use effect in Data Context")
    }, [auth.currentUser])


    return (
        <DataContext.Provider value={{
            accountsData
        }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataProvider }

export default DataContext;