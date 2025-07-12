import React from 'react';

const Header = ({ 
  isAuthenticated, 
  currentUser, 
  onThemeToggle, 
  onLoginClick, 
  onLogout,
  currentTheme
}) => {
  return (
    <header className="glass-effect">
      <div className="logo">
        <div className="avatar pulse">
          <img src="/assets/logo.png" alt="AstrionFLix Logo" />
        </div>
        <h1>AstrionFLix <span className="moon-beta">(Beta)</span></h1>
      </div>

      <nav>
        <ul>
          <li><a href="#" className="nav-link active" data-section="home">Home</a></li>
          <li><a href="#" className="nav-link" data-section="movies">Movies</a></li>
          <li><a href="#" className="nav-link" data-section="tv">TV Shows</a></li>
          <li><a href="#" className="nav-link" data-section="mylist">My List</a></li>
        </ul>
      </nav>
      
      <div className="user-actions">
        <div className="search-box glass-effect">
          <i className="fas fa-search"></i>
          <input type="text" id="searchInput" placeholder="Search..." aria-label="Search videos" />
        </div>
        
        <button 
          className="theme-toggle" 
          onClick={onThemeToggle}
          aria-label="Toggle theme"
        >
          <i className={currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
        </button>
        
        {isAuthenticated ? (
          <div className="user-profile" onClick={onLogout}>
            <div className="avatar" id="userAvatar">
              {currentUser.charAt(0).toUpperCase()}
            </div>
            <span className="neon-text" id="userStatus">{currentUser}</span>
          </div>
        ) : (
          <div className="auth-buttons" id="authButtons">
            <button className="btn btn-secondary" onClick={onLoginClick}>
              Login
            </button>
            <button className="btn btn-primary" onClick={onLoginClick}>
              Sign Up
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;