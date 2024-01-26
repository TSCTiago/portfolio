import { Routes as RoutesContainer, Route } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/NavBar';
export function Routes() {
  return (
    <>
      <NavBar />
      <RoutesContainer>
        <Route path="/" element={<Home />} />
      </RoutesContainer>
    </>
  );
}
