import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Text } from './Text';

describe('Text Component', () => {
  test('checks that the component is visible', () => {
    render(<Text content="Sample text" disabled={false} backgroundColor="#ffffff" />);
    const element = screen.getByTestId('text-component');
    expect(element).toBeVisible();
  });

  test('checks that the background color changed when the component is in the disabled state', () => {
    const { rerender } = render(<Text content="Sample text" disabled={false} backgroundColor="#ffffff" />);
    const activeElement = screen.getByTestId('text-component');
    expect(activeElement).toHaveStyleRule('background-color', '#ffffff');

    rerender(<Text content="Sample text" disabled={true} />);
    const disabledElement = screen.getByTestId('text-component');
    expect(disabledElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
