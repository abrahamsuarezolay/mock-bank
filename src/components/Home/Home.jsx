import "./Home.css"
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import Navbar from "../Navbar/Navbar";
import AccountsMenu from "../AccountsMenu/AccountsMenu";
import DataContext from "../../contexts/DataContext";
import StatusMenu from "../StatusMenu/StatusMenu";
import TransferMenu from "../TransferMenu/TransferMenu";


const Home = () => {

    const { handleSignOut, handleSession, loading, user } = useContext(AuthContext)
    const { accountsData, getAccountsData } = useContext(DataContext)
    
    handleSession();

    const [activeComponent, setActiveComponent] = useState("status")

    const handleComponentDisplay = (component) => {
        setActiveComponent(component);
    };
   
    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                <header>
                    <div className="welcome-container">
                        <h1 className="welcome">Welcome {user.name}</h1>
                    </div>
                </header>
                <div>
                    <Navbar 
                    handleSignOut={handleSignOut}
                    handleComponentDisplay={handleComponentDisplay} />
                </div>
                <div className="component-container">
                    {activeComponent === "status" && <StatusMenu />}
                    {activeComponent === "accounts" && <AccountsMenu />}
                    {activeComponent === "transfer" && <TransferMenu />}
                </div>
                </>
            )}
        </>
    )

}

export default Home;
