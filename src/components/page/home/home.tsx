import React, { useCallback } from 'react'
import {
  useSpringRef,
  useChain,
  useSpring,
  animated,
  Spring,
} from 'react-spring'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'
// import Header from '../../components/Header/index'
import styles from './home.module.scss'

const Item1 = 'https://ipfs.fleek.co/ipfs/bafybeigrryzk6bsj63epwfkyskgzwj4zors53uodywnu2txo3cbktqai3e'
const Item2 = 'https://ipfs.fleek.co/ipfs/bafybeic6drfj2rnf7em4dqj7tcube43pc2anhb57rwrwnp3hescyrjxrie'
const Item3 = 'https://ipfs.fleek.co/ipfs/bafybeicwpd4cz6coshivxg2eyfrt2wkib5korzp7vudwhf2xtkzee4zyvq'
const Item4 = 'https://ipfs.fleek.co/ipfs/bafybeicwpd4cz6coshivxg2eyfrt2wkib5korzp7vudwhf2xtkzee4zyvq'

export type HomeProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Home({ text }: HomeProps) {
  // animated start
  const animatedHead = useSpring({
    from: { backgroundColor: '#fff' },
    to: { backgroundColor: '#f5f5f5' },
    duration: 1000,
  })

  const springRefTitle = useSpringRef()
  const animatedTitle = useSpring({
    from: { y: 10, opacity: 0 },
    to: { y: 0, opacity: 1 },
    ref: springRefTitle,
  })

  const springRefDescription = useSpringRef()
  const animatedDescription = useSpring({
    from: { y: 10, opacity: 0 },
    to: { y: 0, opacity: 1 },
    ref: springRefDescription,
  })

  useChain([springRefTitle, springRefDescription], [0, 0.3])

  const animatedItemLeftConfig = useCallback((state) => {
    return state ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }
  }, [])
  const animatedItemRightConfig = useCallback((state) => {
    return state ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }
  }, [])

  // animated end

  return (
    <>
      <animated.section style={{ ...animatedHead }} className={ styles.head }>
        <animated.h1 style={{ ...animatedTitle }} className={ styles.headTitle }>
          Welcome to <a href="">UCenter!</a>
        </animated.h1>

        <animated.p style={{ ...animatedDescription }} className={ styles.headDescription }>
          Get started
        </animated.p>
      </animated.section>

      <section className={ styles.item }>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemLeftConfig(isVisible)}>
              {(stylesSpring) => (
                <animated.img style={stylesSpring} className={ styles.itemImg } src={Item1} alt="illustration" />
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemRightConfig(isVisible)}>
              {(stylesSpring) => (
                <animated.a className={styles.itemCard} href="https://nextjs.org/docs" style={stylesSpring}>
                  <h2>Documentation &rarr;</h2>
                  <p>
                    Find in-depth information about Next.js features and API.
                  </p>
                </animated.a>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </section>

      <section className={ styles.item }>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemLeftConfig(isVisible)}>
              {(stylesSpring) => (
                <animated.a className={styles.itemCard} href="https://nextjs.org/learn" style={stylesSpring}>
                  <h2>Learn &rarr;</h2>
                  <p>
                    Learn about Next.js in an interactive course with quizzes!
                  </p>
                </animated.a>
              )}
            </Spring>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemRightConfig(isVisible)}>
              {(stylesSpring) => (
                <animated.img src={Item2} className={ styles.itemImg } alt="illustration" style={stylesSpring} />
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </section>

      <section className={ styles.item }>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemLeftConfig(isVisible)}>
              {(stylesSpring) => (
                <animated.img style={stylesSpring} className={ styles.itemImg } src={Item3} alt="illustration" />
              )}
            </Spring>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemRightConfig(isVisible)}>
              {(stylesSpring) => (
                <animated.a
                  className={styles.itemCard}
                  style={stylesSpring}
                  href="https://github.com/vercel/next.js/tree/master/examples"
                >
                  <h2>Examples &rarr;</h2>
                  <p>
                    Discover and deploy boilerplate example Next.js projects.
                  </p>
                </animated.a>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </section>

      <section className={ styles.item }>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemLeftConfig(isVisible)}>
              {(stylesSpring) => (
                <animated.a
                  className={styles.itemCard}
                  style={stylesSpring}
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                >
                  <h2>Deploy &rarr;</h2>
                  <p>
                    Instantly deploy your Next.js site to a public URL with
                    Vercel.
                  </p>
                </animated.a>
              )}
            </Spring>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemRightConfig(isVisible)}>
              {(stylesSpring) => (
                <animated.img style={stylesSpring} className={ styles.itemImg } src={Item4} alt="illustration" />
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </section>
      <footer className={ styles.footer }>© 2021 Meta Network All Rights Served</footer>
    </>
  )
}

