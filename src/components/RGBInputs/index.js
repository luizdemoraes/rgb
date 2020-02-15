import React from "react";

import Input from "../Input";
import * as S from "./styled";

export default function RGBInputs({ rgb, onRChange, onGChange, onBChange }) {
  return (
    <S.Wrapper>
      <Input
        type="number"
        min={0}
        max={255}
        value={rgb.r}
        onChange={onRChange}
      />
      <Input
        type="number"
        min={0}
        max={255}
        value={rgb.g}
        onChange={onGChange}
      />
      <Input
        type="number"
        min={0}
        max={255}
        value={rgb.b}
        onChange={onBChange}
      />
    </S.Wrapper>
  );
}
