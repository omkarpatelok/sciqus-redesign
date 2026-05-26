/* ═══════════════════════════════════════════
   SCIQUS AMS — script.js
   Converted from React + Tailwind (Vite)
═══════════════════════════════════════════ */

'use strict';

/* ────────────────────────────────────────────
   HERO CAROUSEL DATA
──────────────────────────────────────────── */
const HERO_SLIDES = [
  {
    tag: 'Account Management',
    titleLine1: 'Turning Your Key Accounts',
    titleLine2: 'Into Revenue Streams',
    sub: 'Ease Of Upselling',
    bg: 'linear-gradient(135deg, rgba(61,20,101,0.94) 0%, rgba(91,31,138,0.88) 50%, rgba(30,10,60,0.82) 100%)',
    img: 'assets/images/hero-1.jpg',
  },
  {
    tag: 'Customer Retention',
    titleLine1: 'Retain & Grow Your',
    titleLine2: 'Existing Customers',
    sub: 'AI-Powered Insights',
    bg: 'linear-gradient(135deg, rgba(150,12,88,0.92) 0%, rgba(91,31,138,0.88) 50%, rgba(30,10,60,0.82) 100%)',
    img: 'assets/images/hero-2.jpg',
  },
  {
    tag: 'Integrations',
    titleLine1: 'Seamless Integrations',
    titleLine2: 'For Better Service',
    sub: 'Connect Every Tool You Use',
    bg: 'linear-gradient(135deg, rgba(20,40,110,0.92) 0%, rgba(91,31,138,0.88) 50%, rgba(150,12,88,0.82) 100%)',
    img: 'assets/images/hero-3.jpg',
  },
];

/* ────────────────────────────────────────────
   ACCOUNT INSIGHTS SLIDER DATA
──────────────────────────────────────────── */
const INSIGHTS_SLIDES = [
  {
    label: 'Upcoming Closures',
    pct: 68,
    color: '#5B1F8A',
    barColors: ['#e9d5ff', '#fce7f3'],
    accounts: [
      { name: 'Acme Corp', val: '$48K', pct: 80, c: '#5B1F8A' },
      { name: 'TechFlow',  val: '$32K', pct: 60, c: '#E91E8C' },
      { name: 'Nexus Ltd', val: '$24K', pct: 45, c: '#0EA5E9' },
    ],
  },
  {
    label: 'Upcoming Events',
    pct: 42,
    color: '#E91E8C',
    barColors: ['#fce7f3', '#e9d5ff'],
    accounts: [
      { name: 'Bright Co', val: '$36K', pct: 70, c: '#E91E8C' },
      { name: 'Vertex',    val: '$28K', pct: 52, c: '#5B1F8A' },
      { name: 'Horizon',   val: '$18K', pct: 38, c: '#0EA5E9' },
    ],
  },
  {
    label: 'Key Accounts',
    pct: 85,
    color: '#0EA5E9',
    barColors: ['#dbeafe', '#e9d5ff'],
    accounts: [
      { name: 'Alpha Inc',  val: '$55K', pct: 90, c: '#5B1F8A' },
      { name: 'Delta Corp', val: '$41K', pct: 68, c: '#E91E8C' },
      { name: 'Zeta Ltd',   val: '$29K', pct: 50, c: '#0EA5E9' },
    ],
  },
];

/* ────────────────────────────────────────────
   INDUSTRY DATA
──────────────────────────────────────────── */
const INDUSTRIES = {
  'IT / ITES': {
    items: [
      'Enhanced Customer Support',
      'Real-Time Access to Product Information',
      'Streamlined Account Management',
      'Facilitated Feedback & Communication',
      'Improved Customer Engagement & Retention',
    ],
    btn: 'Solution For Software Industry',
  },
  'Manufacturing': {
    items: [
      'Supply Chain Visibility',
      'Dealer & Distributor Management',
      'Service Contract Tracking',
      'Warranty & AMC Management',
      'Field Service Coordination',
    ],
    btn: 'Solution For Manufacturing',
  },
  'Retail': {
    items: [
      'Loyalty Program Management',
      'Omnichannel Customer Tracking',
      'Purchase History Insights',
      'Personalized Promotions',
      'Store-wise Account Management',
    ],
    btn: 'Solution For Retail',
  },
  'Fashion': {
    items: [
      'Seasonal Collection Tracking',
      'Boutique Account Management',
      'Styling Consultation Scheduling',
      'Order & Returns Management',
      'VIP Customer Engagement',
    ],
    btn: 'Solution For Fashion',
  },
  'Food & Beverages': {
    items: [
      'Franchise Account Management',
      'Supplier Relationship Tracking',
      'Event & Catering Coordination',
      'Loyalty & Rewards Programs',
      'Feedback & Quality Management',
    ],
    btn: 'Solution For F&B',
  },
};

