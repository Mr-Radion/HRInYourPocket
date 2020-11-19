import React from 'react';

function landingTariffs() {
  return (
    <div className="landingTariffsWrapper">
      <h2 className="landingTariffs__title">Тарифы</h2>
      <div className="landingTariffs-invitations">
        <ul className="landingTariffs-invitations__item">
          <li className="invitationsService__name">Базовый</li>
          <li className="invitations__motivationToBuy">Хороший повод начать</li>
          <li className="invitationsService__number">1 приглашение</li>
          <li className="invitationsService__prace">1500 руб.</li>
          <li>
            <button className="buy-btn btn--yellow">Купить</button>
          </li>
        </ul>
        <ul className="landingTariffs-invitations__item">
          <li className="invitationsService__name">Средний</li>
          <li className="invitations__motivationToBuy">Набирайте обороты</li>
          <li className="invitationsService__number">3 приглашения</li>
          <li className="invitationsService__prace">4500 руб.</li>
          <li>
            <button className="buy-btn btn--yellow">Купить</button>
          </li>
        </ul>
        <ul className="landingTariffs-invitations__item">
          <li className="invitationsService__name">Эффективный</li>
          <li className="invitations__motivationToBuy">
            Выбирайте и сравнивайте разные предложения
          </li>
          <li className="invitationsService__number">5 приглашений</li>
          <li className="invitationsService__prace">6000 руб.</li>
          <li><button className="buy-btn btn--yellow">Купить</button></li>
        </ul>
        <ul className="landingTariffs-invitations__item">
          <li className="invitationsService__name">Профи</li>
          <li className="invitations__motivationToBuy">Обеспечьте гарантию трудоустройтсва</li>
          <li className="invitationsService__number">10 приглашений</li>
          <li className="invitationsService__prace">10000 руб.</li>
          <li><button className="buy-btn btn--yellow">Купить</button></li>
        </ul>
      </div>
      <div className="landingTariffs-additional">
        <div className="landingTariffs-additional__item">
          <div className="additionalService__name">
            <span>Составление резюме</span>
          </div>
          <div className="additionalWrapper__service-prace">
            <div className="additionalService__prace">
              <span>2000 руб.</span>
            </div>
            <button className="buy-btn btn--yellow btn--basicRadius">Купить</button>
          </div>
        </div>
        <div className="landingTariffs-additional__item">
          <div className="additionalService__name">
            <span>Написание сопроводительного письма</span>
          </div>
          <div className="additionalWrapper__service-prace">
            <div className="additionalService__prace">
              <span>800 руб.</span>
            </div>
            <button className="buy-btn btn--yellow btn--basicRadius">Купить</button>
          </div>
        </div>
        <div className="landingTariffs-additional__item">
          <div className="additionalService__name">
            <span>Перевод резюме</span>
          </div>
          <div className="additionalWrapper__service-prace">
            <div className="additionalService__prace">
              <span>1500 руб.</span>
            </div>
            <button className="buy-btn btn--yellow btn--basicRadius">Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default landingTariffs;
