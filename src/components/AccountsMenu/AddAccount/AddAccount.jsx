import { addAccount } from "../../../service/accountsService"
import { useState } from "react"
import "./AddAccount.css"

const AddAccount = ({ user, onClose }) => {

    const [accountName, setAccountName] = useState("")

    const handleAccountNameChange = (e) => {
        e.preventDefault()
        setAccountName(e.target.value);
    }

    const handleAddAccount = (e) => {
        e.preventDefault()
        addAccount(user.email, accountName)
    }

    return (
        <div className="add-account-overlay">
            <div className="add-account-box">
                <p>Please, enter a name for your account</p>
                <input type="text" name="account-name" placeholder="Account name" onChange={handleAccountNameChange}></input>
                <div className="add-account-buttons">
                    <button type="button" onClick={handleAddAccount}>Add Account</button>
                    <button type="button" onClick={onClose}>Back</button>
                </div>
            </div>
        </div>
    )

}

export default AddAccount