import React from 'react';
import { Link } from 'react-router-dom';
import AuthorizationForm from '../components/appJobSeeker/authenticationUser/mailAuth/AuthorizationForm';
import SocialNetworkForm from '../components/appJobSeeker/authenticationUser/socialNetworksAuth';

function AuthorizationPage() {
  const authUser = () => {};

  return (
    <div className="container-form">
      <div className="formWrapper">
        <div className="formWrapperItem__titleContainer">
          <h2 className="titleContainerItem__title">Войти</h2>
        </div>
        <div className="formContainerItem__message">Войти через соцсети</div>
        <SocialNetworkForm />
        <div className="form-or">Или E-mail</div>
        <AuthorizationForm onClickAuth={authUser} />
        <div className="c-registration__link">
          <span>Новый пользователь?</span>
          <Link className="registration__link" to="/register">
            Зарегистрируйтесь
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthorizationPage;
