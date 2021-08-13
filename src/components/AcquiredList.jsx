import React from "react";

import AquiredItemCard from "./AquiredItemCard";

function AcquiredList({ aquiredItems, setItems, items }) {
  return (
    <>
      <h1 className='flex justify-center font-bold mt-10'>Aquired Items</h1>
      {aquiredItems.length > 0 ? (
        <div className='listContainer'>
          <ul className='ulStyle bg-blue-light rounded-lg text-white'>
            {items.map((item) => (
              <AquiredItemCard
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
            No completed items yet!
          </span>
        </div>
      )}
    </>

    //   {item.completed === false ? (
    //     <>
    //     <li key={item.id} className='shoppingList'>
    //       <input className='' type='checkbox' onClick={checkBoxHandler} />
    //       <span className='md:flex-1 text-left '>
    //         {item.Name}
    //       </span>
    //       <span className='md:flex-1 text-left '>
    //         {item.Price} kr
    //       </span>
    //     </li>
    //     </>
    //   ) : null}
    // </>
  );
}

export default AcquiredList;
