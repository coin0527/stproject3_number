import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 60px;
  background-color: beige;
  text-align: center;
  position: absolute;
  bottom: 0;
  line-height: 60px;
`;

export const Footer = () => {
  return <Wrap>&copy; eden27</Wrap>;
};
