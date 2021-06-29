import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
  // FIRST TEST
  it('renders', () => {
    render(<About />);
  });

  // SECOND TEST
  it('matches snapshot DOM node structure', () => {
    // RENDER ABOUT
  })
})

const { asFragment } = render(<About />);
expect(asFragment()).toMatchSnapshot();