import React from "react";
import * as S from "./styled";

export default function IconButton({ children, title, onClick }) {
  return (
    <S.Button type="button" onClick={onClick} title={title}>
      <S.IconWrapper>{children}</S.IconWrapper>
    </S.Button>
  );
}
