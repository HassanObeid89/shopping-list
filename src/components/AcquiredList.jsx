import React from "react";

function AcquiredList({ item, setItems, items }) {
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
          <span className='md:flex-1 text-left '>
            {item.itemName}
          </span>
          <span className='md:flex-1 text-left '>
            {item.itemPrice} kr
          </span>
        </li>
      ) : null}
    </>
  );
}

export default AcquiredList;
