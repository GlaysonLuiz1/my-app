// Button.stories.js|jsx

import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,

};

function HomePage() {
  return (
    <div>
      <h1>MM Recordes</h1>
      <h2>Gravações e mixagens</h2>

      <style jsx>{`
      * {
        color: blue;
      }
    `}</style>

      < Button
        label="Button"
        onClick={() => { }
        }
        size="small"
      />

    </div>)





}

export default HomePage

