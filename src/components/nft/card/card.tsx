import React from 'react';
import styles from "./card.module.scss";
// import { Avatar, Button } from 'antd';
// import 'antd/dist/antd.css';
// import 'antd/es/button/style/index.css'
// import 'antd/es/avatar/style/index.css'
// import { UserOutlined } from '@ant-design/icons';

export type CardProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
  /**
   * a type to be rendered in the component.
   */
  type: string;
  content: string;
  poster?: string;
  /**
   * a title to be rendered in the component.
   */
  title: string;
  creator: {
    username: string
    avatar: string
  };
  currentAsk?: {
    currency: string;
    amount: any;
  };
  /**
   * a price to be rendered in the component.
   */
  price: string
};

export function Card({
  type,
  content,
  poster,
  title,
  creator,
  price
}: CardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <a target='_blank' className={styles.headUser} href={`/${creator?.username!}`}>
          {creator?.avatar ? (
            // <Avatar
            //   className={styles.headUserAvatar}
            //   icon={<UserOutlined />}
            //   src={creator?.avatar}
            // />
            'avatar'
          ) : null}
          <span className={ styles.headUsername }>{creator?.username}</span>
        </a>
      </div>
      <div className={styles.content}>
        {type === 'image' ? (
          <div className='media-images'>
            <img src={content} alt='Content' />
          </div>
        ) : type === 'video' ? (
          <video
            src={content}
            loop
            playsInline
            // autoPlay
            // poster={poster}
            className='media-video'></video>
        ) : type === 'audio' ? (
          <div className='media-audio'>
            <a href={content} target='_blank' rel='noreferrer'>
              {/* <Button style={{ margin: '40px 0' }}>Audio Play</Button> */}
            </a>
            {/* <AudioRender src={content!.medium} mode='simple'></AudioRender> */}
          </div>
        ) : type === 'text' ? (
          <div className='media-text'>
            <a href={content} target='_blank' rel='noreferrer'>
              {/* <Button style={{ margin: '40px 0' }}>Text View</Button> */}
            </a>
          </div>
        ) : type === 'file' ? (
          <div className='media-file'>
            <a href={content} target='_blank' rel='noreferrer'>
              {/* <Button style={{ margin: '40px 0' }}>File View</Button> */}
            </a>
          </div>
        ) : type === 'url' ? (
          <div className='media-url'>
            <a href={content} target='_blank' rel='noreferrer'>
              {/* <Button style={{ margin: '40px 0' }}>Url View</Button> */}
            </a>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={styles.footer}>
        <h5>{title}</h5>
        <div className={styles.footerPrice}>
          <div>
            <p className='price'> {price} </p>
            <p className='name'>List price</p>
          </div>
        </div>
      </div>
    </div>
  );
}
