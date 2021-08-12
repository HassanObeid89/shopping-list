import React, { useState } from "react";

import CreateItem from "./CreateItem";
import AcquiredList from "./AcquiredList";
import clipart from "../assets/clipart.png";

function WelcomeScreen({ items, setShow, show, submitForm, setItems, item }) {
  const [sortByName, setSortByName] = useState(false);
  const [sortByPrice, setSortByPrice] = useState(false);

  const handleSortByName = () => {
    items.sort((a, b) => {
      if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
        return -1;
      } else if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
    setSortByName(!sortByName);
    //setSortByName(false);
  };

  const handleSortByPrice = () => {
    setSortByPrice(!sortByPrice);

    items.sort((a, b) => {
      return a.Price - b.Price;
    });
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <img src={clipart} alt='' className='mx-auto h-20 w-auto ' />
      <h1 className='title'>Shopping List</h1>
      {show === false && items.length === 0 ? (
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
      ) : null}

      {show || items.length > 0 ? (
        <>
          <div>
            <CreateItem
              submitForm={submitForm}
              items={items}
              setItems={setItems}
            />
          </div>
          <div className='flex justify-center mt-8'>
            <button className={"btn "} onClick={handleSortByName}>
              Sort by name
            </button>
            <button className={"btn "} onClick={handleSortByPrice}>
              Sort by price
            </button>
          </div>

          <div className='listContainer'>
            <ul className='ulStyle'>
              {items.map((item) => (
                <AcquiredList
                  setItems={setItems}
                  items={items}
                  item={item}
                  key={item.id}
                />
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </>
  );
}

export default WelcomeScreen;
