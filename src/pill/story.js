import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pill from './';

storiesOf('Pill', module)
  .add('with text', () => <Pill onClick={action('clicked')}>Hello Pill</Pill>)
  .add('with some emoji', () =>
    <Pill onClick={action('clicked')}>😀 😎 👍 💯</Pill>
  );
