import React, {useState} from "react";

function NewTaskForm({categoryProp, onTaskFormSubmit}) {
//creating option elements for each categories
const displayCategories = categoryProp.map((eachCategory) => {
  return(
  <option key={eachCategory}>{eachCategory}</option>)
})
//console.log(displayCategories)

//controlled component where all form inputs are captured in state within this component
const [text, setText] = useState("")
const [category, setCategory] = useState("All")

//sets the state based on selection/text
function handleSetText(event){
  setText(event.target.value)
}
function handleSetCategory(event){
  setCategory(event.target.value)
}

//function to 
function handleSubmit(e) {
  e.preventDefault();
  onTaskFormSubmit({ text, category }); //object of the task and category gets added to current state of tasks
  setText("");
  setCategory("All");
}

  return (
    //add onSubmit event listener set equal to callback function handleSubmit
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={text} onChange={handleSetText}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleSetCategory}>
          {/* render <option> elements for each category here */}
          {displayCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
