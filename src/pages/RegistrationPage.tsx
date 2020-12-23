import React from 'react';
import { Link } from 'react-router-dom';

import RegistrationModal from '../components/appJobSeeker/authenticationUser/mailAuth/RegistrationModal';
import RegistrationForm from '../components/appJobSeeker/authenticationUser/mailAuth/RegistrationForm';
import SocialNetworkForm from '../components/appJobSeeker/authenticationUser/socialNetworksAuth';

function RegistrationPage() {
  const [visibleModal, setVisibleModal] = React.useState(false);

  const closeModal = () => {
    setVisibleModal(false);
  };
  
  const registerUser = () => {
    setVisibleModal(true);
  };

  return (
    <div className="container-form">
      <div className="formWrapper">
        <div className="formWrapperItem__titleContainer">
          <h2 className="titleContainerItem__title">Регистрация</h2>
        </div>
        <div className="formContainerItem__message">Присоединиться через соц. сети</div>
        <SocialNetworkForm />
        <div className="form-or">Или E-mail</div>
        <RegistrationForm onClickRegister={registerUser} />
        <div className="c-registration__link">
          <Link className="registration__link" to="/auth">
            Войти в систему
          </Link>
        </div>
        {/* Change messages in modal window according to server response */}
        <RegistrationModal
          // title="registration successful"
          modalOpened={visibleModal}
          onCancel={closeModal}>
          <h1>Поздравляем!</h1>
          <p>
            Вы почти зарегистрированы в myjob!
            <br />
            На почту отправлено письмо для подтверждения e-mail
          </p>
        </RegistrationModal>
      </div>
    </div>
  );
}

export default RegistrationPage;
