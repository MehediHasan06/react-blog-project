import Button from "./Button";

const ReverseButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);
export default ReverseButton;
