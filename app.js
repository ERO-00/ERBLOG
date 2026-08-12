// app.js — ERBLOG Interactive Script

document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------------------------------------
    // 1. 深淺色主題切換 (Theme Toggle)
    // -------------------------------------------------------------
    const themeToggleBtn = document.querySelector('[data-theme-toggle]');
    const htmlElement = document.documentElement;

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
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    // -------------------------------------------------------------
    // 2. 打字機動態效果 (Typing Effect)
    // -------------------------------------------------------------
    const typingTextElem = document.getElementById('typingText');
    if (typingTextElem) {
        const phrases = ['嵌入式硬體開發', 'AI 模組整合', '多媒體視覺設計', 'Web 前端互動 design'];
        let phraseIdx = 0;
        let charIdx = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIdx];
            if (isDeleting) {
                typingTextElem.textContent = currentPhrase.substring(0, charIdx - 1);
                charIdx--;
            } else {
                typingTextElem.textContent = currentPhrase.substring(0, charIdx + 1);
                charIdx++;
            }

            let typeSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIdx === currentPhrase.length) {
                typeSpeed = 1800; // 拼完後停頓
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                typeSpeed = 400;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    // -------------------------------------------------------------
    // 3. 首頁卡片自動縮圖輪播 (Homepage Card Auto-Slideshow, 3.5s)
    // -------------------------------------------------------------
    let cardSlideshowIntervals = [];

    function startCardSlideshows() {
        stopCardSlideshows(); // 先清空舊有的計時器

        const cards = document.querySelectorAll('.work-card');

        cards.forEach((card) => {
            const rawGallery = card.getAttribute('data-gallery');
            if (!rawGallery) return;

            try {
                const gallery = JSON.parse(rawGallery);
                if (gallery.length <= 1) return;

                let slideIdx = 0;
                const imgElem = card.querySelector('.work-card__img');
                const indicator = card.querySelector('.work-card__slide-indicator');

                const interval = setInterval(() => {
                    slideIdx = (slideIdx + 1) % gallery.length;
                    const nextSlide = gallery[slideIdx];

                    if (imgElem) {
                        imgElem.classList.add('fade-out');
                        setTimeout(() => {
                            imgElem.src = nextSlide.src;
                            imgElem.classList.remove('fade-out');
                        }, 250);
                    }

                    if (indicator) {
                        indicator.textContent = `${slideIdx + 1} / ${gallery.length}`;
                    }
                }, 3500); // 每 3.5 秒淡入淡出自動切換照片

                cardSlideshowIntervals.push(interval);
            } catch (e) {
                console.error('Card gallery parse error:', e);
            }
        });
    }

    function stopCardSlideshows() {
        cardSlideshowIntervals.forEach(interval => clearInterval(interval));
        cardSlideshowIntervals = [];
    }

    // 啟動首頁卡片自動輪播
    startCardSlideshows();

    // -------------------------------------------------------------
    // 4. 作品集分類篩選 (Portfolio Filter)
    // -------------------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

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
    // 5. 多圖/影片 Lightbox 輪播 Slider
    // -------------------------------------------------------------
    const lightbox = document.getElementById('lightbox');
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxMedia = document.getElementById('lightboxMedia');
    const lightboxDots = document.getElementById('lightboxDots');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxWikiBtn = document.getElementById('lightboxWikiBtn');

    let currentGallery = [];
    let currentIndex = 0;
    let autoPlayTimer = null;

    function renderSlide(index) {
        if (!currentGallery || currentGallery.length === 0) return;

        currentIndex = (index + currentGallery.length) % currentGallery.length;
        const item = currentGallery[currentIndex];

        // 清空媒體容器
        lightboxMedia.innerHTML = '';

        if (item.type === 'video') {
            const videoElem = document.createElement('video');
            videoElem.src = item.src;
            videoElem.controls = true;
            videoElem.autoplay = true;
            videoElem.className = 'lightbox__video';
            lightboxMedia.appendChild(videoElem);
        } else {
            const imgElem = document.createElement('img');
            imgElem.src = item.src;
            imgElem.alt = item.title || '';
            imgElem.className = 'lightbox__img';
            lightboxMedia.appendChild(imgElem);
        }

        // 更新文字說明與頁碼
        lightboxTitle.textContent = item.title || '';
        lightboxDesc.textContent = item.desc || '';
        lightboxCounter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;

        // Wikipedia 按鈕判斷與設定
        if (item.wiki) {
            lightboxWikiBtn.href = item.wiki;
            lightboxWikiBtn.style.display = 'inline-flex';
        } else {
            lightboxWikiBtn.style.display = 'none';
        }

        // 更新指示點 (Pagination Dots)
        lightboxDots.innerHTML = '';
        if (currentGallery.length > 1) {
            lightboxDots.style.display = 'flex';
            lightboxPrev.style.display = 'flex';
            lightboxNext.style.display = 'flex';

            currentGallery.forEach((_, i) => {
                const dot = document.createElement('div');
                dot.className = `lightbox__dot ${i === currentIndex ? 'active' : ''}`;
                dot.addEventListener('click', () => {
                    stopAutoPlay();
                    renderSlide(i);
                });
                lightboxDots.appendChild(dot);
            });
        } else {
            lightboxDots.style.display = 'none';
            lightboxPrev.style.display = 'none';
            lightboxNext.style.display = 'none';
        }
    }

    function startAutoPlay() {
        stopAutoPlay();
        if (currentGallery.length > 1) {
            autoPlayTimer = setInterval(() => {
                renderSlide(currentIndex + 1);
            }, 5000); // 燈箱開啟時 5 秒自動切換
        }
    }

    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    }

    function openLightbox(card) {
        // 開啟全螢幕燈箱時，暫停首頁縮圖自動輪播
        stopCardSlideshows();

        try {
            const rawGallery = card.getAttribute('data-gallery');
            if (rawGallery) {
                currentGallery = JSON.parse(rawGallery);
            } else {
                currentGallery = [{
                    type: card.getAttribute('data-type') === 'video' ? 'video' : 'image',
                    src: card.getAttribute('data-src') || card.getAttribute('data-video-src'),
                    title: card.getAttribute('data-title'),
                    desc: card.getAttribute('data-desc'),
                    wiki: card.getAttribute('data-wiki')
                }];
            }
        } catch (e) {
            console.error('Gallery JSON Parse Error:', e);
            return;
        }

        renderSlide(0);
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        startAutoPlay();
    }

    function closeLightbox() {
        if (!lightbox) return;
        stopAutoPlay();
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => {
            lightboxMedia.innerHTML = '';
        }, 300);

        // 關閉燈箱後，恢復首頁卡片縮圖自動輪播
        startCardSlideshows();
    }

    // 事件監聽：點擊卡片開啟
    workCards.forEach(card => {
        card.addEventListener('click', () => openLightbox(card));
    });

    // 事件監聽：燈箱按鈕
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => { stopAutoPlay(); renderSlide(currentIndex - 1); });
    if (lightboxNext) lightboxNext.addEventListener('click', () => { stopAutoPlay(); renderSlide(currentIndex + 1); });

    // 鍵盤左右箭頭與 ESC 支援
    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') { stopAutoPlay(); renderSlide(currentIndex - 1); }
            if (e.key === 'ArrowRight') { stopAutoPlay(); renderSlide(currentIndex + 1); }
        }
    });

    // 移動端手勢滑動切換 (Touch Swipe)
    let touchStartX = 0;
    lightboxMedia.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxMedia.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diffX = touchEndX - touchStartX;
        if (Math.abs(diffX) > 50) {
            stopAutoPlay();
            if (diffX < 0) renderSlide(currentIndex + 1); // 向左滑動 ➔ 下一張
            else renderSlide(currentIndex - 1);           // 向右滑動 ➔ 上一張
        }
    }, { passive: true });

    // -------------------------------------------------------------
    // 6. Header 滾動毛玻璃陰影效果
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