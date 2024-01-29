import styled from 'styled-components';
export const Container = styled.section`
  padding: 20px;
  /* background: #00ae96; */
  background: linear-gradient(to bottom, #00ae96 35%, #fff 30%);
  color: #ffff;

  @media (min-width: 2000px) {
    background: linear-gradient(to bottom, #00ae96 35%, #fff 30%);
    padding: 20px 300px;
  }
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }

  .black {
    color: black;
    font-weight: bold;
    @media (max-width: 1169px) {
      color: white;
    }
  }
`;
export const Title = styled.h1`
  text-align: center;
  padding: 20px;
  font-size: 2rem;
  color: #ffff;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 5px;
  }
`;

export const CardTitle = styled.h1`
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 5px;
  }
`;

export const CardLocation = styled.h3`
  margin-top: 10px;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const CardDescription = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Techs = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const iconStyles = {
  background: '#2199BF',
  color: '#fff',
};

export const contentArrowStyle = {
  borderRight: '7px solid  #2199BF',
};
export const contentStyle = {
  background: '#6E07F3',
  color: '#fff',
  borderLeft: '7px solid  #F14613',
};
