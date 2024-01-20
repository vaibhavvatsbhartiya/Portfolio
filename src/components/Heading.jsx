import React from 'react';

const Heading = (props) => {
  return (
    <div className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl' >
      {props.heading}
    </div>
  )
}

export default Heading;
