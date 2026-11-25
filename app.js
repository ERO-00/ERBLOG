/**
 * ERBLOG v2.5 // MAIN APP SCRIPT
 * SPRING JELLY FX, DOT RIPPLES, PLAYLIST, MULTI-HUD, COMPANION & SYNTH SFX
 */

const towaEasterImages = [
  'assets/towa_egg1.jpg',
  'assets/towa_egg2.jpg',
  'assets/towa_egg3.jpg'
];

const PLAYLIST_TRACKS = [
  { file: 'FACT_常闇トワ.mp3', name: 'FACT_常闇トワ', tag: 'TOWA' },
  { file: 'il vento doro.mp3', name: 'il vento doro', tag: 'JOJO5' },
  { file: 'holo_remix.mp3', name: 'holo_remix', tag: 'HOLO' },
  { file: 'JOJO SONO CHINO SADAME.mp3', name: 'JOJO SONO CHINO SADAME', tag: 'JOJO1' },
  { file: 'BLOODY STREAM.mp3', name: 'BLOODY STREAM', tag: 'JOJO2' },
  { file: 'STAND PROUD.mp3', name: 'STAND PROUD', tag: 'JOJO3' },
  { file: 'Great Days.mp3', name: 'Great Days', tag: 'JOJO4' },
  { file: 'STONE OCEAN.mp3', name: 'STONE OCEAN', tag: 'JOJO6' },
  { file: 'Dance with STEEL BALL RUN.mp3', name: 'Dance with STEEL BALL RUN', tag: 'JOJO7' }
];

const ACCENT_PRESETS = [
  { cls: 'accent-crimson', label: 'COLOR: CRIMSON', bot: '已切換主題色為點陣紅 CRIMSON。' },
  { cls: 'accent-hyper-cyan', label: 'COLOR: CYAN', bot: '已切換主題色為全息青 CYAN。' },
  { cls: 'accent-neon-violet', label: 'COLOR: VIOLET', bot: '已切換主題色為霓虹紫 VIOLET。' },
  { cls: 'accent-amber-gold', label: 'COLOR: GOLD', bot: '已切換主題色為琥珀金 GOLD。' }
];

const HUD_PRESETS = [
  { cls: 'hud-glass', label: 'HUD: GLASS', bot: 'HUD 風格：蘋果級毛玻璃 GLASS。' },
  { cls: 'hud-dotmatrix', label: 'HUD: DOT', bot: 'HUD 風格：高密度微點陣 DOT。' },
  { cls: 'hud-solid', label: 'HUD: SOLID', bot: 'HUD 風格：高對比實心面板 SOLID。' }
];

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

const FALLBACK_IMG = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22background%3A%23121212%3B%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%20stroke%3D%22%23262626%22%20stroke-width%3D%222%22%2F%3E%3Ccircle%20cx%3D%22200%22%20cy%3D%22130%22%20r%3D%224%22%20fill%3D%22%23ff2a2a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2255%25%22%20fill%3D%22%23888888%22%20font-family%3D%22Space%20Mono%2C%20monospace%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%3EIMAGE%20NOT%20FOUND%3C%2Ftext%3E%3C%2Fsvg%3E";

// DOM 引用
const gridContainer = document.getElementById('portfolio-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const readingProgressBar = document.getElementById('reading-progress-bar');
const ambientGlow = document.getElementById('ambient-glow');
const clickFxLayer = document.getElementById('click-fx-layer');

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
const accentCycleBtn = document.getElementById('accent-cycle-btn');
const hudStyleBtn = document.getElementById('hud-style-btn');
const mobileAccentBtn = document.getElementById('mobile-accent-btn');
const mobileHudBtn = document.getElementById('mobile-hud-btn');
const introCurtain = document.getElementById('intro-curtain');

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNavMenu = document.getElementById('mobile-nav-menu');

const soundToggleBtn = document.getElementById('sound-toggle');
const cmdPalette = document.getElementById('cmd-palette');
const cmdInput = document.getElementById('cmd-input');
const cmdList = document.getElementById('cmd-list');
const cmdOverlay = document.getElementById('cmd-overlay');
const cmdTriggerBtn = document.getElementById('cmd-trigger-btn');
const mobileCmdBtn = document.getElementById('mobile-cmd-launch-btn');
const openCmdContactBtn = document.getElementById('open-cmd-contact-btn');
const cmdOutputBar = document.getElementById('cmd-output-bar');

const companionWidget = document.getElementById('companion-widget');
const companionBubble = document.getElementById('companion-bubble');
const companionStateLabel = document.getElementById('companion-state-label');
const companionAvatarBtn = document.getElementById('companion-avatar-btn');
const companionMinBtn = document.getElementById('companion-min-btn');

const miniPlayer = document.getElementById('mini-player');
const playerTrackName = document.getElementById('player-track-name');
const playerPlayBtn = document.getElementById('player-play-btn');
const playerPrevBtn = document.getElementById('player-prev-btn');
const playerNextBtn = document.getElementById('player-next-btn');
const playerPlaylistBtn = document.getElementById('player-playlist-btn');
const playerPlaylistDrawer = document.getElementById('player-playlist-drawer');
const playerDockBtn = document.getElementById('player-dock-btn');
const playerVolumeSlider = document.getElementById('player-volume-slider');
const playerVolumeText = document.getElementById('player-volume-text');
const playerDragHandle = document.getElementById('player-drag-handle');
const playerVisualizerCanvas = document.getElementById('player-visualizer');
const playerVizStyleBtn = document.getElementById('player-viz-style-btn');

// 全域音訊與 Web Audio API
const globalAudio = new Audio();
globalAudio.crossOrigin = "anonymous";
globalAudio.volume = 0.7;

let audioCtx = null;
let analyserNode = null;
let audioSourceNode = null;
let dataArray = null;
let smoothDataArray = null;
let bufferLength = 0;
let peakArray = [];

let soundEnabled = true;
let ripplePhase = 0;
let vizStyle = 0;
const VIZ_STYLES = [
  { name: 'BARS', label: 'BARS' },
  { name: 'WAVE', label: 'WAVE' },
  { name: 'MATRIX', label: 'MATRIX' }
];
let activeAlpha = 0;
let currentTrackIndex = 0;
let accentIndex = 0;
let hudIndex = 0;

let currentGallery = [];
let currentIndex = 0;
let zoomScale = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;
let touchStartX = 0;
let touchStartY = 0;

let activeCmdIndex = 0;
let botTapCount = 0;

function sayBot(msg, mode = 'ACTIVE') {
  if (companionBubble) companionBubble.textContent = msg;
  if (companionStateLabel) companionStateLabel.textContent = `ER-BOT // ${mode}`;
}

function triggerJellySpring(el) {
  if (!el) return;
  el.classList.remove('jelly-springing');
  void el.offsetWidth;
  el.classList.add('jelly-springing');
  setTimeout(() => el.classList.remove('jelly-springing'), 660);
}

/* ----------------------------------------------------
   0. 閱讀進度條、動態光暈與點擊點陣漣漪/粒子
---------------------------------------------------- */
function setupAmbientAndProgress() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
    if (readingProgressBar) {
      readingProgressBar.style.width = `${pct}%`;
    }
    if (backToTopBtn) {
      if (scrollTop > 200) backToTopBtn.classList.add('show');
      else backToTopBtn.classList.remove('show');
    }
  }, { passive: true });

  window.addEventListener('pointermove', (e) => {
    if (!ambientGlow) return;
    ambientGlow.style.setProperty('--glow-x', `${e.clientX}px`);
    ambientGlow.style.setProperty('--glow-y', `${e.clientY}px`);
  }, { passive: true });
}

