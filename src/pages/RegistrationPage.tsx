import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { registration } from '../redux/actions/currentUser';
import RegistrationModal from '../components/appJobSeeker/authenticationUser/mailAuth/RegistrationModal';
import RegistrationForm from '../components/appJobSeeker/authenticationUser/mailAuth/RegistrationForm';
import SocialNetworkForm from '../components/appJobSeeker/authenticationUser/socialNetworksAuth';

function RegistrationPage({ history }: any) {
  const dispatch = useDispatch();
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [hasRegistred, seRegistred] = React.useState<boolean>(false);

  // React.useEffect(() => {
  //   dispatch(auth(email, password));
  // }, []);

  const closeModal = () => {
    setVisibleModal(false);
    seRegistred(true);
    if (hasRegistred) {
      history.push('/auth');
    }
  };

  const registerUser = (email: string, password: string, firstName?: string) => {
    let data = { email, password, firstName };
    // console.log(data);
    dispatch(registration(data));
    setVisibleModal(true);
  };

  // if (hasRegistred) return <Redirect from="/register" to="/auth" />;
  return (
    <div className="container-form">
      <div className="formWrapper">
        <div className="formWrapperItem__titleContainer">
          <h2 className="titleContainerItem__title">Регистрация</h2>
        </div>
        <div className="formContainerItem__message">Через соцсети</div>
        <SocialNetworkForm />
        <div className="form-or">Или E-mail</div>
        <RegistrationForm onClickAuth={registerUser} />
        <div className="c-registration__link">
          <span>У вас уже есть аккаунт?</span>
          <Link className="registration__link" to="/auth">
            Войти
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
