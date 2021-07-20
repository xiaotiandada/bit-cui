import React from 'react';
import { chunk } from 'lodash'

export type TestProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Test({ text }: TestProps) {

  console.log('chunk', chunk(['a', 'b', 'c', 'd'], 2))

  return (
    <div>
      {text} { chunk(['a', 'b', 'c', 'd'], 2) }
    </div>
  );
}
