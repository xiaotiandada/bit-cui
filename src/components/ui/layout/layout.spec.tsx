import React from 'react';
import { render } from '@testing-library/react';
import { BasicLayout } from './layout.composition';

it('should render with the correct text', () => {
  expect(render(<BasicLayout />)).toBeTruthy();
});
