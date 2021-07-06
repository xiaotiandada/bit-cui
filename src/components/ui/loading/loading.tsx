import React from 'react';
import styles from './loading.module.scss';

export type LoadingProps = {};

export function Loading() {
  return (
    <span className={styles.dotting}></span>
  );
}
