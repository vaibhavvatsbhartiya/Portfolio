import React from 'react';

const SmallHeading = (props) => {
  return (
    <div className='font-bold text-xl  md:text-2xl ' >
      {props.heading}
    </div>
  )
}

export default SmallHeading;
