import React from 'react';
import { ReactComponent as CaIcon } from '../../static/landingJobSeeker/howItWorks/create-an-account-icon.svg';
import { ReactComponent as IaIcon } from '../../static/landingJobSeeker/howItWorks/information-about.svg';
import { ReactComponent as PjIcon } from '../../static/landingJobSeeker/howItWorks/post-a-job.svg';
import { ReactComponent as InIcon } from '../../static/landingJobSeeker/howItWorks/interviews.svg';
import { ReactComponent as LineDown } from '../../static/landingJobSeeker/howItWorks/line-down.svg';
import { ReactComponent as LineUp } from '../../static/landingJobSeeker/howItWorks/line-up.svg';

function LandingHowItWorks() {
  return (
    <div className="landingHowItWorksWrapper">
      <h2 className="landingHowItWorksWrapper-title">Как это работает</h2>
      <div className="landingHowItWorksWrapper-list">
        <div className="landingHowItWorksWrapper-listItem">
          <CaIcon />
          <div className="landingListItem-textBlock">
            <h4 className="landingListItem-textBlock__title">Создайте аккаунт</h4>
            <div className="landingListItem-textBlock__content">
              Сначала вам надо создать аккаунт на платформе
            </div>
          </div>
        </div>
        <div className="landingHowItWorksWrapper-listItem">
          <LineDown />
        </div>
        <div className="landingHowItWorksWrapper-listItem">
          <IaIcon />
          <div className="landingListItem-textBlock">
            <h4 className="landingListItem-textBlock__title">Добавьте о себе информацию</h4>
            <div className="landingListItem-textBlock__content">
              Загрузите вашу ссылку на резюме и вставьте сопроводительное письмо на платформу, либо
              закажите их у нас
            </div>
          </div>
        </div>
        <div className="landingHowItWorksWrapper-listItem">
          <LineUp />
        </div>
        <div className="landingHowItWorksWrapper-listItem">
          <PjIcon />
          <div className="landingListItem-textBlock">
            <h4 className="landingListItem-textBlock__title">Разместите задание</h4>
            <div className="landingListItem-textBlock__content">
              Заполните оставшиеся поля и разместите задание
            </div>
          </div>
        </div>
        <div className="landingHowItWorksWrapper-listItem">
          <LineDown />
        </div>
        <div className="landingHowItWorksWrapper-listItem">
          <InIcon />
          <div className="landingListItem-textBlock">
            <h4 className="landingListItem-textBlock__title">Ходите на интервью</h4>
            <div className="landingListItem-textBlock__content">
              После того, как ваше задание будет выполнено, вам останется только ходить на интервью
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingHowItWorks;
