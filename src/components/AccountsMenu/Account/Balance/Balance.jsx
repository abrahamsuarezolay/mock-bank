import "./Balance.css"

const Balance = ({onClose}) => {

    const handleAmountChange = () => {

    }

    return (
        <div className="amount-overlay">
            <div className="amount-box">
                <p>Please, enter the amount you wish to </p>
                <input type="number" name="amount" placeholder="Amount" onChange={handleAmountChange}></input>
                <div className="amount-buttons">
                    <button type="submit" >Confirm</button>
                    <button type="submit" onClick={onClose}>Back</button>
                </div>
            </div>
        </div>
    )
    
}

export default Balance;