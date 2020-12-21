import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import RegistrationForm from '../components/appJobSeeker/authenticationUser/mailAuth/RegistrationForm';
import SocialNetworkForm from '../components/appJobSeeker/authenticationUser/socialNetworksAuth';

function RegistrationPage() {
  return (
    <div className="container-form">
      <div className="formWrapper">
        <div className="formWrapperItem__titleContainer">
          <h2 className="titleContainerItem__title">Регистрация</h2>
        </div>
        <SocialNetworkForm />
        <div className="form-or">Или E-mail</div>
        <RegistrationForm />
        <div className="c-registration__link">
          <Link className="registration__link" to="/auth">
            Войти в систему
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
