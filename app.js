// app.js — ERBLOG Interactive Script

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. 深淺色主題切換功能 (Theme Toggle)
    // -------------------------------------------------------------
    const themeToggleBtn = document.querySelector('[data-theme-toggle]');
    const htmlElement = document.documentElement;

    // 圖示定義
    const sunIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`;
    
    const moonIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>`;

    // 初始化主題：檢查 localStorage 或系統預設偏好
    const savedTheme = localStorage.getItem('erblog-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('erblog-theme', theme);
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
            themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? '切換至淺色模式' : '切換至深色模式');
        }
    }

    setTheme(initialTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // -------------------------------------------------------------
    // 2. 作品集分類篩選 (Portfolio Filter)
    // -------------------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 切換按鈕 active 狀態
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            // 顯隱卡片
            workCards.forEach(card => {
                const cardType = card.getAttribute('data-type');
                if (filterValue === 'all' || cardType === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // -------------------------------------------------------------
    // 3. Lightbox 彈出式全螢幕預覽 (Modal Preview)
    // -------------------------------------------------------------
    const lightbox = document.getElementById('lightbox');
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxMedia = document.getElementById('lightboxMedia');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');

    function openLightbox(card) {
        const type = card.getAttribute('data-type');
        const title = card.getAttribute('data-title') || '';
        const desc = card.getAttribute('data-desc') || '';
        const imgSrc = card.getAttribute('data-src');
        const videoSrc = card.getAttribute('data-video-src');

        // 清空媒體容器
        lightboxMedia.innerHTML = '';

        if (type === 'video' && videoSrc) {
            const videoElem = document.createElement('video');
            videoElem.src = videoSrc;
            videoElem.controls = true;
            videoElem.autoplay = true;
            videoElem.className = 'lightbox__video';
            lightboxMedia.appendChild(videoElem);
        } else if (imgSrc) {
            const imgElem = document.createElement('img');
            imgElem.src = imgSrc;
            imgElem.alt = title;
            imgElem.className = 'lightbox__img';
            lightboxMedia.appendChild(imgElem);
        }

        lightboxTitle.textContent = title;
        lightboxDesc.textContent = desc;

        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // 鎖定背景滾動
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // 恢復滾動

        // 關閉時清空媒體（可暫停影片播放）
        setTimeout(() => {
            lightboxMedia.innerHTML = '';
        }, 300);
    }

    workCards.forEach(card => {
        card.addEventListener('click', () => openLightbox(card));
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

    // ESC 鍵關閉 Lightbox
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // -------------------------------------------------------------
    // 4. Header 滾動陰影效果
    // -------------------------------------------------------------
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });
});