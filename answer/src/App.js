import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Menu from "./pages/Menu";
import Main from "./pages/Main";
import Login from "./pages/Login";
import MenuDetail from "./pages/MenuDetail";
import MenuRegist from "./pages/MenuRegist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="menu">
            <Route index element={<Menu />} />
            <Route path=":id" element={<MenuDetail />} />
            <Route path="regist" element={<MenuRegist />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
