import React from 'react';
import { Blockies } from './blockies';

export const BasicBlockies = () => (
  <div style={{ padding: 20 }}>
    <Blockies text="0x3484040A7c337A95d0eD7779769ffe3e14ecCcA6" />
    <br />
    <Blockies text="0x997E6ee26e8296Bb8633a8196A948717e004B01e" />
    <br />
    <Blockies text="0x24D902f4e6B6557756490abcc4b22D888dbe0B4A" />
  </div>
);
