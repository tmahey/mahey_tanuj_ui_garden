import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ disabled?: boolean; backgroundColor?: string; size?: string }>`
  font-size: ${(props) =>
    props.size === 'small' ? '0.85rem' : props.size === 'large' ? '1.25rem' : '1rem'};
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 4px;
  margin: 0 0 8px 0;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  color: ${(props) => (props.disabled ? '#777777' : '#222222')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 768px) {
    font-size: ${(props) => (props.size === 'large' ? '1.1rem' : '0.9rem')};
  }
`;

export const Text: React.FC<TextProps> = ({
  content = 'Default descriptive body text.',
  size = 'medium',
  disabled = false,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledText
      data-testid="text-component"
      size={size}
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      {content}
    </StyledText>
  );
};
