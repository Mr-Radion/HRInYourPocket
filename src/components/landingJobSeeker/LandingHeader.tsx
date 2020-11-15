import React from 'react';
import LandingNav from './LandingNav';

function LandingHeader() {
  const toForm = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="landing-header">
      <div className="landingHeader-shape"> 
        <span className="landingHeader-logo" />
        <LandingNav />
      </div>
      <div className="landingHeader-content">
        <div className="landingHeader-content-txt">
          <h1>
            Устройся на работу <br />
            мечты
          </h1>
          <span>
            HR в кармане - это веб-платформа, которая позволяет соискателю создавать задания на
            поиск работы с оплатой за приглашения. Вам останется лишь ходить на интервью.
          </span>
          <fieldset className="landingContainer__form">
            <div>
              <input
                className="landingItem__form"
                name="vocation"
                type="vocation"
                placeholder="Желаемая специальность"
                required
              />
              <input
                className="landingItem__form"
                name="link-to-resume"
                type="link-to-resume"
                placeholder="Ссылка на резюме"
                required
              />
            </div>
          </fieldset>
          <button className="btn btn-danger header-btn" onClick={toForm}>
            Создать задание
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingHeader;
