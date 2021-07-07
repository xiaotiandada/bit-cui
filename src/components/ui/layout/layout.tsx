import React from 'react';
import styled from 'styled-components';
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
      <StyledItem target='_blank' href={link} rel="noopener noreferrer">
        <StyledItemCover>
          <StyledItemImg src={cover} alt={text} />
        </StyledItemCover>
        <StyledItemText>{text}</StyledItemText>
      </StyledItem>
    );
  };

  return (
    <StyledWrapper>
      {list.map((i, idx) => (
        <StyledBox key={idx}>
          <Item
            cover={i.cover}
            text={i.title}
            link={i.link}></Item>
        </StyledBox>
      ))}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: grid;
  grid: repeat(2, 1fr) / repeat(4, 1fr);
  grid-row-gap: 22px;
  grid-column-gap: 24px;
  margin-top: 48px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  /* background: red; */
  &:nth-of-type(1) {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  }
  &:nth-of-type(2) {
    grid-row: 1 / 3;
    grid-column: 3 / 4;
  }
  &:nth-of-type(3),
  &:nth-of-type(4) {
  }
`;

const StyledItem = styled.a`
  text-decoration: none;
`;

const StyledItemCover = styled.div`
  width: 100%;
  height: calc(100% - 38px);
  overflow: hidden;
  @media screen and (max-width: 576px) {
    height: calc(100% - 28px);
  }
`

const StyledItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const StyledItemText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #333333;
  margin: 0;
  padding: 0 6px;
  text-decoration: none;
  height: 38px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    height: 28px;
  }
`