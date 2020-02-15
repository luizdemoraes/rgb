import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

Range.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

Range.defaultProps = {
  min: 0,
  max: 100,
  value: 50
};

export function ControledRange({ id, min, max, value, onChange }) {
  const [internalValue, setInternalValue] = useState(value);

  function handleChange(evt) {
    setInternalValue(Number(evt.target.value));
  }

  useEffect(() => {
    onChange(internalValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [internalValue]);

  return (
    <S.Input
      id={id}
      min={min}
      max={max}
      value={internalValue}
      onChange={handleChange}
    />
  );
}

export default function Range({ id, min, max, value, onChange }) {
  return (
    <S.Input
      id={id}
      min={min}
      max={max}
      value={value}
      onChange={evt => onChange(Number(evt.target.value))}
    />
  );
}
