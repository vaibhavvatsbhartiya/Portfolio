import React from 'react';

const Heading = (props) => {
  return (
    <div className='font-bold text-3xl sm:text-4xl md:text-5xl ' >
      {props.heading}
    </div>
  )
}

export default Heading;
