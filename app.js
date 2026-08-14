/**
 * ERBLOG // NOTHING OS STYLE - MAIN APP SCRIPT (OPTIMIZED & FIXED)
 */

// 作品集資料設定
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
    cover: "assets/pgura.jpg",
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
      { type: "image", src: "assets/aiassist1.jpg", title: "AI 設計概念 02", desc: "細節強化與後製" }
    ]
  },
  {
    id: 4,
    title: "日常隨筆記錄",
    category: "gallery",
    categoryLabel: "相片集錦",
    desc: "日常生活隨筆與視覺記錄（共 11 張）。",
    cover: "assets/img1 (1).jpg",
    items: [
      { type: "image", src: "assets/img1 (1).jpg", title: "日常照片記錄 01", desc: "日常生活隨筆與視覺記錄" },
      { type: "image", src: "assets/img1 (2).jpg", title: "日常照片記錄 02", desc: "日常生活隨筆與視覺記錄" },
      { type: "image", src: "assets/img1 (3).jpg", title: "日常照片記錄 03", desc: "日常生活隨筆與視覺記錄" },
      { type: "image", src: "assets/img1 (4).jpg", title: "日常照片記錄 04", desc: "日常生活隨筆與視覺記錄" },
      { type: "image", src: "assets/img1 (5).jpg", title: "日常照片記錄 05", desc: "日常生活隨筆與視覺記錄" },
      { type: "image", src: "assets/img1 (6).jpg", title: "日常照片記錄 06", desc: "日常生活隨筆與視覺記錄" },
      { type: "image", src: "assets/img1 (7).jpg", title: "日常照片記錄 07", desc: "日常生活隨筆與視覺記錄" },
      { type: "image", src: "assets/img1 (8).jpg", title: "日常照片記錄 08", desc: "日常生活隨筆與視覺記錄" },
      { type: "image", src: "assets/img1 (9).jpg", title: "日常照片記錄 09", desc: "日常生活隨筆與視覺記錄" },
      { type: "image", src: "assets/img1 (10).jpg", title: "日常照片記錄 10", desc: "日常生活隨筆與視覺記錄" },
      { type: "image", src: "assets/img1 (11).jpg", title: "日常照片記錄 11", desc: "日常生活隨筆與視覺記錄" }
    ]
  }
];

const FALLBACK_IMG = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22background%3A%23121212%3B%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%20stroke%3D%22%23262626%22%20stroke-width%3D%222%22%2F%3E%3Ccircle%20cx%3D%22200%22%20cy%3D%22130%22%20r%3D%224%22%20fill%3D%22%23ff2a2a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2255%25%22%20fill%3D%22%23888888%22%20font-family%3D%22Space%20Mono%2C%20monospace%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%3E%5B%20IMAGE%20NOT%20FOUND%20%5D%3C%2Ftext%3E%3C%2Fsvg%3E";

// DOM 引用
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
const lightboxFullscreenBtn = document.getElementById('lightbox-fullscreen');
const lightboxResetBtn = document.getElementById('lightbox-zoom-reset');

const backToTopBtn = document.getElementById('back-to-top');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const introCurtain = document.getElementById('intro-curtain');

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNavMenu = document.getElementById('mobile-nav-menu');

const soundToggleBtn = document.getElementById('sound-toggle');
const cmdPalette = document.getElementById('cmd-palette');
const cmdInput = document.getElementById('cmd-input');
const cmdList = document.getElementById('cmd-list');
const cmdOverlay = document.getElementById('cmd-overlay');
const cmdTriggerBtn = document.getElementById('cmd-trigger-btn');
const mobileCmdBtn = document.getElementById('mobile-cmd-btn');

// Mini Player
const miniPlayer = document.getElementById('mini-player');
const playerTrackName = document.getElementById('player-track-name');
const playerPlayBtn = document.getElementById('player-play-btn');
let globalAudio = new Audio();

// 狀態變數
let currentGallery = [];
let currentIndex = 0;
let soundEnabled = true;
let audioCtx = null;

// Lightbox 狀態
let zoomScale = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;
let touchStartX = 0;
let touchStartY = 0;

let activeCmdIndex = 0;

