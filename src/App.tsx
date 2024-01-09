import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Home,
  Layout,
  Page404,
  VanDetails,
  Vans,
} from "./components/utils/helper";

import "./server";
import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