function spawnDotRippleAndParticles(x, y) {
  if (!clickFxLayer) return;

  const ring1 = document.createElement('div');
  ring1.className = 'dot-ripple-ring';
  ring1.style.left = `${x}px`;
  ring1.style.top = `${y}px`;
  clickFxLayer.appendChild(ring1);

  const ring2 = document.createElement('div');
  ring2.className = 'dot-ripple-ring secondary';
  ring2.style.left = `${x}px`;
  ring2.style.top = `${y}px`;
  clickFxLayer.appendChild(ring2);

  const particleCount = 10;
  for (let i = 0; i < particleCount; i++) {
    const angle = (Math.PI * 2 * i) / particleCount + (Math.random() * 0.35 - 0.175);
    const dist = 28 + Math.random() * 44;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;

    const spark = document.createElement('div');
    spark.className = 'click-spark-dot';
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.setProperty('--dx', `${dx.toFixed(1)}px`);
    spark.style.setProperty('--dy', `${dy.toFixed(1)}px`);
    if (i % 2 === 1) {
      spark.style.background = 'var(--accent-cyan)';
    }
    clickFxLayer.appendChild(spark);
    setTimeout(() => spark.remove(), 660);
  }

  setTimeout(() => {
    ring1.remove();
    ring2.remove();
  }, 900);
}

function setupClickFxLayer() {
  document.addEventListener('pointerdown', (e) => {
    spawnDotRippleAndParticles(e.clientX, e.clientY);
  }, { passive: true });
}

/* ----------------------------------------------------
   1. 科技感自訂瞄準游標
---------------------------------------------------- */
function setupCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor || window.matchMedia('(max-width: 768px)').matches) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }, { passive: true });

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .card, .filter-btn, .cmd-item, input, .wiki-link-btn, .player-drag-handle, .volume-slider, .companion-widget, .playlist-track-item')) {
      cursor.classList.add('hovered');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .card, .filter-btn, .cmd-item, input, .wiki-link-btn, .player-drag-handle, .volume-slider, .companion-widget, .playlist-track-item')) {
      cursor.classList.remove('hovered');
    }
  });
}

/* ----------------------------------------------------
   2. 3D Card Tilt 傾斜與光澤效果
---------------------------------------------------- */
function apply3DTiltEffect(card) {
  if (window.matchMedia('(max-width: 768px)').matches) return;

  let rect = null;
  let rafId = null;
  let mouseX = 0;
  let mouseY = 0;

  let glare = card.querySelector('.card-glare');
  if (!glare) {
    glare = document.createElement('div');
    glare.className = 'card-glare';
    card.appendChild(glare);
  }

  function updateTilt() {
    if (!rect) return;
    const x = mouseX - rect.left;
    const y = mouseY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    glare.style.background = `radial-gradient(circle at ${percentX.toFixed(1)}% ${percentY.toFixed(1)}%, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(0, 0, 0, 0.45) 95%)`;
    glare.style.opacity = '1';
    rafId = null;
  }

  card.addEventListener('mouseenter', () => {
    rect = card.getBoundingClientRect();
    card.style.transition = 'transform 0.14s cubic-bezier(0.2, 0.8, 0.2, 1)';
    glare.style.opacity = '1';
  });

  card.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!rafId) rafId = requestAnimationFrame(updateTilt);
  });

  card.addEventListener('mouseleave', () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    rect = null;
    card.style.transition = 'transform 0.55s cubic-bezier(0.32, 1.48, 0.42, 1)';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    glare.style.opacity = '0';
  });
}

/* ----------------------------------------------------
   3. 蘋果級合成互動音效與靜音開關
---------------------------------------------------- */
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

window.addEventListener('pointerdown', () => {
  try { getAudioContext(); } catch (e) {}
}, { once: true });

function playClickSound(freq = 780, type = 'sine', duration = 0.055, mode = 'tap') {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    if (mode === 'spring') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * 0.72, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.38, now + duration * 0.55);
      osc.frequency.exponentialRampToValueAtTime(freq, now + duration);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + duration + 0.01);
      return;
    }

    const osc = ctx.createOscillator();
    const subOsc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    subOsc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(Math.max(120, freq * 0.38), now + duration);

    subOsc.frequency.setValueAtTime(freq * 1.5, now);
    subOsc.frequency.exponentialRampToValueAtTime(freq * 0.65, now + duration * 0.8);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.11, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    subOsc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    subOsc.start(now);
    osc.stop(now + duration + 0.01);
    subOsc.stop(now + duration + 0.01);
  } catch (e) {}
}

function setupSoundToggle() {
  if (!soundToggleBtn) return;
  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundToggleBtn.textContent = soundEnabled ? 'SOUND: ON' : 'SOUND: OFF';
    sayBot(soundEnabled ? '雙音層合成音效已開啟！' : '已切換為靜音模式。', soundEnabled ? 'AUDIO_ON' : 'MUTE');
    if (soundEnabled) playClickSound(960, 'triangle', 0.07, 'spring');
  });
}

