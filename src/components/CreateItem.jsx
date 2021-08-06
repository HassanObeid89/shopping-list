import React, { useState } from 'react'



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
            
           
        </>
    )
}

export default CreateItem
