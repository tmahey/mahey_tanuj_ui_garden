import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 20px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#2c3e50'};
  color: ${(props) => (props.disabled ? '#777777' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  width: 100%;
  min-height: 220px;

  h1 {
    font-size: 2.4rem;
    margin: 0 0 12px 0;
  }
  p {
    font-size: 1.15rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 30px 15px;
    min-height: 160px;
    h1 {
      font-size: 1.6rem;
    }
    p {
      font-size: 0.95rem;
    }
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  title = 'UI Garden Hero',
  subtitle = 'Modular & Responsive Component Library',
  disabled = false,
  backgroundColor,
  ...props
}) => {
  return (
    <HeroContainer
      data-testid="hero-image-component"
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </HeroContainer>
  );
};
