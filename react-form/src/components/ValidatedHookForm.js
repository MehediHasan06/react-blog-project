import { useForm } from "react-hook-form";

const ValidatedHookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

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
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {console.log("errors", errors)}
          {/* The validation will run once the form is submitted.If the validation failed, then the errors.email field inside the errors object will be populated with the type field which we used to display the error message. Also, the form is not submitted as long as there is a validation error. */}

          {/* Validation Check */}
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </div>

        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", { required: true, minLength: 6 })}
          />

          {/* Validation Check */}
          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
        </div>
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default ValidatedHookForm;

// using react-hook-form reduced the amount of code that we have to write. The validation is also responsive, so once the field becomes valid, the error message goes away instantly.

// But as the number of validations for each field increases, the conditional checks and error message code will still increase. So we can further refactor the code to make it even simpler.