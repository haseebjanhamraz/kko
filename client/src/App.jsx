import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/partials/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
