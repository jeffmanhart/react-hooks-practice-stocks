import React, { useState } from "react";

function SearchBar({onFilterChage, onSortBy}) {
  

  function handleFilterChange(e){
    onFilterChage(e)
  }

  function handleRadioButtonChange(e){
    onSortBy(e.target.value)
    //setSort(e.target.value)
  }

  // function isChecked(e){
  //   if(sort===e.target.value) {
  //     return true
  //   }
  // }
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio" 
          value="Alphabetically"
          name="sort"
          //checked={(e)=> sort===e.target.value ?true :false }
          onChange={handleRadioButtonChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          //checked={isChecked}
          onChange={handleRadioButtonChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
