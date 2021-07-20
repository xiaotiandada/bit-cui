import React from 'react';
import { render } from '@testing-library/react';
import { BasicTest } from './test.composition';

it('should render with the correct text', () => {
  expect(render(<BasicTest />)).toBeTruthy();
});
