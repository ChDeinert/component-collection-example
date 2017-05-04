import React from 'react';
import renderer from 'react-test-renderer';
import Button from './';

it('renders correctly', () => {
  const renderedTree = renderer.create(<Button>Content</Button>);
  expect(renderedTree.toJSON()).toMatchSnapshot();
});
