import React from 'react';
import styles from './header.module.scss'

export type HeaderProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Header({ text }: HeaderProps) {
  return (
    <header className={ styles.header }>
    <div className={ styles.container }>
        <a>
          <div></div>
        </a>
      <div className={ styles.other }>
        <nav>
          <a className={ styles.navLink }>Home</a>
          <a className={ styles.navLink }>About</a>
        </nav>

        <div className={ styles.account }>
            <a>
              <button className={ styles.accountButton }>Sign In</button>
            </a>
        </div>
      </div>
    </div>
  </header>
  );
}
