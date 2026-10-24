import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Card } from './Card';

describe('Card Component', () => {
  test('checks that the component is visible', () => {
    render(<Card title="Card Title" disabled={false} backgroundColor="#ffffff" />);
    const element = screen.getByTestId('card-component');
    expect(element).toBeVisible();
  });

  test('checks that the background color changed when the component is in the disabled state', () => {
    const { rerender } = render(<Card title="Card Title" disabled={false} backgroundColor="#ffffff" />);
    const activeElement = screen.getByTestId('card-component');
    expect(activeElement).toHaveStyleRule('background-color', '#ffffff');

    rerender(<Card title="Card Title" disabled={true} />);
    const disabledElement = screen.getByTestId('card-component');
    expect(disabledElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
