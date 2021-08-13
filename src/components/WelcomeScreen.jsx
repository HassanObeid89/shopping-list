import React from "react";

function WelcomeScreen({ setShow, show }) {
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <h1 className='title'>Shopping List</h1>
      <div>
        <div className='mx-auto py-8 px-6 shadow-xl rounded-lg  w-2/5 text-small'>
          <p>Welcome!</p>
          <p>Your shopping list is empty right now.</p>
          <p>
            Click Add item button. Specify the name and the price of the new
            item. Hit Add item. if the task is done Hit the checkbox.
          </p>
        </div>
        <div className='flex justify-center my-8'>
          <button className='btn btn-blue' onClick={handleClick}>
            Add item
          </button>
        </div>
      </div>
    </>
  );
}

export default WelcomeScreen;