/* ────────────────────────────────────────────
   CALENDAR DATA
──────────────────────────────────────────── */
const CAL_CELLS = [
  { d: '',   dot: null },
  { d: '1',  dot: null },
  { d: '2',  dot: null },
  { d: '3',  dot: 'orange' },
  { d: '4',  dot: 'blue' },
  { d: '5',  dot: null },
  { d: '6',  dot: null },
  { d: '7',  dot: 'purple' },
  { d: '8',  dot: 'green' },
  { d: '9',  dot: null },
  { d: '10', dot: 'pink' },
  { d: '11', dot: 'orange' },
  { d: '12', dot: null },
  { d: '13', today: true },
  { d: '14', dot: null },
  { d: '15', dot: 'purple' },
  { d: '16', dot: null },
  { d: '17', dot: 'pink' },
  { d: '18', dot: 'blue' },
  { d: '19', dot: null },
  { d: '20', dot: 'orange' },
];
const DOT_COLORS = {
  orange: '#F59E0B', blue: '#0EA5E9',
  purple: '#5B1F8A', green: '#10B981', pink: '#E91E8C',
};

/* ════════════════════════════════════════════
   DOM READY
════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroCarousel();
  initInsightsSlider();
  initCalendar();
  initIndustryTabs();
  initModals();
  initBookingButtons();
  initReveal();
  initDemoBtns();
  initVideoBtns();
});

/* ════════════════════════════════════════════
   HEADER — scroll shadow + mobile drawer
════════════════════════════════════════════ */
function initHeader() {
  const header  = document.getElementById('site-header');
  const overlay = document.getElementById('mobile-overlay');
  const drawer  = document.getElementById('mobile-drawer');
  const openBtn = document.getElementById('mobile-menu-open');
  const closeBtn= document.getElementById('mobile-menu-close');

  // Scroll effect
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Open drawer
  openBtn.addEventListener('click', () => {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Close drawer
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Drawer nav links close drawer
  drawer.querySelectorAll('.drawer-link').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });
}

