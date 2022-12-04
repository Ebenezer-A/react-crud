import styled from "@emotion/styled";

export const Global = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: auto;
  background-color: #f2ebe3;
  font-family: Courier;

  @media (max-width: 600px) {
    min-height: 100vh;
    height: auto;
  }
`;