/* ----------------------------------------------------
   4. Web Audio 頻譜分析與 Canvas 繪製
---------------------------------------------------- */
function initWebAudioAnalyser() {
  const ctx = getAudioContext();
  if (!analyserNode) {
    analyserNode = ctx.createAnalyser();
    analyserNode.fftSize = 256;
    analyserNode.smoothingTimeConstant = 0.82;
    bufferLength = analyserNode.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    smoothDataArray = new Float32Array(bufferLength);
    peakArray = new Array(32).fill(0);
  }

  if (!audioSourceNode && globalAudio) {
    try {
      audioSourceNode = ctx.createMediaElementSource(globalAudio);
      audioSourceNode.connect(analyserNode);
      analyserNode.connect(ctx.destination);
    } catch (err) {
      console.warn("AudioSource notice:", err);
    }
  }
}

function setupCanvasVisualizer() {
  if (!playerVisualizerCanvas) return;
  const ctx = playerVisualizerCanvas.getContext('2d');

  function resizeCanvas() {
    const rect = playerVisualizerCanvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    playerVisualizerCanvas.width = Math.max(120, (rect.width || 200) * dpr);
    playerVisualizerCanvas.height = Math.max(24, (rect.height || 38) * dpr);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let cachedAccentColor = '#ff2a2a';
  function updateCachedColor() {
    cachedAccentColor = getComputedStyle(document.body).getPropertyValue('--accent-red').trim() || '#ff2a2a';
  }
  updateCachedColor();
  window.addEventListener('click', updateCachedColor);

  function renderFrame() {
    requestAnimationFrame(renderFrame);
    const w = playerVisualizerCanvas.width;
    const h = playerVisualizerCanvas.height;
    const dpr = window.devicePixelRatio || 1;

    ctx.clearRect(0, 0, w, h);

    const isPlaying = globalAudio && !globalAudio.paused && globalAudio.currentTime > 0;
    const targetAlpha = isPlaying ? 1.0 : 0.0;
    activeAlpha += (targetAlpha - activeAlpha) * 0.12;

    if (analyserNode && dataArray) {
      if (isPlaying) analyserNode.getByteFrequencyData(dataArray);
      for (let i = 0; i < bufferLength; i++) {
        const raw = isPlaying ? dataArray[i] : 0;
        smoothDataArray[i] += (raw - smoothDataArray[i]) * 0.2;
      }
    }

    if (activeAlpha > 0.02 && smoothDataArray) {
      ctx.save();
      ctx.globalAlpha = activeAlpha;

      if (vizStyle === 0) {
        const numBars = 26;
        const barGap = 2 * dpr;
        const barWidth = (w - (numBars - 1) * barGap) / numBars;
        const activeLength = Math.floor(bufferLength * 0.72);
        const mainHeight = h * 0.75;

        const grad = ctx.createLinearGradient(0, mainHeight, 0, 0);
        grad.addColorStop(0, cachedAccentColor);
        grad.addColorStop(1, '#ffffff');

        for (let i = 0; i < numBars; i++) {
          const binIndex = Math.min(bufferLength - 1, Math.floor((i / numBars) * activeLength));
          const percent = Math.min(1, Math.max(0, smoothDataArray[binIndex] / 255));
          const barHeight = Math.max(2 * dpr, percent * (mainHeight - 4 * dpr));
          const x = i * (barWidth + barGap);
          const y = mainHeight - barHeight;

          ctx.fillStyle = grad;
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(x, y, barWidth, barHeight, [2 * dpr, 2 * dpr, 0, 0]);
          } else {
            ctx.rect(x, y, barWidth, barHeight);
          }
          ctx.fill();

          if (!peakArray[i] || barHeight > peakArray[i]) {
            peakArray[i] = barHeight;
          } else {
            peakArray[i] = Math.max(0, peakArray[i] - 1.2 * dpr);
          }

          ctx.fillStyle = '#ffffff';
          ctx.fillRect(x, Math.max(0, mainHeight - peakArray[i] - 2 * dpr), barWidth, 1.5 * dpr);
        }
      } else if (vizStyle === 1) {
        const centerY = h / 2;
        ctx.lineWidth = 2 * dpr;
        ctx.strokeStyle = cachedAccentColor;
        ctx.beginPath();
        const sliceWidth = w / 32;
        for (let i = 0; i < 32; i++) {
          const binIndex = Math.floor((i / 32) * (bufferLength * 0.6));
          const val = (smoothDataArray[binIndex] / 255) * (h * 0.42);
          const x = i * sliceWidth;
          const y = centerY + (i % 2 === 0 ? -val : val);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.quadraticCurveTo(x - sliceWidth / 2, centerY, x, y);
        }
        ctx.stroke();
      } else {
        const cols = 20;
        const rows = 6;
        const gap = 2 * dpr;
        const cellW = (w - (cols - 1) * gap) / cols;
        const cellH = (h - (rows - 1) * gap) / rows;
        for (let c = 0; c < cols; c++) {
          const binIndex = Math.floor((c / cols) * (bufferLength * 0.65));
          const activeRows = Math.round((smoothDataArray[binIndex] / 255) * rows);
          for (let r = 0; r < rows; r++) {
            const x = c * (cellW + gap);
            const y = h - (r + 1) * (cellH + gap);
            ctx.fillStyle = r < activeRows ? (r > rows - 2 ? '#ffffff' : cachedAccentColor) : 'rgba(255, 255, 255, 0.08)';
            ctx.fillRect(x, y, cellW, cellH);
          }
        }
      }
      ctx.restore();
    }

    if (activeAlpha < 0.98) {
      ripplePhase += 0.04;
      const centerY = h / 2;
      ctx.save();
      ctx.globalAlpha = (1 - activeAlpha) * 0.6;
      ctx.beginPath();
      ctx.lineWidth = 1.5 * dpr;
      ctx.strokeStyle = cachedAccentColor;
      for (let x = 0; x < w; x += 2 * dpr) {
        const y = centerY + Math.sin(x * 0.03 + ripplePhase) * 4 * dpr;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    }
  }

  renderFrame();
}

/* ----------------------------------------------------
   5. 蘋果果凍播放器 + 迷你播放清單 / 快速切歌
---------------------------------------------------- */
function updatePlayBtnText(isPlaying) {
  if (!playerPlayBtn) return;
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const playIcon = playerPlayBtn.querySelector('.play-icon');
  const playText = playerPlayBtn.querySelector('.play-text');
  if (playIcon && playText) {
    playIcon.textContent = isPlaying ? '⏸' : '▶';
    playText.textContent = isPlaying ? (isMobile ? '' : 'PAUSE') : (isMobile ? '' : 'PLAY');
  }
}

function updateVolumeSliderBackground(val) {
  if (!playerVolumeSlider) return;
  const pct = Math.round(val * 100);
  const accentColor = getComputedStyle(document.body).getPropertyValue('--accent-red').trim() || '#ff2a2a';
  playerVolumeSlider.style.background = `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${pct}%, var(--border-color) ${pct}%, var(--border-color) 100%)`;
}

function renderPlaylistDrawer() {
  if (!playerPlaylistDrawer) return;
  playerPlaylistDrawer.innerHTML = '';

  PLAYLIST_TRACKS.forEach((track, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `playlist-track-item jelly-btn ${idx === currentTrackIndex ? 'active' : ''}`;
    btn.innerHTML = `<span>${idx + 1}. ${track.name}</span><span>${track.tag}</span>`;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentTrackIndex = idx;
      playAudioTrack(track.file, track.name, false);
      renderPlaylistDrawer();
      triggerJellySpring(miniPlayer);
      playClickSound(860, 'sine', 0.06, 'spring');
    });
    playerPlaylistDrawer.appendChild(btn);
  });
}

