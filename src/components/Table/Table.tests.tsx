import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Table } from './Table';

describe('Table Component', () => {
  test('checks that the component is visible', () => {
    render(<Table disabled={false} backgroundColor="#ffffff"><tbody><tr><td>Data</td></tr></tbody></Table>);
    const element = screen.getByTestId('table-component');
    expect(element).toBeVisible();
  });

  test('checks that the background color changed when the component is in the disabled state', () => {
    const { rerender } = render(<Table disabled={false} backgroundColor="#ffffff"><tbody><tr><td>Data</td></tr></tbody></Table>);
    const activeElement = screen.getByTestId('table-component');
    expect(activeElement).toHaveStyleRule('background-color', '#ffffff');

    rerender(<Table disabled={true}><tbody><tr><td>Data</td></tr></tbody></Table>);
    const disabledElement = screen.getByTestId('table-component');
    expect(disabledElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
