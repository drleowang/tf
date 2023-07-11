import React, { useState } from 'react';
import Survey from './survey';

const PopUpWindow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? (
        <div className="popup-window-overlay">
          <div className="popup-window">
            <div className="content">

            
            <Survey/>
            </div>
            <button className="close-button" onClick={toggleWindow}>
              Close
            </button>
          </div>
        </div>
      ) : (
        <button className="open-window-button" onClick={toggleWindow}>
          Open Window
        </button>
      )}
    </div>
  );
};

export default PopUpWindow;
