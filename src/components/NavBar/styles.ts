import styled from 'styled-components';

interface NavBarProps {
  open: boolean;
}
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NavBar = styled.nav<NavBarProps>`
  position: fixed;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s ease-in-out;
  background-color: ${(props) => (!props.open ? 'transparent' : 'white')};
  padding: 1rem;
  @media (min-width: 1700px) {
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;
  font-size: 1.5rem;

  a {
    color: #00ae96;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #6e07f3;
    }
  }
`;

export const Logo = styled.img`
  width: 50px;
  margin: 0;
`;

export const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #00ae96;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const MobileNav = styled.ul<NavBarProps>`
  position: absolute;
  top: ${(props) => (props.open ? '80px' : '-200px')};
  text-align: center;
  gap: 15px;
  margin: 0;
  padding: 0 0 20px 0;
  background: white;
  width: 100%;
  transition: 0.5s ease-in-out;

  @media (min-width: 768px) {
    display: none !important;
  }
`;
