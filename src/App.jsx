import { GlobalStyle } from './components/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';

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
