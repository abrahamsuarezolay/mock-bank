import { createContext, useContext, useEffect, useState } from "react";
import { db } from '../API';
import { getAllAccountsData } from "../service/accountsService";
import AuthContext from "./AuthContext";


const DataContext = createContext()

const DataProvider = ({ children }) => {

    const { user, auth } = useContext(AuthContext)
    const [accountsData, setAccountsData] = useState([]);

    const fetchData = async () => {
        setAccountsData(await getAllAccountsData(user.email));
    }

    useEffect(() => {
        if (auth.currentUser) {
            fetchData()
        }
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