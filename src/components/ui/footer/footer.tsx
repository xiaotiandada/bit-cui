import React from 'react';
import styles from './footer.module.scss'

export type FooterProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Footer({ text }: FooterProps) {
  return (
    <footer className={ styles.footer }>{ text }</footer>
  );
}
