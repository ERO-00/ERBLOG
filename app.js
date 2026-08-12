/**
 * 作品集資料設定 (已修正封面 pgura.jpg 與 AI 設計 concept aiassist1.jpg，並補回常闇永遠維基創作集)
 */
const portfolioData = [
  {
    id: 1,
    title: "常闇永遠 維基百科與精選集",
    category: "gallery",
    categoryLabel: "相片集錦",
    desc: "精選相關插畫、視覺創作記錄與維基百科連結按鈕。",
    cover: "assets/towa1.jpg",
    items: [
      { type: "image", src: "assets/towa1.jpg", title: "常闇永遠 - 01", desc: "視覺插畫作品 1" },
      { type: "image", src: "assets/towa2.jpg", title: "常闇永遠 - 02", desc: "視覺插畫作品 2" },
      { type: "image", src: "assets/towa3.jpg", title: "常闇永遠 - 03", desc: "視覺插畫作品 3" },
      { type: "image", src: "assets/towa4.jpg", title: "常闇永遠 - 04", desc: "視覺插畫作品 4" },
      { type: "image", src: "assets/towa5.jpg", title: "常闇永遠 - 05", desc: "視覺插畫作品 5" }
    ]
  },
  {
    id: 2,
    title: "Gura 動態展示影片",
    category: "video",
    categoryLabel: "動態影像",
    desc: "短篇動態短片與剪輯記錄。",
    cover: "assets/pgura.jpg", // 已更新封面圖檔名
    items: [
      { type: "video", src: "assets/gura.mp4", title: "Gura 動態影片", desc: "高畫質影片剪輯展示" }
    ]
  },
  {
    id: 3,
    title: "AI 輔助設計概念",
    category: "image",
    categoryLabel: "精選插畫",
    desc: "結合生成式 AI 工具輔助進行之概念視覺設計。",
    cover: "assets/aiassist.jpg",
    items: [
      { type: "image", src: "assets/aiassist.jpg", title: "AI 設計概念 01", desc: "初稿概念生成" },
      { type: "image", src: "assets/aiassist1.jpg", title: "AI 設計概念 02", desc: "細節強化與後製" } // 已補上 aiassist1.jpg
    ]
  },
  {
    id: 4,
    title: "日常隨筆記錄",
    category: "image",
    categoryLabel: "精選插畫",
    desc: "日常生活隨筆與視覺記錄。",
    cover: "assets/img1 (1).jpg",
    items: [
      { type: "image", src: "assets/img1 (1).jpg", title: "日常照片記錄 01", desc: "日常生活隨筆與視覺記錄。" }
    ]
  }
];

// 預設 SVG / Nothing OS 風格圖片缺失替代圖 (當實體檔案不存在時自動呈現點陣風格提示)
const FALLBACK_IMG = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22background%3A%23121212%3B%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%20stroke%3D%22%23262626%22%20stroke-width%3D%222%22%2F%3E%3Ccircle%20cx%3D%22200%22%20cy%3D%22130%22%20r%3D%224%22%20fill%3D%22%23ff2a2a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2255%25%22%20fill%3D%22%23888888%22%20font-family%3D%22Space%20Mono%2C%20monospace%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%3E%5B%20IMAGE%20NOT%20FOUND%20%5D%3C%2Ftext%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2268%25%22%20fill%3D%22%23404040%22%20font-family%3D%22Space%20Mono%2C%20monospace%22%20font-size%3D%2210%22%20text-anchor%3D%22middle%22%3E請確認%20assets%2F%20圖檔路徑%3C%2Ftext%3E%3C%2Fsvg%3E";

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
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

// 音效、時鐘與命令列相關引用
const soundToggleBtn = document.getElementById('sound-toggle');
const cmdPalette = document.getElementById('cmd-palette');
const cmdInput = document.getElementById('cmd-input');
const cmdList = document.getElementById('cmd-list');
const cmdOverlay = document.getElementById('cmd-overlay');
const cmdTriggerBtn = document.getElementById('cmd-trigger-btn');

// 狀態管理
let currentGallery = [];
let currentIndex = 0;
let slideshowIntervals = [];
let soundEnabled = true;
let audioCtx = null;

/**
 * 功能 4: Nothing OS 機械合成音效 Engine (無需外部音訊檔，高相容)
 */
function playClickSound(freq = 750, type = 'sine', duration = 0.035) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // 忽略未存取的音訊例外
  }
}

