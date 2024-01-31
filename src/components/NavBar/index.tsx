import React, { useEffect } from 'react';
import { FaXmark, FaAlignJustify } from 'react-icons/fa6';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import * as S from './styles';
import Logo from '../../assets/logo.png';

export default function NavBar() {
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
      <S.Header>
        <S.Logo src={Logo} alt="logo" />
        <S.MobileNavToggle aria-label="Toggle Navbar" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
          {isMobileNavOpen ? <FaXmark /> : <FaAlignJustify />}
        </S.MobileNavToggle>
      </S.Header>

      <S.DesktopNav>
        <S.NavItem>
          <AnchorLink href="#home">Home</AnchorLink>
        </S.NavItem>
        <S.NavItem>
          <AnchorLink href="#about">Sobre</AnchorLink>
        </S.NavItem>
        <S.NavItem>
          <AnchorLink href="#experience">Experiências</AnchorLink>
        </S.NavItem>
        <S.NavItem>
          <AnchorLink href="#projects">Projetos</AnchorLink>
        </S.NavItem>
        <S.NavItem>
          <AnchorLink href="#contact">Contato</AnchorLink>
        </S.NavItem>
      </S.DesktopNav>
      <S.MobileNav open={isMobileNavOpen}>
        <S.NavItem>
          <AnchorLink href="#home">Home</AnchorLink>
        </S.NavItem>
        <S.NavItem>
          <AnchorLink href="#about">Sobre</AnchorLink>
        </S.NavItem>
        <S.NavItem>
          <AnchorLink href="#experience">Experiências</AnchorLink>
        </S.NavItem>
        <S.NavItem>
          <AnchorLink href="#projects">Projetos</AnchorLink>
        </S.NavItem>
        <S.NavItem>
          <AnchorLink href="#contact">Contato</AnchorLink>
        </S.NavItem>
      </S.MobileNav>
    </S.NavBar>
  );
}
