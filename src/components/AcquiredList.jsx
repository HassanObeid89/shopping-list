import React from 'react'
import CompletedList from './CompletedList';

function AcquiredList({item, setItems, items}) {

    
    const checkBoxHandler = () => {

      setItems(items.map((completedItem) => {
          if(completedItem.id === item.id) {
              return {
                  ...item, completed : !item.completed
              }
          }
          return completedItem
      }) 

      );
      
  }
    return (
        <div>
            
            {item.completed === false ?
            
            <li key={item.id} >
                
                <p>
                    {item.itemName}
                </p>
                <p>
                    {item.itemPrice}
                </p>
            <input type='checkbox' onClick={checkBoxHandler} />
            <button>
                delete
            </button>
            
            </li>
            : 
            
        null
         
        
        }
        
        </div>
    ) 
}

export default AcquiredList
