import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTableFooter = styled.tfoot<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#f9fafb'};
  color: ${(props) => (props.disabled ? '#777777' : '#555555')};
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled = false,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledTableFooter
      data-testid="table-footer-component"
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </StyledTableFooter>
  );
};
