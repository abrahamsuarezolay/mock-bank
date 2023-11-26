import { createContext, useContext, useEffect, useState } from "react";
import { collection, doc, setDoc, getDocs, onSnapshot, getDoc } from 'firebase/firestore';
import { db } from '../API';
import { getAllAccountsData } from "../service/accountsService";
import AuthContext from "./AuthContext";

const DataContext = createContext()

const DataProvider = ({ children }) => {

    const { user, auth } = useContext(AuthContext)
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
      
          console.log("Update")
      
          accounts = []
          snapshot.forEach((doc) => {
            accounts.push(doc.data());
          });

          setAccountsData(accounts);
        }) 
        
      }

    useEffect(() => {
        if (auth.currentUser) {
            getAllAccountsData(user.email)
        }

        console.log("Use effect")
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