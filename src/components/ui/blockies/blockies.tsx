import React from 'react';
import BlockiesC from 'react-blockies';

export type BlockiesProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Blockies({ text }: BlockiesProps) {
  return (
    <BlockiesC
      seed={ text }
      size={10}
      scale={8}
      color="#dfe"
      bgColor="#ffe"
      spotColor="#abc"
      className="identicon"
    />
  );
}
