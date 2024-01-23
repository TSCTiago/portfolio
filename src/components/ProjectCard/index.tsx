import React from 'react';
import * as S from './style';
import { CodeSlash, ArrowForward } from '@styled-icons/ionicons-solid';
import { Html5, Css3, Javascript, ReactLogo } from '@styled-icons/boxicons-logos';
interface CardProps {
  title: string;
  subtitle: string;
}
export default function ProjectCard({ title, subtitle }: CardProps) {
  return (
    <S.Card>
      <S.Img
        src="https://s3-alpha.figma.com/hub/file/1878891985/cab9faa8-1376-4488-ab71-125e5832e138-cover.png"
        alt="portfolio"
      />

      <S.DivInfos>
        <S.DivTitle>
          <S.Icon>
            <CodeSlash size={30} />
          </S.Icon>
          <S.Title>{title}</S.Title>
        </S.DivTitle>
        <S.SubTitle>{subtitle}</S.SubTitle>

        <S.TechText>Techs:</S.TechText>

        <S.DivLogos>
          <Html5 size={60} />
          <Css3 size={60} />
          <Javascript size={60} />
          <ReactLogo size={60} />
        </S.DivLogos>
        <S.DivLink>
          <S.Link href="#">Ver respositóri</S.Link>
          <span>
            <ArrowForward size={30} />
          </span>
        </S.DivLink>
      </S.DivInfos>
      <S.Tag />
    </S.Card>
  );
}
