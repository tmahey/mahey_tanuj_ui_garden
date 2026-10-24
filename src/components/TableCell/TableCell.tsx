import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTableCell = styled.td<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  font-size: 0.95rem;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  color: ${(props) => (props.disabled ? '#777777' : '#333333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 0.85rem;
  }
`;

export const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled = false,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledTableCell
      data-testid="table-cell-component"
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </StyledTableCell>
  );
};
