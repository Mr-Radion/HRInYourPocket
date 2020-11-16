import React from 'react';

function FormFeedback() {
  return (
    <div className="feedbackWrapper">
      <fieldset className="formFeedback">
        <h2 className="formFeedback-title">Связаться с нами</h2>
        <input className="formFeedback-item" type="text" placeholder="Имя"/>
        <input className="formFeedback-item" type="email" placeholder="Адрес электронной почты"/>
        <input className="formFeedback-item" type="text" placeholder="Номер телефона"/>
        <textarea className="formFeedback-item textarrea-item" placeholder="Сообщение"/>
        <button className="send-btn btn--yellow mt--32">Отправить</button>
      </fieldset>
    </div>
  );
}

export default FormFeedback;