function stepTrack(delta) {
  currentTrackIndex = (currentTrackIndex + delta + PLAYLIST_TRACKS.length) % PLAYLIST_TRACKS.length;
  const track = PLAYLIST_TRACKS[currentTrackIndex];
  playAudioTrack(track.file, track.name, false);
  renderPlaylistDrawer();
  triggerJellySpring(miniPlayer);
  playClickSound(delta > 0 ? 920 : 720, 'triangle', 0.06, 'spring');
  sayBot(`切換至曲目：${track.name}`, 'MUSIC');
}

function togglePlayerCollapse() {
  if (!miniPlayer) return;
  miniPlayer.classList.toggle('collapsed');
  triggerJellySpring(miniPlayer);
  const dockIcon = playerDockBtn ? playerDockBtn.querySelector('.dock-icon') : null;
  if (dockIcon) {
    dockIcon.textContent = miniPlayer.classList.contains('collapsed') ? '+' : '−';
  }
  playClickSound(760, 'sine', 0.06, 'spring');
}

function setupMiniPlayer() {
  if (!playerPlayBtn) return;

  renderPlaylistDrawer();

  playerPlayBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    triggerJellySpring(miniPlayer);
    playClickSound(840, 'sine', 0.06, 'spring');

    if (!globalAudio.src) {
      const track = PLAYLIST_TRACKS[currentTrackIndex];
      playAudioTrack(track.file, track.name, false);
      return;
    }

    initWebAudioAnalyser();
    if (globalAudio.paused) {
      getAudioContext();
      globalAudio.play().catch(() => {});
      miniPlayer.classList.add('playing');
      updatePlayBtnText(true);
    } else {
      globalAudio.pause();
      miniPlayer.classList.remove('playing');
      updatePlayBtnText(false);
    }
  });

  if (playerPrevBtn) {
    playerPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stepTrack(-1);
    });
  }

  if (playerNextBtn) {
    playerNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stepTrack(1);
    });
  }

  if (playerPlaylistBtn && playerPlaylistDrawer) {
    playerPlaylistBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      playerPlaylistDrawer.classList.toggle('open');
      triggerJellySpring(miniPlayer);
      playClickSound(820, 'sine', 0.05, 'spring');
    });
  }

  if (playerVizStyleBtn) {
    playerVizStyleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      vizStyle = (vizStyle + 1) % VIZ_STYLES.length;
      playerVizStyleBtn.textContent = VIZ_STYLES[vizStyle].label;
      triggerJellySpring(miniPlayer);
      playClickSound(880, 'square', 0.06, 'spring');
    });
  }

  if (playerVolumeSlider && playerVolumeText) {
    playerVolumeSlider.value = globalAudio.volume;
    playerVolumeText.textContent = `${Math.round(globalAudio.volume * 100)}%`;
    updateVolumeSliderBackground(globalAudio.volume);

    playerVolumeSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      globalAudio.volume = val;
      playerVolumeText.textContent = `${Math.round(val * 100)}%`;
      updateVolumeSliderBackground(val);
    });
  }

  if (playerDockBtn) {
    playerDockBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlayerCollapse();
    });
  }

  miniPlayer.addEventListener('click', () => {
    if (miniPlayer.classList.contains('collapsed')) togglePlayerCollapse();
  });

  globalAudio.addEventListener('ended', () => {
    stepTrack(1);
  });

  setupDraggableWidget(miniPlayer, playerDragHandle || miniPlayer);
}

function playAudioTrack(fileName, trackDisplayName, isEasterEgg = false) {
  initWebAudioAnalyser();
  getAudioContext();

  const matchedIdx = PLAYLIST_TRACKS.findIndex(t => t.file.toLowerCase() === fileName.toLowerCase());
  if (matchedIdx !== -1) {
    currentTrackIndex = matchedIdx;
    renderPlaylistDrawer();
  }

  if (isEasterEgg) {
    globalAudio.volume = 0.25;
    if (playerVolumeSlider) playerVolumeSlider.value = 0.25;
    if (playerVolumeText) playerVolumeText.textContent = '25%';
    updateVolumeSliderBackground(0.25);
  }

  globalAudio.src = `assets/audio/${fileName}`;
  globalAudio.load();
  if (playerTrackName) playerTrackName.textContent = trackDisplayName;

  const playPromise = globalAudio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      miniPlayer.classList.add('playing');
      updatePlayBtnText(true);
    }).catch((err) => {
      console.warn(`請確認 assets/audio/${fileName} 音訊檔案是否存在。`, err);
    });
  }
}

