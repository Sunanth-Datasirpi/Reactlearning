import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: lightgreen;
  }
`;

export const FancyButton = styled(StyledButton)`
  border: none;
  background-image: linear-gradient(to right, #f6d365 0%, #f6d365 100%);
`;

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`;

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};

  &:hover {
    background-color: darkgreen; /* Change the hover color to the one you prefer */
  }
`;
