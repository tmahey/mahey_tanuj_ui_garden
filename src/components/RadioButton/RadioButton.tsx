import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Container = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#f8f9fa'};
  color: ${(props) => (props.disabled ? '#777777' : '#333333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.9rem;
  }

  input {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label = 'Radio Option',
  name = 'group1',
  value = 'val1',
  checked = false,
  disabled = false,
  backgroundColor,
  onChange,
  ...props
}) => {
  return (
    <Container
      data-testid="radio-button-component"
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      <span>{label}</span>
    </Container>
  );
};
