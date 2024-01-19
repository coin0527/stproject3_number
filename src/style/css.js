import styled from "styled-components";

export const Wrap = styled.div``;
export const Container = styled.div`
  width: 100%;
  height: 80vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 30px;
`;

export const Circle = styled.div`
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
export const Button = styled.button`
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
export const Range = styled.div`
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  h3 {
    margin-right: 15px;
  }
  h4 {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
export const Input = styled.input`
  width: 75px;
  text-align: center;
`;
