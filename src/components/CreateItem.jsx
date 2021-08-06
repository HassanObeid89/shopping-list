import React, {useState, useEffect} from 'react'

const getDataFromLS = () => {
    const data = localStorage.getItem('items');
    if(data){
        return JSON.parse(data)
    }
    else{
        return []
    }
}

function CreateItem() {

    const [items, setItems] = useState(getDataFromLS())

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

    useEffect(() => {
        localStorage.setItem('items',JSON.stringify(items))
    }, [items])

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input required type='text' placeholder='Item name' onChange={(e)=>setItemName(e.target.value)} value={itemName} />
            <input required type='number' min='1' step='0.01' placeholder='Price' onChange={(e)=>setItemPrice(e.target.value)} value={itemPrice} />
            <button>Submit</button>
        </form>
            
           
        </>
    )
}

export default CreateItem
