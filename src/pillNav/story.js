import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PillNav from './';
import { Pill } from '../';

const pills = [
  <Pill key="1" onClick={action('clicked')}>
    Hello Pill
  </Pill>,
  <Pill key="2" onClick={action('clicked')}>
    😀 😎 👍 💯
  </Pill>,
];
storiesOf('PillNav', module).add('with Pills', () =>
  <PillNav>
    {pills}
  </PillNav>
);
