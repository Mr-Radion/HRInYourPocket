import React from 'react';
import classNames from 'classnames';

import { ButtonContainer } from '../../ui/Button';
import { ReactComponent as EyesClosed } from '../../../../static/appJobSeeker/mailAuth/eyes_closed.svg';
import { ReactComponent as EyesOpened } from '../../../../static/appJobSeeker/mailAuth/eyes_opened.svg';

type AuthorizationFormProps = {
  onClickAuth: any;
};

type AuthorizationFormState = {
  value: string;
  name: string;
};

function AuthorizationForm({ onClickAuth }: AuthorizationFormProps) {
  const [visibleEyes, setVisibleEyes] = React.useState<boolean>(false);
  const [getEmail, setEmail] = React.useState<string>('');
  const [getPassword, setPassword] = React.useState<string>('');

  const toggleVisibleEyes = () => {
    setVisibleEyes(!visibleEyes);
  };

  const handleInput = (e: any) => {
    const { name, value }: AuthorizationFormState = e.target;
    switch (name) {
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

  return (
    <fieldset className="formContainerItem__form">
      <div className="wrapper-form__input">
        <label>E-mail</label>
        <input
          className={classNames('input--basic')}
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
          className={classNames('input--basic', {
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
      {/* <div className="validation-message">{getPasswordErrors}</div> */}
      <div className="container-btn">
        <ButtonContainer
          className="btn-registry"
          type="submit"
          onClick={() => onClickAuth(getEmail, getPassword)}>
          Зарегистрироваться
        </ButtonContainer>
      </div>
    </fieldset>
  );
}

export default AuthorizationForm;
