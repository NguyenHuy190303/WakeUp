* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Instrument Serif", sans-serif;
}

body {
    color: #f0f0f0; /* Màu chữ trắng nhạt */
    background-color: #121212; /* Màu nền xám đen */
    min-height: 100svh;
    overflow: hidden;
}


.video-container {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
}

.video-background {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    filter: brightness(0.4);
    object-fit: cover;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.video-background.active {
    opacity: 1;
}

/* Video controls */
.video-controls {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 100;
    display: flex;
    gap: 8px;
}

.video-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: ease-out 0.3s;
}

.video-dot.active {
    background: white;
}

/* Chung style cho cả hai nút Explore Chart và Explore Map */
.explore-btn {
    position: absolute;
    top: 20px;
    padding: 10px 20px;
    background-color: #333; /* Màu xám đậm gần với đen */
    color: #fff; /* Màu chữ trắng */
    font-size: 16px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.explore-btn:hover {
    background-color: #000; /* Màu đen khi hover */
    color: #e0e0e0; /* Màu chữ chuyển thành xám nhạt khi hover */
}

/* Đặt các nút vị trí khác nhau */
.explore-btn {
    right: 20px;
}

.map-btn {
    right: 160px; /* Điều chỉnh để nút này cách nút Explore Chart 1 khoảng phù hợp */
}


.explore-more-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #333; /* Màu xám đậm gần với đen */
    color: #fff; /* Màu chữ trắng */
    font-size: 16px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.explore-more-btn:hover {
    background-color: #000; /* Màu đen khi hover */
    color: #e0e0e0; /* Màu chữ chuyển thành xám nhạt khi hover */
}


/* Rest of the existing styles */
.container {
    padding: 7.5rem;
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    justify-content: space-between;
    width: 100%;
    height: 100svh;
}

.header-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 320px;
}

.footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    text-decoration: none;
    color: #FFF; /* Luôn màu trắng */
}

.logo-icon {
    width: 32px;
    height: 32px;
    background: #ff9800;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.language-selector {
    font-family: "Roboto Mono", sans-serif;
    background-color: #1e1e1e; /* Màu nền đậm hơn */
    border: 1px solid rgba(255, 255, 255, 0.2); /* Đường viền màu trắng mờ */
    color: #f8f8f8; /* Màu chữ trắng */
    padding: 0.5rem;
    border-radius: 4px;
}

main {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 640px;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
    max-width: 640px;
    height: 100%;
}

.cards {
    text-decoration: none;
    color: white;
}

.learn-more {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem;
    background-color: rgba(17, 17, 17, 0.16);
    backdrop-filter: blur(40px);
    border-radius: 2rem;
}

.learn-more-heading {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem;
    background-color: rgba(17, 17, 17, 0.80);
    backdrop-filter: blur(40px);
    border-radius: 2rem;
}

.learn-more-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    overflow-x : hidden;
    overflow-y : auto;
    /*
    -webkit-mask-image: linear-gradient(black, black, black, transparent);
    mask-image: linear-gradient(black, black, black, transparent);
    */
}

.image-cards {
    padding: 2.5rem;
    height: auto;
    border-radius: 2rem;
    background: #FFF;
}

img {
    width: 100%;
    height: auto;
}

.featured {
    height: auto;
    border-radius: 2rem;
}

.featured-image {
    border-radius: 2rem;
}

h1 {
    color: #FFF;
    font-family: "Instrument Serif";
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem; /* 125% */
}

h2 {
    color: #FFF;
    font-family: "Instrument Serif";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem; /* 133.333% */
}

p {
    color: rgba(255, 255, 255, 0.40);
    font-family: "Roboto Mono";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem; /* 133.333% */
    letter-spacing: 0.12rem;
    text-transform: uppercase;
}

.search-container {
    width: 100%;
}

.search-input {
    width: 100%;
    padding: 1.5rem 2.5rem;
    border-radius: 1rem;
    border: none;
    font-size: 1rem;
}

footer {
    padding: 1rem 0;
}

input::placeholder {
    font-family: "Roboto Mono", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    max-width: 800px;
    text-transform: uppercase;
    opacity: 0.64;
    letter-spacing: 0.1rem;
}

.input-label {
    position: relative;
    width: 100%;
    background-color: #FFF;
}

.input-icon {
    position: absolute;
    right: 40px;
    top: 0;
    bottom: 0;
    vertical-align: middle;
}
