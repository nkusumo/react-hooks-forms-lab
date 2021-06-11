import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [submittedItems, setSubmittedItems] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(newItem) {
    const itemsArray = [...submittedItems, newItem];
    setSubmittedItems(itemsArray);
  }

  const itemsToDisplay = submittedItems.filter((item) => {
    if (search === "") {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    } else {
      return item.name.toLowerCase().indexOf(search.toLowerCase())>=0
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
