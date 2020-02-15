import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";
import { isNumber } from "is-what";

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
  value: ""
};

export default function Input({ value, onChange }) {
  const max = 255;

  function handleChange({ target }) {
    const value = Number(target.value);

    if (isNumber(value)) {
      value > max ? onChange(max) : onChange(value);
    }
  }

  return <S.Input value={value} onChange={handleChange} />;
}
