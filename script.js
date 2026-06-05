// ========================
// STATE MANAGEMENT
// ========================
let myList = JSON.parse(localStorage.getItem('myList')) || [];
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentUser = localStorage.getItem('currentUser') || null;
let videos = [];

// ========================
// DOM ELEMENTS
// ========================
const contentSection = document.getElementById('contentSection');
const myListSection = document.getElementById('myListSection');
const myListCarousel = document.getElementById('myListCarousel');
const emptyListMessage = document.getElementById('emptyListMessage');
const searchInput = document.getElementById('searchInput');
const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const closeModal = document.getElementById('closeModal');
const themeToggle = document.getElementById('themeToggle');
const navLinks = document.querySelectorAll('.nav-link');
const playFeatured = document.getElementById('playFeatured');
const browserPopup = document.getElementById('browserPopup');
const userProfile = document.getElementById('userProfile');
const authButtons = document.getElementById('authButtons');
const userAvatar = document.getElementById('userAvatar');
const userStatus = document.getElementById('userStatus');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const submitLogin = document.getElementById('submitLogin');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const loginError = document.getElementById('loginError');
const backToLogin = document.getElementById('backToLogin');
const loader = document.getElementById('loader');

// ========================
// HELPER FUNCTIONS
// ========================
function showLoader() {
    loader.style.display = 'flex';
}

function hideLoader() {
    loader.style.display = 'none';
}

function isAuthenticated() {
    return localStorage.getItem('isAuthenticated') === 'true';
}

function syncHeaderHeight() {
    const header = document.querySelector('header');
    if (!header) return 0;

    const headerHeight = Math.ceil(header.offsetHeight);
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    return headerHeight;
}

// ========================
// INITIALIZATION
// ========================
document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    syncHeaderHeight();
    setupEventListeners();
    updateAuthUI();
    window.addEventListener('load', syncHeaderHeight);
    
    // Only fetch videos if authenticated
    if (isAuthenticated()) {
        videos = await fetchVideos();
        renderAllCarousels();
        renderMyList();
    }
    
    // Show popup after page loads
    setTimeout(() => {
        browserPopup.classList.add('show');
        
        // Auto hide after 4 seconds
        setTimeout(() => {
            browserPopup.classList.remove('show');
        }, 3000);
    }, 1000);
});

// ========================
// THEME MANAGEMENT
// ========================
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.innerHTML = currentTheme === 'dark' 
        ? '<i class="fas fa-moon"></i>' 
        : '<i class="fas fa-sun"></i>';
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    themeToggle.innerHTML = currentTheme === 'dark' 
        ? '<i class="fas fa-moon"></i>' 
        : '<i class="fas fa-sun"></i>';
}

// ========================
// VIDEO DATA MANAGEMENT
// ========================
async function fetchVideos() {
    showLoader();

    try {
        const response = await fetch('/.netlify/functions/videos');
        if (!response.ok) throw new Error(`Function returned ${response.status}`);

        const videoData = await response.json();
        if (!Array.isArray(videoData)) throw new Error('Function response was not a video list');

        return videoData;
    } catch (error) {
        console.warn('Netlify video function failed, loading local fallback:', error);

        try {
            const fallbackResponse = await fetch('assets/videos.json');
            if (!fallbackResponse.ok) throw new Error(`Fallback returned ${fallbackResponse.status}`);

            const fallbackVideos = await fallbackResponse.json();
            return Array.isArray(fallbackVideos) ? fallbackVideos : [];
        } catch (fallbackError) {
            console.error('Error fetching videos:', fallbackError);
            return [];
        }
    } finally {
        hideLoader();
    }
}


