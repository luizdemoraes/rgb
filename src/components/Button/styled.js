import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  font-size: 18px;
  cursor: pointer;
  border: unset;
  outline: unset;
  background: unset;
  transition: transform 120ms linear;
  z-index: 2;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }

  &:last-child {
    justify-content: flex-end;
  }
`;

export const IconWrapper = styled.span`
  display: block;
  width: 16px;
  height: 16px;

  > svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
