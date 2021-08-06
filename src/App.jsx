import React, { useState, useEffect } from 'react';
import './App.css';
import CreateItem from './components/CreateItem';
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';

const getDataFromLS = () => {
    const data = localStorage.getItem('items');
    if(data){
        return JSON.parse(data)
    }
    else{
        return []
    }
}

function App() {
  
  const [items, setItems] = useState(getDataFromLS())

    useEffect(() => {
        localStorage.setItem('items',JSON.stringify(items))
    }, [items])

  return (
    <div className="App">
      <Header />

      {items.length > 0 ? <CreateItem setItems={setItems} items={items} /> : <WelcomeScreen />}
      
    </div>
  );
  
}

export default App;
