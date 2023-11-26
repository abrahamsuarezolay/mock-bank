import "./Account.css"
import { addFunds, withdraw } from "../../../service/accountsService"

const Account = ({user, accountData}) => {

    return (
        <div className="account-container">
            <div className="account-left">
                <p>Name: {accountData.accountName}</p>
                <p>Current balance: {accountData.balance}</p>
            </div>
            <div className="account-right">
                <p>Account number: {accountData.accountNumber}</p>
                <div className="account-buttons">
                    <button type="button" onClick={()=>{withdraw(user.email, accountData.accountNumber, 1000)}}>Withdraw</button>
                    <button type="button" onClick={()=>{addFunds(user.email, accountData.accountNumber, 1000)}}>Add funds</button>
                </div>
            </div>
        </div>
    )

}

export default Account