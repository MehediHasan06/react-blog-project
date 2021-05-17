import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // @hookform/resolvers is an optional module that allows you to validate React Hook Form's values with your favorite validation library.
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
});

const BasicForm = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("name")} />
      <input type="number" {...register("age")} />
      <input type="submit" />      
    </form>
  );
};

export default BasicForm;
