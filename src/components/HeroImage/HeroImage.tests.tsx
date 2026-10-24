import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  test('checks that the component is visible', () => {
    render(<HeroImage title="Hero" disabled={false} backgroundColor="#2c3e50" />);
    const element = screen.getByTestId('hero-image-component');
    expect(element).toBeVisible();
  });

  test('checks that the background color changed when the component is in the disabled state', () => {
    const { rerender } = render(<HeroImage title="Hero" disabled={false} backgroundColor="#2c3e50" />);
    const activeElement = screen.getByTestId('hero-image-component');
    expect(activeElement).toHaveStyleRule('background-color', '#2c3e50');

    rerender(<HeroImage title="Hero" disabled={true} />);
    const disabledElement = screen.getByTestId('hero-image-component');
    expect(disabledElement).toHaveStyleRule('background-color', '#cccccc');
  });
});
