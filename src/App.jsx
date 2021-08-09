import React, { useState, useEffect } from "react";

import CompletedList from "./components/CompletedList";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";

const getDataFromLS = () => {
  const data = localStorage.getItem("items");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function App() {
  const [items, setItems] = useState(getDataFromLS());
  const [show, setShow] = useState(false);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  console.log(items);
  return (
    <div className=''>
      <Header />

      <WelcomeScreen
        setItems={setItems}
        items={items}
        setShow={setShow}
        show={show}
      />
      <div className='listContainer'>
        <ul className='ulStyle'>
          {items.map((item) => (
            <CompletedList item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
