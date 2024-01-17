import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";

const Wrap = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 80vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 30px;
`;

const Circle = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin-bottom: 30px;
  margin-top: 30px;
  font-size: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    background-color: gray;
  }
`;
const Range = styled.div`
  margin-bottom: 30px;
`;

export const App = () => {
  const [randomNum, setRandomNum] = useState(null);

  const RandomNumber = () => {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    setRandomNum(randomValue);
  };
  return (
    <Wrap>
      <Header />
      <Container>
        <Title> Select your Number </Title>
        <Circle>{randomNum}</Circle>
        <Range>
          <h3>범위</h3>
          {/* 인풋 2개 */}
        </Range>
        <Button onClick={RandomNumber}>생성하기</Button>
      </Container>
      <Footer />
    </Wrap>
  );
};
