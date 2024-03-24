import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/partials/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Error404 from "./pages/Error404";
import Footer from "./pages/partials/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}
