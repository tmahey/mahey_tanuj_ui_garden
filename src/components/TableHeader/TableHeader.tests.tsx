import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { TableHeader } from './TableHeader';

describe('TableHeader Component', () => {
  test('checks that the component is visible', () => {
    render(<table data-testid="wrapper"><TableHeader disabled={false} backgroundColor="#f4f6f8"><tr><th>Header</th></tr></TableHeader></table>);
    const element = screen.getByTestId('table-header-component');
    expect(element).toBeVisible();
  });

  test('checks that the background color changed when the component is in the disabled state', () => {
    const { rerender } = render(<table data-testid="wrapper"><TableHeader disabled={false} backgroundColor="#f4f6f8"><tr><th>Header</th></tr></TableHeader></table>);
    const activeElement = screen.getByTestId('table-header-component');
    expect(activeElement).toHaveStyleRule('background-color', '#f4f6f8');

    rerender(<table data-testid="wrapper"><TableHeader disabled={true}><tr><th>Header</th></tr></TableHeader></table>);
    const disabledElement = screen.getByTestId('table-header-component');
    expect(disabledElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
