import React from 'react';


function WelcomeScreen() {
    return (
        <>
            <h1>Welcome</h1>
            <h2>Shopping list</h2>
            <p>Your shopping list is empty right now</p>
            <span>
                Click Add item button.
                Specify the name and the price of the new item.
                Hit Add item.
                if the task is done Hit the checkbox. 
            </span>
            
            <button>Add item</button>
        </>
    )
}

export default WelcomeScreen
