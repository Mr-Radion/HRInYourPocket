import React from 'react';
import { ReactComponent as FormVK } from "../../../../static/appJobSeeker/socialNetworksAuth/form_vk.svg";
import { ReactComponent as FormFB } from "../../../../static/appJobSeeker/socialNetworksAuth/form_fb.svg";
import { ReactComponent as FormG } from "../../../../static/appJobSeeker/socialNetworksAuth/form_google.svg";

function socialNetworksForm() {
  return (
    <div className="formContainerItem__icons">
      <div className="container__icons">
        <a className="socials-icon" href="https://vk.com/">
          <FormVK />
        </a>
        <a className="socials-icon" href="https://www.google.com/">
          <FormG />
        </a>
        <a className="socials-icon" href="https://ru-ru.facebook.com/">
          <FormFB />
        </a>
      </div>
    </div>
  );
}

export default socialNetworksForm;
