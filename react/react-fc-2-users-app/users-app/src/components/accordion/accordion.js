import React, { useState } from 'react';

import './accordion.css';

export const Accordion = ({
  image: imageUrl,
  title,
  children
}) => {
  const [isOpened, setIsOpened] = useState(false);
  // console.log('Render', isOpened);

  const image = imageUrl ? (
    <div className='image'>
      <img
        alt={title}
        src={imageUrl}
      />
    </div>
  ) : null;

  const buttonClickHandler = () => {
    // setIsOpened(!isOpened);
    setIsOpened((prevState) => {
      console.log(prevState);
      return !prevState;
    });
  }

  return (
    <article className='accordion'>
      <header>
        <div className='accordion-title'>
          {image}
          <h4>{title}</h4>
        </div>
        <button className='btn' onClick={buttonClickHandler}>
          {isOpened ? '-' : '+'}
        </button>
      </header>
      {isOpened && children}
    </article>
  )
};
