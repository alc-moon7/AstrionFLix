// ========================
// DATA MANAGEMENT
// ========================
const videos = [


          {
        id: -2,
        title: "Chokkor 302 (চক্কর)",
        description: "Bangla Movie",
        thumbnail: "https://upload.wikimedia.org/wikipedia/en/7/72/Chokkor_302_official_logo.jpg",
        videoUrl: "https://streamtape.com/e/zXeqgMqROPfYz0y",
        year: 2025,
        genre: "Action/Thriller",
        duration: "02h 04m",
        isHindi: false,
        isDaagi: true,
        isArrived: false,
        isTrending: true,
        isHorror: false,
        isNew: false,
        isPopular: false,
        isAction: true,
        isDrama: false,
        isComedy: false,
        type: "movie"


    },


      {
        id: -1,
        title: "Jawan: Extended Version",
        description: "Bangla Movie",
        thumbnail: "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg",
        videoUrl: "https://streamtape.com/e/ea0o0L1GQlhZl2",
        year: 2025,
        genre: "Action/Thriller",
        duration: "02h 04m",
        isHindi: true,
        isDaagi: false,
        isArrived: false,
        isTrending: true,
        isHorror: false,
        isNew: false,
        isPopular: false,
        isAction: true,
        isDrama: false,
        isComedy: false,
        type: "movie"


    },
 


       {
        id: 0,
        title: "Black widow",
        description: "MCU",
        thumbnail: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSBmdUgWZHrTE5bP78kiJiR62ZHXQ4lbLaDCifVZkzezR6K6KhK",
        videoUrl: "https://vide0.net/e/0u5ff0vd5fnu",
        year: 2021,
        genre: "Action",
        duration: "30m",
        isTrending: false,
        isNew: false,
        isPopular: true,
        isAction: true,
        isDrama: false,
        isComedy: false,
        type: "movie"
    },
    {
        id: 1,
        title: "S4 E1 - Case-Mukadma",
        description: "Abhishek fears the police case for slapping Bhushan could ruin his career.",
        thumbnail: "https://m.media-amazon.com/images/S/pv-target-images/fee51dd5d85f43866f91ca4887f03813325c92879c0df1a9ab07a29b26ba5b3e._BR-6_AC_SX360_FMwebp_.jpg",
        videoUrl: "https://vide0.net/e/1tgrur45tda0",
        year: 2025,
        genre: "Drama",
        duration: "30m",
        isTrending: false,
        isNew: true,
        isPopular: true,
        isAction: false,
        isDrama: true,
        isComedy: false,
        type: "tv"
    },
    {
        id: 2,
        title: "S4 E2 - Zakhm",
        description: "Pradhan, a survivor of an assassination attempt, tries to leverage sympathy.",
        thumbnail: "https://m.media-amazon.com/images/S/pv-target-images/658c8ad8fd3e80fc54ce75a94ff4c9f26edbc477ff06338abea073c3f23bc50f._BR-6_AC_SX360_FMwebp_.jpg",
        videoUrl: "https://vide0.net/e/jblmx2705sf3",
        year: 2025,
        genre: "Drama",
        duration: "30m",
        isTrending: false,
        isNew: true,
        isPopular: false,
        isAction: false,
        isDrama: true,
        isComedy: false,
        type: "tv"
    },
    {
        id: 3,
        title: "S4 E3 - Vachan",
        description: "After noticing a crack in Bhushan's camp, Pradhan sees an opportunity.",
        thumbnail: "https://m.media-amazon.com/images/S/pv-target-images/f3ad33eca1558fbfb5dc9b25e53a3bad136b8fd613955bcfa21764d7bf9676e4._BR-6_AC_SX360_FMwebp_.jpg",
        videoUrl: "https://vide0.net/e/wtr88itqbuoq",
        year: 2025,
        genre: "Drama",
        duration: "30m",
        isTrending: false,
        isNew: true,
        isPopular: false,
        isAction: false,
        isDrama: true,
        isComedy: false,
        type: "tv"
    },
    {
        id: 4,
        title: "S4 E4 - Shakti Pradarshan",
        description: "While Pradhan and Manju Devi prepare for a grand nomination.",
        thumbnail: "https://m.media-amazon.com/images/S/pv-target-images/b71dd2cfb7df8b20cabde29463a80195d2c57bbcfc3adb8a725876fdd1e3530b._BR-6_AC_SX360_FMwebp_.jpg",
        videoUrl: "https://vide0.net/e/s6e61pitxbx6",
        year: 2025,
        genre: "Drama",
        duration: "30m",
        isTrending: false,
        isNew: true,
        isPopular: false,
        isAction: false,
        isDrama: true,
        isComedy: false,
        type: "tv"
    },
    {
        id: 5,
        title: "S4 E5 - Ashirvaad",
        description: "A few days before the election, Manju Devi's father visits Phulera.",
        thumbnail: "https://m.media-amazon.com/images/S/pv-target-images/91611c3de909d8a6ab93923a44b38f9a89b8b5534ccece9855c0db8e6ed829c8._BR-6_AC_SX360_FMwebp_.jpg",
        videoUrl: "https://vide0.net/e/3ez5zvd3b9m3",
        year: 2025,
        genre: "Drama",
        duration: "30m",
        isTrending: false,
        isNew: true,
        isPopular: false,
        isAction: false,
        isDrama: true,
        isComedy: false,
        type: "tv"
    },
    {
        id: 6,
        title: "S4 E6 - Sanjeevani",
        description: "Jealous of Bhushan gaining strong support in the village.",
        thumbnail: "https://m.media-amazon.com/images/S/pv-target-images/9adacd66ad40d7c3b4f59b2ac1d9592087b33f1cf816b213566c5b3222963650._BR-6_AC_SX360_FMwebp_.jpg",
        videoUrl:  "https://vide0.net/e/9ao73olm5au9",
        year: 2025,
        genre: "Drama",
        duration: "30m",
        isTrending: false,
        isNew: true,
        isPopular: false,
        isAction: false,
        isDrama: true,
        isComedy: false,
        type: "tv"
    },
    {
        id: 7,
        title: "S4 E7 - Dramabaaz",
        description: "Just before election day, the local electricity transformer malfunctions.",
        thumbnail: "https://m.media-amazon.com/images/S/pv-target-images/70a944f8965ab72ff820c9f593aae22ea5dcd4cad340697973c39585baec4930._BR-6_AC_SX360_FMwebp_.jpg",
        videoUrl: "https://vide0.net/e/25sr6c8px0jb",
        year: 2025,
        genre: "Drama",
        duration: "30m",
        isTrending: false,
        isNew: true,
        isPopular: false,
        isAction: false,
        isDrama: true,
        isComedy: false,
        type: "tv"
    },
    {
        id: 8,
        title: "S4 E8 - dabdaba",
        description: "As Abhishek plans his next move after receiving his CAT results.",
        thumbnail: "https://m.media-amazon.com/images/S/pv-target-images/98563df024bb2bd5550b97adc3edf553de28107a440297891d98c3435c1beab3._BR-6_AC_SX360_FMwebp_.jpg",
        videoUrl: "https://vide0.net/e/dl5qq7nthdel",
        year: 2025,
        genre: "Drama",
        duration: "30m",
        isTrending: false,
        isNew: true,
        isPopular: false,
        isAction: false,
        isDrama: true,
        isComedy: false,
        type: "tv"
    },
    {
        id: 9,
        title: "Avengers : DoomsDay",
        description: "A group of vigilantes set out to take down corrupt superheroes.",
        thumbnail: "https://i.ytimg.com/vi/XLuL_TXbK1g/hqdefault.jpg",
        videoUrl: "https://vide0.net/e/psxj0le5qcxi",
        year: 2026,
        genre: "Action",
        duration: "1h",
        isTrending: false,
        isNew: false,
        isPopular: true,
        isAction: true,
        isDrama: false,
        isComedy: false,
        type: "movie"
    },
    {
        id: 10,
        title: "Utshob",
        description: "Bangla Movie",
        thumbnail: "https://i.ytimg.com/vi/jHPf1iKw4T8/hqdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/jHPf1iKw4T8",
        year: 2025,
        genre: "Drama/Comedy",
        duration: "50m",
        isTrending: true,
        isNew: false,
        isPopular: true,
        isAction: false,
        isDrama: true,
        isComedy: true,
        type: "movie"
    },
    {
        id: 11,
        title: "Taandob",
        description: "Bangla Movie",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BZmMwZTk1MDctMjM1My00YTA5LTg0YmYtZWE5Y2Q4N2JhZGQ1XkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg",
        videoUrl: "https://vide0.net/e/1980xgp9v70x",
        year: 2025,
        genre: "Action",
        duration: "2h 09m",
        isTrending: true,
        isNew: false,
        isPopular: true,
        isAction: true,
        isDrama: false,
        isComedy: false,
        type: "movie"
    },
    {
        id: 12,
        title: "ThunderBolt*",
        description: "Sam online",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWr47D8jZJ_7_U298o1wURdsW6-m43EYG8nWQeEObCLbyztkc",
        videoUrl: "https://moon-spacex.web.app/thunderbolt.html",
        year: 2025,
        genre: "Drama",
        duration: "30m",
        isTrending: true,
        isNew: false,
        isPopular: true,
        isAction: true,
        isDrama: false,
        isComedy: true,
        type: "special"
    },
    {
        id: 13,
        title: "S3 E1 Keys and Knives",
        description: "Korean series",
        thumbnail: "assets/1.jpg",
        videoUrl: "https://streamtape.com/e/4v9pl8xaK6FK6OZ/Squid_Game_S03E01_1080p_NF_WEB-DL_x265_HEVC_MSubs_%5BMulti_Audio%5D%5BHindi_5.1%2BEnglish_5.1%2BKorean_5.1%5D_-KmHD.mp4",
        year: 2025,
        genre: "Action/Thriller",
        duration: "40m",
        isArrived: true,
        isTrending: false,
        isNew: false,
        isPopular: false,
        isAction: true,
        isDrama: false,
        isComedy: false,
        type: "tv"
    },
    {
        id: 14,
        title: "S3 E2 The Starry Night ",
        description: "Korean series",
        thumbnail: "assets/2.jpg",
        videoUrl: "https://streamtape.com/e/agYzmrzOBPixrox",
        year: 2025,
        genre: "Action/Thriller",
        duration: "40m",
        isArrived: true,
        isTrending: false,
        isNew: false,
        isPopular: false,
        isAction: true,
        isDrama: false,
        isComedy: false,
        type: "tv"
    },
    {
        id: 15,
        title: "S3 E3  It's Not Your Fault",
        description: "Korean Series",
        thumbnail: "assets/3.jpg",
        videoUrl: "https://streamtape.com/e/Rm2dxGgVv6CdgpB/Squid_Game_S03E03_1080p_NF_WEB-DL_x265_HEVC_MSubs_%5BMulti_Audio%5D%5BHindi_5.1%2BEnglish_5.1%2BKorean_5.1%5D_-KmHD.mp4",
        year: 2025,
        genre: "Action/Thriller",
        duration: "40m",
        isArrived: true,
        isTrending: false,
        isNew: false,
        isPopular: false,
        isAction: true,
        isDrama: false,
        isComedy: false,
        type: "tv"
    },
    {
        id: 16,
        title: "S3  E4  '222'",
        description: "Korean Series",
        thumbnail: "assets/4.jpg",
        videoUrl: "https://streamtape.com/e/MqeXWZMrXZumag3/Squid_Game_S03E04_1080p_NF_WEB-DL_x265_HEVC_MSubs_%5BMulti_Audio%5D%5BHindi_5.1%2BEnglish_5.1%2BKorean_5.1%5D_-KmHD.mp4",
        year: 2025,
        genre: "Action/Thriller",
        duration: "40m",
        isArrived: true,
        isTrending: false,
        isNew: false,
        isPopular: false,
        isAction: true,
        isDrama: false,
        isComedy: false,
        type: "tv"
    },
    {
        id: 17,
        title: "S3 E5  ○△□",
        description: "Korean Series",
        thumbnail: "assets/5.jpg",
        videoUrl: "https://streamtape.com/e/XB3k8PlZ4eFDJla/Squid_Game_S03E05_1080p_NF_WEB-DL_x265_HEVC_MSubs_%5BMulti_Audio%5D%5BHindi_5.1%2BEnglish_5.1%2BKorean_5.1%5D_-KmHD.mp4",
        year: 2025,
        genre: "Action/Thriller",
        duration: "40m",
        isArrived: true,
        isTrending: false,
        isNew: false,
        isPopular: false,
        isAction: true,
        isDrama: false,
        isComedy: false,
        type: "tv"
    },
    {
        id: 18,
        title: "S3  E6  Humans Are...",
        description: "Korean Series",
        thumbnail: "assets/6.jpg",
        videoUrl: "https://streamtape.com/e/zKdGDz6V86seZo/Squid_Game_S03E06_1080p_NF_WEB-DL_x265_HEVC_MSubs_%5BMulti_Audio%5D%5BHindi_5.1%2BEnglish_5.1%2BKorean_5.1%5D_-KmHD.mp4",
        year: 2025,
        genre: "Action/Thriller",
        duration: "40m",
        isArrived: true,
        isTrending: false,
        isNew: false,
        isPopular: false,
        isAction: true,
        isDrama: false,
        isComedy: false,
        type: "tv"
    },
    {
        id: 19,
        title: "Maa(HDTS)",
        description: "Indian Movie",
        thumbnail: "https://static.moviecrow.com/marquee/kajols-mythological-horror-film-maa-to-release-on-june-27-2025/247113_thumb_665.jpg",
        videoUrl: "https://streamtape.com/e/01Kzj6gz8zhgJy",
        year: 2025,
        genre: "Horror",
        duration: "02h 04m",
        isArrived: false,
        isTrending: false,
        isHorror: true,
        isNew: false,
        isPopular: false,
        isAction: false,
        isDrama: false,
        isComedy: false,
        type: "movie"
    },
     {
        id: 20,
        title: "DAAGI -দাগি",
        description: "Bangla Movie",
        thumbnail: "https://image-chorki.gotipath.com/uploads/images/2025/06/05/posters_819d5cec8a66473df474b876c45b094f_goplay_800_1200.jpg",
        videoUrl: "https://streamtape.com/e/Le9XBXjrWqURRze",
        year: 2025,
        genre: "Action/Thriller",
        duration: "02h 04m",
        isDaagi: true,
        isArrived: false,
        isTrending: false,
        isHorror: false,
        isNew: false,
        isPopular: false,
        isAction: true,
        isDrama: false,
        isComedy: false,
        type: "movie"
    },
   
];

