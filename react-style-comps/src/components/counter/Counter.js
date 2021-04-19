import styled from "styled-components";
import { Component } from "react";

const StyledCounter = styled.div`
  margin-top: 2em;
  padding: 4em;
  background: papayawhip;
`;

const Paragraph = styled.p`
  font-size: 1.5em;
  color: black;
  text-align: center;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin-left: 50%;
  text-decoration: none;
  cursor: pointer;
`;

export default class Counter extends Component {
  state = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <StyledCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
      </StyledCounter>
    )
  };
};
