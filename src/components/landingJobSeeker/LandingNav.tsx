import React from 'react';

function LandingNav() {
  const toForm = (e: any) => {
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: 6000,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <button className="btn btn-danger header-btn" onClick={toForm}>
        Оставить заявку
      </button>
      <button className="btn btn-danger header-btn">
        Войти
      </button>
    </div>
  );
}

export default LandingNav;
