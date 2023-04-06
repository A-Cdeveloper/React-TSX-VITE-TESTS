import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, expect, test } from 'vitest';

describe('App component', () => {
  test('Render headline', () => {
    render(<App />);
    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toBeInTheDocument();
  });
});
