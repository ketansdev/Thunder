import { useForm } from "react-hook-form";

function Formshook() {
  const { register, handleSubmit, formState: { errors }, } = useForm();

  function formSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
        </div>
        <div>
          <input type="text" id="name" {...register("name", {
            required : "Name is required",
            minLength : {value : 3, message : "Minimum length should be 3"},
            maxLength : {value : 20, message : "Maximum length should be 20"}
            })} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="age">Age:</label>
        </div>
        <div>
          <input type="number" id="age" {...register("age")} />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
        </div>
        <div>
          <input type="email" id="email" {...register("email")} />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
        </div>
        <div>
          <input type="password" id="password" {...register("password")} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Formshook;
