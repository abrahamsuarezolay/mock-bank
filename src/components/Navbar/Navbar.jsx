import accounts from "./../../assets/svg/accounts.svg"
import gear from "./../../assets/svg/gear.svg"
import home from "./../../assets/svg/home.svg"
import transfer from "./../../assets/svg/transfer.svg"
import exit from "./../../assets/svg/exit.svg"
import "./Navbar.css"

const Navbar = ({handleSignOut, handleComponentDisplay}) => {

    return(
        <div className="navbar-container">
            <ul className="navbar-list">
                <li><img src={home} onClick={()=>{handleComponentDisplay("status")}}/></li>
                <li><img src={accounts} onClick={()=>{handleComponentDisplay("accounts")}}/></li>
                <li><img src={transfer} onClick={()=>{handleComponentDisplay("transfer")}}/></li>
                <li><img src={gear} onClick={()=>{handleComponentDisplay("settings")}}/></li>
                <li><img src={exit} onClick={handleSignOut}/></li>
            </ul>
        </div>
    )

}

export default Navbar;