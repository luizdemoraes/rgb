import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: var(--space-xs);
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-right: var(--space-sm);
`;
