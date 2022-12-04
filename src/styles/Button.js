import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: ${({ bg }) => bg};
  border-radius: 7px;
  padding: 5px 15px;
  box-shadow: none;
  border: none;
  display: flex;
  justify-content: center;
  gap: 4px;

  &:hover {
    opacity: 0.9;
  }
`;
