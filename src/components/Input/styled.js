import styled from "styled-components";

export const Input = styled.input`
  border-radius: 6px;
  border: 2px solid #ddd;
  padding: var(--space-xxs) 0;
  font-size: 12px;
  text-align: center;
  font-family: Inter, inherit;
  font-weight: 600;
  color: #454545;
  width: 100%;
  outline: unset;
  transition: border-color 200ms linear;

  appearance: textfield;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:hover {
    border-color: #9d9d9d;
  }

  &:focus {
    border-color: #656565;
  }
`;
