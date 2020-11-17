import React from 'react';
// import { Link } from "react-router-dom";

function LandingFooter() {
  return (
    <footer className="landing-footer">
      <div className="landingFooterLeft">
        <div className="landingFooter-navWrapper">
          <ul className="landingFooter-navList">
            <li>
              <div className="landingFooter-navList__item">
                <a href="/">Готовое резюме</a>
              </div>
              <div className="landingFooter-navList__item">
                <a href="/">Написание сопроводительных писем</a>
              </div>
              <div className="landingFooter-navList__item">
                <a href="/">Перевод резюме</a>
              </div>
            </li>
            <li>
              <div className="landingFooter-navList__item">
                <a href="/">О сервисе</a>
              </div>
              <div className="landingFooter-navList__item">
                <a href="/">Как это работает</a>
              </div>
              <div className="landingFooter-navList__item">
                <a href="/">Тарифы</a>
              </div>
              <div className="landingFooter-navList__item">
                <a href="/">Связаться с нами</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="landingFooterRight">
        <span className="logo" />
      </div>
    </footer>
  );
}

export default LandingFooter;
