import "./Account.css"
import { addFunds, withdraw } from "../../../service/accountsService"
import { useState } from "react"

const Account = ({user, accountData}) => {

    const[displayBalanceScreen, setDisplayBalanceScreen] = useState(false)

    const handleBalanceClose = () => {
        setDisplayBalanceScreen(false)
    }

    const handleDisplay = () => {
        setDisplayBalanceScreen(true)
    }

    return (
        <>
        <div className="account-container">
            <div className="account-left">
                <p>Name: {accountData.accountName}</p>
                <p>Current balance: {accountData.balance}</p>
            </div>
            <div className="account-right">
                <p>Account number: {accountData.accountNumber}</p>
                <div className="account-buttons">
                    <button type="button" onClick={()=>handleDisplay()}>Withdraw</button>
                    <button type="button" onClick={()=>handleDisplay()}>Add funds</button>
                </div>
            </div>
        </div>
        </>
    )

}

export default Account