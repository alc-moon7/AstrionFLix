import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import LogoutPage from './components/LogoutPage';
import BrowserPopup from './components/BrowserPopup';
import Loader from './components/Loader';
import VideoCarousel from './components/VideoCarousel';
import VideoModal from './components/VideoModal';

import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [videos, setVideos] = useState([]);
  const [myList, setMyList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Initialize theme and auth state
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    const user = localStorage.getItem('currentUser') || '';
    setIsAuthenticated(authStatus);
    setCurrentUser(user);

    const savedList = JSON.parse(localStorage.getItem('myList')) || [];
    setMyList(savedList);
  }, []);

  // Fetch videos when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchVideos();
    }
  }, [isAuthenticated]);

  const fetchVideos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/.netlify/functions/videos');
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const login = async (username, password) => {
    try {
      const response = await fetch('/.netlify/functions/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (data.success) {
        setIsAuthenticated(true);
        setCurrentUser(username);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('currentUser', username);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
  };

  const toggleMyList = (videoId) => {
    setMyList(prevList => {
      const newList = prevList.includes(videoId)
        ? prevList.filter(id => id !== videoId)
        : [...prevList, videoId];
      localStorage.setItem('myList', JSON.stringify(newList));
      return newList;
    });
  };

  const openVideoModal = (url) => {
    setCurrentVideoUrl(url);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setShowModal(false);
    setCurrentVideoUrl('');
    document.body.style.overflow = 'auto';
  };

  return (
    <Router>
      <div className="app">
        <Loader isLoading={isLoading} />
        <BrowserPopup />

        {showModal && (
          <VideoModal
            videoUrl={currentVideoUrl}
            onClose={closeVideoModal}
          />
        )}

        <Routes>
          <Route
            path="/login"
            element={
              <LoginForm
                onLogin={login}
                onSwitchToSignup={() => {}}
              />
            }
          />
          <Route
            path="/logout"
            element={<LogoutPage onBackToLogin={() => {}} />}
          />
          <Route
            path="*"
            element={
              <>
                <Header
                  isAuthenticated={isAuthenticated}
                  currentUser={currentUser}
                  onThemeToggle={toggleTheme}
                  onLoginClick={() => window.location.href = '/login'}
                  onLogout={logout}
                  currentTheme={currentTheme}
                />

                <HeroBanner onPlay={() => openVideoModal('https://www.youtube.com/embed/UWMzKXsY9A4')} />

                <main className="content-section">
                  <VideoCarousel
                    videos={videos}
                    myList={myList}
                    onAddToList={toggleMyList}
                    onPlayVideo={openVideoModal}
                  />
                </main>

                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
