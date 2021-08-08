import React from 'react'



function CreateItem({ handleSubmit,setItemName, itemName, setItemPrice, itemPrice }) {

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
