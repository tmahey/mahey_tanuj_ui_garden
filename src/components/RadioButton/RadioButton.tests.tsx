import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  test('checks that the component is visible', () => {
    render(<RadioButton label="Option 1" disabled={false} backgroundColor="#f8f9fa" />);
    const element = screen.getByTestId('radio-button-component');
    expect(element).toBeVisible();
  });

  test('checks that the background color changed when the component is in the disabled state', () => {
    const { rerender } = render(<RadioButton label="Option 1" disabled={false} backgroundColor="#f8f9fa" />);
    const activeElement = screen.getByTestId('radio-button-component');
    expect(activeElement).toHaveStyleRule('background-color', '#f8f9fa');

    rerender(<RadioButton label="Option 1" disabled={true} />);
    const disabledElement = screen.getByTestId('radio-button-component');
    expect(disabledElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
