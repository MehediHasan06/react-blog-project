// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
// import Button from "./components/Button";
// import TomatoButton from "./components/TomatoButton";
// import ReverseButton from "./components/CustomButton";
// import Input from "./components/Input";
import Counter from "./components/counter/Counter";

function App() {
  return (
    // <Wrapper>
    //   <Title>Hello styled Comnponets</Title>

    //   {/* All button example  */}
    //   <Button primary as="a" href="/">Link with Primary Button styles</Button>
    //   <Button>Normal</Button>
    //   <TomatoButton>Tomato</TomatoButton>

    //   {/* Custom Button with the help of main Button  */}
    //   <Button as={ReverseButton}>Custom</Button>

    //   {/* Sending props value  */}
    //   <Input defaultValue="Enter some text" type="text"/>
    //   <Input defaultValue="Enter some text" type="text" inputColor="black" />
    // </Wrapper>
    <Counter />
  );
}

export default App;
