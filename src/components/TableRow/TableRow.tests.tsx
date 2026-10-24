import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { TableRow } from './TableRow';

describe('TableRow Component', () => {
  test('checks that the component is visible', () => {
    render(<table><tbody><TableRow disabled={false} backgroundColor="#ffffff"><td>Row Cell</td></TableRow></tbody></table>);
    const element = screen.getByTestId('table-row-component');
    expect(element).toBeVisible();
  });

  test('checks that the background color changed when the component is in the disabled state', () => {
    const { rerender } = render(<table><tbody><TableRow disabled={false} backgroundColor="#ffffff"><td>Row Cell</td></TableRow></tbody></table>);
    const activeElement = screen.getByTestId('table-row-component');
    expect(activeElement).toHaveStyleRule('background-color', '#ffffff');

    rerender(<table><tbody><TableRow disabled={true}><td>Row Cell</td></TableRow></tbody></table>);
    const disabledElement = screen.getByTestId('table-row-component');
    expect(disabledElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
