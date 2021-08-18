import React from "react";

// Code duplication both acquired and completed are the same kind of item -1
function CompletedItemCard({ item }) {
  return (
    <>
      {item.completed === true ? (
        <>
          <li key={item.id} className='shoppingList'>
            <input type='checkbox' checked />
            <span className='md:flex-1 line-through text-left'>
              {item.Name}
            </span>
            <span className='md:flex-1 line-through text-left'>
              {item.Price} kr
            </span>
          </li>
        </>
      ) : null}
    </>
  );
}

export default CompletedItemCard;
