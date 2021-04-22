import { useState } from "react";

const SimpleForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    console.log("event", event);
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    // A preventDefault is called on the event when submitting the form to prevent a browser reload/refresh. You can try the code yourself with and without the "prevent default".
    event.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Form controls automatically receive some global styling with Bootstrap: */}
        <div className="form-control">
          <label>Email : </label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control">
          <label>Password : </label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
