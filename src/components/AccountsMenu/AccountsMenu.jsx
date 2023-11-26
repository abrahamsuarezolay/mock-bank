import "./AccountsMenu.css"
import { useContext, useState } from "react"
import AuthContext from "../../contexts/AuthContext"
import { addAccount } from "../../service/accountsService"
import Account from "./Account/Account"
import AddAccount from "./AddAccount/AddAccount"
import DataContext from "../../contexts/DataContext"

const Accounts = () => {

    const { user } = useContext(AuthContext)
    const { accountsData } = useContext(DataContext)

    const [displayAddAccount, setDisplayAddAccount] = useState(false);

    const onClose = () => {
        setDisplayAddAccount(false);
    }

    return (
        <>
            {displayAddAccount ? (
                <><AddAccount user={user} onClose={onClose} /></>
            ) : (
                <></>
            )}
            <div className="accounts-container">
                <div className="accounts-list-container">
                    {accountsData.map((account, index) => (
                        <Account key={index} accountData={account} />
                    ))}
                </div>
                <div className="add-account-container">
                    <button type="button" onClick={() => setDisplayAddAccount(true)}>+</button>
                </div>
            </div>
        </>
    )
}

export default Accounts;