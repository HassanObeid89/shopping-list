import React from "react";

  
function CreateItem({
  handleSubmit,
  setItemName,
  itemName,
  setItemPrice,
  itemPrice,
  items,
})





{

  
  return (
    <>
      <form
        className='flex flex-col md:flex-row justify-center md:space-x-4 mt-8'
        onSubmit={handleSubmit}>
        <input
          className='input'
          required
          type='text'
          placeholder='Item name'
          onChange={(e) => setItemName(e.target.value)}
          value={itemName}
        />
        <input
          className='input'
          required
          type='number'
          min='1'
          step='0.01'
          placeholder='Price'
          onChange={(e) => setItemPrice(e.target.value)}
          value={itemPrice}
        />
        <button className='btn btn-blue'>Add item</button>
      </form>
      
    </>
  );
}

export default CreateItem;
