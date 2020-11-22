import React from 'react';

function FormFeedback() {
  const refLink = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    console.log(refLink.current?.offsetTop);
  }, []);

  return (
    <div ref={refLink} className="feedbackWrapper">
      <h2 className="formFeedback-title">Связаться с нами</h2>
      <fieldset className="formFeedback">
        <ul className="formFeedback-outer">
          <li>
            <input className="formFeedback-item" type="text" placeholder="Имя" />
          </li>
          <li>
            <input
              className="formFeedback-item"
              type="email"
              placeholder="Адрес электронной почты"
            />
          </li>
          <li>
            <input className="formFeedback-item" type="text" placeholder="Номер телефона" />
          </li>
          <li>
            <textarea className="formFeedback-item textarrea-item" placeholder="Сообщение" />
          </li>
          <li>
            <button className="send-btn btn--yellow">Отправить</button>
          </li>
        </ul>
      </fieldset>
    </div>
  );
}

export default FormFeedback;
