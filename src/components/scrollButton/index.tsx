import React, { useEffect, useState } from 'react';
import * as S from './style';
import { FaAngleUp } from 'react-icons/fa6';

export default function ScrollButton() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    // console.log(position);S
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);
  return (
    <>
      {scrollPosition > 10 ? (
        <S.ScrollTopButton onClick={scrollToTop}>
          <FaAngleUp />
        </S.ScrollTopButton>
      ) : (
        ''
      )}
    </>
  );
}
