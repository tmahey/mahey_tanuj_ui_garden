import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { TableCell } from './TableCell';

describe('TableCell Component', () => {
  test('checks that the component is visible', () => {
    render(<table><tbody><tr><TableCell disabled={false} backgroundColor="#ffffff">Cell Text</TableCell></tr></tbody></table>);
    const element = screen.getByTestId('table-cell-component');
    expect(element).toBeVisible();
  });

  test('checks that the background color changed when the component is in the disabled state', () => {
    const { rerender } = render(<table><tbody><tr><TableCell disabled={false} backgroundColor="#ffffff">Cell Text</TableCell></tr></tbody></table>);
    const activeElement = screen.getByTestId('table-cell-component');
    expect(activeElement).toHaveStyleRule('background-color', '#ffffff');

    rerender(<table><tbody><tr><TableCell disabled={true}>Cell Text</TableCell></tr></tbody></table>);
    const disabledElement = screen.getByTestId('table-cell-component');
    expect(disabledElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