/* ----------------------------------------------------
   1. 科技感自訂瞄準游標
---------------------------------------------------- */
function setupCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor || window.matchMedia('(max-width: 768px)').matches) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .card, .filter-btn, .cmd-item, input, .wiki-link-btn')) {
      cursor.classList.add('hovered');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .card, .filter-btn, .cmd-item, input, .wiki-link-btn')) {
      cursor.classList.remove('hovered');
    }
  });
}

/* ----------------------------------------------------
   2. 3D Card Tilt 傾斜效果
---------------------------------------------------- */
function apply3DTiltEffect(card) {
  if (window.matchMedia('(max-width: 768px)').matches) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.setProperty('--glare-x', `${glareX}%`);
    card.style.setProperty('--glare-y', `${glareY}%`);
    card.style.setProperty('--glare-opacity', '1');
  });

  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.setProperty('--glare-opacity', '0');

    setTimeout(() => { card.style.transition = ''; }, 500);
  });
}

/* ----------------------------------------------------
   3. Web Audio 系統按鍵音效
---------------------------------------------------- */
function playClickSound(freq = 750, type = 'sine', duration = 0.035) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
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
  } catch (e) {}
}

function setupSoundToggle() {
  if (!soundToggleBtn) return;
  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundToggleBtn.textContent = soundEnabled ? '[ SOUND: ON ]' : '[ SOUND: OFF ]';
    if (soundEnabled) playClickSound(900, 'square');
  });
}

/* ----------------------------------------------------
   4. Mini Music Player
---------------------------------------------------- */
function setupMiniPlayer() {
  if (!playerPlayBtn) return;

  playerPlayBtn.addEventListener('click', () => {
    if (!globalAudio.src) return;
    if (globalAudio.paused) {
      globalAudio.play();
      miniPlayer.classList.add('playing');
      playerPlayBtn.textContent = '[ ⏸ ]';
    } else {
      globalAudio.pause();
      miniPlayer.classList.remove('playing');
      playerPlayBtn.textContent = '[ ▶ ]';
    }
  });

  globalAudio.addEventListener('ended', () => {
    miniPlayer.classList.remove('playing');
    playerPlayBtn.textContent = '[ ▶ ]';
  });
}

function playAudioTrack(fileName, trackDisplayName) {
  globalAudio.src = `assets/audio/${fileName}`;
  playerTrackName.textContent = trackDisplayName;
  
  globalAudio.play().then(() => {
    miniPlayer.classList.add('playing');
    playerPlayBtn.textContent = '[ ⏸ ]';
  }).catch(() => {
    console.warn(`請確認 assets/audio/${fileName} 檔案是否存在。`);
  });
}

/* ----------------------------------------------------
   5. 彩蛋處理器 (Easter Eggs)
---------------------------------------------------- */
function triggerLightShow() {
  const overlay = document.getElementById('lightshow-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    void overlay.offsetWidth;
    overlay.classList.add('active');
  }
}

function spawnJojoMenace() {
  const container = document.getElementById('jojo-menace-container');
  if (!container) return;

  for (let i = 0; i < 7; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'jojo-menace-text';
      el.textContent = 'ゴ';
      el.style.left = `${Math.random() * 80 + 10}vw`;
      el.style.top = `${Math.random() * 70 + 15}vh`;
      container.appendChild(el);

      setTimeout(() => el.remove(), 2000);
    }, i * 200);
  }
}

function handleEasterEgg(keyword) {
  const key = keyword.trim().toLowerCase();
  document.body.classList.remove('towa-theme', 'jojo-theme', 'holo-theme');

  if (key === 'towa') {
    document.body.classList.add('towa-theme');
    triggerLightShow();
    playAudioTrack('FACT_常闇トワ.mp3', 'FACT_常闇トワ');
    return true;
  }

  const jojoMap = {
    'jojo1': { file: 'JOJO SONO CHINO SADAME.mp3', name: 'JOJO SONO CHINO SADAME' },
    'jojo2': { file: 'BLOODY STREAM.mp3', name: 'BLOODY STREAM' },
    'jojo3': { file: 'STAND PROUD.mp3', name: 'STAND PROUD' },
    'jojo4': { file: 'Great Days.mp3', name: 'Great Days' },
    'jojo5': { file: 'il vento doro.mp3', name: 'il vento doro' },
    'jojo6': { file: 'STONE OCEAN.mp3', name: 'STONE OCEAN' },
    'jojo7': { file: 'Dance with STEEL BALL RUN.mp3', name: 'Dance with STEEL BALL RUN' }
  };

  if (jojoMap[key]) {
    document.body.classList.add('jojo-theme');
    triggerLightShow();
    spawnJojoMenace();
    playAudioTrack(jojoMap[key].file, jojoMap[key].name);
    return true;
  }

  if (key === 'holo') {
    document.body.classList.add('holo-theme');
    triggerLightShow();
    playAudioTrack('holo_remix.mp3', 'holo_remix');
    return true;
  }

  return false;
}

