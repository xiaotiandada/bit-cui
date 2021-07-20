import React from 'react';
import { Card } from './card';
import { CardProps } from './card'

const data = {
  type: 'image',
  content: 'https://ipfs.fleek.co/ipfs/QmZRLdFkLXjtCYSVjT96dgfV11dUGo7cqZ3m9c45B8Xc7e',
  poster: '',
  title: 'JK NFT Card Title',
  creator: {
    username: 'xiaotian',
    avatar: 'http://p0.itc.cn/q_70/images03/20201208/85598169d1b34c38afb460b8045094ae.png'
  },
  price: '2 Token'
} as CardProps

const dataAudio = {
  type: 'audio',
  content: 'https://stream.mux.com/Keq1IO7KZbkkOxaM00pHQvvR401JOjy5tMeXS1ZJCCJ2o/audio.m4a',
  poster: '',
  title: 'JK NFT Card Title',
  creator: {
    username: 'xiaotian',
    avatar: 'http://p0.itc.cn/q_70/images03/20201208/85598169d1b34c38afb460b8045094ae.png'
  },
  price: '2 Token'
} as CardProps

const dataVideo = {
  type: 'video',
  content: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
  poster: 'https://lh3.googleusercontent.com/proxy/klNNXP_X0Lz6zyXHgeThLNGLxLmoZiaifpyOKnm--YUCzWk9urhU66ysS1_JT4reqIpunvYMxUB9_UYFi8HYCzyRK66od9TeB5S_FSaZo3u0wHO7pPEDHyF4rMx8eYmjLo8gUDo4KmUgL-fq-4alxhzOgzptHQ08r85mM9gsSOnAMP4PKw',
  title: 'JK NFT Card Title',
  creator: {
    username: 'xiaotian',
    avatar: 'http://p0.itc.cn/q_70/images03/20201208/85598169d1b34c38afb460b8045094ae.png'
  },
  price: '2 Token'
} as CardProps

const dataOther = {
  type: 'text',
  content: 'https://ipfs.fleek.co/ipfs/QmZRLdFkLXjtCYSVjT96dgfV11dUGo7cqZ3m9c45B8Xc7e',
  poster: '',
  title: 'JK NFT Card Title',
  creator: {
    username: 'xiaotian',
    avatar: 'http://p0.itc.cn/q_70/images03/20201208/85598169d1b34c38afb460b8045094ae.png'
  },
  price: ''
} as CardProps

export const BasicCard = () => (
  <div style={{ padding: 20, display: 'grid', gridGap: 20, gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
    <Card {...data} />
    <Card {...dataAudio} />
    <Card {...dataVideo} />
    <Card {...dataOther} />
  </div>
);
