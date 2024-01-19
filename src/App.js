import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";
import {
  Wrap,
  Container,
  Title,
  Circle,
  Range,
  Form,
  Input,
  Button,
} from "../src/style/css";
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
