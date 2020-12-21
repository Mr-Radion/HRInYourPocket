import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import RegistrationModal from './RegistrationModal';
import { ButtonContainer } from '../../general/Button';
// import { ReactComponent as FormVK } from "../../../assets/Images/forms/form_vk.svg";
// import { ReactComponent as FormFB } from "../../../assets/Images/forms/form_fb.svg";
// import { ReactComponent as FormG } from "../../../assets/Images/forms/form_g.svg";
// import { ReactComponent as FormIns } from "../../../assets/Images/forms/form_ins.svg";
// import { ReactComponent as EyeClosed } from "../../../assets/Images/forms/eye_closed.svg";
// import { ReactComponent as EyeOpen } from "../../../assets/Images/forms/eye_open.svg";
// import "./UserFormStyle.sass";

function RegistrationForm() {
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const closePopup = () => {
    setVisiblePopup(false);
  };

  const registerUser = () => {
    setVisiblePopup(true);
  };

  return (
    <div className="container-form">
      <div className="formWrapper">
        <fieldset className="formContainerItem__form">
          <div>
            <label>E-mail</label>
            <input
              // className={formErrorStyle.email}
              name="email"
              type="email"
              placeholder="Введите электронную почту"
              // value={email}
              // onChange={this.handleInput}
              required
            />
          </div>

          <div className="form-password">
            <label>Пароль</label>
            <input
              id="password"
              // className={formErrorStyle.password.inputStatus}
              name="password"
              // type={openEye ? 'text' : 'password'}
              placeholder="Придумайте пароль"
              // onChange={handleInput}
              // value={password}
              autoComplete="current-password"
              required
            />
            {/* <button
              className="btn-show_closed"
              onClick={() => this.setState({ openEye: !openEye })}>
              {openEye ? <EyeOpen /> : <EyeClosed />}
            </button> */}
          </div>

          {/* <ul className="c-validation-message">
            <li className={'validation-message__text ' + formErrorStyle.password.messageStatus1}>
              Ваш пароль должен быть от 8 символов длиной
            </li>
            <li className={'validation-message__text ' + formErrorStyle.password.messageStatus2}>
              Пароль должен содержать минимум одну заглавную букву
            </li>
            <li className={'validation-message__text ' + formErrorStyle.password.messageStatus3}>
              Пароль должен содержать минимум одну цифру
            </li>
          </ul> */}

          <ButtonContainer className="btn-registry" type="submit" onClick={registerUser}>
            Зарегистрироваться
          </ButtonContainer>

          <div className="c-privacy-agreement">
            <span>Нажимая на кнопку, Вы соглашаетесь с политикой конфиденциальности</span>
          </div>
        </fieldset>
        {/* Change messages in modal window according to server response */}
        <RegistrationModal
          // title="registration successful"
          modalOpened={visiblePopup}
          onCancel={closePopup}>
          <h1>Поздравляем!</h1>
          <p>
            Вы почти зарегистрированы в memory-lane!
            <br />
            На почту отправлено письмо для подтверждения e-mail
          </p>
        </RegistrationModal>
      </div>
    </div>
  );
}

export default RegistrationForm;
