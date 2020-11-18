import React from 'react';

function LandingNav() {
  const toForm = (e: any) => {
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: 2800,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="landingHeader-nav">
      <button className="application-btn mr--21" onClick={toForm}>
        Оставить заявку
      </button>
      <button className="login-btn">
        Войти
      </button>
    </nav>
  );
}

export default LandingNav;
