import { useContext } from "react";
import DataContext from "../../providers/DataContext";
import "./TransferMenu.css"
import useTransfer from "../../hooks/useTransfer";
import { ErrorComponent } from "../Error/ErrorComponent";

const TransferMenu = () => {

    const { accountsData } = useContext(DataContext);
    const { handleChange, handleTransfer, errorInput, successMessage } = useTransfer();

    return(
        <form method="POST" id="transferForm" onSubmit={handleTransfer}>
        <div className="transfer-menu-container">
            <div className="transfer-menu-up">
                <div className="your-account">
                <h5>Your accounts</h5>
                <select form="transferForm" name="senderAccount" onChange={handleChange} required>
                    {accountsData.map((account) => {
                       return <option key={account.accountNumber} value={account.accountNumber}>{account.accountName + ": " + account.accountNumber}</option> 
                    })}
                </select>
                </div>
                <div className="destination-account">
                <h5>Destination account</h5>
                <input type="text" name="receiverEmail"  onChange={handleChange} placeholder="Email" />
                <input type="text" name="receiverAccount"  onChange={handleChange} placeholder="Account number" />
                </div>
            </div>
            <div className="transfer-menu-input">
                <label htmlFor="amount">Introduce the amount to transfer</label>
                <input type="number" name="amount" onChange={handleChange}/>
                <button type="submit">Transfer</button>
                <div className="transfer-result">
                {successMessage ? (
                    <p>Transfer completed!</p>
                ) : (
                    <></>
                )}
                {errorInput.display ? (
                    <ErrorComponent type="text" message={errorInput.message}/>
                ) : (
                    <></>
                )}
                </div>
            </div>
        </div>
        </form>
    )

}

export default TransferMenu;