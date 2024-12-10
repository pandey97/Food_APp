import { Link } from "react-router";
import { LOGO } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {

    const [buttonText, setButtonText] = useState("Login");

    const data = useSelector((store) => store.restaurant.items);

    const LoginLogoutClicked = () => {
        setButtonText(prevText => (prevText === "Login" ? "Logout" : "Login"));
    };

    return(
        <div className="header_container">
            <div className="log_container">
                <Link to="/">
                    <img className="logo_image" alt="App_Logo" src={LOGO} />
                </Link>
            </div>
            <div className="navitem_container">
                <ul className="list_item"> 
                    <li className="list">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="list">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="list">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="list">
                        <Link to="/mart">Insta Mart</Link>
                    </li>
                    <li className="list">
                        <Link to="/cart">Cart: {data.length}</Link>
                    </li>
                    <button className="login-logout-btn" onClick={LoginLogoutClicked}>{buttonText}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;