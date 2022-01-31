import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  //create task state to manage the initial and future list of task whether added or deleted
  const [tasks, setTasks] = useState(TASKS)

  //create category state to manage all categories as well as future selected category. The changing of the
  //category state is passed as a prop to CategoryFilter component
  const [category, setCategory] = useState("All");

  //filters for all tasks based on the text of task. This is set equal to onDeleteTask and passed as a prop
  //to TaskList component
  function handleDeleteTask(deletedTask){
    setTasks(tasks.filter((task)=>
    task.text !== deletedTask
    ));
  }

  //created to handle the selection of category
  const displayTask = tasks.filter(
    (task)=> category === "All" || task.category === category
  );

  //when submit event handler is submitted, binds a new task to the current state of tasks. This newTask
  //argument is an object with text (the task) and a category that gets added to current tasks list
  function handleAddTask(newTask){
    setTasks([...tasks, newTask])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryProp={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory}/>
      <NewTaskForm categoryProp={CATEGORIES} onTaskFormSubmit={handleAddTask}/>
      {/* replaced tasks with displayTask to display the task associated with the selected category */}
      <TaskList currentTasks={displayTask} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
