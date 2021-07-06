import React from 'react';
import { render } from '@testing-library/react';
import { BasicLoading } from './loading.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicLoading />);
  const rendered = getByText('hello from Loading');
  expect(rendered).toBeTruthy();
});
