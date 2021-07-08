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
    avatar: 'https://ipfs.fleek.co/ipfs/QmagFBrDi2A3GPY6fFHhbtKidBsWd41emG6uVpVDvff5fB'
  },
  price: '2 Token'
} as CardProps

export const BasicCard = () => (
  <Card {...data} />
);
