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

const Form = styled.form`
  display: flex;
  h3 {
    margin-right: 15px;
  }
  h4 {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const Input = styled.input`
  width: 75px;
  text-align: center;
`;

export const App = () => {
  const [randomNum, setRandomNum] = useState(null);
  const [minRange, setMinRange] = useState(1);
  const [maxRange, setMaxRange] = useState(100);
  const [error, setError] = useState("");

  const RandomNumber = () => {
    const min = parseInt(minRange);
    const max = parseInt(maxRange);
    // 문자열 -> 정수 변환, 실패시 NaN값으로 처리

    if (isNaN(min) || isNaN(max) || min > max) {
      setError("올바른 범위를 입력해주세요.");
      return;
    }

    if (!isNaN(min) && !isNaN(max) && min <= max) {
      // min, max가 정수이고 max값이 크다는 전제하에 다음 함수 실행
      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNum(randomValue);
      setError("");
    }
  };

  return (
    <Wrap>
      <Header />
      <Container>
        <Title> Select your Number </Title>
        <Circle>{randomNum}</Circle>
        <Range>
          <Form>
            <h3>범위</h3>
            <Input
              type="number"
              value={minRange}
              onChange={(e) => setMinRange(e.target.value)}
            />
            <h4> ~ </h4>
            <Input
              type="number"
              value={maxRange}
              onChange={(e) => setMaxRange(e.target.value)}
            />
          </Form>
          {error && (
            <p
              style={{
                color: "crimson",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              {error}
            </p>
          )}
        </Range>
        <Button onClick={RandomNumber}>생성하기</Button>
      </Container>
      <Footer />
    </Wrap>
  );
};
