import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const ImgContainer = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  display: inline-block;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#eaecef'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  img {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Img: React.FC<ImgProps> = ({
  src = 'https://via.placeholder.com/300x200',
  alt = 'Sample Image',
  disabled = false,
  backgroundColor,
  ...props
}) => {
  return (
    <ImgContainer
      data-testid="img-component"
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      <img src={src} alt={alt} />
    </ImgContainer>
  );
};
