import React from 'react';

export type WalletProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

// TODO: 暂时无法安装 可能需要 iframe 导入别的平台来显示
export function Wallet({ text }: WalletProps) {
  return (
    <div>
      <iframe width="500px" height="500px" src="https://chain-temp.vercel.app/"></iframe>
    </div>
  );
}

