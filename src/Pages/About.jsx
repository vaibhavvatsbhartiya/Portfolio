import React from 'react';
import Heading from '../components/Heading';
import img from '../assets/image/V2.png'; 

const About = () => {
  return (
    <div className='max-w-[1280px] border border-black h-auto p-5 flex flex-col items-center my-10 mx-auto'>
      <div className='pb-5'>
      <Heading heading='About me'/>
    </div>
    <div className='main_div flex border border-black w-full justify-evenly p-5'>
    <div className="left_div h-full w-1/2">
      <img src={img} alt="my_pic" />
    </div>
    <div className="right_div w-1/2  "> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis at voluptates eligendi laudantium nihil odit quidem corrupti! Explicabo provident unde deleniti ullam libero modi id culpa repudiandae est nostrum. Commodi, laborum. Dolores obcaecati distinctio expedita officia, commodi optio quam fuga quaerat quasi quae voluptatem, ipsam esse reiciendis temporibus eum? Id nesciunt autem veritatis eius ad blanditiis numquam recusandae eaque? Eveniet quasi eligendi officia facilis illo atque ut beatae sunt libero autem dolore expedita aspernatur a, fugit quaerat ree, at nihil suscipit. </div>
    </div>
    </div>
  )
}

export default About;
