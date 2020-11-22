import React from 'react';

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
          <button className="login-btn">Войти</button>
        </li>
      </ul>
    </nav>
  );
}

export default LandingNav;
