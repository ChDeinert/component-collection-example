import React from 'react';
import renderer from 'react-test-renderer';
import Pill from './';

it('renders correctly', () => {
  const renderedTree = renderer.create(<Pill>Content</Pill>);
  expect(renderedTree.toJSON()).toMatchSnapshot();
});
