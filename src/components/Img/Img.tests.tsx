import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Img } from './Img';

describe('Img Component', () => {
  test('checks that the component is visible', () => {
    render(<Img alt="Test" disabled={false} backgroundColor="#eaecef" />);
    const element = screen.getByTestId('img-component');
    expect(element).toBeVisible();
  });

  test('checks that the background color changed when the component is in the disabled state', () => {
    const { rerender } = render(<Img alt="Test" disabled={false} backgroundColor="#eaecef" />);
    const activeElement = screen.getByTestId('img-component');
    expect(activeElement).toHaveStyleRule('background-color', '#eaecef');

    rerender(<Img alt="Test" disabled={true} />);
    const disabledElement = screen.getByTestId('img-component');
    expect(disabledElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
