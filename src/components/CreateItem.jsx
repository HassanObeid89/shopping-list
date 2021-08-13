import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validations/FormValidation";
import uuid from "react-uuid";
import CompletedList from "./CompletedList";
import AcquiredList from "./AcquiredList";

function CreateItem({ setItems, items }) {
  const [sortByName, setSortByName] = useState(false);
  const [sortByPrice, setSortByPrice] = useState(false);

  const completedItems = items.filter(
    (completedItems) => completedItems.completed === true
  );

  const aquiredItems = items.filter(
    (aquiredItems) => aquiredItems.completed === false
  );

  const handleSortByName = () => {
    items.sort((a, b) => {
      if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
        return -1;
      } else if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
    setSortByName(!sortByName);
  };

  const handleSortByPrice = () => {
    setSortByPrice(!sortByPrice);

    items.sort((a, b) => {
      return a.Price - b.Price;
    });
  };

  const submitForm = (data, e) => {
    e.preventDefault();
    data.id = uuid();
    data.completed = false;

    setItems([...items, data]);
    reset("");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form
        className='flex flex-col md:flex-row justify-center md:space-x-4 mt-8'
        onSubmit={handleSubmit(submitForm)}>
        <div className=''>
          <input
            className='input'
            name='Name'
            type='text'
            placeholder='Item name'
            autoComplete='off'
            {...register("Name", {
              required: "Required",
            })}
          />
          <span className='flex justify-center text-red'>
            {errors.Name?.type === "required" && <p>Required field</p>}
          </span>
        </div>

        <div className=''>
          <input
            className='input'
            name='Price'
            type='text'
            placeholder='Price'
            autoComplete='off'
            {...register("Price")}
          />
          <span className='flex justify-center text-red'>
            {errors.Price?.type === "typeError" && (
              <p>Price should be a number</p>
            )}
            {errors.Price?.type === "min" && <p>Price can't be negative</p>}
            {errors.Price?.type === "required" && <p>Required field</p>}
          </span>
        </div>

        <button className='btn btn-blue'>Add item</button>
      </form>

      <div className='flex justify-center mt-8'>
        <button className={"btn"} onClick={handleSortByName}>
          Sort by name
        </button>
        <button className={"btn"} onClick={handleSortByPrice}>
          Sort by price
        </button>
      </div>

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
