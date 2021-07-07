import React from 'react';
import styles from "./layout.module.scss";
import { ListProps } from './index.d'

export type LayoutProps = {
  list: ListProps[]
};

interface AboutProps {
  cover: string;
  text: string;
  link: string;
}
export function Layout({ list }: LayoutProps) {

  const Item: React.FC<AboutProps> = ({ cover, text, link }) => {
    return (
      <a target='_blank' href={link} rel="noopener noreferrer" className={styles.item}>
        <div className={ styles.itemCover }>
          <img className={ styles.itemImg } src={cover} alt={text} />
        </div>
        <p className={ styles.itemText }>{text}</p>
      </a>
    );
  };

  return (
    <div className={ styles.wrapper }>
      {list.map((i, idx) => (
        <div key={idx} className={styles.box}>
          <Item
            cover={i.cover}
            text={i.title}
            link={i.link}></Item>
        </div>
      ))}
    </div>
  );
}

