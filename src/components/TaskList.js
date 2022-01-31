import React from "react";
import Task from "./Task";

//takes the list of currentTasks stored in the parent component and assigned them each a key, task name
//and category and then gets sent to Task component as a prop. Also takes in the prop of the
//function handleDeleteTask. This function gets set to onDeleteTask and passed as a prop to Task component
function TaskList({currentTasks, onDeleteTask}) {
  const taskList = currentTasks.map((task)=> (
    <Task
    key={task.text}
    task={task.text}
    category={task.category}
    onDeleteTask={onDeleteTask}
    />

  ))

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    {taskList}
    </div>
  );
}

export default TaskList;
