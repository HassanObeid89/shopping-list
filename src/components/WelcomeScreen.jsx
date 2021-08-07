import React, { useState } from 'react';
import CreateItem from './CreateItem';
import ShoppingListCard from './ShoppingListCard'

function WelcomeScreen({setItems, items, setShow,show}) {


    const [itemName, setItemName] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let item = {
            itemName,
            itemPrice
        }
        setItems([...items,item]);
        setItemName('');
        setItemPrice('');
    }

    const handleClick = () => {
    setShow(!show)
  }
  
    return (
        <>
        {show === false && items.length === 0 ? 
        <div>
            <h1>Welcome</h1>
            <h2>Shopping list</h2>
            <p>Your shopping list is empty right now</p>
            <span>
                Click Add item button.
                Specify the name and the price of the new item.
                Hit Add item.
                if the task is done Hit the checkbox. 
            </span>
            <button onClick={handleClick}>Add item</button>
            </div>
            : null}
        
            {show || items.length > 0 ? 
            <div>
                <CreateItem handleSubmit={handleSubmit} setItemName={setItemName} itemName={itemName} setItemPrice={setItemPrice} itemPrice={itemPrice}  />
                <ul>
                    <ShoppingListCard items={items}/>
                </ul>
                
                
            </div>
        : null}
        </>
    )
}

export default WelcomeScreen
