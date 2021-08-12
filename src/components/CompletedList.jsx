import React from "react";

function CompletedList({ item }) {
  return (
    <>
      {item.completed === true ? (
        <>
          <li key={item.id} className='shoppingList'>
            <input type='checkbox' checked />
            <p className='md:flex-1 line-through text-left'>
              {item.Name}
            </p>
            <p className='md:flex-1 line-through text-left'>
              {item.Price} kr
            </p>
          </li>
        </>
      ) : null}
    </>
  );
}

export default CompletedList;
