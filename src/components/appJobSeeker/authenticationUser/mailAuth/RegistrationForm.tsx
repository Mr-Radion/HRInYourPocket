import React from 'react';
import classNames from 'classnames';
// import { Link, Redirect } from 'react-router-dom';

import { required } from '../../../../utils/validators/validators';
import { isLettersBigOrSmall } from '../../../../utils/validators/validators';
import { minLength8 } from '../../../../utils/validators/validators';
import { oneDigit } from '../../../../utils/validators/validators';
import { checkinEmail } from '../../../../utils/validators/validators';
import { validationTooltipList } from '../../../../utils/validators/validators';
import { ButtonContainer } from '../../ui/Button';
import { ReactComponent as EyesClosed } from '../../../../static/appJobSeeker/mailAuth/eyes_closed.svg';
import { ReactComponent as EyesOpened } from '../../../../static/appJobSeeker/mailAuth/eyes_opened.svg';

type RegistrationFormProps = {
  onClickRegister: any;
};

type RegistrationFormState = {
  value: string;
  name: string;
};

function RegistrationForm({ onClickRegister }: RegistrationFormProps) {
  const [visibleEyes, setVisibleEyes] = React.useState<boolean>(false);
  const [getFirstName, setFirstName] = React.useState<string>('');
  const [getEmail, setEmail] = React.useState<string>('');
  const [getPassword, setPassword] = React.useState<string>('');
  const [getPasswordErrors, setPasswordErrors] = React.useState<string>('');
  const [getPasswordErrorStyle, setPasswordErrorStyle] = React.useState<string>('');
  const [getEmailErrors, setEmailErrors] = React.useState<string>('');
  const [getEmailErrorStyles, setEmailErrorStyles] = React.useState<string>('');
  const [getPasswordValid, setPasswordValid] = React.useState<boolean>(false);
  const [getEmailValid, setEmailValid] = React.useState<boolean>(false);
  const [getFormlValid, setFormlValid] = React.useState<boolean>(false);
  const [getConfidentiality, setConfidentiality] = React.useState<boolean>(true);

  React.useEffect(() => {
    const formValid: boolean = getEmailValid && getPasswordValid && getConfidentiality;
    setFormlValid(formValid);
  }, [getEmail, getPassword, getConfidentiality]);

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

  const confidentialityChange = (e: any) => {
    setConfidentiality(e.target.checked);
  };

  const inputValidateField = (fieldName: any, value: any) => {
    switch (fieldName) {
      case 'first-name':
        break;
      case 'email':
        let email = checkinEmail(value) === 'Field is valid';
        // email ? setEmailErrors('') : setEmailErrors(validationTooltipList[4]);
        email ? setEmailValid(true) : setEmailValid(false);
        break;
      case 'password':
        setPasswordValid(false);
        switch (true) {
          case required(value) === undefined:
            setPasswordErrors(validationTooltipList[0]);
            setPasswordErrorStyle('');
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
    <fieldset className="formContainerItem__form">
      <div className="wrapper-form__input">
        <label>Имя</label>
        <input
          className={classNames('input--basic')}
          name="first-name"
          type="text"
          placeholder="Введите ваше имя"
          value={getFirstName}
          onChange={handleInput}
          required
        />
      </div>
      <div className="wrapper-form__input">
        <label>E-mail</label>
        <input
          className={classNames('input--basic', getEmailErrorStyles)}
          name="email"
          type="email"
          placeholder="Введите электронную почту"
          value={getEmail}
          onChange={handleInput}
          required
        />
      </div>

      <div className="wrapper-form__input form-password">
        <label>Пароль</label>
        <input
          id="password"
          className={classNames('input--basic', getPasswordErrorStyle, {
            'encrypted--characters': !visibleEyes,
          })}
          name="password"
          type={visibleEyes ? 'text' : 'password'}
          placeholder="Придумайте пароль"
          onChange={handleInput}
          value={getPassword}
          autoComplete="current-password"
          required
        />
        <button className="button-eye btn-show_visible" onClick={toggleVisibleEyes}>
          {visibleEyes ? <EyesOpened /> : <EyesClosed />}
        </button>
      </div>
      <div className="validation-message">{getPasswordErrors}</div>
      <div
        className={classNames('checkBox__basic', {
          'checkBox--outline': getFormlValid,
        })}>
        <input
          type="checkbox"
          id="privacy-policy"
          name="privacy-policy"
          checked={getConfidentiality}
          onClick={confidentialityChange}
        />
        <label htmlFor="privacy-policy">
          <span>Я согласен с условиями обработки персональных данных</span>
        </label>
      </div>
      <div className="container-btn">
        <ButtonContainer
          className="btn-registry"
          type="submit"
          onClick={(e: any) =>
            getFormlValid ? onClickRegister(getEmail, getPassword) : e.preventDefault()
          }>
          Зарегистрироваться
        </ButtonContainer>
      </div>
    </fieldset>
  );
}

export default RegistrationForm;
