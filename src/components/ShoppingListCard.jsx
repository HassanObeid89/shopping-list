import React from 'react'

function ShoppingListCard({items}) {
    return  items.map(item => (
        <div>
            <li>{item.itemName}{item.itemPrice}</li>
        </div>
    ))
}

export default ShoppingListCard
