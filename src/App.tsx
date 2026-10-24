import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
