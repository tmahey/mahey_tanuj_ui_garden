import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{ disabled?: boolean; backgroundColor?: string }>`
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  border: 1px solid #e0e0e0;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    font-size: 0.85rem;
  }
`;

export const Table: React.FC<TableProps> = ({
  children,
  disabled = false,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledTable
      data-testid="table-component"
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </StyledTable>
  );
};
