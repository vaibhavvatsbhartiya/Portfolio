import imga from "../image/ReachOut_connect.png";
import imgb from "../image/Portfolio.png";
import imgc from '../image/Netflix_card.png';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Pdata = [
    {
      id: 1,
      image: imga,
      altText: "ReachOut Connect Web App",
      title: "ReachOut Connect ",
      icon1: <BsGithub />,
      icon2: <BsLinkedin/>,
      link1:"https://github.com/vaibhavvatsbhartiya/ReachOut_Connect_Frontend",
      link2:"https://www.linkedin.com/posts/vaibhav-vats-_github-vaibhavvatsbhartiyareachoutconnectfrontend-activity-7151110296567214081-6gJR?",
      text: "ReachOut Connect, your personalized emergency response network tailored for rural areas. In moments of uncertainty, this platform stands as your beacon of support, linking communities with timely assistance and fostering a network of local heroes. ReachOut Connect is based on 'MERN Stack'.",
    },
    {
      id: 2,
      image: imgb,
      altText: "My Portfolio Web App",
      title: "My Portfolio",
      icon1: <BsGithub />,
      icon2: <BsLinkedin/>,
      link1:"https://github.com/vaibhavvatsbhartiya/Portfolio",
      link2:"https://github.com/vaibhavvatsbhartiya/ReachOut_Connect_Frontend",
      text: "Welcome to Vaibhav's innovative portfolio crafted with precision using React and Tailwind CSS. Explore a seamless fusion of cutting-edge technology and sleek design, showcasing Vaibhav's expertise in web development. Elevate your digital experience as you navigate through this dynamic showcase of skills and creativity.",
    },
    {
      id: 3,
      image: imgc,
      title: "Netflix Card",
      altText: "Netflix Card Component",
      icon1: <BsGithub />,
      icon2: <BsLinkedin/>,
      link1:"https://github.com/vaibhavvatsbhartiya/Netflix_component",
      link2:"https://www.linkedin.com/posts/vaibhav-vats-_my-first-react-app-link-httpslnkdin-activity-7095986723490267136-Vk0J?",
      text: "Introducing my card component – a responsive design that seamlessly integrates with React applications. With attention to detail and a user-friendly interface, this component enhances the visual appeal of your content presentation. Elevate your React projects with Vaibhav's expertly crafted card component.",
    },
  ];

  export default Pdata;