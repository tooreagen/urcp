import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import MainPage from './MainPage/MainPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