// ========================
// RENDERING FUNCTIONS
// ========================
function renderAllCarousels() {
    contentSection.innerHTML = '';
    
    // Create carousel sections
    const sections = [
        { id: 'hotCarousel', title: 'Newly Added Content', filter: video => video.isHot },
        { id: 'trendingCarousel', title: 'Trending Now', filter: video => video.isTrending },
        { id: 'slineCarousel', title: 'S Line Season 1 (k-Series)', filter: video => video.isSlines },
        { id: 'arrivedCarousel', title: 'Squid Game Season 3', filter: video => video.isArrived },
        { id: 'newdaagiCarousel', title: 'Bangla Movies', filter: video => video.isDaagi },
        { id: 'banglaseriesCarousel', title: 'Bangla Series', filter: video => video.isBseries },
        { id: 'lokiCarousel', title: 'Loki Season 1', filter: video => video.isLoki },
        { id: 'lokitwoCarousel', title: 'Loki Season 2', filter: video => video.isLokitwo },
        { id: 'newReleasesCarousel', title: 'Panchayat Season 4', filter: video => video.isNew },
        { id: 'popularCarousel', title: 'Popular Shows', filter: video => video.isPopular },
        { id: 'hindiCarousel', title: 'Hindi Movies', filter: video => video.isHindi },
        { id: 'southCarousel', title: 'South Hindi Dubbed', filter: video => video.isSouth },
        { id: 'actionCarousel', title: 'Action', filter: video => video.isAction },
        // { id: 'dramaCarousel', title: 'Drama', filter: video => video.isDrama },
        { id: 'horrorCarousel', title: 'Horror 👻 (new)', filter: video => video.isHorror },
        { id: 'comedyCarousel', title: 'Experimental MKV Player (Only Sam Online)', filter: video => video.isComedy }
    ];
    
    sections.forEach(section => {
        const filteredVideos = videos.filter(section.filter);
        if (filteredVideos.length > 0) {
            const sectionElement = document.createElement('div');
            sectionElement.className = 'carousel-section';
            sectionElement.innerHTML = `
                <div class="section-header">
                    <h3>${section.title}</h3>
                </div>
                <div class="carousel">
                    <div class="carousel-container" id="${section.id}"></div>
                    <button class="carousel-arrow left" aria-label="Scroll left"><i class="fas fa-chevron-left"></i></button>
                    <button class="carousel-arrow right" aria-label="Scroll right"><i class="fas fa-chevron-right"></i></button>
                </div>
            `;
            contentSection.appendChild(sectionElement);
            
            renderCarousel(document.getElementById(section.id), filteredVideos);
        }
    });
}

function renderMoviesSection() {
    contentSection.innerHTML = '';
    
    const filteredVideos = videos.filter(video => 
        video.isSouth || video.isHindi || video.isDaagi || video.isAction
    );
    
    const sectionElement = document.createElement('div');
    sectionElement.className = 'carousel-section';
    sectionElement.innerHTML = `
        <div class="section-header">
            <h3>Movies Collection</h3>
        </div>
        <div class="carousel">
            <div class="carousel-container" id="moviesCarousel"></div>
            <button class="carousel-arrow left" aria-label="Scroll left"><i class="fas fa-chevron-left"></i></button>
            <button class="carousel-arrow right" aria-label="Scroll right"><i class="fas fa-chevron-right"></i></button>
        </div>
    `;
    contentSection.appendChild(sectionElement);
    
    renderCarousel(document.getElementById('moviesCarousel'), filteredVideos);
}

function renderTVShowsSection() {
    contentSection.innerHTML = '';
    
    const filteredVideos = videos.filter(video => 
        video.isLoki || video.isLokitwo || video.isArrived || video.isNew || video.isDrama
    );
    
    const sectionElement = document.createElement('div');
    sectionElement.className = 'carousel-section';
    sectionElement.innerHTML = `
        <div class="section-header">
            <h3>TV Shows Collection</h3>
        </div>
        <div class="carousel">
            <div class="carousel-container" id="tvCarousel"></div>
            <button class="carousel-arrow left" aria-label="Scroll left"><i class="fas fa-chevron-left"></i></button>
            <button class="carousel-arrow right" aria-label="Scroll right"><i class="fas fa-chevron-right"></i></button>
        </div>
    `;
    contentSection.appendChild(sectionElement);
    
    renderCarousel(document.getElementById('tvCarousel'), filteredVideos);
}

