import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validations/FormValidation";
import uuid from "react-uuid";


function CreateItem({ setItems, items }) {
  
  const submitForm = (data, e) => {
    e.preventDefault();
    data.id = uuid();
    data.completed = false;

    setItems([...items, data]);
    reset('')
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
        {errors.Name?.type === "required" && <p>Required field</p>}

        <input
          className='input'
          name='Price'
          type='text'
          placeholder='Price'
          autoComplete='off'
          {...register("Price")}
        />
        {errors.Price?.type === "typeError" && <p>Price should be a number</p>}
        {errors.Price?.type === "min" && <p>Price can't be negative</p>}
        {errors.Price?.type === "required" && <p>Required field</p>}
        <button className='btn btn-blue'>Add item</button>
      </form>
    </>
  );
}

export default CreateItem;
