import React from 'react'

function landingTariffs() {
  return (
    <div className="landingTariffsWrapper">
      <h2 className="landingTariffs__title">Тарифы</h2>
      <div className="landingTariffs-invitations">
        <div className="landingTariffs-invitations__item">
          <div className="invitationsService__name">Базовый</div>
          <span className="invitations__motivationToBuy">Хороший повод начать</span>  
          <span className="invitationsService__number">1 приглашение</span>  
          <span className="invitationsService__prace">1500 руб.</span>  
          <button className="buy-btn btn--yellow">Купить</button>
        </div>
        <div className="landingTariffs-invitations__item">
          <div className="invitationsService__name">Средний</div>
          <span className="invitations__motivationToBuy">Набирайте обороты</span>  
          <span className="invitationsService__number">3 приглашения</span>  
          <span className="invitationsService__prace">4500 руб.</span>  
          <button className="buy-btn btn--yellow">Купить</button>
        </div>
        <div className="landingTariffs-invitations__item">
          <div className="invitationsService__name">Эффективный</div>
          <span className="invitations__motivationToBuy">Выбирайте и сравнивайте разные предложения</span>  
          <span className="invitationsService__number">5 приглашений</span>  
          <span className="invitationsService__prace">6000 руб.</span>  
          <button className="buy-btn btn--yellow">Купить</button>
        </div>
        <div className="landingTariffs-invitations__item">
          <div className="invitationsService__name">Профи</div>
          <span className="invitations__motivationToBuy">Обеспечьте гарантию трудоустройтсва</span>  
          <span className="invitationsService__number">10 приглашений</span>  
          <span className="invitationsService__prace">10000 руб.</span>  
          <button className="buy-btn btn--yellow">Купить</button>
        </div>
      </div>
      <div className="landingTariffs-additional">
        <div className="landingTariffs-additional">

        </div>
      </div>
      
    </div>
  )
}

export default landingTariffs
