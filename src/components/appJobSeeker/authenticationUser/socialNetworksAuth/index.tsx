import React from 'react';

function socialNetworksForm() {
  return (
    <div className="formContainerItem__icons">
      <div className="container__icons">
        <a className="socials-icon" href="https://vk.com/">
          {/* <FormVK /> */}
        </a>
        <a className="socials-icon" href="https://www.instagram.com/">
          {/* <FormIns /> */}
        </a>
        <a className="socials-icon" href="https://ru-ru.facebook.com/">
          {/* <FormFB /> */}
        </a>
        <a className="socials-icon" href="https://www.google.com/">
          {/* <FormG /> */}
        </a>
      </div>
      <div className="formContainerItem__message">Присоединиться через соц. сети</div>
    </div>
  );
}

export default socialNetworksForm;
