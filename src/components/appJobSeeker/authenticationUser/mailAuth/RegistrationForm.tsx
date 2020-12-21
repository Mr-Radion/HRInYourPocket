import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { ButtonContainer } from '../../general/Button';
import { ReactComponent as EyesClosed } from '../../../../static/appJobSeeker/mailAuth/eyes_closed.svg';
import { ReactComponent as EyesOpened } from '../../../../static/appJobSeeker/mailAuth/eyes_opened.svg';

const validationTooltipList = [
  'Ваш пароль должен содержать не менее 8 символов',
  'Пароль должен содержать одну заглавную или маленькую латинскую букву',
  'Пароль должен содержать минимум одну цифру',
];

type RegistrationFormProps = {
  onClickRegister: any;
};

function RegistrationForm({ onClickRegister }: RegistrationFormProps) {
  // const [visibleModal, setVisibleModal] = React.useState(false);
  const [visibleEyes, setVisibleEyes] = React.useState(false);
  const [getFirstName, setFirstName] = React.useState('');
  const [getEmail, setEmail] = React.useState('');
  const [getPassword, setPassword] = React.useState('');

  const toggleVisibleEyes = () => {
    setVisibleEyes(!visibleEyes);
  };

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case 'first-name':
        setFirstName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  // console.log(getFirstName, getEmail, getPassword);

  // const closeModal = () => {
  //   setVisibleModal(false);
  // };

  // const registerUser = () => {
  //   setVisibleModal(true);
  // };

  return (
    <fieldset className="formContainerItem__form">
      <div>
        <label>Имя</label>
        <input
          // className={formErrorStyle.email}
          name="first-name"
          type="text"
          placeholder="Введите ваше имя"
          value={getFirstName}
          onChange={handleInput}
          required
        />
      </div>
      <div>
        <label>E-mail</label>
        <input
          // className={formErrorStyle.email}
          name="email"
          type="email"
          placeholder="Введите электронную почту"
          value={getEmail}
          onChange={handleInput}
          required
        />
      </div>

      <div className="form-password">
        <label>Пароль</label>
        <input
          id="password"
          // className={formErrorStyle.password.inputStatus}
          name="password"
          type={visibleEyes ? 'text' : 'password'}
          placeholder="Придумайте пароль"
          onChange={handleInput}
          value={getPassword}
          autoComplete="current-password"
          required
        />
        <button className="btn-show_visible" onClick={toggleVisibleEyes}>
          {visibleEyes ? <EyesOpened /> : <EyesClosed />}
        </button>
      </div>

      {/* <ul className="c-validation-message">
            <li className={'validation-message__text ' + formErrorStyle.password.messageStatus1}>
              Ваш пароль должен содержать не менее 8 символов
            </li>
            <li className={'validation-message__text ' + formErrorStyle.password.messageStatus2}>
              Пароль должен содержать минимум одну заглавную букву
            </li>
            <li className={'validation-message__text ' + formErrorStyle.password.messageStatus3}>
              Пароль должен содержать минимум одну цифру
            </li>
          </ul> */}

      {/* <div className="c-validation-message">
        <ul>
          <li
            className={activeCategory === null ? 'active' : ''}
            onClick={() => onClickCategory(null)}>
            Все
          </li>
          {validationTooltipList &&
            validationTooltipList.map((name, index) => (
              <li
                className={activeCategory === index ? 'active' : ''}
                onClick={() => onClickCategory(index)}
                key={`${name}_${index}`}>
                {name}
              </li>
            ))}
        </ul>
      </div> */}

      <ButtonContainer className="btn-registry" type="submit" onClick={() => onClickRegister}>
        Зарегистрироваться
      </ButtonContainer>

      <div className="c-privacy-agreement">
        <span>Нажимая на кнопку, Вы соглашаетесь с политикой конфиденциальности</span>
      </div>
    </fieldset>
  );
}

export default RegistrationForm;
