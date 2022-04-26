//React
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import { Home } from "./pages/Home";

//Styles
import GlobalStyles from "./styles/GlobalStyles";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/br" element={<Home />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}
