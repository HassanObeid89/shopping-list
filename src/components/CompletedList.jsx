import React from "react";
import CompletedItemCard from "./CompletedItemCard";

function CompletedList({ completedItems }) {
  return (
    <>
      <h1 className='flex justify-center font-bold mt-10'>Completed Items</h1>
      {completedItems.length > 0 ? (
        <div className='listContainer'>
          <ul className='ulStyle bg-blue-light rounded-lg text-white'>
            {/* Put the map as a component as show in the example above */}
            {completedItems.map((item) => (
              <CompletedItemCard item={item} key={item.id} />
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
  );
}

export default CompletedList;
