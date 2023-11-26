import accounts from "./../../assets/svg/accounts.svg"
import gear from "./../../assets/svg/gear.svg"
import home from "./../../assets/svg/home.svg"
import transfer from "./../../assets/svg/transfer.svg"
import exit from "./../../assets/svg/exit.svg"
import "./Navbar.css"

const Navbar = ({handleSignOut}) => {

    return(
        <div className="navbar-container">
            <ul className="navbar-list">
                <li><img src={home} /></li>
                <li><img src={accounts} /></li>
                <li><img src={transfer} /></li>
                <li><img src={gear} /></li>
                <li><img src={exit} onClick={handleSignOut}/></li>
            </ul>
        </div>
    )

}

export default Navbar;