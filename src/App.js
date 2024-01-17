import styled, { css } from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Wrap = styled.div``;
const Container = styled.div`
  border: 1px solid black;
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
`;
const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.primaryColor};
    color: ${theme.textColor};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.primaryHoverColor};
    }
  `}
`;
const theme = {
  primaryColor: "#333",
  textColor: "white",
  primaryHoverColor: "gray",
};

export const App = () => {
  return (
    <Wrap>
      <Header />
      <Container>
        <Title> Select your Number </Title>
        <Circle></Circle>
        <Button theme={theme}>생성하기</Button>
      </Container>
      <Footer />
    </Wrap>
  );
};
