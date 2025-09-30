import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import ScrollToTopButton from "./components/ScrollToTopButton";

import ThemeSelect from "./components/Theme/ThemeSelect";

function App() {
  return (
    <>
      <ThemeSelect />
      <CustomCursor />
      <Hero />
      <Projects />
      <TechStack />
      <Contact />
      <ScrollToTopButton /> {/* Add the ScrollToTopButton component */}
    </>
  );
}

export default App;
