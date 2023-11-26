import "./Account.css"

const Account = ({accountData}) => {

    return (
        <div className="account-container">
            <div className="account-left">
                <h5>Account name</h5>
                <p>{accountData.accountName}</p>
                <p>{accountData.balance}</p>
            </div>
            <div className="account-right">
                <h5>Account number</h5>
                <p>{accountData.accountNumber}</p>
                <div className="account-buttons">
                    <button type="button">Withdraw</button>
                    <button type="button">Add funds</button>
                </div>
            </div>
        </div>
    )

}

export default Account