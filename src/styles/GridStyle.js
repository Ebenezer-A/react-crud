import styled from "@emotion/styled";

export const GridStyle = styled.div`
  display: grid;
  grid-template-columns: 30% 45% auto auto 13% auto;
  grid-gap: 5px;
  margin: 10px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  div {
    text-align: start;

    @media (max-width: 600px) {
      text-align: center;
      align-self: center;
    }
  }
`;
