import React from 'react';
import { render } from '@testing-library/react';
import { BasicLoading } from './loading.composition';

it('should render with the correct text', () => {
  expect(render(<BasicLoading />)).toBeTruthy();
});