/* ----------------------------------------------------
   6. Command Palette 命令列 (手機點擊打字徹底修正)
---------------------------------------------------- */
function setupCommandPalette() {
  if (!cmdPalette || !cmdInput || !cmdList) return;

  const commands = [
    { label: "[ 彩蛋 ] 輸入 'towa' 觸發常闇永遠專屬主題", action: () => handleEasterEgg('towa') },
    { label: "[ 彩蛋 ] 輸入 'jojo1' ~ 'jojo7' 觸發 JOJO 奇妙冒險", action: () => handleEasterEgg('jojo1') },
    { label: "[ 彩蛋 ] 輸入 'holo' 觸發 Hololive 藍色科技風", action: () => handleEasterEgg('holo') },
    { label: "前往 // 關於我", action: () => scrollToSection('about') },
    { label: "前往 // 作品集", action: () => scrollToSection('portfolio') },
    { label: "前往 // 聯絡我", action: () => scrollToSection('contact') },
    { label: "開啟常闇永遠維基百科", action: () => window.open('https://zh.wikipedia.org/zh-tw/%E5%B8%B8%E9%97%87%E6%B0%B8%E9%81%A0', '_blank') },
    { label: "篩選：全部作品 (ALL)", action: () => triggerFilter('all') },
    { label: "切換明暗主題 (Dark / Light)", action: () => toggleTheme() }
  ];

  let currentFilteredCommands = [...commands];

  function openCmd() {
    cmdPalette.classList.add('active');
    cmdPalette.setAttribute('aria-hidden', 'false');
    cmdInput.value = '';
    activeCmdIndex = 0;
    currentFilteredCommands = [...commands];
    renderCmds(currentFilteredCommands);
    playClickSound(800, 'square');
    
    // 💡 同步觸發聚焦，確保 iOS / Android 手機軟體鍵盤流暢彈出
    cmdInput.focus();
    cmdInput.select();
  }

  function closeCmd() {
    cmdPalette.classList.remove('active');
    cmdPalette.setAttribute('aria-hidden', 'true');
    cmdInput.blur();
  }

  function renderCmds(list) {
    cmdList.innerHTML = '';
    if (list.length === 0) {
      cmdList.innerHTML = '<li class="cmd-empty">[ 按 Enter 執行關鍵字指令 ]</li>';
      return;
    }

    list.forEach((item, i) => {
      const li = document.createElement('li');
      li.className = `cmd-item ${i === activeCmdIndex ? 'selected' : ''}`;
      li.innerHTML = `<span>${item.label}</span><span class="cmd-tag">[ EXEC ]</span>`;
      li.addEventListener('click', () => {
        item.action();
        closeCmd();
        playClickSound(1000, 'triangle');
      });
      cmdList.appendChild(li);
    });

    const selectedEl = cmdList.children[activeCmdIndex];
    if (selectedEl) selectedEl.scrollIntoView({ block: 'nearest' });
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
      if (cmdPalette.classList.contains('active')) closeCmd();
      else openCmd();
    } else if (e.key === 'Escape' && cmdPalette.classList.contains('active')) {
      closeCmd();
    } else if (cmdPalette.classList.contains('active')) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentFilteredCommands.length > 0) {
          activeCmdIndex = (activeCmdIndex + 1) % currentFilteredCommands.length;
          renderCmds(currentFilteredCommands);
          playClickSound(600, 'sine');
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentFilteredCommands.length > 0) {
          activeCmdIndex = (activeCmdIndex - 1 + currentFilteredCommands.length) % currentFilteredCommands.length;
          renderCmds(currentFilteredCommands);
          playClickSound(600, 'sine');
        }
      } else if (e.key === 'Enter') {
        const val = cmdInput.value.trim();
        if (handleEasterEgg(val)) {
          closeCmd();
        } else if (currentFilteredCommands.length > 0 && currentFilteredCommands[activeCmdIndex]) {
          currentFilteredCommands[activeCmdIndex].action();
          closeCmd();
          playClickSound(1000, 'triangle');
        }
      }
    }
  });

  cmdInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    activeCmdIndex = 0;
    if (!val) {
      currentFilteredCommands = [...commands];
    } else {
      currentFilteredCommands = commands.filter(c => c.label.toLowerCase().includes(val));
    }
    renderCmds(currentFilteredCommands);
  });

  if (cmdOverlay) cmdOverlay.addEventListener('click', closeCmd);
  if (cmdTriggerBtn) cmdTriggerBtn.addEventListener('click', openCmd);
  if (mobileCmdBtn) {
    mobileCmdBtn.addEventListener('click', () => {
      if (mobileNavMenu) mobileNavMenu.classList.remove('active');
      openCmd();
    });
  }
}

