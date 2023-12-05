import { useState } from "react"
import "./Balance.css"
import { addFunds, withdraw } from "../../../../service/accountsService"

const Balance = ({onClose, type, user, accountNumber}) => {

    const[amount, setAmount] = useState(0)

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleConfirm = () => {
        if(type==="add"){
            addFunds(user.email, accountNumber, amount)

        }else if(type==="withdraw"){
            withdraw(user.email, accountNumber, amount)
        }

        onClose();
    }

    return (
        <div className="amount-overlay">
            <div className="amount-box p-3">
                <p>Please, enter the amount you wish to {type}</p>
                <input type="number" name="amount" placeholder="Amount" onChange={handleAmountChange}></input>
                <div className="amount-buttons">
                    <button type="submit" onClick={handleConfirm}>Confirm</button>
                    <button type="submit" onClick={onClose}>Back</button>
                </div>
            </div>
        </div>
    )
    
}

export default Balance;