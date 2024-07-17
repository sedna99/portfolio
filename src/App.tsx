import "@/index.css";
import Info from "@/sections/Info";
import Divider from "./components/Divider";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Objective from "./sections/Objective";
import Experiences from "./sections/Experiences";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  return (
    <Wrapper>
      <Container>
        <Divider />
        <Info />
        <Divider />
        <Objective />
        <Divider />
        <Skills />
        <Divider />
        <Experiences />
        <Divider />
        <Projects />
        <Divider />
      </Container>
    </Wrapper>
  );
}

export default App;
