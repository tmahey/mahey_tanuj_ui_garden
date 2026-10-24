import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  test('checks that the component is visible', () => {
    render(<Dropdown disabled={false} backgroundColor="#ffffff" />);
    const element = screen.getByTestId('dropdown-component');
    expect(element).toBeVisible();
  });

  test('checks that the background color changed when the component is in the disabled state', () => {
    const { rerender } = render(<Dropdown disabled={false} backgroundColor="#ffffff" />);
    const activeElement = screen.getByTestId('dropdown-component');
    expect(activeElement).toHaveStyleRule('background-color', '#ffffff');

    rerender(<Dropdown disabled={true} />);
    const disabledElement = screen.getByTestId('dropdown-component');
    expect(disabledElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
