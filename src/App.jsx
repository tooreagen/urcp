import { GlobalStyle } from "./components/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./components/MainPage/MainPage";

export const App = () => {
  return (
    //Заглушка, що сайт не працює
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Сайт тимчасово не працює</h1>
      <p>Просимо вибачення за незручності.</p>
      <p>Зверніться до адміністратора</p>
    </div>
    //Заглушка, що сайт не працює
    // <>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<MainPage />} />
    //       <Route path="*" element={<MainPage />} />
    //     </Route>
    //   </Routes>
    //   <GlobalStyle />
    // </>
  );
};
