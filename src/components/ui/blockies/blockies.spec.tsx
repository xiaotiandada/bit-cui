import React from 'react';
import { render } from '@testing-library/react';
import { BasicBlockies } from './blockies.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBlockies />);
  const rendered = getByText('hello from Blockies');
  expect(rendered).toBeTruthy();
});
