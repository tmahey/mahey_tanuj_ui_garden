import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#007bff'};
  color: ${(props) => (props.disabled ? '#666666' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  width: auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 16px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  text = 'Click Me',
  disabled = false,
  backgroundColor,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      data-testid="button-component"
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {text}
    </StyledButton>
  );
};
