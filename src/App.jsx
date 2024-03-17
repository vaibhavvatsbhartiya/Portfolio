import React, { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Service from "./Pages/Service";
import UserContactForm from "./Pages/Contact";
import Faq from "./Pages/Faq";

// const App = () => {
//   return (
//     <div className="bg-gradient-to-r from-red-500 to-blue-500 ">
//       <Header id="header" />
//       <div id="banner" class="section">
//         <Banner />
//       </div>
//       <div id="banner" class="section">
//         <About />
//       </div>
//       <div id="banner" class="section">
//         <Service />
//       </div>
//       <div id="banner" class="section">
//         <Project />
//       </div>
//       <div id="banner" class="section">
//         <Faq />
//       </div>
//       <div id="banner" class="section">
//         <UserContactForm />
//       </div>
//     </div>
//   );
// };

const App = () => {

  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const projectRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavLinkClick = (id) => {
    switch (id) {
      case 'banner':
        bannerRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'services':
        serviceRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'project':
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'faq':
        faqRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-500 to-blue-500 ">
      <Header handleNavLinkClick={handleNavLinkClick} />
      <div ref={bannerRef} className="section">
        <Banner />
      </div>
      <div ref={aboutRef} className="section">
        <About />
      </div>
      <div ref={serviceRef} className="section">
        <Service />
      </div>
      <div ref={projectRef} className="section">
        <Project />
      </div>
      <div ref={faqRef} className="section">
        <Faq />
      </div>
      <div ref={contactRef} className="section">
        <UserContactForm />
      </div>
    </div>
  );
};


export default App;
