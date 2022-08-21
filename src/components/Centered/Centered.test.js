import { render } from '@testing-library/react';
import React from 'react';
import { Centered } from './Centered';

describe('Centered', () => {
  it('should render', () => {
    render(<Centered />);
  });
});
