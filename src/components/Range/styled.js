import styled from "styled-components";

export const Input = styled.input.attrs(() => ({
  type: "range"
}))`
  width: 100%;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    border-radius: 3px;
    background-color: #ddd;
  }

  &::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
    border-radius: 12px;
    border: 2px solid #dddddd;
    background-color: #ffffff;
  }

  &::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: rgba(221, 221, 221, 0.78);
    border-radius: 25px;
    border: 0px solid rgba(1, 1, 1, 0);
  }

  &::-moz-range-thumb {
    border: 2px solid #dddddd;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }

  &::-ms-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: rgba(218, 218, 218, 0.78);
    border-radius: 50px;
  }

  &::-ms-fill-upper {
    background: rgba(221, 221, 221, 0.78);
    border: 0px solid rgba(1, 1, 1, 0);
    border-radius: 50px;
  }

  &::-ms-thumb {
    border: 2px solid #dddddd;
    height: 24px;
    width: 24px;
    border-radius: 12px;
    background: #ffffff;
    cursor: pointer;
    height: 8px;
  }

  &:focus {
    outline: none;

    &::-webkit-slider-runnable-track {
      background: rgba(224, 224, 224, 0.78);
    }

    &::-ms-fill-lower {
      background: rgba(221, 221, 221, 0.78);
    }

    &::-ms-fill-upper {
      background: rgba(224, 224, 224, 0.78);
    }
  }
`;
