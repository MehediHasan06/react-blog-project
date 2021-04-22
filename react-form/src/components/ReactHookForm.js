import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const { register, handleSubmit } = useForm();
  // 1. register is a function to be used as a ref provided by the useForm hook. We can assign it to each input field so that the react-hook-form can track the changes for the input field value.
  // 2. handleSubmit is the function we can call when the form is submitted
  // 3. errors will contain the validation errors, if any

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input type="text" name="email" {...register("email")} />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" name="password" {...register("password")} />
        </div>
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default ReactHookForm;

// as compared to the code without react-hook-form (SimpleForm), this code is much simpler. This is because we don’t have to add the value and onChange handler for each input field and there is no need to manage the application state ourselves.