import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledTableHeader = styled.thead<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#f4f6f8'};
  color: ${(props) => (props.disabled ? '#777777' : '#222222')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  font-weight: 700;
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  disabled = false,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledTableHeader
      data-testid="table-header-component"
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </StyledTableHeader>
  );
};