function renderCarousel(container, videos) {
    if (!container) return;
    
    container.innerHTML = '';
    
    if (videos.length === 0) {
        container.innerHTML = '<p class="no-results">No videos found in this category</p>';
        return;
    }
    
    videos.forEach(video => {
        const isInMyList = myList.includes(video.id);
        
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-thumbnail" style="background-image: url('${video.thumbnail}')">
                <div class="card-badge">${video.isHot ? 'Hot' : video.isNew ? 'New' : 'Popular'}</div>
            </div>
            <div class="video-overlay">
                <div class="overlay-content">
                    <h3 class="card-title">${video.title}</h3>
                    <div class="card-meta">
                        <span>${video.year}</span>
                        <span>${video.genre}</span>
                        <span>${video.duration}</span>
                    </div>
                    <div class="card-actions">
                        <button class="action-btn play play-btn" data-id="${video.id}">
                            <i class="fas fa-play"></i>
                        </button>
                        <button class="action-btn add-to-list" data-id="${video.id}">
                            <i class="fas fa-${isInMyList ? 'minus' : 'plus'}"></i>
                        </button>
                        <button class="action-btn">
                            <i class="fas fa-info"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Add event listeners
        const playBtn = videoCard.querySelector('.play-btn');
        playBtn.addEventListener('mouseenter', () => {
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            setTimeout(() => {
                playBtn.innerHTML = 'Play';
            }, 200);
        });
        
        playBtn.addEventListener('mouseleave', () => {
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        });
        
        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openVideoModal(video.videoUrl);
        });
        
        const addToListBtn = videoCard.querySelector('.add-to-list');
        addToListBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMyList(video.id);
            renderCarousel(container, videos);
            renderMyList();
        });
        
        videoCard.addEventListener('click', () => {
            openVideoModal(video.videoUrl);
        });
        
        container.appendChild(videoCard);
    });
}

function renderMyList() {
    if (!myListCarousel) return;
    
    const myListVideos = videos.filter(video => myList.includes(video.id));
    
    if (myListVideos.length > 0) {
        emptyListMessage.style.display = 'none';
        renderCarousel(myListCarousel, myListVideos);
    } else {
        emptyListMessage.style.display = 'block';
        myListCarousel.innerHTML = '';
    }
}

// ========================
// MY LIST FUNCTIONS
// ========================
function toggleMyList(videoId) {
    if (myList.includes(videoId)) {
        myList = myList.filter(id => id !== videoId);
    } else {
        myList.push(videoId);
    }
    
    localStorage.setItem('myList', JSON.stringify(myList));
}

// ========================
// VIDEO PLAYER FUNCTIONS
// ========================
function openVideoModal(videoUrl) {
    videoPlayer.src = videoUrl;
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    videoModal.classList.remove('active');
    videoPlayer.src = '';
    document.body.style.overflow = 'auto';
}

// ========================
// NAVIGATION
// ========================
function navigateToSection(section) {
    // Hide all sections first
    myListSection.style.display = 'none';
    contentSection.style.display = 'block';
    
    // Update active nav link
    navLinks.forEach(link => {
        if (link.dataset.section === section) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Render appropriate content
    if (section === 'home') {
        renderAllCarousels();
    } else if (section === 'movies') {
        renderMoviesSection();
    } else if (section === 'tv') {
        renderTVShowsSection();
    } else if (section === 'mylist') {
        contentSection.style.display = 'none';
        myListSection.style.display = 'block';
        renderMyList();
    }
    
    if (section === 'home') {
        window.scrollTo(0, 0);
    } else {
        const targetSection = section === 'mylist' ? myListSection : contentSection;
        const targetTop = targetSection.offsetTop - syncHeaderHeight();
        window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'smooth' });
    }
}

// Show logout page
function showLogoutPage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('logoutPage').style.display = 'block';
}

// Update UI based on authentication status
function updateAuthUI() {
    const isAuth = isAuthenticated();
    const currentUser = localStorage.getItem('currentUser') || 'Guest';
    
    document.getElementById('homePage').style.display = isAuth ? 'block' : 'none';
    document.getElementById('loginPage').style.display = isAuth ? 'none' : 'block';
    document.getElementById('logoutPage').style.display = 'none';
    
    document.getElementById('userStatus').textContent = isAuth ? currentUser : 'Guest';
    document.getElementById('userAvatar').textContent = isAuth ? currentUser.charAt(0).toUpperCase() : 'G';
    document.getElementById('authButtons').style.display = isAuth ? 'none' : 'flex';
    document.getElementById('userProfile').style.display = isAuth ? 'flex' : 'none';
    requestAnimationFrame(syncHeaderHeight);
}

