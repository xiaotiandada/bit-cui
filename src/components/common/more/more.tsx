import React, { useEffect, useMemo } from 'react';
import styles from "./more.module.scss";
import { Dropdown, Menu } from 'antd';
import { QuestionOutlined, LinkOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export type MoreProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};


export function More({ text }: MoreProps) {

  useEffect(() => {
    console.log(text)
  }, [])

  const MenuJson = useMemo(() => {
    return [
      {
        title: '联系我们',
        item: [
          {
            url: 'https://github.com/xiaotiandada',
            icon: <LinkOutlined />,
            name: 'Github'
          },
          {
            url: 'https://github.com/xiaotiandada',
            icon: <LinkOutlined />,
            name: 'Other'
          },
        ]
      },
      {
        title: '友情链接',
        item: [
          {
            url: 'https://github.com/xiaotiandada',
            icon: <LinkOutlined />,
            name: 'Github'
          },
          {
            url: 'https://github.com/xiaotiandada',
            icon: <LinkOutlined />,
            name: 'Github'
          },
          {
            url: 'https://github.com/xiaotiandada',
            icon: <LinkOutlined />,
            name: 'Github'
          },
          {
            url: 'https://github.com/xiaotiandada',
            icon: <LinkOutlined />,
            name: 'Github'
          },
          {
            url: 'https://github.com/xiaotiandada',
            icon: <LinkOutlined />,
            name: 'Github'
          },
        ]
      },
      {
        title: '其他',
        item: [
          {
            url: 'https://github.com/xiaotiandada',
            icon: <LinkOutlined />,
            name: 'Github'
          },
          {
            url: 'https://github.com/xiaotiandada',
            icon: <LinkOutlined />,
            name: 'Github'
          },
        ]
      }
    ]
  }, [])

  const menu = (
    <Menu>
      {
        MenuJson.map((i, idx) => (
          <React.Fragment key={idx}>
            <span className="slider-title">{i.title}</span>
            {
              i.item.map((j, idxJ) => (
                <Menu.Item key={idxJ} icon={ j.icon && j.icon }>
                    <a target="_blank" rel="noopener noreferrer" href={j.url}>
                      {j.name}
                    </a>
                </Menu.Item>
              ))
            }
            {
              idx < MenuJson.length - 1 ? <Menu.Divider /> : null
            }
          </React.Fragment>
        ))
      }
    </Menu>
  )

  return (
    <Dropdown overlay={menu} placement="topLeft" overlayClassName={ styles['custom-slider-more'] } trigger={['hover']}>
      <QuestionOutlined />
    </Dropdown>
  );
}
