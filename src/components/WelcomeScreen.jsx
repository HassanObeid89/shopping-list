import React, { useState } from "react";
import CreateItem from "./CreateItem";
import AcquiredList from "./AcquiredList";
import uuid from "react-uuid";
import clipart from "../assets/clipart.png";


function WelcomeScreen({ setItems, items, setShow, show }) {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(Number);
  const [sortByName, setSortByName] = useState([]);
  
  const handleSortByName = (() => {
    const sortedByName = items.sort((a, b) => {
      if (a.itemName.toLowerCase() < b.itemName.toLowerCase()) {
        return -1;
      } else if (a.itemName.toLowerCase() > b.itemName.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
      
    });
      setSortByName(sortedByName);
      setSortByName([]);
  })

  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    let item = {
      id: uuid(),
      itemName,
      itemPrice,
      completed: false,
    };
    setItems([...items, item]);
    setItemName("");
    setItemPrice("");
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
              handleSubmit={handleSubmit}
              setItemName={setItemName}
              itemName={itemName}
              setItemPrice={setItemPrice}
              itemPrice={itemPrice}
              items={items}
            />
          </div>
          <button className={"btn btnblue"} onClick={handleSortByName}>
            Sort by name
          </button>
          
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