function setupSoundToggle() {
  if (!soundToggleBtn) return;
  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundToggleBtn.textContent = soundEnabled ? '[ SOUND: ON ]' : '[ SOUND: OFF ]';
    if (soundEnabled) playClickSound(900, 'square');
  });
}

/**
 * 功能 1: 點陣數字即時時鐘 Widget
 */
function setupMatrixClock() {
  const clockEl = document.getElementById('matrix-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `[ ${hrs}:${mins}:${secs} CST ]`;
  }
  setInterval(update, 1000);
  update();
}

/**
 * 功能 2: Hero 區塊 Terminal Typing 打字機輪播效果
 */
function setupTypewriter() {
  const typewriterEl = document.getElementById('typewriter');
  if (!typewriterEl) return;

  const phrases = [
    "> 數位內容創作者",
    "> AI 應用探索",
    "> 視覺設計"
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const current = phrases[phraseIdx];
    if (isDeleting) {
      typewriterEl.textContent = current.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typewriterEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 35 : 75;

    if (!isDeleting && charIdx === current.length) {
      speed = 2200; // 打完後停留 2.2 秒
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }
  type();
}

/**
 * 功能 3: 快捷鍵命令列 (Command Palette Ctrl + K)
 */
function setupCommandPalette() {
  if (!cmdPalette || !cmdInput || !cmdList) return;

  const commands = [
    { label: "前往 // 關於我", action: () => scrollToSection('about') },
    { label: "前往 // 作品集", action: () => scrollToSection('portfolio') },
    { label: "前往 // 聯絡我", action: () => scrollToSection('contact') },
    { label: "開啟常闇永遠維基百科", action: () => window.open('https://zh.wikipedia.org/zh-tw/%E5%B8%B8%E9%97%87%E6%B0%B8%E9%81%A0', '_blank') },
    { label: "篩選：全部作品 (ALL)", action: () => triggerFilter('all') },
    { label: "篩選：精選插畫 (ILLUST)", action: () => triggerFilter('image') },
    { label: "篩選：相片集錦 (GALLERY)", action: () => triggerFilter('gallery') },
    { label: "篩選：動態影像 (VIDEO)", action: () => triggerFilter('video') },
    { label: "切換明暗主題 (Dark / Light)", action: () => toggleTheme() },
    { label: "切換系統音效 (On / Off)", action: () => soundToggleBtn && soundToggleBtn.click() }
  ];

  function openCmd() {
    cmdPalette.classList.add('active');
    cmdInput.value = '';
    renderCmds(commands);
    playClickSound(800, 'square');
    setTimeout(() => cmdInput.focus(), 60);
  }

  function closeCmd() {
    cmdPalette.classList.remove('active');
  }

  function renderCmds(list) {
    cmdList.innerHTML = '';
    if (list.length === 0) {
      cmdList.innerHTML = '<li class="cmd-empty">[ 無對應指令或作品 ]</li>';
      return;
    }

    list.forEach((item, i) => {
      const li = document.createElement('li');
      li.className = `cmd-item ${i === 0 ? 'selected' : ''}`;
      li.innerHTML = `<span>${item.label}</span><span class="cmd-tag">[ EXEC ]</span>`;
      li.addEventListener('click', () => {
        item.action();
        closeCmd();
        playClickSound(1000, 'triangle');
      });
      cmdList.appendChild(li);
    });
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function triggerFilter(cat) {
    const targetBtn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
    if (targetBtn) targetBtn.click();
  }

  function toggleTheme() {
    if (themeToggleBtn) themeToggleBtn.click();
  }

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdPalette.classList.contains('active')) {
        closeCmd();
      } else {
        openCmd();
      }
    } else if (e.key === 'Escape' && cmdPalette.classList.contains('active')) {
      closeCmd();
    }
  });

  cmdInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (!val) {
      renderCmds(commands);
      return;
    }
    const filtered = commands.filter(c => c.label.toLowerCase().includes(val));
    renderCmds(filtered);
  });

  if (cmdOverlay) cmdOverlay.addEventListener('click', closeCmd);
  if (cmdTriggerBtn) cmdTriggerBtn.addEventListener('click', openCmd);
}

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

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      playClickSound(650, 'sine');
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      
      if (themeIcon) {
        themeIcon.textContent = isLight ? '[ LIGHT ]' : '[ DARK ]';
      }
      localStorage.setItem('erblog_theme', isLight ? 'light' : 'dark');
    });
  }
}