/* ----------------------------------------------------
   7. Lightbox 功能
---------------------------------------------------- */
function resetZoom() {
  zoomScale = 1;
  panX = 0;
  panY = 0;
  updateImageTransform();
}

function updateImageTransform() {
  const img = lightboxContent.querySelector('img');
  if (img) {
    img.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomScale})`;
  }
}

function setupLightboxZoomAndDrag() {
  lightboxContent.addEventListener('wheel', (e) => {
    const img = lightboxContent.querySelector('img');
    if (!img) return;
    e.preventDefault();

    const zoomFactor = 0.15;
    if (e.deltaY < 0) {
      zoomScale = Math.min(zoomScale + zoomFactor, 4);
    } else {
      zoomScale = Math.max(zoomScale - zoomFactor, 1);
    }

    if (zoomScale === 1) {
      panX = 0;
      panY = 0;
    }
    updateImageTransform();
  }, { passive: false });

  lightboxContent.addEventListener('mousedown', (e) => {
    const img = lightboxContent.querySelector('img');
    if (!img || zoomScale <= 1) return;
    isDragging = true;
    startX = e.clientX - panX;
    startY = e.clientY - panY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    panX = e.clientX - startX;
    panY = e.clientY - startY;
    updateImageTransform();
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  const wrapper = document.querySelector('.lightbox-media-wrapper');
  if (wrapper) {
    wrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
      if (zoomScale > 1) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > 50 && Math.abs(deltaY) < 60) {
        if (deltaX < 0) navigateLightbox(1);
        else navigateLightbox(-1);
      }
    }, { passive: true });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    else if (e.key === 'ArrowRight') navigateLightbox(1);
    else if (e.key === 'Escape') closeLightbox();
  });

  if (lightboxFullscreenBtn) {
    lightboxFullscreenBtn.addEventListener('click', () => {
      playClickSound(800, 'sine');
      if (!document.fullscreenElement) {
        lightboxContent.requestFullscreen().catch(err => console.log(err));
      } else {
        document.exitFullscreen();
      }
    });
  }

  if (lightboxResetBtn) {
    lightboxResetBtn.addEventListener('click', () => {
      playClickSound(750, 'sine');
      resetZoom();
    });
  }
}

function navigateLightbox(direction) {
  if (currentGallery.length <= 1) return;
  currentIndex = (currentIndex + direction + currentGallery.length) % currentGallery.length;
  updateLightboxContent();
  playClickSound(800, 'sine');
}

/* ----------------------------------------------------
   8. 基礎渲染與載入模組
---------------------------------------------------- */
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

function setupTypewriter() {
  const typewriterEl = document.getElementById('typewriter');
  if (!typewriterEl) return;

  const phrases = ["> 數位內容創作者", "> AI 應用探索", "> 視覺設計"];
  let phraseIdx = 0, charIdx = 0, isDeleting = false;

  function type() {
    const current = phrases[phraseIdx];
    typewriterEl.textContent = isDeleting ? current.substring(0, charIdx - 1) : current.substring(0, charIdx + 1);
    charIdx = isDeleting ? charIdx - 1 : charIdx + 1;

    let speed = isDeleting ? 35 : 75;

    if (!isDeleting && charIdx === current.length) {
      speed = 2200;
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

function renderPortfolio(data) {
  if (!gridContainer) return;
  gridContainer.innerHTML = '';

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', item.id);

    const hasSlideshow = item.items && item.items.length > 1;
    const isTowaCard = (item.id === 1);

    card.innerHTML = `
      <div class="card-media-wrapper">
        <img src="${item.cover}" alt="${item.title}" onerror="this.onerror=null; this.src='${FALLBACK_IMG}';">
        <span class="card-badge">${item.categoryLabel}</span>
        ${hasSlideshow ? `<span class="card-slideshow-indicator">GALLERY [1/${item.items.length}]</span>` : ''}
      </div>
      <div class="card-info">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc}</p>
        ${isTowaCard ? `
          <div class="card-actions" style="margin-top: 12px;">
            <a href="https://zh.wikipedia.org/zh-tw/%E5%B8%B8%E9%97%87%E6%B0%B8%E9%81%A0" target="_blank" rel="noopener noreferrer" class="wiki-link-btn" style="display: inline-block; font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-red); border: 1px dashed var(--accent-red); padding: 4px 10px; background: rgba(255,42,42,0.05);" onclick="event.stopPropagation();">
              [ ↗ 維基百科：常闇永遠 ]
            </a>
          </div>
        ` : ''}
      </div>
    `;

    apply3DTiltEffect(card);

    card.addEventListener('click', () => {
      playClickSound(850, 'sine');
      openLightbox(item);
    });
    gridContainer.appendChild(card);
  });
}

function openLightbox(portfolioItem) {
  currentGallery = portfolioItem.items;
  currentIndex = 0;
  resetZoom();
  
  updateLightboxContent();
  lightbox.classList.add('active');
  document.body.classList.add('modal-open');
}

function closeLightbox() {
  playClickSound(500, 'sine');
  lightbox.classList.remove('active');
  document.body.classList.remove('modal-open');
  
  const video = lightboxContent.querySelector('video');
  if (video) video.pause();
  lightboxContent.innerHTML = '';
  resetZoom();
}

function updateLightboxContent() {
  const media = currentGallery[currentIndex];
  if (!media) return;

  lightboxContent.innerHTML = '';
  resetZoom();

  if (media.type === 'video') {
    const video = document.createElement('video');
    video.src = media.src;
    video.controls = true;
    video.autoplay = true;
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

function setupFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playClickSound(700, 'triangle');
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') renderPortfolio(portfolioData);
      else renderPortfolio(portfolioData.filter(item => item.category === filter));
    });
  });
}

function setupThemeToggle() {
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      playClickSound(650, 'sine');
      document.body.classList.remove('towa-theme', 'jojo-theme', 'holo-theme');
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      if (themeIcon) themeIcon.textContent = isLight ? '[ LIGHT ]' : '[ DARK ]';
    });
  }
}

function setupBackToTop() {
  if (!backToTopBtn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) backToTopBtn.classList.add('show');
    else backToTopBtn.classList.remove('show');
  });
  backToTopBtn.addEventListener('click', () => {
    playClickSound(950, 'sine');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setupMobileMenu() {
  if (mobileMenuBtn && mobileNavMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      playClickSound(600, 'square');
      mobileNavMenu.classList.toggle('active');
    });

    mobileNavMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavMenu.classList.remove('active');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => introCurtain && introCurtain.classList.add('loaded'), 600);
  
  setupCustomCursor();
  setupThemeToggle();
  setupSoundToggle();
  setupMatrixClock();
  setupTypewriter();
  setupCommandPalette();
  setupMiniPlayer();
  setupLightboxZoomAndDrag();
  
  renderPortfolio(portfolioData);
  setupFilters();
  setupMobileMenu();
  setupBackToTop();

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => navigateLightbox(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigateLightbox(1));
});