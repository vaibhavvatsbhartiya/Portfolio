import imga from "../image/React_developer.png";
import imgb from "../image/Wordpress.png";
import imgc from '../image/Ai_websites.png';
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
// import { SiFreelancer } from "react-icons/si"; // used in future
// import { FaRegFaceMehBlank } from "react-icons/fa6"; // used in future


const Sdata = [
    {
      id: 1,
      image: imga,
      altText: "React Developer",
      title: "React Developer",
      icon1: <SiUpwork />,
      icon2: <TbBrandFiverr/>,
      text: "Engaging with users as a React developer involves showcasing the power of interactive and dynamic web solutions. By highlighting the seamless user experiences and enhanced interactivity that React.js brings, I aim to captivate clients' attention.",
    },
    {
      id: 2,
      image: imgb,
      altText: "Wordpress based Websites",
      title: "Wordpress Websites",
      icon1: <SiUpwork />,
      icon2: <TbBrandFiverr/>,
      text: "When engaging with users as a WordPress developer, my focus is on delivering versatile and user-friendly website solutions. I highlight the ease of content management, customization options, and the scalability that WordPress offers.",
    },
    {
      id: 3,
      image: imgc,
      title: "AI Based Websites",
      altText: "AI Based Websites",
      icon1: <SiUpwork />,
      icon2: <TbBrandFiverr/>,
      text: "Interacting with users as an AI-based website developer involves emphasizing the transformative power of artificial intelligence in enhancing their online presence. I communicate how AI-driven features can intelligently personalize user experiences.",
    },
  ];

  export default Sdata;