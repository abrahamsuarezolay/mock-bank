import "./Account.css"
import { addFunds, withdraw } from "../../../service/accountsService"
import { useState } from "react"
import  Balance  from "./Balance/Balance"

const Account = ({user, accountData}) => {

    const[displayBalanceScreen, setDisplayBalanceScreen] = useState(false)
    const[displayType, setDisplayType] = useState("")

    const handleBalanceClose = () => {
        setDisplayBalanceScreen(false)
    }

    const handleDisplay = () => {
        setDisplayBalanceScreen(true)
    }

    return (
        <>
            {displayBalanceScreen ? (
                <>
                    <Balance onClose={handleBalanceClose} type={displayType} user={user} accountNumber={accountData.accountNumber}/>
                </>
            )
                :
                (<>

                </>)}
        <div className="account-container">
            <div className="account-left">
                <p>Name: {accountData.accountName}</p>
                <p>Current balance: {accountData.balance}</p>
            </div>
            <div className="account-right">
                <p>Account number: {accountData.accountNumber}</p>
                <div className="account-buttons">
                    <button type="button" onClick={()=>{handleDisplay(), setDisplayType("withdraw")}}>Withdraw</button>
                    <button type="button" onClick={()=>{handleDisplay(), setDisplayType("add")}}>Add funds</button>
                </div>
            </div>
        </div>
        </>
    )

}

export default Account