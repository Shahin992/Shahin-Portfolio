
import Contact from "../Contact/Contact.jsx";
import About from "./About/About";
import Project from "./Project/Project.jsx";
import Services from "./Services/Services.jsx";
import Skills from "./Skills/Skills";

const HomePage = () => {
  return (
    <div>
      <div className="bg-sky-100 my-3 py-10 mb-10 ">
      
      <About></About>
      <Skills></Skills>
    </div>
    <Services></Services>
    <div className="bg-sky-100 my-3 py-10 mb-10 ">
      <Project></Project>
    </div>
    <div className="bg-sky-950">
      <Contact></Contact>
    </div>
    </div>
    

  );
};

export default HomePage;
