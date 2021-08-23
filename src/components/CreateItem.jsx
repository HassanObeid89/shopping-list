import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validations/FormValidation";
import uuid from "react-uuid";
import CompletedList from "./CompletedList";
import AcquiredList from "./AcquiredList";

function CreateItem({ setItems, items }) {


  const completedItems = items.filter(
    (completedItems) => completedItems.completed === true
  );

  const aquiredItems = items.filter(
    (aquiredItems) => aquiredItems.completed === false
  );


  // same here
  const handleSortByPrice = () => {
    setSortByPrice(!sortByPrice);

    items.sort((a, b) => {
      return a.Price - b.Price;
    });
  };



  return (
    <>
     <Form/>

    <Sorter/>

      {/* There is no reason to use 2 components sharing 99% of the same code -1 */}
      {/* Even worst creating sub compoinents AcquiredItemCard and CompletedItemCard for this. */}
      <AcquiredList
        aquiredItems={aquiredItems}
        setItems={setItems}
        items={items}
      />
      <CompletedList completedItems={completedItems} />
    </>
  );
}

export default CreateItem;
