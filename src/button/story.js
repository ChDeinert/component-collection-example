import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from './';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
  .add('with text', () => {
    const buttonText = text('buttonText', 'Hello Button');
    return (
      <Button onClick={action('clicked')}>
        {buttonText}
      </Button>
    );
  })
  .add('with some emoji', () =>
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  );
