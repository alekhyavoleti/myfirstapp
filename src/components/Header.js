import applogo from "../applogo.jpg";
import offline from "../offline.png";
import online from "../online.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
  const isOnline = useOnlineStatus();

  const isClicked = () => {
    setLoginBtnName(loginBtnName === "Login" ? "LogOut" : "Login");
  };

  return (
    <div className="flex justify-between">
      <img src={applogo} alt="ApplicationMainLogo" className="h-20"></img>
      <ul className="flex justify-between items-center w-1/3">
        {isOnline ? (
          <li className="flex">
            <img src={online} alt="You are online" />
            Online
          </li>
        ) : (
          <li className="flex">
            <img src={offline} alt="You are offline" />
            Offline
          </li>
        )}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>Cart</li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li>
          <button className="btn-primary" onClick={isClicked}>
            {loginBtnName}
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Header;
