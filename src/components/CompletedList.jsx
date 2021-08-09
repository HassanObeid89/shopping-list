import React from "react";

function CompletedList({ item }) {
  return (
    <>
      {item.completed === true ? (
        <>
          <li key={item.id} className='shoppingList'>
            <input type='checkbox' checked />
            <p className='md:flex-1 line-through text-left'>
              {item.itemName}
            </p>
            <p className='md:flex-1 line-through text-left'>
              {item.itemPrice} kr
            </p>
          </li>
        </>
      ) : null}
    </>
  );
}

export default CompletedList;
