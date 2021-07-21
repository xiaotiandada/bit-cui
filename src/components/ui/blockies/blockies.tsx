import React from 'react';

export type BlockiesProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Blockies({ text }: BlockiesProps) {
  return (
    <div>
      {text}
    </div>
  );
}
