import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from './';

it('renders correctly', () => {
  const renderedTree = renderer.create(<Welcome>Content</Welcome>);
  expect(renderedTree.toJSON()).toMatchSnapshot();
});
