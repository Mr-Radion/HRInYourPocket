import React from 'react';
import { Link } from 'react-router-dom';

function TaskItem(props: any) {
  const id = props.match.params.id;
  const taskLink = (
    <Link
      to={{
        pathname: '/my-tasks/' + id,
        // props: {
        //   url: url,
        //   id: props.match.params.id,
        //   name: name,
        //   author: author,
        //   date: date,
        //   tags: tags,
        // },
      }}>
      Задача
    </Link>
  );

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <div>
      <button onClick={goBack}>Назад</button>
      {taskLink}
    </div>
  );
}

export default TaskItem;
