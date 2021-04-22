import { useForm } from "react-hook-form";

const RefactoredVHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid",
              },
            })}
          />
          {console.log("err", errors)}
          
          {/* Validation Check */}
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>

        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Should be at least 6 characters",
              },
            })}
          />

          {/* Validation Check */}
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
        </div>
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default RefactoredVHF;

// we’ve directly provided the error message we want to display while adding the validation itself. So we no longer need to add extra checks for each validation. We are displaying the error message using the message property available inside the errors object for each input field.

// the code is further simplified which makes it easy to add extra validations in future. Note that if there are validation errors, the onSubmit handler will not be executed and the corresponding input field will automatically be focused (which is a good thing).