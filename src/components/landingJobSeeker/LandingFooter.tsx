import React from 'react';
// import { Link } from "react-router-dom";

function LandingFooter() {
  return (
    <footer className="landing-footer">
      <div className="landingFooterLeft">
        <div className="landingFooter-navWrapper">
          <ul className="landingFooter-navList">
            <li>
              <li className="landingFooter-navList__item">
                <a href="/">Готовое резюме</a>
              </li>
              <li className="landingFooter-navList__item">
                <a href="/">Написание сопроводительных писем</a>
              </li>
              <li className="landingFooter-navList__item">
                <a href="/">Перевод резюме</a>
              </li>
            </li>
            <li>
              <li className="landingFooter-navList__item">
                <a href="/">О сервисе</a>
              </li>
              <li className="landingFooter-navList__item">
                <a href="/">Как это работает</a>
              </li>
              <li className="landingFooter-navList__item">
                <a href="/">Тарифы</a>
              </li>
              <li className="landingFooter-navList__item">
                <a href="/">Связаться с нами</a>
              </li>
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
