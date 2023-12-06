import { useState } from "react"
import "./Balance.css"
import { addFunds, withdraw } from "../../../../service/accountsService"
import  useError  from "./../../../../hooks/useError"
import { ErrorComponent } from "../../../Error/ErrorComponent"

const Balance = ({onClose, type, user, accountNumber}) => {

    const[amount, setAmount] = useState(0)
    const [errorDisplay, setErrorDisplay] = useState(false)

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleConfirm = async () => {
        if(type==="add"){
            await addFunds(user.email, accountNumber, amount)

        }else if(type==="withdraw"){
            try{
                await withdraw(user.email, accountNumber, amount)
            }catch(err){
                console.log("!!!")
                if(err.message==="Insufficient funds in account"){
                return setErrorDisplay(true);
                }
            }
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
                    {errorDisplay? (
                        <ErrorComponent type={"text"} message={"Insufficient funds for withdraw"} />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
    
}

export default Balance;