// ========================
// STATE MANAGEMENT
// ========================
let myList = JSON.parse(localStorage.getItem('myList')) || [];
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentFilters = {
    genre: 'all',
    year: 'all',
    type: 'all',
    sort: 'default'
};



// ========================
// DOM ELEMENTS
// ========================
const hindiCarousel = document.getElementById('hindiCarousel');
const newdaagiCarousel = document.getElementById('newdaagiCarousel');
const trendingCarousel = document.getElementById('trendingCarousel');
const arrivedCarousel = document.getElementById('arrivedCarousel');
const horrorCarousel = document.getElementById('horrorCarousel');
const newReleasesCarousel = document.getElementById('newReleasesCarousel');
const popularCarousel = document.getElementById('popularCarousel');
const actionCarousel = document.getElementById('actionCarousel');
const dramaCarousel = document.getElementById('dramaCarousel');
const comedyCarousel = document.getElementById('comedyCarousel');
const myListCarousel = document.getElementById('myListCarousel');
const emptyListMessage = document.getElementById('emptyListMessage');
const searchInput = document.getElementById('searchInput');
const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const closeModal = document.getElementById('closeModal');
const genreTabs = document.getElementById('genreTabs');
const toggleGenres = document.getElementById('toggleGenres');
const toggleFilters = document.getElementById('toggleFilters');
const contentSection = document.getElementById('contentSection');
const myListSection = document.getElementById('myListSection');
const navLinks = document.querySelectorAll('.nav-link');
const playFeatured = document.getElementById('playFeatured');
const skeletonLoader = document.getElementById('skeletonLoader');
const themeToggle = document.getElementById('themeToggle');
const yearFilter = document.getElementById('yearFilter');
const typeFilter = document.getElementById('typeFilter');
const sortFilter = document.getElementById('sortFilter');
const filterControls = document.getElementById('filterControls');

