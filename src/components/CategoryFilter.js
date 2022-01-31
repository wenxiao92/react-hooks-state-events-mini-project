import React from "react";

function CategoryFilter({categoryProp, selectedCategory, onSelectCategory}) {
const categoryButtons = categoryProp.map((eachCategory)=>{
  
  //goes through all category matching each one with the selected category (current state from parent
  //component). When changing the category, the class name will equal to selected and the state setter for
  //categories will change based on selected (on click)
  const className = (eachCategory === selectedCategory ? "selected" : null);

  return(
    <button
    key ={eachCategory}
    className={className}
    onClick={() => onSelectCategory(eachCategory)}>
      {eachCategory}
    </button>
  )
})

//console.log(categoryButtons) Test the buttons
  return (
    <div className="categories">
      <h5>Category filters</h5>
      
      {categoryButtons}
      {/* render <button> elements for each category here */}
      
    </div>
  );
}

export default CategoryFilter;
