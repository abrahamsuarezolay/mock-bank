import "./StatusMenu.css"
import { useContext } from "react"
import AuthContext from "../../contexts/AuthContext"
import DataContext from "../../contexts/DataContext"
import { getTotalSavingsInAllAccounts } from "../../service/accountsService"

const StatusMenu = () => {

    const { user } = useContext(AuthContext)
    const { accountsData } = useContext(DataContext)

    const totalSavings = getTotalSavingsInAllAccounts(accountsData);

    return (
        <>
            <div className="status-container">
                <div className="up-part-container">
                    <h5>{user.username}</h5>
                    <div className="balance-display">
                        <h5>Total balance</h5>
                        <p>{totalSavings}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatusMenu;