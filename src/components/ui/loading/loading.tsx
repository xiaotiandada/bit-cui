import React from 'react';

export type LoadingProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Loading({ text }: LoadingProps) {
  return (
    <div>
      {text}
    </div>
  );
}