function setupDraggableWidget(element, handle) {
  let isDrag = false;
  let offsetX = 0;
  let offsetY = 0;

  function onPointerDown(e) {
    if (e.target.closest('button, input, a, canvas')) return;
    if (element.classList.contains('collapsed')) return;

    isDrag = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const rect = element.getBoundingClientRect();
    offsetX = clientX - rect.left;
    offsetY = clientY - rect.top;

    element.style.left = `${rect.left}px`;
    element.style.top = `${rect.top}px`;
    element.style.bottom = 'auto';
    element.style.right = 'auto';

    document.addEventListener('mousemove', onPointerMove, { passive: false });
    document.addEventListener('mouseup', onPointerUp);
    document.addEventListener('touchmove', onPointerMove, { passive: false });
    document.addEventListener('touchend', onPointerUp);
  }

  function onPointerMove(e) {
    if (!isDrag) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    if (e.cancelable) e.preventDefault();

    const maxLeft = window.innerWidth - element.offsetWidth - 10;
    const maxTop = window.innerHeight - element.offsetHeight - 10;
    element.style.left = `${Math.max(10, Math.min(clientX - offsetX, maxLeft))}px`;
    element.style.top = `${Math.max(10, Math.min(clientY - offsetY, maxTop))}px`;
  }

  function onPointerUp() {
    if (!isDrag) return;
    isDrag = false;
    triggerJellySpring(element);
    playClickSound(660, 'sine', 0.06, 'spring');
    document.removeEventListener('mousemove', onPointerMove);
    document.removeEventListener('mouseup', onPointerUp);
    document.removeEventListener('touchmove', onPointerMove);
    document.removeEventListener('touchend', onPointerUp);
  }

  handle.addEventListener('mousedown', onPointerDown);
  handle.addEventListener('touchstart', onPointerDown, { passive: true });
}

/* ----------------------------------------------------
   5.5 全站主題色 & HUD 風格切換
---------------------------------------------------- */
function cycleAccentTheme() {
  accentIndex = (accentIndex + 1) % ACCENT_PRESETS.length;
  const preset = ACCENT_PRESETS[accentIndex];
  document.body.classList.remove(...ACCENT_PRESETS.map(p => p.cls));
  document.body.classList.add(preset.cls);
  if (accentCycleBtn) accentCycleBtn.textContent = preset.label;
  updateVolumeSliderBackground(globalAudio.volume);
  playClickSound(900, 'triangle', 0.07, 'spring');
  sayBot(preset.bot, 'THEME_COLOR');
}

function cycleHudStyle() {
  hudIndex = (hudIndex + 1) % HUD_PRESETS.length;
  const preset = HUD_PRESETS[hudIndex];
  document.body.classList.remove(...HUD_PRESETS.map(p => p.cls));
  document.body.classList.add(preset.cls);
  if (hudStyleBtn) hudStyleBtn.textContent = preset.label;
  playClickSound(980, 'sine', 0.07, 'spring');
  sayBot(preset.bot, 'HUD_MODE');
}

function setupThemeAndHudControls() {
  if (accentCycleBtn) accentCycleBtn.addEventListener('click', cycleAccentTheme);
  if (hudStyleBtn) hudStyleBtn.addEventListener('click', cycleHudStyle);
  if (mobileAccentBtn) {
    mobileAccentBtn.addEventListener('click', () => {
      cycleAccentTheme();
      closeMobileNav();
    });
  }
  if (mobileHudBtn) {
    mobileHudBtn.addEventListener('click', () => {
      cycleHudStyle();
      closeMobileNav();
    });
  }
}

/* ----------------------------------------------------
   6. 大加強彩蛋特效層
---------------------------------------------------- */
function spawnShockwaveRing(colorHex) {
  if (!clickFxLayer) return;
  const ring = document.createElement('div');
  ring.className = 'egg-shockwave-ring';
  ring.style.setProperty('--shock-color', colorHex);
  clickFxLayer.appendChild(ring);
  setTimeout(() => ring.remove(), 1200);
}

function triggerLightShow() {
  const overlay = document.getElementById('lightshow-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    void overlay.offsetWidth;
    overlay.classList.add('active');
  }
}

function triggerJojoImpact(onComplete) {
  const overlay = document.getElementById('jojo-impact-overlay');
  spawnShockwaveRing('#ff007f');
  setTimeout(() => spawnShockwaveRing('#ffe600'), 140);

  if (!overlay) {
    if (onComplete) onComplete();
    return;
  }

  overlay.innerHTML = `
    <div class="impact-bg-lines"></div>
    <div class="jojo-impact-row row-top">ゴゴゴゴゴゴゴゴゴ</div>
    <div class="jojo-impact-row row-bottom">ドドドドドドドドド</div>
    <div class="jojo-impact-row row-center">ゴ ！！</div>
  `;
  overlay.classList.remove('active');
  void overlay.offsetWidth;
  overlay.classList.add('active');
  playClickSound(1120, 'sawtooth', 0.28);

  setTimeout(() => {
    overlay.classList.remove('active');
    overlay.innerHTML = '';
    if (onComplete) onComplete();
  }, 1650);
}

function spawnJojoMenace() {
  const container = document.getElementById('jojo-menace-container');
  if (!container) return;
  container.innerHTML = '';

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 14; i++) {
    const el = document.createElement('div');
    el.className = 'jojo-menace-text';
    el.textContent = i % 3 === 0 ? 'ド' : 'ゴ';
    el.style.left = `${Math.random() * 82 + 9}vw`;
    el.style.top = `${Math.random() * 64 + 18}vh`;
    el.style.animationDelay = `${i * 0.12}s`;
    fragment.appendChild(el);
    setTimeout(() => el.remove(), 2350 + i * 140);
  }
  container.appendChild(fragment);
}

