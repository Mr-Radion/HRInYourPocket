import React from 'react';
import classNames from 'classnames';

import {
  required,
  isLettersBigOrSmall,
  minLength8,
  oneDigit,
  checkinEmail,
  validationTooltipList,
} from '../../../../utils/validators/validators';
import { ButtonContainer } from '../../ui/Button';
import { ReactComponent as EyesClosed } from '../../../../static/appJobSeeker/mailAuth/eyes_closed.svg';
import { ReactComponent as EyesOpened } from '../../../../static/appJobSeeker/mailAuth/eyes_opened.svg';
import { AuthProps, AuthState } from '../../../../types';

function RegistrationForm({ onClickAuth }: AuthProps) {
  const [visibleEyes, setVisibleEyes] = React.useState<boolean>(false);
  const [getFirstName, setFirstName] = React.useState<string>('');
  const [getEmail, setEmail] = React.useState<string>('');
  const [getPassword, setPassword] = React.useState<string>('');
  const [getPasswordErrors, setPasswordErrors] = React.useState<string>('');
  const [getPasswordErrorStyle, setPasswordErrorStyle] = React.useState<string>('');
  // const [getEmailErrors, setEmailErrors] = React.useState<string>('');
  const [getEmailErrorStyles, setEmailErrorStyles] = React.useState<string>('');
  const [getPasswordValid, setPasswordValid] = React.useState<boolean>(false);
  const [getEmailValid, setEmailValid] = React.useState<boolean>(false);
  const [getFormlValid, setFormlValid] = React.useState<boolean>(false);
  const [getConfidentiality, setConfidentiality] = React.useState<boolean>(true);
  const [getShowTips, setShowTips] = React.useState<boolean>(false);

  React.useEffect(() => {
    const formValid: boolean = getEmailValid && getPasswordValid && getConfidentiality;
    setFormlValid(formValid);
  }, [getEmail, getPassword, getConfidentiality, getEmailValid, getPasswordValid]);

  const toggleVisibleEyes = () => {
    setVisibleEyes(!visibleEyes);
  };

  const handleInput = (e: any) => {
    const { name, value }: AuthState = e.target;
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

  const confidentialityChange = () => {
    setConfidentiality(!getConfidentiality);
  };

  const inputValidateField = (name: string, value: string) => {
    switch (name) {
      case 'first-name':
        break;
      case 'email':
        let email = checkinEmail(value) === 'Field is valid';
        // email ? setEmailErrors('') : setEmailErrors(validationTooltipList[4]);
        email ? setEmailErrorStyles('') : setEmailErrorStyles('border--error');
        email ? setEmailValid(true) : setEmailValid(false);
        break;
      case 'password':
        setPasswordValid(false);
        switch (true) {
          case required(value) === undefined:
            setShowTips(false);
            setPasswordErrors(validationTooltipList[0]);
            setPasswordErrorStyle('border--error');
            break;
          case isLettersBigOrSmall(value) === undefined:
            setShowTips(false);
            setPasswordErrors(validationTooltipList[1]);
            setPasswordErrorStyle('border--error');
            break;
          case oneDigit(value) === undefined:
            setShowTips(false);
            setPasswordErrors(validationTooltipList[2]);
            setPasswordErrorStyle('border--error');
            break;
          case minLength8(value) === undefined:
            setShowTips(false);
            setPasswordErrors(validationTooltipList[3]);
            setPasswordErrorStyle('border--error');
            break;
          default:
            setShowTips(false);
            setPasswordErrors('');
            setPasswordValid(true);
            setPasswordErrorStyle('');
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
          className="input--basic"
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
          className={classNames('input--basic', {
            'border--error': getEmailErrorStyles || (getShowTips && getEmailValid === false),
          })}
          name="email"
          type="email"
          placeholder="Введите электронную почту"
          value={getEmail}
          onChange={handleInput}
          required
        />
      </div>
      <div className="validation-message" style={{ position: 'absolute' }}>
        {!getEmail && getShowTips ? 'Заполните это поле' : ''}
      </div>
      <div className="wrapper-form__input form-password">
        <label>Пароль</label>
        <input
          id="password"
          className={classNames('input--basic', {
            'encrypted--characters': !visibleEyes,
            'border--error': getPasswordErrorStyle || (getShowTips && getPasswordValid === false),
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
      <div className="validation-message">
        {!getPassword && getShowTips ? 'Заполните это поле' : getPasswordErrors}
      </div>
      <div
        className={classNames('checkBox__basic', {
          'checkBox--outline': getFormlValid,
        })}>
        <input
          type="checkbox"
          id="privacy-policy"
          name="privacy-policy"
          // defaultChecked={true}
          checked={getConfidentiality}
          onChange={confidentialityChange}
          // onClick={confidentialityChange}
        />
        <label htmlFor="privacy-policy">
          <span>Я согласен с условиями обработки персональных данных</span>
        </label>
      </div>
      <div className="container-btn">
        <ButtonContainer
          className="btn-registry"
          type="submit"
          onClick={() =>
            getFormlValid ? onClickAuth(getEmail, getPassword, getFirstName) : setShowTips(true)
          }>
          Зарегистрироваться
        </ButtonContainer>
      </div>
    </fieldset>
  );
}

export default RegistrationForm;
