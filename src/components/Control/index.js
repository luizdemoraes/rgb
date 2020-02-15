import React from "react";

import Range from "../Range";
import * as S from "./styled";

export default function Control({ label, value, onChange }) {
  return (
    <S.Wrapper>
      <S.Label htmlFor={label}>{label}</S.Label>
      <Range id={label} max={255} value={value} onChange={onChange} />
    </S.Wrapper>
  );
}
