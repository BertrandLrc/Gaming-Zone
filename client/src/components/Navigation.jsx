import { Link } from "react-router-dom";

import logoGamingZone from "../assets/images/logoGamingZone.png";

import "../App.css";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navContainer">
      <ul className="buttonContainer">
        <Link className="noTextDecoration" to="/app">
          <img className="logoSize" src={logoGamingZone} alt="logo" />
        </Link>
        <Link className="noTextDecoration" to="/">
          Catalogue
        </Link>
        <Link className="noTextDecoration" to="/article">
          Article
        </Link>
        <Link className="noTextDecoration" to="/panier">
          Panier
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
