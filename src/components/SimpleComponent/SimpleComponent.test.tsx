import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import SimpleComponent from './SimpleComponent';

describe('Simple component', () => {
  test('render component corractly', () => {
    render(<SimpleComponent />);
    const headline = screen.getByRole('heading', { level: 1 });
    const textContent = screen.getByText(/Lorem/i);
    expect(headline).toBeInTheDocument();
    expect(textContent).toBeInTheDocument();
  });
});
