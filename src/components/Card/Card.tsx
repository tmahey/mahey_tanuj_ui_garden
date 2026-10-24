import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  padding: 24px;
  box-shadow: ${(props) =>
    props.disabled ? 'none' : '0 4px 12px rgba(0, 0, 0, 0.08)'};
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  color: ${(props) => (props.disabled ? '#777777' : '#222222')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  width: 320px;

  h3 {
    margin: 0 0 10px 0;
  }
  p {
    margin: 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
  }
`;

export const Card: React.FC<CardProps> = ({
  title = 'Card Title',
  content = 'Descriptive card content explaining details.',
  disabled = false,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledCard
      data-testid="card-component"
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
};