/* ════════════════════════════════════════════
   HERO CAROUSEL
════════════════════════════════════════════ */
function initHeroCarousel() {
  const heroBg      = document.getElementById('hero-bg');
  const heroImg     = document.getElementById('hero-img');
  const heroContent = document.getElementById('hero-content');
  const heroTag     = document.getElementById('hero-tag');
  const heroTitle   = document.getElementById('hero-title');
  const heroSub     = document.getElementById('hero-sub');
  const dotsWrap    = document.getElementById('hero-dots');
  const dots        = dotsWrap.querySelectorAll('.hero-dot');
  const prevBtn     = document.getElementById('hero-prev');
  const nextBtn     = document.getElementById('hero-next');

  let current   = 0;
  let animating = false;
  let autoTimer = null;

  function goTo(idx) {
    if (animating) return;
    animating = true;

    // Fade out
    heroContent.classList.add('animating');

    setTimeout(() => {
      current = ((idx % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length;
      const s = HERO_SLIDES[current];

      heroBg.style.background = s.bg;
      heroImg.src             = s.img;
      heroImg.alt             = s.tag;
      heroTag.textContent     = s.tag;
      heroTitle.innerHTML     = s.titleLine1 + '<br><span class="hero-title-accent">' + s.titleLine2 + '</span>';
      heroSub.textContent     = s.sub;

      // Update dots
      dots.forEach((d, i) => {
        d.classList.toggle('hero-dot-active', i === current);
        d.setAttribute('aria-selected', i === current ? 'true' : 'false');
      });

      // Fade in
      heroContent.classList.remove('animating');
      animating = false;
    }, 300);
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5500);
  }

  function resetAuto() {
    startAuto();
  }

  prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

  dots.forEach((d, i) => {
    d.addEventListener('click', () => { goTo(i); resetAuto(); });
  });

  startAuto();
}

/* ════════════════════════════════════════════
   ACCOUNT INSIGHTS SLIDER
════════════════════════════════════════════ */
function initInsightsSlider() {
  const mockup  = document.getElementById('insights-mockup');
  const dotsWrap= document.getElementById('insights-dots');
  const prevBtn = document.getElementById('insights-prev');
  const nextBtn = document.getElementById('insights-next');

  let current = 0;

  // Build dot buttons
  INSIGHTS_SLIDES.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 's-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Slide ' + (i + 1));
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
  });

  function buildMockup(slide) {
    // Donut circle dasharray: circumference ≈ 94.2 for r=15 viewBox 36
    const dash = (slide.pct * 94.2 / 100).toFixed(1);

    const accountRows = slide.accounts.map(a => `
      <div class="slider-account-row">
        <span class="acct-name">${a.name}</span>
        <div class="acct-bar-wrap">
          <div class="acct-bar-fill" style="width:${a.pct}%;background:${a.c}"></div>
        </div>
        <span class="acct-val" style="color:${a.c}">${a.val}</span>
      </div>
    `).join('');

    mockup.innerHTML = `
      <div class="slider-top-bar" style="background:linear-gradient(135deg,#5B1F8A,#E91E8C)">
        <div class="slider-top-dot"></div>
        <div class="slider-top-dot"></div>
        <div class="slider-top-dot"></div>
      </div>
      <div class="slider-body">
        <div class="slider-summary-wrap">
          <div class="slider-summary-label" style="color:${slide.color}">${slide.label}</div>
          <div class="slider-summary-row">
            <div class="slider-donut">
              <svg viewBox="0 0 36 36" class="w-full h-full" style="width:100%;height:100%;transform:rotate(-90deg)">
                <circle cx="18" cy="18" r="15" fill="none" stroke="#e9d5ff" stroke-width="3"/>
                <circle cx="18" cy="18" r="15" fill="none" stroke="${slide.color}" stroke-width="3"
                  stroke-dasharray="${dash} 100" stroke-linecap="round"/>
              </svg>
              <div class="slider-donut-pct" style="color:${slide.color}">${slide.pct}%</div>
            </div>
            <div class="slider-bar-stacks">
              <div class="slider-bar-stack" style="background:${slide.barColors[0]};width:70%"></div>
              <div class="slider-bar-stack" style="background:${slide.barColors[1]};width:50%"></div>
            </div>
          </div>
        </div>
        <div class="slider-accounts-wrap">
          <div class="slider-accounts-title">Account Performance</div>
          ${accountRows}
        </div>
      </div>
    `;
  }

  function goTo(idx) {
    current = ((idx % INSIGHTS_SLIDES.length) + INSIGHTS_SLIDES.length) % INSIGHTS_SLIDES.length;
    buildMockup(INSIGHTS_SLIDES[current]);
    dotsWrap.querySelectorAll('.s-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  goTo(0);
}

/* ════════════════════════════════════════════
   CALENDAR
════════════════════════════════════════════ */
function initCalendar() {
  const grid = document.getElementById('cal-grid');
  if (!grid) return;

  CAL_CELLS.forEach(c => {
    const cell = document.createElement('div');
    const classes = ['cal-cell'];
    if (c.today) classes.push('today');
    if (!c.d)   classes.push('empty');
    cell.className = classes.join(' ');

    if (c.d) {
      const txt = document.createTextNode(c.d);
      cell.appendChild(txt);
    }
    if (c.dot) {
      const dot = document.createElement('div');
      dot.className = 'cal-cell-dot';
      dot.style.background = DOT_COLORS[c.dot];
      cell.appendChild(dot);
    }
    grid.appendChild(cell);
  });
}

/* ════════════════════════════════════════════
   INDUSTRY TABS
════════════════════════════════════════════ */
function initIndustryTabs() {
  const tabsWrap = document.getElementById('industry-tabs');
  const panel    = document.getElementById('industry-panel');
  if (!tabsWrap || !panel) return;

  let active = 'IT / ITES';

  function renderPanel(key) {
    const data = INDUSTRIES[key];
    const listItems = data.items.map((item, i) => `
      <li style="animation-delay:${i * 0.08}s">
        <span class="industry-dot" style="background:${i % 2 === 0 ? '#5B1F8A' : '#E91E8C'}"></span>
        ${item}
      </li>
    `).join('');

    panel.innerHTML = `
      <div class="industry-inner">
        <ul class="industry-list">${listItems}</ul>
        <div class="industry-right">
          <button class="btn-primary industry-panel-demo" style="align-self:flex-start">
            ${data.btn}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <div class="industry-stats">
            ${[['98%','Retention Rate'],['3x','Revenue Growth'],['120+','Clients'],['40%','Cost Reduction']].map(([n, l]) => `
              <div class="card industry-stat">
                <div class="industry-stat-num grad-text">${n}</div>
                <div class="industry-stat-label">${l}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Bind demo button inside panel
    panel.querySelector('.industry-panel-demo').addEventListener('click', openDemoModal);
  }

  tabsWrap.querySelectorAll('.industry-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      active = tab.dataset.industry;
      tabsWrap.querySelectorAll('.industry-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderPanel(active);
    });
  });

  renderPanel(active);
}

