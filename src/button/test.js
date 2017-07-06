import React from 'react';
import renderer from 'react-test-renderer';
import Button from './';

describe('Button', () => {
  it('renders correctly', () => {
    const renderedTree = renderer.create(<Button>Content</Button>);
    expect(renderedTree.toJSON()).toMatchSnapshot();
  });
});
