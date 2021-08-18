import React from "react";

// Cards are "bigger" buttons. In this case the todo list item is is that an item. In fact the li tag shows that is a "list item"
// Can use export default function to avoid wasting one line of code at the end
function AquiredItemCard({ item, setItems, items }) {
  const checkBoxHandler = () => {
    setItems(
      items.map((completedItem) => {
        if (completedItem.id === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return completedItem;
      })
    );
  };

  return (
    <>
      {item.completed === false ? (
        <li key={item.id} className='shoppingList'>
          <input className='' type='checkbox' onClick={checkBoxHandler} />
          <span className='md:flex-1 text-left '>{item.Name}</span>
          <span className='md:flex-1 text-left '>{item.Price} kr</span>
        </li>
      ) : null}
    </>
  );
}

export default AquiredItemCard;
