import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 10px 14px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #cccccc;
  outline: none;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  color: ${(props) => (props.disabled ? '#777777' : '#333333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  width: 260px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ],
  disabled = false,
  backgroundColor,
  selectedValue,
  onChange,
  ...props
}) => {
  return (
    <StyledSelect
      data-testid="dropdown-component"
      disabled={disabled}
      backgroundColor={backgroundColor}
      value={selectedValue}
      onChange={(e) => onChange && onChange(e.target.value)}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </StyledSelect>
  );
};