/**
 * 3. 幻燈片輪播管理
 */
function clearSlideshows() {
  slideshowIntervals.forEach(interval => clearInterval(interval));
  slideshowIntervals = [];
}

function startCardSlideshows(data) {
  clearSlideshows();

  data.forEach(item => {
    if (item.items && item.items.length > 1) {
      const cardImg = document.querySelector(`.card[data-id="${item.id}"] .card-media-wrapper img`);
      const indicator = document.querySelector(`.card[data-id="${item.id}"] .card-slideshow-indicator`);
      if (!cardImg) return;

      let imgIndex = 0;
      const interval = setInterval(() => {
        if (lightbox && lightbox.classList.contains('active')) return;

        imgIndex = (imgIndex + 1) % item.items.length;
        const nextMedia = item.items[imgIndex];
        if (nextMedia && nextMedia.type === 'image') {
          cardImg.style.opacity = '0.3';
          setTimeout(() => {
            cardImg.src = nextMedia.src;
            cardImg.style.opacity = '1';
            if (indicator) {
              indicator.textContent = `SLIDESHOW [${imgIndex + 1}/${item.items.length}]`;
            }
          }, 300);
        }
      }, 3500);

      slideshowIntervals.push(interval);
    }
  });
}

/**
 * 4. 渲染作品卡片網格 (加入常闇永遠維基百科按鈕)
 */
function renderPortfolio(data) {
  if (!gridContainer) return;
  gridContainer.innerHTML = '';

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', item.id);

    const hasSlideshow = item.items && item.items.length > 1;
    
    // 如果是 ID 1 (常闇永遠)，額外加入維基百科外連按鈕
    const isTowaCard = (item.id === 1);

    card.innerHTML = `
      <div class="card-media-wrapper">
        <img src="${item.cover}" alt="${item.title}" onerror="this.onerror=null; this.src='${FALLBACK_IMG}';">
        <span class="card-badge">${item.categoryLabel}</span>
        ${hasSlideshow ? `<span class="card-slideshow-indicator">SLIDESHOW [1/${item.items.length}]</span>` : ''}
      </div>
      <div class="card-info">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc}</p>
        ${isTowaCard ? `
          <div class="card-actions" style="margin-top: 12px;">
            <a href="https://zh.wikipedia.org/zh-tw/%E5%B8%B8%E9%97%87%E6%B0%B8%E9%81%A0" target="_blank" rel="noopener noreferrer" class="wiki-link-btn" style="display: inline-block; font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-red); border: 1px dashed var(--accent-red); padding: 4px 10px; background: rgba(255,42,42,0.05); transition: var(--transition);" onclick="event.stopPropagation();">
              [ ↗ 維基百科：常闇永遠 ]
            </a>
          </div>
        ` : ''}
      </div>
    `;

    card.addEventListener('click', () => {
      playClickSound(850, 'sine');
      openLightbox(item);
    });
    gridContainer.appendChild(card);
  });

  startCardSlideshows(data);
}

/**
 * 5. 分類篩選邏輯
 */
function setupFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playClickSound(700, 'triangle');
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
  playClickSound(500, 'sine');
  lightbox.classList.remove('active');
  document.body.classList.remove('modal-open');
  
  const video = lightboxContent.querySelector('video');
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
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
    video.playsInline = true;
    lightboxContent.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = media.src;
    img.alt = media.title || '';
    img.onerror = () => { img.src = FALLBACK_IMG; };
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
  playClickSound(750, 'sine');
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
 * 7. 返回頂部與手機選單
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
    playClickSound(950, 'sine');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setupMobileMenu() {
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      playClickSound(600, 'square');
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

/**
 * 8. 初始化執行
 */
document.addEventListener('DOMContentLoaded', () => {
  handleIntroAnimation();
  setupThemeToggle();
  setupSoundToggle();
  setupMatrixClock();
  setupTypewriter();
  setupCommandPalette();
  
  renderPortfolio(portfolioData);
  setupFilters();
  setupMobileMenu();
  
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => navigateLightbox('prev'));
  if (nextBtn) nextBtn.addEventListener('click', () => navigateLightbox('next'));

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && currentGallery.length > 1) navigateLightbox('prev');
    if (e.key === 'ArrowRight' && currentGallery.length > 1) navigateLightbox('next');
  });

  setupBackToTop();
});