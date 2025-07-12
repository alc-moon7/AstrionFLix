import React, { useEffect } from 'react';

const BrowserPopup = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const popup = document.getElementById('browserPopup');
      if (popup) popup.classList.add('show');
      
      // Auto hide after 3 seconds
      const hideTimer = setTimeout(() => {
        popup.classList.remove('show');
      }, 3000);
      
      return () => clearTimeout(hideTimer);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="popup-container" id="browserPopup">
      <div className="popup-content">
        <div className="popup-icon">
          <i className="fas fa-shield-alt"></i>
        </div>
        <h3>Browser Recommendation</h3>
        <p>Please use <span className="highlight">Brave browser</span> for avoiding ads!</p>
        <div className="popup-progress"></div>
      </div>
    </div>
  );
};

export default BrowserPopup;