import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Button } from './Button';

describe('Button Component', () => {
  test('checks that the component is visible', () => {
    render(<Button text="Test Button" disabled={false} backgroundColor="#007bff" />);
    const element = screen.getByTestId('button-component');
    expect(element).toBeVisible();
  });

  test('checks that the background color changed when the component is in the disabled state', () => {
    const { rerender } = render(<Button text="Test Button" disabled={false} backgroundColor="#007bff" />);
    const activeElement = screen.getByTestId('button-component');
    expect(activeElement).toHaveStyleRule('background-color', '#007bff');

    rerender(<Button text="Test Button" disabled={true} />);
    const disabledElement = screen.getByTestId('button-component');
    expect(disabledElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
