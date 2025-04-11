import Container from "../../components/container";
import Footer from "../../components/Footer";

import About from "../about/About";
import Connect from "../Connect/connect";
import Education from "../Education/Education";
import Experience from "../exper/experience";

import Hero from "../hero/hero";
import Projects from "../projects/projects";

const Home = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-10 scroll-smooth font-[poppins]">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Connect />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;