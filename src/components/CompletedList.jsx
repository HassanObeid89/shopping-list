import React from 'react'

function CompletedList({ item }) {
    return (
        <>
        
        <div>
            
            <li key={item.id} >
                <p>
                    {item.itemName}
                </p>
                <p>
                    {item.itemPrice}
                </p>
                <input type='checkbox' checked />
            <button>
                delete
            </button>
                </li>
        </div>
        </>
    )
}

export default CompletedList
