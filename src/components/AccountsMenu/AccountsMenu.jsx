import "./AccountsMenu.css"
import { useContext, useState } from "react"
import AuthContext from "../../providers/AuthContext"
import { addAccount } from "../../service/accountsService"
import Account from "./Account/Account"
import AddAccount from "./AddAccount/AddAccount"
import DataContext from "../../providers/DataContext"

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
                {accountsData.length <= 0 ? (
                    <>
                        <h5 className="no-accounts-message">It seems you don't have any accounts yet. Why you don't try to use the button below to add a new one?</h5>
                    </>
                ) : (
                    <>
                        <div className={`accounts-list-container ${accountsData.length > 4 ? 'bordered' : ''}`}>
                            {accountsData.map((account, index) => (
                                <Account key={index} user={user} accountData={account} />
                            ))}
                        </div></>
                )}
                <div className="add-account-container">
                    <button type="button" onClick={() => setDisplayAddAccount(true)}>Add account</button>
                </div>
            </div>
        </>
    )
}

export default Accounts;