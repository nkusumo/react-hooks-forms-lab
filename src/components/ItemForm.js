import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleItemName(event) {
    setItemName(event.target.value);
  }

  function handleItemCategory(event) {
    setItemCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (itemName.length > 0) {
      const newItem = {
        id: uuid(),
        name: itemName,
        category: itemCategory,
      }; 
      onItemFormSubmit(newItem)
      setItemName("");
      setItemCategory("Produce");
    }
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemName} value={itemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemCategory} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;