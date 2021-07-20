import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useControls } from "leva";
import styles from './card.module.scss'

export type CardProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

const calc = (x: number, y: number, rect: any) => [
  -(y - rect.top - rect.height / 2) / 30,
  (x - rect.left - rect.width / 2) / 30,
  1.05
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export function Card({ text }: CardProps) {
  const ref = useRef<any>(null);
  const [xys, set] = useState([0, 0, 1]);
  const config: any = {
    mass: 1,
    tension: 170,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
    duration: 250,
    easing: (t: any) => t
  }
  const props = useSpring({ xys, config });

  const CardWrapper: React.FC = () => {
    return (
    <div className={ styles.cardWrapper }>
      <div className={ styles.cardWrapperAvatar }>
        <img src="https://cf.shopee.tw/file/4c8551cb45858fd3750ac7a1a1074628" alt="avatar" />
      </div>
      <p>
        learn learnlearnlearnlearnlearnlearnlearnlearnlearnlearn
        learnlearnlearnlearnlearnlearnlearnlearnlearnlearnlearnlearn
        learnlearnlearnlearnlearnlearnlearnlearnlearnlearnlearn
        learnlearnlearnlearnlearnlearnlearnlearn
        learnlearnlearnlearnlearnlearnlearnlearnlearnlearn
      </p>
    </div>
  )}

  return (
    <div className={ styles.cardMain } ref={ref}>
      <animated.div
        className={ styles.card }
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e: any) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
      >
        <CardWrapper></CardWrapper>
      </animated.div>
    </div>
  );
}
