/**
 * 作品集資料設定
 */
const portfolioData = [
  {
    id: 1,
    title: "常闇永遠 精選創作集",
    category: "gallery",
    categoryLabel: "相片集錦",
    desc: "精選相關插畫與視覺創作記錄。",
    cover: "towa1.jpg",
    items: [
      { type: "image", src: "towa1.jpg", title: "常闇永遠 - 01", desc: "視覺插畫作品 1" },
      { type: "image", src: "towa2.jpg", title: "常闇永遠 - 02", desc: "視覺插畫作品 2" },
      { type: "image", src: "towa3.jpg", title: "常闇永遠 - 03", desc: "視覺插畫作品 3" },
      { type: "image", src: "towa4.jpg", title: "常闇永遠 - 04", desc: "視覺插畫作品 4" },
      { type: "image", src: "towa5.jpg", title: "常闇永遠 - 05", desc: "視覺插畫作品 5" }
    ]
  },
  {
    id: 2,
    title: "Gura 動態展示影片",
    category: "video",
    categoryLabel: "動態影像",
    desc: "短篇動態短片與剪輯記錄。",
    cover: "gura_cover.jpg",
    items: [
      { type: "video", src: "gura.mp4", title: "Gura 動態影片", desc: "高畫質影片剪輯展示" }
    ]
  },
  {
    id: 3,
    title: "AI 輔助設計概念",
    category: "image",
    categoryLabel: "精選插畫",
    desc: "結合生成式 AI 工具輔助進行之概念視覺設計。",
    cover: "aiassist.jpg",
    items: [
      { type: "image", src: "aiassist.jpg", title: "AI 設計概念 01", desc: "初稿概念生成" },
      { type: "image", src: "aiassist_3.jpg", title: "AI 設計概念 02", desc: "細節強化與後製" }
    ]
  },
  {
    id: 4,
    title: "日常隨筆記錄",
    category: "image",
    categoryLabel: "精選插畫",
    desc: "日常生活隨筆與視覺記錄。",
    cover: "img1 (1).jpg",
    items: [
      { type: "image", src: "img1 (1).jpg", title: "日常照片記錄 01", desc: "日常生活隨筆與視覺記錄。" }
    ]
  }
];

// DOM 元素引用
const gridContainer = document.getElementById('portfolio-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

const lightbox = document.getElementById('lightbox');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxContent = document.getElementById('lightbox-content');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const lightboxCounter = document.getElementById('lightbox-counter');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');

const backToTopBtn = document.getElementById('back-to-top');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const introCurtain = document.getElementById('intro-curtain');

// 狀態管理
let currentGallery = [];
let currentIndex = 0;
let slideshowIntervals = [];

/**
 * 1. 開場展開動畫控制
 */
function handleIntroAnimation() {
  setTimeout(() => {
    if (introCurtain) {
      introCurtain.classList.add('loaded');
    }
  }, 600);
}

/**
 * 2. 亮暗主題切換控制 (Light / Dark)
 */
function setupThemeToggle() {
  const savedTheme = localStorage.getItem('erblog_theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (themeIcon) themeIcon.textContent = '[ LIGHT ]';
  }

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    
    if (themeIcon) {
      themeIcon.textContent = isLight ? '[ LIGHT ]' : '[ DARK ]';
    }
    localStorage.setItem('erblog_theme', isLight ? 'light' : 'dark');
  });
}

/**
 * 3. 清除並重新設定卡片縮圖自動幻燈片（Slideshow）
 */
function clearSlideshows() {
  slideshowIntervals.forEach(interval => clearInterval(interval));
  slideshowIntervals = [];
}

function startCardSlideshows() {
  clearSlideshows();

  portfolioData.forEach(item => {
    // 僅針對多於 1 張圖片的作品啟用自動縮圖輪播
    if (item.items && item.items.length > 1) {
      const cardImg = document.querySelector(`.card[data-id="${item.id}"] .card-media-wrapper img`);
      if (!cardImg) return;

      let imgIndex = 0;
      const interval = setInterval(() => {
        imgIndex = (imgIndex + 1) % item.items.length;
        const nextMedia = item.items[imgIndex];
        if (nextMedia && nextMedia.type === 'image') {
          cardImg.style.opacity = '0.3';
          setTimeout(() => {
            cardImg.src = nextMedia.src;
            cardImg.style.opacity = '1';
          }, 300);
        }
      }, 3500); // 每 3.5 秒輪播一張

      slideshowIntervals.push(interval);
    }
  });
}

/**
 * 4. 渲染作品卡片網格
 */
function renderPortfolio(data) {
  if (!gridContainer) return;
  gridContainer.innerHTML = '';

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', item.id);

    const hasSlideshow = item.items && item.items.length > 1;

    card.innerHTML = `
      <div class="card-media-wrapper">
        <img src="${item.cover}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400x300/181818/ffffff?text=PREVIEW'">
        <span class="card-badge">${item.categoryLabel}</span>
        ${hasSlideshow ? `<span class="card-slideshow-indicator">SLIDESHOW [1/${item.items.length}]</span>` : ''}
      </div>
      <div class="card-info">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc}</p>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(item));
    gridContainer.appendChild(card);
  });

  startCardSlideshows();
}

/**
 * 5. 分類篩選邏輯
 */
function setupFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        renderPortfolio(portfolioData);
      } else {
        const filteredData = portfolioData.filter(item => item.category === filter);
        renderPortfolio(filteredData);
      }
    });
  });
}

/**
 * 6. Lightbox 彈窗模組
 */
function openLightbox(portfolioItem) {
  currentGallery = portfolioItem.items;
  currentIndex = 0;
  
  updateLightboxContent();
  lightbox.classList.add('active');
  document.body.classList.add('modal-open');
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.classList.remove('modal-open');
  
  const video = lightboxContent.querySelector('video');
  if (video) video.pause();
  lightboxContent.innerHTML = '';
}

function updateLightboxContent() {
  const media = currentGallery[currentIndex];
  if (!media) return;

  lightboxContent.innerHTML = '';

  if (media.type === 'video') {
    const video = document.createElement('video');
    video.src = media.src;
    video.controls = true;
    video.autoplay = true;
    lightboxContent.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = media.src;
    img.alt = media.title;
    img.onerror = () => { img.src = 'https://via.placeholder.com/800x600/181818/ffffff?text=Image+Not+Found'; };
    lightboxContent.appendChild(img);
  }

  lightboxTitle.textContent = media.title || '';
  lightboxDesc.textContent = media.desc || '';

  if (currentGallery.length > 1) {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    lightboxCounter.style.display = 'block';
    lightboxCounter.textContent = `[ ${currentIndex + 1} / ${currentGallery.length} ]`;
  } else {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    lightboxCounter.style.display = 'none';
  }
}

function navigateLightbox(direction) {
  const video = lightboxContent.querySelector('video');
  if (video) video.pause();

  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % currentGallery.length;
  } else {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  }
  updateLightboxContent();
}

/**
 * 7. 返回頂部 (Back to Top) 滾動控制
 */
function setupBackToTop() {
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 8. 初始化執行
 */
document.addEventListener('DOMContentLoaded', () => {
  handleIntroAnimation();
  setupThemeToggle();
  renderPortfolio(portfolioData);
  setupFilters();
  
  // Lightbox 事件
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxOverlay.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => navigateLightbox('prev'));
  nextBtn.addEventListener('click', () => navigateLightbox('next'));

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && currentGallery.length > 1) navigateLightbox('prev');
    if (e.key === 'ArrowRight' && currentGallery.length > 1) navigateLightbox('next');
  });

  setupBackToTop();
});