// Login function
function login(username, password) {
    // For demo purposes, simulate login
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('currentUser', username);
    return true;
}

// Logout function
function logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
}

// ========================
// EVENT LISTENERS
// ========================
function setupEventListeners() {
    // Modal close
    closeModal.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) closeVideoModal();
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Search input
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchVideos(e.target.value);
        }, 300);
    });
    
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSection(link.dataset.section);
        });
    });
    
    // Play featured video
    playFeatured.addEventListener('click', () => {
        openVideoModal('https://www.youtube.com/embed/-19tBHrZwOM?start=11');
    });
    
    // Carousel arrows
    document.addEventListener('click', (e) => {
        if (e.target.closest('.carousel-arrow')) {
            const arrow = e.target.closest('.carousel-arrow');
            const container = arrow.parentElement.querySelector('.carousel-container');
            const scrollAmount = arrow.classList.contains('left') ? -300 : 300;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });
    
    // Login button
    loginBtn.addEventListener('click', () => {
        document.getElementById('homePage').style.display = 'none';
        document.getElementById('loginPage').style.display = 'block';
    });
    
    // Signup button
    signupBtn.addEventListener('click', () => {
        // For demo purposes, set as premium user
        login('premium', 'password');
        updateAuthUI();
        fetchVideos().then(data => {
            videos = data;
            renderAllCarousels();
        });
    });
    
    // Login form submission
    submitLogin.addEventListener('click', async (e) => {
        e.preventDefault();
        const username = loginUsername.value.trim();
        const password = loginPassword.value.trim();
        
        if (username === '' || password === '') {
            loginError.textContent = 'Please enter both username and password';
            loginError.style.display = 'block';
            return;
        }
        
        if (login(username, password)) {
            // Fetch videos after successful login
            videos = await fetchVideos();
            renderAllCarousels();
            updateAuthUI();
        } else {
            loginError.textContent = 'Invalid username or password';
            loginError.style.display = 'block';
        }
    });
    
    // Logout functionality
    userProfile.addEventListener('click', () => {
        if (isAuthenticated()) {
            logout();
            showLogoutPage();
        }
    });
    
    // Back to login from logout page
    backToLogin.addEventListener('click', () => {
        document.getElementById('logoutPage').style.display = 'none';
        document.getElementById('loginPage').style.display = 'block';
    });
    
    // Auto-hide header on scroll
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    let headerHeight = syncHeaderHeight();
    let scrollTimeout;

    if ('ResizeObserver' in window && header) {
        new ResizeObserver(() => {
            headerHeight = syncHeaderHeight();
        }).observe(header);
    }

    window.addEventListener('resize', () => {
        headerHeight = syncHeaderHeight();
    });
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        headerHeight = Math.ceil(header.offsetHeight);
        
        clearTimeout(scrollTimeout);
        
        if (currentScroll <= headerHeight) {
            header.classList.remove('hide');
            return;
        }
        
        if (currentScroll > lastScrollTop) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }
        
        scrollTimeout = setTimeout(() => {
            header.classList.remove('hide');
        }, 10000);
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}

// ========================
// SEARCH FUNCTIONALITY
// ========================
function searchVideos(query) {
    if (!query) {
        renderAllCarousels();
        return;
    }
    
    contentSection.innerHTML = `
        <div class="section-header">
            <h3>Search Results for "${query}"</h3>
        </div>
        <div class="carousel">
            <div class="carousel-container" id="searchResults"></div>
            <button class="carousel-arrow left" aria-label="Scroll left"><i class="fas fa-chevron-left"></i></button>
            <button class="carousel-arrow right" aria-label="Scroll right"><i class="fas fa-chevron-right"></i></button>
        </div>
    `;
    
    const filteredVideos = videos.filter(video => 
        video.title.toLowerCase().includes(query.toLowerCase()) || 
        video.genre.toLowerCase().includes(query.toLowerCase())
    );
    
    renderCarousel(document.getElementById('searchResults'), filteredVideos);
}
