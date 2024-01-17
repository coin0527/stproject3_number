import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Wrap = styled.div``;
const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 80vh;
  padding: 30px;
`;
const Circle = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;
const Button = styled.button``;

export const App = () => {
  return (
    <Wrap>
      <Header />
      <Container>
        <Circle></Circle>
        <Button>생성하기</Button>
      </Container>
      <Footer />
    </Wrap>
  );
};