/* ════════════════════════════════════════════
   MODALS
════════════════════════════════════════════ */
function openDemoModal() {
  const modal = document.getElementById('demo-modal');
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  modal.querySelector('#demo-name').focus();
}

function closeDemoModal() {
  const modal = document.getElementById('demo-modal');
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
  // Reset form
  modal.querySelectorAll('.modal-input').forEach(i => i.value = '');
  document.getElementById('demo-form-wrap').removeAttribute('hidden');
  document.getElementById('demo-success').setAttribute('hidden', '');
}

function openVideoModal() {
  const modal = document.getElementById('video-modal');
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

function initModals() {
  // Demo modal close button
  document.getElementById('demo-modal-close').addEventListener('click', closeDemoModal);

  // Demo modal backdrop click
  document.getElementById('demo-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeDemoModal();
  });

  // Demo form submit
  document.getElementById('demo-submit').addEventListener('click', () => {
    const name  = document.getElementById('demo-name').value.trim();
    const email = document.getElementById('demo-email').value.trim();
    if (!name || !email) {
      // Highlight empty required fields
      if (!name)  document.getElementById('demo-name').style.borderColor  = '#E91E8C';
      if (!email) document.getElementById('demo-email').style.borderColor = '#E91E8C';
      return;
    }

    document.getElementById('demo-form-wrap').setAttribute('hidden', '');
    document.getElementById('demo-success').removeAttribute('hidden');

    setTimeout(() => {
      closeDemoModal();
    }, 2200);
  });

  // Reset border on input
  ['demo-name','demo-email','demo-phone','demo-company'].forEach(id => {
    document.getElementById(id).addEventListener('input', function() {
      this.style.borderColor = '';
    });
  });

  // Video modal close
  document.getElementById('video-modal-close').addEventListener('click', closeVideoModal);
  document.getElementById('video-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeVideoModal();
  });

  // ESC key closes modals
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeDemoModal();
      closeVideoModal();
    }
  });
}

/* ════════════════════════════════════════════
   WIRE UP ALL DEMO / VIDEO BUTTONS
════════════════════════════════════════════ */
function initDemoBtns() {
  const selectors = [
    '#header-demo-btn',
    '.mobile-demo-btn',
    '.hero-demo-btn',
    '.about-demo-btn',
    '.insights-demo-btn',
    '.upsell-demo-btn',
    '.ticketing-demo-btn',
    '#btnB',
    '.invoice-demo-btn',
    '.integrations-demo-btn',
  ];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(btn => {
      btn.addEventListener('click', openDemoModal);
    });
  });
}

function initVideoBtns() {
  document.querySelectorAll('.hero-video-btn, .about-video-btn').forEach(btn => {
    btn.addEventListener('click', openVideoModal);
  });
}

/* ════════════════════════════════════════════
   BOOKING SECTION — Button A feedback
════════════════════════════════════════════ */
function initBookingButtons() {
  const btnA    = document.getElementById('btnA');
  const feedback= document.getElementById('btnA-feedback');
  if (!btnA) return;

  btnA.addEventListener('click', () => {
    feedback.textContent = '✓ Opening product tour...';
    clearTimeout(btnA._timer);
    btnA._timer = setTimeout(() => { feedback.textContent = ''; }, 3000);
  });
}

/* ════════════════════════════════════════════
   INTERSECTION OBSERVER — Reveal animations
════════════════════════════════════════════ */
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!('IntersectionObserver' in window)) {
    // Fallback: show all immediately
    els.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  els.forEach(el => observer.observe(el));
}
