import React from 'react';
import { Layout } from './layout';
import { ListProps } from './index.d'

const list: ListProps[] = [
  { cover: 'https://ipfs.fleek.co/ipfs/QmcRNUHPuQEb4W5CBgNEPzLtsiJUu3seDgeSGtHBVhZJcN', title: 'Title', link: 'https://bit.dev/xiaotiandada/cui' },
  { cover: 'https://ipfs.fleek.co/ipfs/QmcRNUHPuQEb4W5CBgNEPzLtsiJUu3seDgeSGtHBVhZJcN', title: 'Title', link: 'https://bit.dev/xiaotiandada/cui' },
  { cover: 'https://ipfs.fleek.co/ipfs/QmcRNUHPuQEb4W5CBgNEPzLtsiJUu3seDgeSGtHBVhZJcN', title: 'Title', link: 'https://bit.dev/xiaotiandada/cui' },
  { cover: 'https://ipfs.fleek.co/ipfs/QmcRNUHPuQEb4W5CBgNEPzLtsiJUu3seDgeSGtHBVhZJcN', title: 'Title', link: 'https://bit.dev/xiaotiandada/cui' },
]

export const BasicLayout = () => (
  <Layout list={list} />
)