// ========================
// INITIALIZATION
// ========================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderAllCarousels();
    renderMyList();
    setupEventListeners();
    
    // Show popup after page loads
    setTimeout(() => {
        const popup = document.getElementById('browserPopup');
        popup.classList.add('show');
        
        // Auto hide after 4 seconds
        setTimeout(() => {
            popup.classList.remove('show');
            
            // Remove popup from DOM after animation completes
            setTimeout(() => {
                popup.remove();
            }, 300);
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
// RENDERING FUNCTIONS
// ========================
function renderAllCarousels() {
    // Show skeleton loader
    skeletonLoader.style.display = 'flex';
    
    setTimeout(() => {
        renderCarousel(hindiCarousel, videos.filter(video => video.isHindi));
        renderCarousel(arrivedCarousel, videos.filter(video => video.isArrived));
        renderCarousel(trendingCarousel, videos.filter(video => video.isTrending));
        renderCarousel(horrorCarousel, videos.filter(video => video.isHorror));
        renderCarousel(newReleasesCarousel, videos.filter(video => video.isNew));
        renderCarousel(popularCarousel, videos.filter(video => video.isPopular));
        renderCarousel(actionCarousel, videos.filter(video => video.isAction));
        renderCarousel(dramaCarousel, videos.filter(video => video.isDrama));
        renderCarousel(comedyCarousel, videos.filter(video => video.isComedy));
        renderCarousel(newdaagiCarousel, videos.filter(video => video.isDaagi));
        
        // Hide skeleton loader
        skeletonLoader.style.display = 'none';
    }, 1000);
}

function renderCarousel(container, videos) {
    if (!container) return;
    
    container.innerHTML = '';
    
    if (videos.length === 0) {
        container.innerHTML = '<p>No videos found</p>';
        return;
    }
    
    videos.forEach(video => {
        const isInMyList = myList.includes(video.id);
        
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card moon-card';
        videoCard.innerHTML = `
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                <div class="video-overlay">
                    <div class="video-overlay-top">
                        <button class="add-to-list" data-id="${video.id}" aria-label="${isInMyList ? 'Remove from' : 'Add to'} my list">
                            <i class="fas fa-${isInMyList ? 'minus' : 'plus'}"></i>
                        </button>
                    </div>
                    <div class="video-overlay-bottom">
                        <button class="play-btn" aria-label="Play ${video.title}">
                            <i class="fas fa-play"></i>
                        </button>
                        <span>${video.duration}</span>
                    </div>
                </div>
            </div>
            <div class="video-info">
                <h4 class="video-title">${video.title}</h4>
                <div class="video-meta">
                    <span>${video.year}</span>
                    <span>•</span>
                    <span>${video.genre}</span>
                </div>
            </div>
        `;
        
        // Add event listeners
        const playBtn = videoCard.querySelector('.play-btn');
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
// SEARCH & FILTERING
// ========================
function searchVideos(query) {
    // Check if query is a causal ID search (starts with #)
    if (query.startsWith("#")) {
        const idQuery = query.substring(1).trim();
        const idNumber = parseInt(idQuery);
        
        if (!isNaN(idNumber)) {
            // Search by ID
            const videoById = videos.find(video => video.id === idNumber);
            
            if (videoById) {
                // Show only the matching video
                skeletonLoader.style.display = 'flex';
                
                setTimeout(() => {
                    // Clear all carousels
                    document.querySelectorAll('.carousel-container').forEach(container => {
                        container.innerHTML = '';
                    });
                    
                    // Create section for ID search results
                    const idSearchSection = document.createElement('div');
                    idSearchSection.className = 'carousel-section';
                    idSearchSection.innerHTML = `
                        <div class="section-header">
                            <h3>Video ID: #${idNumber}</h3>
                        </div>
                        <div class="carousel">
                            <div class="carousel-container" id="idSearchCarousel"></div>
                        </div>
                    `;
                    
                    // Replace content with search results
                    contentSection.innerHTML = '';
                    contentSection.appendChild(idSearchSection);
                    
                    // Render the matching video
                    const idSearchCarousel = document.getElementById('idSearchCarousel');
                    renderCarousel(idSearchCarousel, [videoById]);
                    
                    skeletonLoader.style.display = 'none';
                }, 500);
                return;
            }
        }
    }
    
    // Original search functionality for titles/descriptions
    if (!query) {
        renderAllCarousels();
        return;
    }
    
    skeletonLoader.style.display = 'flex';
    
    setTimeout(() => {
        const filteredVideos = videos.filter(video => 
            video.title.toLowerCase().includes(query.toLowerCase()) || 
            video.description.toLowerCase().includes(query.toLowerCase())
        );
        
        // Clear all carousels
        document.querySelectorAll('.carousel-container').forEach(container => {
            container.innerHTML = '';
        });
        
        // Render search results in a new section
        const searchSection = document.createElement('div');
        searchSection.className = 'carousel-section';
        searchSection.innerHTML = `
            <div class="section-header">
                <h3>Search Results for "${query}"</h3>
            </div>
            <div class="carousel">
                <div class="carousel-container" id="searchResultsCarousel"></div>
            </div>
        `;
        
        // Replace content with search results
                    contentSection.innerHTML = '';
                    contentSection.appendChild(searchSection);
                    
                    // Render search results
                    const searchResultsCarousel = document.getElementById('searchResultsCarousel');
                    renderCarousel(searchResultsCarousel, filteredVideos);
                    
                    skeletonLoader.style.display = 'none';
                }, 800);
            }
            
            function applyFilters() {
                skeletonLoader.style.display = 'flex';
                
                setTimeout(() => {
                    let filteredVideos = [...videos];
                    
                    // Apply genre filter
                    if (currentFilters.genre !== 'all') {
                        filteredVideos = filteredVideos.filter(video => 
                            video.genre.toLowerCase().includes(currentFilters.genre.toLowerCase())
                        );
                    }
                    
                    // Apply year filter
                    if (currentFilters.year !== 'all') {
                        filteredVideos = filteredVideos.filter(video => 
                            video.year === parseInt(currentFilters.year)
                        );
                    }
                    
                    // Apply type filter
                    if (currentFilters.type !== 'all') {
                        filteredVideos = filteredVideos.filter(video => 
                            video.type.toLowerCase().includes(currentFilters.type.toLowerCase())
                        );
                    }
                    
                    // Apply sorting
                    if (currentFilters.sort !== 'default') {
                        if (currentFilters.sort === 'newest') {
                            filteredVideos.sort((a, b) => b.year - a.year);
                        } else if (currentFilters.sort === 'oldest') {
                            filteredVideos.sort((a, b) => a.year - b.year);
                        } else if (currentFilters.sort === 'popular') {
                            filteredVideos.sort((a, b) => {
                                if (a.isPopular && !b.isPopular) return -1;
                                if (!a.isPopular && b.isPopular) return 1;
                                return 0;
                            });
                        }
                    }
                    
                    // Clear all carousels
                    document.querySelectorAll('.carousel-container').forEach(container => {
                        container.innerHTML = '';
                    });
                    
                    // Render filtered results
                    const filteredSection = document.createElement('div');
                    filteredSection.className = 'carousel-section';
                    filteredSection.innerHTML = `
                        <div class="section-header">
                            <h3>Filtered Content</h3>
                        </div>
                        <div class="carousel">
                            <div class="carousel-container" id="filteredResultsCarousel"></div>
                        </div>
                    `;
                    
                    // Replace content with filtered results
                    contentSection.innerHTML = '';
                    contentSection.appendChild(filteredSection);
                    
                    // Render filtered results
                    const filteredResultsCarousel = document.getElementById('filteredResultsCarousel');
                    renderCarousel(filteredResultsCarousel, filteredVideos);
                    
                    skeletonLoader.style.display = 'none';
                }, 800);
            }
            
            // ========================
            // NAVIGATION
            // ========================
            function navigateToSection(section) {
                if (section === 'mylist') {
                    contentSection.style.display = 'none';
                    myListSection.style.display = 'block';
                    renderMyList();
                } else {
                    contentSection.style.display = 'block';
                    myListSection.style.display = 'none';
                    // Reset search input
                    searchInput.value = '';
                    renderAllCarousels();
                }
                
                // Update active nav link
                navLinks.forEach(link => {
                    if (link.dataset.section === section) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
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
                
                // Search input with debounce
                let searchTimeout;
                searchInput.addEventListener('input', (e) => {
                    clearTimeout(searchTimeout);
                    searchTimeout = setTimeout(() => {
                        searchVideos(e.target.value);
                    }, 300);
                });
                
                // Genre tabs
                document.querySelectorAll('.genre-tab').forEach(tab => {
                    tab.addEventListener('click', () => {
                        document.querySelectorAll('.genre-tab').forEach(t => t.classList.remove('active'));
                        tab.classList.add('active');
                        currentFilters.genre = tab.dataset.genre;
                        applyFilters();
                    });
                });
                
                // Toggle genres button
                toggleGenres.addEventListener('click', () => {
                    genreTabs.style.display = genreTabs.style.display === 'flex' ? 'none' : 'flex';
                });
                
                // Toggle filters button
                toggleFilters.addEventListener('click', () => {
                    filterControls.style.display = filterControls.style.display === 'flex' ? 'none' : 'flex';
                });
                
                // Filter controls
                yearFilter.addEventListener('change', (e) => {
                    currentFilters.year = e.target.value;
                    applyFilters();
                });
                
                typeFilter.addEventListener('change', (e) => {
                    currentFilters.type = e.target.value;
                    applyFilters();
                });
                
                sortFilter.addEventListener('change', (e) => {
                    currentFilters.sort = e.target.value;
                    applyFilters();
                });
                
                // Navigation
                navLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        navigateToSection(link.dataset.section);
                    });
                });
                
                // Play featured video
                if (playFeatured) {
                    playFeatured.addEventListener('click', () => {
                        openVideoModal('https://www.youtube.com/embed/MWOlnZSnXJo');
                    });
                }
                
                // Carousel arrows
                document.addEventListener('click', (e) => {
                    if (e.target.closest('.carousel-arrow')) {
                        const arrow = e.target.closest('.carousel-arrow');
                        const container = arrow.parentElement.querySelector('.carousel-container');
                        const scrollAmount = arrow.classList.contains('left') ? -300 : 300;
                        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                    }
                });
                
                // Lower third banner controls
                document.addEventListener('DOMContentLoaded', function() {
                    const banner = document.querySelector('.lower-third-banner');
                    const content = document.querySelector('.lower-third-content');
                    const closeBtn = document.querySelector('.close-banner');
                    
                    if (banner) {
                        // Auto-hide after 15 seconds (15000ms)
                        const autoHideTimer = setTimeout(() => {
                            banner.classList.add('hidden');
                        }, 15000);
                        
                        // Pause animation on hover
                        if (content) {
                            banner.addEventListener('mouseenter', function() {
                                content.style.animationPlayState = 'paused';
                            });
                            
                            banner.addEventListener('mouseleave', function() {
                                content.style.animationPlayState = 'running';
                            });
                        }
                        
                        // Manual close button
                        if (closeBtn) {
                            closeBtn.addEventListener('click', function() {
                                banner.classList.add('hidden');
                                clearTimeout(autoHideTimer);
                            });
                        }
                        
                        // Optional: Store in localStorage to prevent showing again
                        if (closeBtn) {
                            closeBtn.addEventListener('click', function() {
                                localStorage.setItem('lowerThirdClosed', 'true');
                            });
                        }
                        
                        // Optional: Check localStorage on page load
                        if (localStorage.getItem('lowerThirdClosed') === 'true') {
                            banner.style.display = 'none';
                        }
                    }
                });
                
                // Auto-hide header on scroll
                let lastScrollTop = 0;
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                let scrollTimeout;
                
                if (header) {
                    window.addEventListener('scroll', () => {
                        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
                        
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
                        }, 5000);
                        
                        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
                    });
                }
            }


