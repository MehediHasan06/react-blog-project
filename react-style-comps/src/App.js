import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Button from "./components/Button";
import TomatoButton from "./components/TomatoButton";
import ReverseButton from "./components/CustomButton";

function App() {
  return (
    <Wrapper>
      <Title>Hello styled Comnponets</Title>
      <Button primary as="a" href="/">Link with Primary Button styles</Button>
      <Button>Normal</Button>
      <TomatoButton>Tomato</TomatoButton>
      <Button as={ReverseButton}>Custom</Button>
    </Wrapper>
  );
}

export default App;
