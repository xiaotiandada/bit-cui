import React from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

export type JazziconsProps = {
  /**
   * a text to be rendered in the component.
   */
  address: string
};

export function Jazzicons({ address }: JazziconsProps) {
  return (
    <Jazzicon diameter={100} seed={jsNumberForAddress(address)}  />
  );
}
