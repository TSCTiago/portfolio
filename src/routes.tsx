import { Routes as RoutesContainer, Route } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/NavBar';

import { ReactNotifications } from 'react-notifications-component';
import ScrollButton from './components/scrollButton';
export function Routes() {
  return (
    <>
      <ReactNotifications />
      <ScrollButton />
      <NavBar />
      <RoutesContainer>
        <Route path="/" element={<Home />} />
      </RoutesContainer>
    </>
  );
}
