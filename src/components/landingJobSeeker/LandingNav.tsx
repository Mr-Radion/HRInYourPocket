import React from 'react';
import { Link } from "react-router-dom";

function LandingNav() {
  const toForm = (e: any) => {
    e.preventDefault();
    window.scrollTo({
      top: 2800,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="landingHeader-nav">
      <ul className="landingHeader-navOuner">
        <li>
          <button className="application-btn" onClick={toForm}>
            Оставить заявку
          </button>
        </li>
        <li>
          <Link to="/home">
            <button className="login-btn">Войти</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LandingNav;
