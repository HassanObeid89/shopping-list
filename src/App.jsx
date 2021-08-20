import React, { useState, useEffect } from "react";

import CreateItem from "./components/CreateItem";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";

import clipart from "./assets/clipart.png";

// dont use acronyms for key pieces of data load loadFromLocalStorage while longer is easier to understand -1
const getDataLS = () => {
  const data = localStorage.getItem("items");

  // no logs in the final branch
  console.log(data);

  // can be made a single line with a ternary operator
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

  // While tecnically not wrong, leave the div with className App as a React convention
  return (
    <>
      <Header />
      <img src={clipart} alt='' className='mx-auto h-20 w-auto ' />
      <h1 className='title'>Shopping List</h1>

      {/* If there is a "welcome screen" where is his counterpart "something screen" it feels weird to go from a welcome screen to create item -1 */}
      {items.length === 0 && show !== true ? (
        <WelcomeScreen
          setItems={setItems}
          items={items}
          setShow={setShow}
          show={show}
        />
      ) : (
        // Should be called Normal or ListScreen, the name here is 10X more important than on getDataLS, that one can be infered as LS = LocalStorage but CreateItem sounds like a button or a form not an entire new page or screen. -1
        <CreateItem setItems={setItems} items={items} />
      )}
    </>
  );
}

export default App;
