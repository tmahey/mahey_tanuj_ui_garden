import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled?: boolean; backgroundColor?: string }>`
  display: inline-block;
  padding: 6px 12px;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#f0f4f8'};
  color: ${(props) => (props.disabled ? '#777777' : '#333333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 4px 8px;
  }
`;

export const Label: React.FC<LabelProps> = ({
  text = 'Input Label',
  htmlFor,
  disabled = false,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledLabel
      data-testid="label-component"
      htmlFor={htmlFor}
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      {text}
    </StyledLabel>
  );
};
