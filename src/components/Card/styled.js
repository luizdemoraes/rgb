import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid #f0f0f0;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.5);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--space-xs) var(--space-sm);
  border-bottom: 2px solid #f0f0f0;
`;

export const Controls = styled.div`
  padding: var(--space-sm);
`;

export const CopyOptions = styled.div`
  background-color: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.4);
`;

export const CopyOptionsList = styled.ul`
  /* padding: 16px 0; */
  white-space: nowrap;
`;

export const CopyOptionsListItem = styled.li`
  padding: 10px 16px;
  border-bottom: 1px solid #e0e0e0;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
`;