function triggerTowaImpact() {
  const overlay = document.getElementById('towa-impact-overlay');
  const container = document.getElementById('towa-particles-container');
  spawnShockwaveRing('#b142ff');
  setTimeout(() => spawnShockwaveRing('#ff77ff'), 160);

  if (!overlay) return;

  overlay.innerHTML = '';
  if (container) container.innerHTML = '';

  const randomImgSrc = towaEasterImages[Math.floor(Math.random() * towaEasterImages.length)];
  overlay.innerHTML = `
    <div class="towa-devil-aura"></div>
    <div class="towa-halo"></div>
    <div class="towa-halo-inner"></div>
    <div class="towa-egg-img-container">
      <img src="${randomImgSrc}" class="towa-egg-image" alt="Towa Easter Egg" onerror="this.style.display='none';">
    </div>
    <div class="towa-impact-row row-sub">DEVIL OR ANGEL? // OVERDRIVE</div>
    <div class="towa-impact-row row-main">towa超可愛!!!</div>
  `;

  overlay.classList.remove('active');
  void overlay.offsetWidth;
  overlay.classList.add('active');

  requestAnimationFrame(() => {
    if (!container) return;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 48; i++) {
      const particle = document.createElement('div');
      const type = i % 3;
      particle.className = type === 0 ? 'towa-feather' : (type === 1 ? 'towa-crystal' : 'towa-star');
      particle.style.left = `${Math.random() * 94 + 3}vw`;
      particle.style.top = `${Math.random() * -22 - 10}vh`;
      particle.style.animationDelay = `${(Math.random() * 0.85).toFixed(2)}s`;
      particle.style.animationDuration = `${(2.5 + Math.random() * 1.2).toFixed(2)}s`;
      fragment.appendChild(particle);
    }
    container.appendChild(fragment);
  });

  playClickSound(1240, 'sine', 0.42, 'spring');
  setTimeout(() => {
    overlay.classList.remove('active');
    overlay.innerHTML = '';
    if (container) container.innerHTML = '';
  }, 3800);
}

function triggerHoloImpact() {
  const overlay = document.getElementById('holo-impact-overlay');
  const container = document.getElementById('holo-cyber-container');
  spawnShockwaveRing('#00d2ff');
  setTimeout(() => spawnShockwaveRing('#7cf3ff'), 160);

  if (!overlay) return;

  overlay.innerHTML = '';
  if (container) container.innerHTML = '';

  overlay.innerHTML = `
    <div class="holo-cyber-grid"></div>
    <div class="holo-scanline"></div>
    <div class="holo-impact-row row-sub">// VIRTUAL TALENT AGENCY // HOLO-MATRIX</div>
    <div class="holo-impact-row row-main">HOLOLIVE PRODUCTION</div>
  `;

  overlay.classList.remove('active');
  void overlay.offsetWidth;
  overlay.classList.add('active');

  requestAnimationFrame(() => {
    if (!container) return;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 52; i++) {
      const p = document.createElement('div');
      const type = i % 3;
      p.className = type === 0 ? 'holo-hex-particle' : (type === 1 ? 'holo-particle' : 'holo-ring-particle');
      p.style.left = `${Math.random() * 92 + 4}vw`;
      p.style.top = `${Math.random() * 75 + 10}vh`;
      p.style.animationDelay = `${(Math.random() * 0.85).toFixed(2)}s`;
      p.style.animationDuration = `${(2.6 + Math.random() * 1.2).toFixed(2)}s`;
      fragment.appendChild(p);
    }
    container.appendChild(fragment);
  });

  playClickSound(1420, 'triangle', 0.36, 'spring');
  setTimeout(() => {
    overlay.classList.remove('active');
    overlay.innerHTML = '';
    if (container) container.innerHTML = '';
  }, 3800);
}

function handleEasterEgg(keyword) {
  const key = keyword.trim().toLowerCase();
  closeMobileNav();
  document.body.classList.remove('towa-theme', 'jojo-theme', 'holo-theme');

  if (key === 'towa') {
    document.body.classList.add('towa-theme');
    playAudioTrack('FACT_常闇トワ.mp3', 'FACT_常闇トワ', true);
    triggerLightShow();
    triggerTowaImpact();
    sayBot('紫光超載！常闇永遠彩蛋已全面啟動。', 'TOWA_EGG');
    return true;
  }

  if (key === '99') {
    document.body.classList.add('jojo-theme');
    playAudioTrack('il vento doro.mp3', 'il vento doro (99 Egg)', true);
    triggerLightShow();
    triggerJojoImpact(() => spawnJojoMenace());
    sayBot('ゴゴゴゴ！JOJO 99 震撼衝擊啟動！', 'JOJO_99');
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
    playAudioTrack(jojoMap[key].file, jojoMap[key].name, true);
    triggerLightShow();
    triggerJojoImpact(() => spawnJojoMenace());
    sayBot(`震撼播放 ${jojoMap[key].name}！`, 'JOJO_FX');
    return true;
  }

  if (key === 'holo') {
    document.body.classList.add('holo-theme');
    playAudioTrack('holo_remix.mp3', 'holo_remix', true);
    triggerLightShow();
    triggerHoloImpact();
    sayBot('全息藍矩陣展開！', 'HOLO_EGG');
    return true;
  }

  return false;
}

