import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Pill from './';

storiesOf('Pill', module)
  .add('with text', () => <Pill onClick={action('clicked')}>Hello Pill</Pill>)
  .add('with some emoji', () => (
    <Pill onClick={action('clicked')}>😀 😎 👍 💯</Pill>
  ));
