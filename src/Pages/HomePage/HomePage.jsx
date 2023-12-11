import About from "./About/About";
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
    </div>

  );
};

export default HomePage;
