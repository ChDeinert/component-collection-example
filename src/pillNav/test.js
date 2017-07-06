import React from 'react';
import renderer from 'react-test-renderer';
import PillNav from './';
import { Pill } from '../';

describe('PillNav', () => {
  const pills = [
    <Pill key="1">Hello Pill</Pill>,
    <Pill key="2">😀 😎 👍 💯</Pill>,
  ];

  it('renders correctly', () => {
    const renderedTree = renderer.create(
      <PillNav>
        {pills}
      </PillNav>
    );
    expect(renderedTree.toJSON()).toMatchSnapshot();
  });
});
