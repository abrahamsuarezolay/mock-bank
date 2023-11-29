import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import "./TransferMenu.css"
import useTransfer from "../../hooks/useTransfer";

const TransferMenu = () => {

    const { accountsData } = useContext(DataContext);
    const { handleChange, handleTransfer } = useTransfer();

    return(
        <form method="POST" id="transferForm" onSubmit={handleTransfer}>
        <div className="transfer-menu-container">
            <div className="transfer-menu-up">
                <div className="your-account">
                <h5>Your account</h5>
                <select form="transferForm" name="senderAccount" onChange={handleChange} required>
                    {accountsData.map((account) => {
                       return <option key={account.accountNumber} value={account.accountNumber}>{account.accountName + ": " + account.accountNumber}</option> 
                    })}
                </select>
                </div>
                <div className="destination-account">
                <h5>Destination</h5>
                <input type="text" name="receiverEmail"  onChange={handleChange} placeholder="Email" />
                <input type="text" name="receiverAccount"  onChange={handleChange} placeholder="Account number" />
                </div>
            </div>
            <div className="transfer-menu-input">
                <label htmlFor="amount">Introduce the amount to transfer</label>
                <input type="text" name="amount" onChange={handleChange}/>
                <button type="submit">Transfer</button>
            </div>
        </div>
        </form>
    )

}

export default TransferMenu;