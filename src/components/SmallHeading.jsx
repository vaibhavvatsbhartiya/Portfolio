import React from 'react';

const SmallHeading = (props) => {
  return (
    <div className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl' >
      {props.heading}
    </div>
  )
}

export default SmallHeading;
