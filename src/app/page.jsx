import Header from "./head_page/page";
import TechStack from "./techstack_page/page";
import Coffee from "./coffee_page/page";
import Projects from "./projects_page/page";

export default function Main() {
  return (
    <div className="scroll-smooth">
      <Header />
      <TechStack />
      <Coffee />
      <Projects />
    </div>
  );
}
