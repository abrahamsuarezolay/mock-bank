import "./StatusMenu.css"
import { useContext } from "react"
import AuthContext from "../../contexts/AuthContext"
import DataContext from "../../contexts/DataContext"
import { getTotalSavingsInAllAccounts } from "../../service/accountsService"
import PieChartComponent from "./PieChart/PieChartComponent"

const StatusMenu = () => {

    const { user, userAuth } = useContext(AuthContext)
    const { accountsData } = useContext(DataContext)

    const totalSavings = getTotalSavingsInAllAccounts(accountsData);

    return (
        <>
            <div className="status-container">
                <div className="up-part-container">
                    <h4>{userAuth.displayName}</h4>
                    <div className="balance-display">
                        <h4>Total balance</h4>
                        <p>{totalSavings}</p>
                    </div>
                </div>
                <div className="body-status-container">
                    <div className="savings-in-accounts">
                       <PieChartComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatusMenu;