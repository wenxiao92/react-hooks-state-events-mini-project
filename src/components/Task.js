import React from "react";

function Task({task, category, onDeleteTask}) {
  //console.log(task)
  //prop from TaskList that handles the deleting of tasks. This function takes in one argument, the task itself
  //To execute the delete, the event listener onClick is used to invoke the function, making sure to include
  //the argument (the task)
  function handleClick(){
    onDeleteTask(task);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
