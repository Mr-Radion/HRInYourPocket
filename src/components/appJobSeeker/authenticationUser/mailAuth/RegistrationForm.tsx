import React from 'react';
// import { Link, Redirect } from 'react-router-dom';

import { required } from '../../../../utils/validators/validators';
import { isLettersBigOrSmall } from '../../../../utils/validators/validators';
import { minLength8 } from '../../../../utils/validators/validators';
import { oneDigit } from '../../../../utils/validators/validators';
import { checkinEmail } from '../../../../utils/validators/validators';
import { ButtonContainer } from '../../ui/Button';
import { ReactComponent as EyesClosed } from '../../../../static/appJobSeeker/mailAuth/eyes_closed.svg';
import { ReactComponent as EyesOpened } from '../../../../static/appJobSeeker/mailAuth/eyes_opened.svg';

const validationTooltipList: any = [
  'Поле не должно быть пустым',
  'Пароль должен содержать одну заглавную или маленькую латинскую букву',
  'Пароль должен содержать минимум одну цифру',
  'Ваш пароль должен содержать не менее 8 символов',
  'Неверно введен e-mail',
];

type RegistrationFormProps = {
  onClickRegister: any;
};

type RegistrationFormState = {
  value: string;
  name: string;
};

function RegistrationForm({ onClickRegister }: RegistrationFormProps) {
  const [visibleEyes, setVisibleEyes] = React.useState(false);
  const [getFirstName, setFirstName] = React.useState('');
  const [getEmail, setEmail] = React.useState('');
  const [getPassword, setPassword] = React.useState('');
  const [getPasswordErrors, setPasswordErrors] = React.useState('');
  const [getEmailErrors, setEmailErrors] = React.useState('');
  const [getPasswordValid, setPasswordValid] = React.useState(false);
  const [getEmailValid, setEmailValid] = React.useState(false);

  const toggleVisibleEyes = () => {
    setVisibleEyes(!visibleEyes);
  };

  const handleInput = (e: any) => {
    const { name, value }: RegistrationFormState = e.target;
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
    inputValidateField(name, value);
  };

  const inputValidateField = (fieldName: any, value: any) => {
    switch (fieldName) {
      case 'first-name':
        break;
      case 'email':
        // setEmailValid(false);
        let email = checkinEmail(value) === 'Field is valid';
        email ? setEmailErrors('') : setEmailErrors(validationTooltipList[4]);
        // setEmailValid(true);
        break;
      case 'password':
        setPasswordValid(false);
        switch (true) {
          case required(value) === undefined:
            setPasswordErrors(validationTooltipList[0]);
            break;
          case isLettersBigOrSmall(value) === undefined:
            setPasswordErrors(validationTooltipList[1]);
            break;
          case oneDigit(value) === undefined:
            setPasswordErrors(validationTooltipList[2]);
            break;
          case minLength8(value) === undefined:
            setPasswordErrors(validationTooltipList[3]);
            break;
          default:
            setPasswordErrors('');
            setPasswordValid(true);
            break;
        }
        break;
      default:
        break;
    }
  };

  return (
    <form className="formContainerItem__form">
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
          // className={passwordErrorStyle}
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
      <div className="validation-message">{getPasswordErrors}</div>

      <ButtonContainer className="btn-registry" type="submit" onClick={() => onClickRegister}>
        Зарегистрироваться
      </ButtonContainer>

      <div className="c-privacy-agreement">
        <span>Нажимая на кнопку, Вы соглашаетесь с политикой конфиденциальности</span>
      </div>
    </form>
  );
}

export default RegistrationForm;
