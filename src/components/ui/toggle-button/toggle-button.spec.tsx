import React from 'react';
import { render } from '@testing-library/react';
import { BasicToggleButton } from './toggle-button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicToggleButton />);
  const rendered = getByText('hello from ToggleButton');
  expect(rendered).toBeTruthy();
});
