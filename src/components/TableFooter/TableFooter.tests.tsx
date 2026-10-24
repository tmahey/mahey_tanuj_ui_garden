import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { TableFooter } from './TableFooter';

describe('TableFooter Component', () => {
  test('checks that the component is visible', () => {
    render(<table><TableFooter disabled={false} backgroundColor="#f9fafb"><tr><td>Summary</td></tr></TableFooter></table>);
    const element = screen.getByTestId('table-footer-component');
    expect(element).toBeVisible();
  });

  test('checks that the background color changed when the component is in the disabled state', () => {
    const { rerender } = render(<table><TableFooter disabled={false} backgroundColor="#f9fafb"><tr><td>Summary</td></tr></TableFooter></table>);
    const activeElement = screen.getByTestId('table-footer-component');
    expect(activeElement).toHaveStyleRule('background-color', '#f9fafb');

    rerender(<table><TableFooter disabled={true}><tr><td>Summary</td></tr></TableFooter></table>);
    const disabledElement = screen.getByTestId('table-footer-component');
    expect(disabledElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
