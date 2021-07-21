import React, { useState, useMemo } from 'react';
import { useSpring, animated } from 'react-spring'
import styles from './layout-two.module.scss'

export type LayoutTwoProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function LayoutTwo({ text }: LayoutTwoProps) {
    // animated start
    const animatedDecoration = useSpring({
      from: { x: 40, opacity: 0 },
      to: { x: 0, opacity: 1 },
    })
    const animatedMain = useSpring({
      from: { x: -40, opacity: 0 },
      to: { x: 0, opacity: 1 },
    })
    // animated end

  return (
    <section className={ styles.wrapper }>
      <section className={ styles.wrapperInner }>
        <animated.section style={{ ...animatedMain }} className={ styles.wrapperMain }>
        </animated.section>
        <animated.img src={ 'https://ipfs.fleek.co/ipfs/bafybeibvduanginptov4bavsqaa7u4h5jcbfbhb5xisbw3mpxyhijhosoq' } alt="书桌" style={{ ...animatedDecoration }} className={ styles.decoration } />
      </section>
    </section>
  );
}
