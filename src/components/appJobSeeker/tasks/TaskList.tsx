import React from 'react';
import TaskItem from './TaskItem';

function TaskList(props: any) {
  const { task } = props;

  return (
    <div>
      Список заданий
      <TaskItem id={task.id} />
    </div>
  );
}

export default TaskList;
