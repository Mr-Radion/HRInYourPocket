import React from 'react';

function LandingBlockCreateTask() {
  const toForm = (e: any) => {
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="landingBlockCreateTask">
      <h2 className="landingBlockCreateTask__title">Устройся на работу мечты</h2>
      <div className="createTaskWrapper-btn">
        <button className="createTask-btn btn--brown color--white" onClick={toForm}>
          Создать задание
        </button>
      </div>
    </div>
  );
}

export default LandingBlockCreateTask;
