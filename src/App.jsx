import React, { useState, useEffect } from "react";

import CreateItem from "./components/CreateItem";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";

import clipart from "./assets/clipart.png";

const getDataLS = () => {
  const data = localStorage.getItem("items");
  console.log(data);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function App() {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState(getDataLS());

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Header />
      <img src={clipart} alt='' className='mx-auto h-20 w-auto ' />
      {items.length === 0 && show !== true ? (
        <WelcomeScreen
          setItems={setItems}
          items={items}
          setShow={setShow}
          show={show}
        />
      ) : (
        <CreateItem setItems={setItems} items={items} />
      )}
    </>
  );
}

export default App;
