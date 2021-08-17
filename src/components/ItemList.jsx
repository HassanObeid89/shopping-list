import React from "react";

import ItemCard from "./ItemCard";

function ItemList({ uncompletedItems, setItems, items }) {
  return (
    <>
      <h1 className='flex justify-center font-bold mt-10'>Active Items</h1>
      {uncompletedItems.length > 0 ? (
        <div className='listContainer'>
          <ul className='ulStyle bg-blue-light rounded-lg text-white'>
            {items.map((item) => (
              <ItemCard
                item={item}
                key={item.id}
                items={items}
                setItems={setItems}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className=' flex justify-center'>
          <span className='ulStyle flex justify-center mt-6 text-gray-700 bg-blue-light rounded-lg text-white '>
            No items yet! Add your first item.
          </span>
        </div>
      )}
    </>
  );
}

export default ItemList;
