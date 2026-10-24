import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Label } from './Label';

describe('Label Component', () => {
  test('checks that the component is visible', () => {
    render(<Label text="Name" disabled={false} backgroundColor="#f0f4f8" />);
    const element = screen.getByTestId('label-component');
    expect(element).toBeVisible();
  });

  test('checks that the background color changed when the component is in the disabled state', () => {
    const { rerender } = render(<Label text="Name" disabled={false} backgroundColor="#f0f4f8" />);
    const activeElement = screen.getByTestId('label-component');
    expect(activeElement).toHaveStyleRule('background-color', '#f0f4f8');

    rerender(<Label text="Name" disabled={true} />);
    const disabledElement = screen.getByTestId('label-component');
    expect(disabledElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
