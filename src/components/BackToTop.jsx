import React, { useState } from 'react';

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='my-10'>
      <h4 className='text-3xl'>You've seen all the collection</h4>
      <div className='mt-10 text-sm mx-10'>
        <button
          className={`bg-gray-300 text-green-500 py-3 px-6 rounded-xl ${
            showButton ? 'opacity-100' : 'opacity-0'
          } mr-4 hover:bg-green-600`}
        >
          Gallery
        </button>
        <button
          className={`bg-gray-300 text-green-500 py-3 px-6 rounded-xl ${
            showButton ? 'opacity-100' : 'opacity-0'
          } hover:bg-green-600`}
          onClick={handleButtonClick}
        >
          Go Back To Top
        </button>
      </div>
    </div>
  );
}

export default BackToTopButton;
