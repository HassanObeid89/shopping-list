import React from 'react'

function ShoppingListCard({items}) {
    return  items.map(item => (
        <tr key={items.id}>
            <td>{item.itemName}</td>
            <td>{item.itemPrice}</td>
        </tr> 
    ))
}

export default ShoppingListCard