/* ----------------------------------------------------
   7. 可玩式 Command Palette 命令列
---------------------------------------------------- */
function setupCommandPalette() {
  if (!cmdPalette || !cmdInput || !cmdList) return;

  const extraReplies = {
    help: "指令：help / about / status / color / hud / theme / top；彩蛋：99, towa, jojo1~7, holo",
    about: "ERBLOG v2.5 // 蘋果級彈簧果凍、點陣漣漪、多 HUD 主題與彩蛋實驗空間。",
    status: "ALL SYSTEMS NOMINAL // 合成音效、播放清單與 ER-BOT v2.5 運作正常。",
    color: "已切換全站主題色！",
    hud: "已切換 HUD 風格！"
  };

  const commands = [
    { label: "彩蛋：輸入 '99' 觸發 JOJO 經典 99 震撼衝擊主題", action: () => handleEasterEgg('99') },
    { label: "彩蛋：輸入 'towa' 觸發常闇永遠天使/惡魔極致紫光主題", action: () => handleEasterEgg('towa') },
    { label: "彩蛋：輸入 'jojo1' ~ 'jojo7' 觸發 JOJO 奇妙冒險特寫", action: () => handleEasterEgg('jojo1') },
    { label: "彩蛋：輸入 'holo' 觸發 Hololive 高科技全息藍主題", action: () => handleEasterEgg('holo') },
    { label: "主題：切換全站主題色 (color)", action: () => { cycleAccentTheme(); setCmdOutput(ACCENT_PRESETS[accentIndex].bot); } },
    { label: "主題：切換 HUD 風格 (hud)", action: () => { cycleHudStyle(); setCmdOutput(HUD_PRESETS[hudIndex].bot); } },
    { label: "互動：查看系統狀態 (status)", action: () => setCmdOutput(extraReplies.status) },
    { label: "互動：切換明暗主題 (theme)", action: () => { if (themeToggleBtn) themeToggleBtn.click(); } },
    { label: "前往 // 關於我", action: () => scrollToSection('about') },
    { label: "前往 // 作品集", action: () => scrollToSection('portfolio') },
    { label: "前往 // 聯絡我", action: () => scrollToSection('contact') }
  ];

  let currentFilteredCommands = [...commands];

  function setCmdOutput(text) {
    if (cmdOutputBar) cmdOutputBar.textContent = text;
  }

  function openCmd() {
    closeMobileNav();
    cmdPalette.classList.add('active');
    cmdPalette.setAttribute('aria-hidden', 'false');
    cmdInput.value = '';
    activeCmdIndex = 0;
    currentFilteredCommands = [...commands];
    setCmdOutput("READY // 輸入 help 查看可用指令，或直接輸入彩蛋關鍵字後按 Enter。");
    renderCmds(currentFilteredCommands);
    playClickSound(840, 'triangle', 0.06, 'spring');
    setTimeout(() => cmdInput.focus(), 50);
  }

  function closeCmd() {
    cmdPalette.classList.remove('active');
    cmdPalette.setAttribute('aria-hidden', 'true');
    cmdInput.blur();
  }

  function renderCmds(list) {
    cmdList.innerHTML = '';
    if (list.length === 0) {
      cmdList.innerHTML = '<li class="cmd-empty">輸入自訂指令或彩蛋後按 Enter 執行</li>';
      return;
    }

    list.forEach((item, i) => {
      const li = document.createElement('li');
      li.className = `cmd-item ${i === activeCmdIndex ? 'selected' : ''}`;
      li.innerHTML = `<span>${item.label}</span><span class="cmd-tag">EXEC</span>`;
      li.addEventListener('click', () => {
        item.action();
        playClickSound(1020, 'sine', 0.06, 'spring');
      });
      cmdList.appendChild(li);
    });
  }

  function scrollToSection(id) {
    closeCmd();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function executeRawInput(rawVal) {
    const clean = rawVal.trim().toLowerCase();
    if (!clean) {
      if (currentFilteredCommands.length > 0 && currentFilteredCommands[activeCmdIndex]) {
        currentFilteredCommands[activeCmdIndex].action();
      }
      return;
    }

    if (handleEasterEgg(clean)) {
      closeCmd();
      return;
    }

    if (clean === 'color') {
      cycleAccentTheme();
      setCmdOutput(`> color : ${ACCENT_PRESETS[accentIndex].bot}`);
      return;
    }

    if (clean === 'hud') {
      cycleHudStyle();
      setCmdOutput(`> hud : ${HUD_PRESETS[hudIndex].bot}`);
      return;
    }

    if (extraReplies[clean]) {
      setCmdOutput(`> ${clean} : ${extraReplies[clean]}`);
      playClickSound(900, 'sine', 0.06, 'spring');
      return;
    }

    if (clean === 'theme') {
      if (themeToggleBtn) themeToggleBtn.click();
      setCmdOutput("> theme : 已切換明暗主題。");
      return;
    }

    if (clean === 'top') {
      closeCmd();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentFilteredCommands.length > 0 && currentFilteredCommands[activeCmdIndex]) {
      currentFilteredCommands[activeCmdIndex].action();
    } else {
      setCmdOutput(`未知指令「${rawVal}」，輸入 help 查看可用指令。`);
    }
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
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentFilteredCommands.length > 0) {
          activeCmdIndex = (activeCmdIndex - 1 + currentFilteredCommands.length) % currentFilteredCommands.length;
          renderCmds(currentFilteredCommands);
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        executeRawInput(cmdInput.value);
      }
    }
  });

  cmdInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    activeCmdIndex = 0;
    currentFilteredCommands = val ? commands.filter(c => c.label.toLowerCase().includes(val)) : [...commands];
    renderCmds(currentFilteredCommands);
  });

  if (cmdOverlay) cmdOverlay.addEventListener('click', closeCmd);
  if (cmdTriggerBtn) cmdTriggerBtn.addEventListener('click', openCmd);
  if (mobileCmdBtn) {
    mobileCmdBtn.addEventListener('click', () => {
      closeMobileNav();
      openCmd();
    });
  }
  if (openCmdContactBtn) {
    openCmdContactBtn.addEventListener('click', openCmd);
  }
}

/* ----------------------------------------------------
   7.5 ER-BOT 看板小夥伴升級互動區
---------------------------------------------------- */
function setupCompanionBot() {
  const quotes = [
    "ER-BOT：點哪裡都會冒出點陣漣漪與粒子喔！",
    "ER-BOT：播放器現在有上下首切歌與 LIST 清單了。",
    "ER-BOT：試試上方 COLOR 與 HUD 按鈕切換風格！",
    "ER-BOT：按 Ctrl+K 輸入 towa、99 或 holo 玩彩蛋！"
  ];

  if (companionAvatarBtn) {
    companionAvatarBtn.addEventListener('click', () => {
      botTapCount++;
      triggerJellySpring(companionWidget);
      playClickSound(980, 'triangle', 0.07, 'spring');
      if (botTapCount % 5 === 0) {
        sayBot("連點 5 次解鎖！幫你開啟指令終端機～", 'UNLOCK');
        if (cmdTriggerBtn) cmdTriggerBtn.click();
      } else {
        sayBot(quotes[botTapCount % quotes.length], 'CHAT');
      }
    });
  }

  document.querySelectorAll('[data-bot-action]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const act = btn.getAttribute('data-bot-action');
      triggerJellySpring(companionWidget);
      if (act === 'vibe') {
        playClickSound(1040, 'sine', 0.07, 'spring');
        sayBot("狀態滿格！今天也一步步把作品打磨得更漂亮吧！", 'BOOST');
      } else if (act === 'color') {
        cycleAccentTheme();
      } else if (act === 'egg') {
        const eggs = ['towa', '99', 'holo'];
        const pick = eggs[Math.floor(Math.random() * eggs.length)];
        handleEasterEgg(pick);
      }
    });
  });

  if (companionMinBtn && companionWidget) {
    companionMinBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      companionWidget.classList.toggle('minimized');
      triggerJellySpring(companionWidget);
      companionMinBtn.textContent = companionWidget.classList.contains('minimized') ? '+' : '−';
      playClickSound(720, 'sine', 0.06, 'spring');
    });
  }
}

