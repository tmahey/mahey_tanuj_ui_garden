import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTableRow = styled.tr<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  disabled = false,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledTableRow
      data-testid="table-row-component"
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </StyledTableRow>
  );
};
