import React, { useEffect, useState } from 'react';
import { FaXmark, FaAlignJustify } from 'react-icons/fa6';

import * as S from './styles';
import Logo from '../../assets/logo.png';

export default function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    // console.log(position);S
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setIsMobileNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <S.NavBar open={isMobileNavOpen}>
      <S.Header positionScroll={scrollPosition}>
        <S.Logo src={Logo} />
        <S.MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
          {isMobileNavOpen ? <FaXmark /> : <FaAlignJustify />}
        </S.MobileNavToggle>
      </S.Header>

      <S.DesktopNav>
        <S.NavItem>
          <a href="/">Home</a>
        </S.NavItem>
        <S.NavItem>
          <a href="/">Sobre</a>
        </S.NavItem>
        <S.NavItem>
          <a href="/">Projetos</a>
        </S.NavItem>
        <S.NavItem>
          <a href="/">Contato</a>
        </S.NavItem>
      </S.DesktopNav>
      <S.MobileNav open={isMobileNavOpen}>
        <S.NavItem>
          <a href="/">Home</a>
        </S.NavItem>
        <S.NavItem>
          <a href="/">Sobre</a>
        </S.NavItem>
        <S.NavItem>
          <a href="/">Projetos</a>
        </S.NavItem>
        <S.NavItem>
          <a href="/">Contato</a>
        </S.NavItem>
      </S.MobileNav>
    </S.NavBar>
  );
}