/* ----------------------------------------------------
   8. Lightbox 功能
---------------------------------------------------- */
function resetZoom() {
  zoomScale = 1;
  panX = 0;
  panY = 0;
  updateImageTransform();
}

function updateImageTransform() {
  const img = lightboxContent.querySelector('img');
  if (img) img.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomScale})`;
}

function setupLightboxZoomAndDrag() {
  lightboxContent.addEventListener('wheel', (e) => {
    const img = lightboxContent.querySelector('img');
    if (!img) return;
    e.preventDefault();
    zoomScale = e.deltaY < 0 ? Math.min(zoomScale + 0.15, 4) : Math.max(zoomScale - 0.15, 1);
    if (zoomScale === 1) { panX = 0; panY = 0; }
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
      const deltaX = e.changedTouches[0].clientX - touchStartX;
      const deltaY = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(deltaX) > 50 && Math.abs(deltaY) < 60) {
        navigateLightbox(deltaX < 0 ? 1 : -1);
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
      if (!document.fullscreenElement) lightboxContent.requestFullscreen().catch(() => {});
      else document.exitFullscreen().catch(() => {});
    });
  }

  if (lightboxResetBtn) lightboxResetBtn.addEventListener('click', resetZoom);
}

function navigateLightbox(direction) {
  if (currentGallery.length <= 1) return;
  currentIndex = (currentIndex + direction + currentGallery.length) % currentGallery.length;
  updateLightboxContent();
}

/* ----------------------------------------------------
   9. 基礎渲染與載入模組
---------------------------------------------------- */
function setupMatrixClock() {
  const clockEl = document.getElementById('matrix-clock');
  if (!clockEl) return;
  function update() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${hrs}:${mins}:${secs} CST`;
  }
  setInterval(update, 1000);
  update();
}

function setupTypewriter() {
  const typewriterEl = document.getElementById('typewriter');
  if (!typewriterEl) return;
  const phrases = ["> 數位內容創作者", "> AI 應用探索", "> 互動視覺與 HUD 實驗"];
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const current = phrases[phraseIdx];
    typewriterEl.textContent = isDeleting ? current.substring(0, charIdx - 1) : current.substring(0, charIdx + 1);
    charIdx = isDeleting ? charIdx - 1 : charIdx + 1;

    let speed = isDeleting ? 35 : 75;
    if (!isDeleting && charIdx === current.length) {
      speed = 2000;
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

  data.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card reveal-on-scroll';
    card.setAttribute('data-id', item.id);

    const hasSlideshow = item.items && item.items.length > 1;
    const isTowaCard = item.id === 1;

    card.innerHTML = `
      <div class="card-media-wrapper">
        <img src="${item.cover}" alt="${item.title}" onerror="this.onerror=null; this.src='${FALLBACK_IMG}';">
        <span class="card-badge">${item.categoryLabel}</span>
        ${hasSlideshow ? `<span class="card-slideshow-indicator">GALLERY 1/${item.items.length}</span>` : ''}
      </div>
      <div class="card-info">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc}</p>
        ${isTowaCard ? `
          <div class="card-actions" style="margin-top: 10px;">
            <a href="https://zh.wikipedia.org/zh-tw/%E5%B8%B8%E9%97%87%E6%B0%B8%E9%81%A0" target="_blank" rel="noopener noreferrer" class="wiki-link-btn jelly-btn" style="display: inline-block; font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-red); border: 1px dashed var(--accent-red); padding: 3px 8px; border-radius: 4px;" onclick="event.stopPropagation();">
              ↗ 維基百科：常闇永遠
            </a>
          </div>
        ` : ''}
      </div>
    `;

    apply3DTiltEffect(card);
    card.addEventListener('click', () => {
      playClickSound(860, 'sine', 0.06, 'spring');
      openLightbox(item);
    });
    gridContainer.appendChild(card);
  });

  setupScrollReveal();
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
  playClickSound(540, 'sine', 0.06, 'tap');
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
    lightboxCounter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
  } else {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    lightboxCounter.style.display = 'none';
  }
}

function setupFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      playClickSound(760, 'triangle', 0.06, 'spring');
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
      playClickSound(720, 'sine', 0.06, 'spring');
      document.body.classList.remove('towa-theme', 'jojo-theme', 'holo-theme');
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      if (themeIcon) themeIcon.textContent = isLight ? 'LIGHT' : 'DARK';
    });
  }
}

function setupBackToTop() {
  if (!backToTopBtn) return;
  backToTopBtn.addEventListener('click', () => {
    playClickSound(980, 'sine', 0.07, 'spring');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ----------------------------------------------------
   10. 手機版導覽與滾動顯現
---------------------------------------------------- */
function closeMobileNav() {
  if (mobileNavMenu) mobileNavMenu.classList.remove('active');
}

function setupMobileMenu() {
  if (mobileMenuBtn && mobileNavMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      playClickSound(680, 'square', 0.06, 'spring');
      mobileNavMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (mobileNavMenu.classList.contains('active') &&
          !mobileNavMenu.contains(e.target) &&
          !mobileMenuBtn.contains(e.target)) {
        closeMobileNav();
      }
    });

    mobileNavMenu.querySelectorAll('a, button').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });
  }
}

function setupScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('is-visible'));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => introCurtain && introCurtain.classList.add('loaded'), 600);

  setupAmbientAndProgress();
  setupClickFxLayer();
  setupCustomCursor();
  setupThemeToggle();
  setupThemeAndHudControls();
  setupSoundToggle();
  setupMatrixClock();
  setupTypewriter();
  setupCommandPalette();
  setupCompanionBot();
  setupMiniPlayer();
  setupCanvasVisualizer();
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