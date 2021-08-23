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
