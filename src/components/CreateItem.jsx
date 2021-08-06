import React, { useState } from 'react'
import ShoppingListCard from './ShoppingListCard'


function CreateItem({setItems, items}) {

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

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input required type='text' placeholder='Item name' onChange={(e)=>setItemName(e.target.value)} value={itemName} />
            <input required type='number' min='1' step='0.01' placeholder='Price' onChange={(e)=>setItemPrice(e.target.value)} value={itemPrice} />
            <button>Add item</button>
        </form>
        <table >
            <thead>
                <tr>
                    <th>Item name</th>
                    <th>Item price</th>
                </tr>
            </thead>
            <tbody>
                <ShoppingListCard items={items}/>
            </tbody>
        </table>
           
        </>
    )
}

export default CreateItem
