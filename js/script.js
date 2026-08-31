/**
 * CPI ICT CLUB - MAIN JAVASCRIPT CONTROLLER
 * Vanilla JavaScript (ES6+) for modern interactivity, state management,
 * LocalStorage persistence, dynamic filtering, modals, and animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all core modules
  ThemeManager.init();
  NavigationManager.init();
  HeroCanvasManager.init();
  HeroTypingManager.init();
  StatsCounterManager.init();
  BookmarksManager.init();
  GlobalSearchManager.init();
  ResourcesManager.init();
  CoursesManager.init();
  NotesManager.init();
  CodingManager.init();
  EventsManager.init();
  CareersManager.init();
  RoadmapsManager.init();
  ProjectsManager.init();
  TeamManager.init();
  GalleryManager.init();
  FAQManager.init();
  FormsManager.init();
  BackToTopManager.init();
});

/* ==========================================================================
   TOAST NOTIFICATION ENGINE
   ========================================================================== */
const Toast = {
  container: document.getElementById('toast-container'),

  show(message, type = 'info', duration = 3500) {
    if (!this.container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconClass = 'fa-info-circle';
    if (type === 'success') iconClass = 'fa-circle-check';
    if (type === 'warning') iconClass = 'fa-triangle-exclamation';

    toast.innerHTML = `
      <i class="fa-solid ${iconClass}" style="color: ${type === 'success' ? 'var(--accent-emerald)' : type === 'warning' ? 'var(--accent-amber)' : 'var(--accent-cyan)'}; font-size: 1.15rem;"></i>
      <span>${message}</span>
    `;

    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease-out';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

/* ==========================================================================
   1. THEME MANAGER (DARK / LIGHT MODE)
   ========================================================================== */
const ThemeManager = {
  themeToggleBtn: document.getElementById('theme-toggle'),
  themeIcon: document.getElementById('theme-icon'),

  init() {
    const savedTheme = localStorage.getItem('cpi_ict_theme') || 'dark';
    this.applyTheme(savedTheme);

    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        localStorage.setItem('cpi_ict_theme', newTheme);
        Toast.show(`Switched to ${newTheme.toUpperCase()} mode`, 'info', 2000);
      });
    }
  },

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (this.themeIcon) {
      if (theme === 'light') {
        this.themeIcon.className = 'fa-solid fa-sun';
        this.themeIcon.style.color = '#f59e0b';
      } else {
        this.themeIcon.className = 'fa-solid fa-moon';
        this.themeIcon.style.color = '';
      }
    }
  }
};

/* ==========================================================================
   2. NAVIGATION & SCROLL SPY MANAGER
   ========================================================================== */
const NavigationManager = {
  header: document.getElementById('header'),
  menuToggle: document.getElementById('menu-toggle'),
  mobileDrawer: document.getElementById('mobile-drawer'),
  navLinks: document.querySelectorAll('.nav-link'),
  joinClubBtn: document.getElementById('join-club-cta-btn'),
  mobileJoinBtn: document.getElementById('mobile-join-btn'),
  communityModal: document.getElementById('community-modal'),

  init() {
    // Sticky header on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
      this.handleScrollSpy();
    });

    // Mobile Hamburger Drawer Toggle
    if (this.menuToggle && this.mobileDrawer) {
      const barsIcon = document.getElementById('menu-bars-icon');
      this.menuToggle.addEventListener('click', () => {
        const isOpen = this.mobileDrawer.classList.toggle('open');
        this.menuToggle.classList.toggle('open', isOpen);
        if (barsIcon) {
          barsIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        }
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      // Close drawer on link click
      this.mobileDrawer.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          this.menuToggle.classList.remove('open');
          this.mobileDrawer.classList.remove('open');
          if (barsIcon) {
            barsIcon.className = 'fa-solid fa-bars';
          }
          document.body.style.overflow = '';
        });
      });
    }

    // Join Club Buttons trigger Community Modal
    const openCommunity = () => {
      this.communityModal.classList.add('active');
      if (this.mobileDrawer) {
        this.menuToggle.classList.remove('open');
        this.mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      }
    };

    if (this.joinClubBtn) this.joinClubBtn.addEventListener('click', openCommunity);
    if (this.mobileJoinBtn) this.mobileJoinBtn.addEventListener('click', openCommunity);
    document.getElementById('hero-community-btn')?.addEventListener('click', openCommunity);
    document.getElementById('join-discord-cta-btn')?.addEventListener('click', openCommunity);
    document.getElementById('join-telegram-cta-btn')?.addEventListener('click', openCommunity);

    // Close Community Modal
    document.getElementById('close-community-modal')?.addEventListener('click', () => {
      this.communityModal.classList.remove('active');
    });
  },

  handleScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-menu .nav-link, .dropdown-item').forEach(el => el.classList.remove('active'));

        const targetLink = document.querySelector(`.nav-menu .nav-link[href="#${id}"]`) || document.querySelector(`.dropdown-item[href="#${id}"]`);
        if (targetLink) {
          targetLink.classList.add('active');
          const parentDropdown = targetLink.closest('.nav-item-dropdown');
          if (parentDropdown) {
            const toggleBtn = parentDropdown.querySelector('.dropdown-toggle');
            if (toggleBtn) toggleBtn.classList.add('active');
          }
        }
      }
    });
  }
};

/* ==========================================================================
   3. HERO CANVAS PARTICLE NETWORK
   ========================================================================== */
const HeroCanvasManager = {
  canvas: document.getElementById('hero-canvas'),
  particles: [],
  maxParticles: 45,

  init() {
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();

    window.addEventListener('resize', () => this.resize());
    this.createParticles();
    this.animate();
  },

  resize() {
    this.width = this.canvas.width = this.canvas.parentElement.offsetWidth;
    this.height = this.canvas.height = this.canvas.parentElement.offsetHeight;
  },

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        color: Math.random() > 0.5 ? 'rgba(6, 182, 212, 0.4)' : 'rgba(99, 102, 241, 0.4)'
      });
    }
  },

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 110) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 * (1 - dist / 110)})`;
          this.ctx.lineWidth = 0.7;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
};

/* ==========================================================================
   4. HERO DYNAMIC TYPING SUBHEAD
   ========================================================================== */
const HeroTypingManager = {
  el: document.getElementById('typed-tagline'),
  phrases: [
    'Learn. Build. Connect. Grow.',
    'Build Modern Full-Stack Web Apps.',
    'Master Python, AI & Data Science.',
    'Conquer National Hackathons.',
    'Launch Your Dream Tech Career.'
  ],
  phraseIndex: 0,
  charIndex: 0,
  isDeleting: false,

  init() {
    if (!this.el) return;
    this.type();
  },

  type() {
    const currentPhrase = this.phrases[this.phraseIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.el.textContent = currentPhrase.substring(0, this.charIndex);
    } else {
      this.charIndex++;
      this.el.textContent = currentPhrase.substring(0, this.charIndex);
    }

    let typeSpeed = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      typeSpeed = 2200; // Pause at end of phrase
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
};

/* ==========================================================================
   5. STATS ANIMATED COUNTERS
   ========================================================================== */
const StatsCounterManager = {
  counters: document.querySelectorAll('.counter'),
  hasAnimated: false,

  init() {
    if (!this.counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.animateCounters();
          this.hasAnimated = true;
        }
      });
    }, { threshold: 0.25 });

    const statsSection = document.getElementById('stats');
    if (statsSection) observer.observe(statsSection);
  },

  animateCounters() {
    this.counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1800;
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target.toLocaleString() + '+';
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current).toLocaleString();
        }
      }, stepTime);
    });
  }
};

/* ==========================================================================
   6. BOOKMARKS / FAVORITES MANAGER
   ========================================================================== */
const BookmarksManager = {
  storageKey: 'cpi_ict_bookmarks',
  drawer: document.getElementById('bookmarks-drawer'),
  list: document.getElementById('bookmarks-list'),
  badge: document.getElementById('bookmark-count-badge'),
  triggerBtn: document.getElementById('bookmarks-trigger'),
  closeBtn: document.getElementById('close-bookmarks-drawer'),

  init() {
    this.updateBadge();

    if (this.triggerBtn && this.drawer) {
      this.triggerBtn.addEventListener('click', () => {
        this.renderDrawerList();
        this.drawer.classList.add('open');
      });
    }

    if (this.closeBtn && this.drawer) {
      this.closeBtn.addEventListener('click', () => {
        this.drawer.classList.remove('open');
      });
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (this.drawer && this.drawer.classList.contains('open')) {
        if (!this.drawer.contains(e.target) && !this.triggerBtn.contains(e.target)) {
          this.drawer.classList.remove('open');
        }
      }
    });
  },

  getBookmarks() {
    return JSON.parse(localStorage.getItem(this.storageKey)) || [];
  },

  isBookmarked(id) {
    return this.getBookmarks().includes(id);
  },

  toggleBookmark(resourceId) {
    let bookmarks = this.getBookmarks();
    const resource = ICT_DATA.resources.find(r => r.id === resourceId);
    const title = resource ? resource.title : 'Resource';

    if (bookmarks.includes(resourceId)) {
      bookmarks = bookmarks.filter(id => id !== resourceId);
      localStorage.setItem(this.storageKey, JSON.stringify(bookmarks));
      Toast.show(`Removed from bookmarks: ${title.substring(0, 30)}...`, 'info');
    } else {
      bookmarks.push(resourceId);
      localStorage.setItem(this.storageKey, JSON.stringify(bookmarks));
      Toast.show(`Saved to bookmarks!`, 'success');
    }

    this.updateBadge();
    ResourcesManager.render();
    if (this.drawer.classList.contains('open')) {
      this.renderDrawerList();
    }
  },

  updateBadge() {
    const count = this.getBookmarks().length;
    if (this.badge) {
      this.badge.textContent = count;
      this.badge.style.display = count > 0 ? 'flex' : 'none';
    }
  },

  renderDrawerList() {
    const bookmarks = this.getBookmarks();
    if (!this.list) return;

    if (bookmarks.length === 0) {
      this.list.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <i class="fa-regular fa-bookmark" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--text-muted);"></i>
          <p>No saved resources yet.</p>
          <span style="font-size: 0.8rem;">Click the bookmark icon on any resource card to save it here.</span>
        </div>
      `;
      return;
    }

    const savedResources = ICT_DATA.resources.filter(r => bookmarks.includes(r.id));
    this.list.innerHTML = savedResources.map(r => `
      <div class="glass-card" style="padding: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <span class="badge badge-cyan">${r.categoryName}</span>
          <button class="bookmark-remove-btn" onclick="BookmarksManager.toggleBookmark('${r.id}')" title="Remove" style="color: var(--accent-rose); font-size: 0.85rem;">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.35;">${r.title}</h4>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
          <span style="font-size: 0.75rem; color: var(--text-muted);"><i class="fa-solid fa-clock"></i> ${r.duration}</span>
          <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="padding: 0.3rem 0.75rem; font-size: 0.75rem;">
            View <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    `).join('');
  }
};

/* ==========================================================================
   7. GLOBAL SEARCH ENGINE (Ctrl + K)
   ========================================================================== */
const GlobalSearchManager = {
  modal: document.getElementById('search-modal'),
  triggerBtn: document.getElementById('search-modal-trigger'),
  closeBtn: document.getElementById('close-search-modal'),
  input: document.getElementById('global-search-input'),
  resultsContainer: document.getElementById('global-search-results'),

  init() {
    // Keyboard Shortcut (Ctrl+K or Cmd+K)
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.open();
      }
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.close();
      }
    });

    if (this.triggerBtn) this.triggerBtn.addEventListener('click', () => this.open());
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());

    // Search Input Listener
    if (this.input) {
      this.input.addEventListener('input', (e) => this.handleSearch(e.target.value.trim().toLowerCase()));
    }
  },

  open() {
    this.modal.classList.add('active');
    this.input.value = '';
    this.input.focus();
    this.renderDefault();
  },

  close() {
    this.modal.classList.remove('active');
  },

  renderDefault() {
    this.resultsContainer.innerHTML = `
      <p style="color: var(--text-muted); font-size: 0.9rem; text-align: center; padding: 2rem;">
        Type anything to search across resources, courses, notes, events, and roadmaps...
      </p>
    `;
  },

  handleSearch(query) {
    if (!query) {
      this.renderDefault();
      return;
    }

    const matches = [];

    // Search Resources
    ICT_DATA.resources.forEach(r => {
      if (r.title.toLowerCase().includes(query) || r.categoryName.toLowerCase().includes(query) || r.description.toLowerCase().includes(query)) {
        matches.push({ type: 'Resource', title: r.title, category: r.categoryName, link: '#resources', badge: 'badge-cyan', icon: 'fa-book-open' });
      }
    });

    // Search Courses
    ICT_DATA.courses.forEach(c => {
      if (c.title.toLowerCase().includes(query) || c.description.toLowerCase().includes(query) || c.instructor.toLowerCase().includes(query)) {
        matches.push({ type: 'Course', title: c.title, category: c.difficulty, link: '#courses', badge: 'badge-emerald', icon: 'fa-graduation-cap' });
      }
    });

    // Search Notes
    ICT_DATA.notes.forEach(n => {
      if (n.title.toLowerCase().includes(query) || n.categoryName.toLowerCase().includes(query)) {
        matches.push({ type: 'Study Note', title: n.title, category: n.semester, link: '#notes', badge: 'badge-rose', icon: 'fa-file-pdf' });
      }
    });

    // Search Events
    ICT_DATA.events.forEach(ev => {
      if (ev.title.toLowerCase().includes(query) || ev.type.toLowerCase().includes(query)) {
        matches.push({ type: 'Event', title: ev.title, category: ev.date, link: '#events', badge: 'badge-amber', icon: 'fa-calendar-days' });
      }
    });

    // Search Roadmaps
    ICT_DATA.roadmaps.forEach(rm => {
      if (rm.name.toLowerCase().includes(query) || rm.description.toLowerCase().includes(query)) {
        matches.push({ type: 'Roadmap', title: rm.name, category: rm.duration, link: '#roadmaps', badge: 'badge-indigo', icon: 'fa-map' });
      }
    });

    if (matches.length === 0) {
      this.resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
          <i class="fa-solid fa-face-frown" style="font-size: 2rem; margin-bottom: 0.75rem;"></i>
          <p>No results found for "${query}"</p>
        </div>
      `;
      return;
    }

    this.resultsContainer.innerHTML = matches.slice(0, 8).map(m => `
      <a href="${m.link}" class="search-result-item" onclick="GlobalSearchManager.close()">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <i class="fa-solid ${m.icon}" style="color: var(--accent-cyan);"></i>
          <div>
            <strong style="display: block; font-size: 0.95rem;">${m.title}</strong>
            <span style="font-size: 0.78rem; color: var(--text-muted);">${m.category}</span>
          </div>
        </div>
        <span class="badge ${m.badge}">${m.type}</span>
      </a>
    `).join('');
  }
};

/* ==========================================================================
   8. LEARNING RESOURCES MODULE
   ========================================================================== */
const ResourcesManager = {
  container: document.getElementById('resources-grid-container'),
  pillsContainer: document.getElementById('resource-category-pills'),
  searchInput: document.getElementById('resource-search-input'),
  difficultySelect: document.getElementById('resource-difficulty-select'),
  emptyState: document.getElementById('resources-empty-state'),
  selectedCategory: 'all',
  selectedDifficulty: 'all',
  searchQuery: '',

  init() {
    this.renderCategoryPills();
    this.render();

    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.render();
      });
    }

    if (this.difficultySelect) {
      this.difficultySelect.addEventListener('change', (e) => {
        this.selectedDifficulty = e.target.value;
        this.render();
      });
    }
  },

  renderCategoryPills() {
    if (!this.pillsContainer) return;
    this.pillsContainer.innerHTML = ICT_DATA.categories.map(c => `
      <button class="filter-pill ${c.id === this.selectedCategory ? 'active' : ''}" data-category="${c.id}">
        <i class="${c.icon}"></i> ${c.name}
      </button>
    `).join('');

    this.pillsContainer.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-category');
        this.selectedCategory = cat;
        this.pillsContainer.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.render();
      });
    });
  },

  render() {
    if (!this.container) return;

    let filtered = ICT_DATA.resources.filter(r => {
      const matchesCat = this.selectedCategory === 'all' || r.category === this.selectedCategory;
      const matchesDiff = this.selectedDifficulty === 'all' || r.difficulty.toLowerCase() === this.selectedDifficulty.toLowerCase();
      const matchesSearch = !this.searchQuery || 
        r.title.toLowerCase().includes(this.searchQuery) ||
        r.description.toLowerCase().includes(this.searchQuery) ||
        r.categoryName.toLowerCase().includes(this.searchQuery);

      return matchesCat && matchesDiff && matchesSearch;
    });

    if (filtered.length === 0) {
      this.container.innerHTML = '';
      if (this.emptyState) this.emptyState.style.display = 'block';
      return;
    }

    if (this.emptyState) this.emptyState.style.display = 'none';

    this.container.innerHTML = filtered.map(r => {
      const isBookmarked = BookmarksManager.isBookmarked(r.id);
      return `
        <div class="glass-card resource-card fade-in-up">
          <div>
            <div class="resource-header">
              <span class="badge badge-cyan">${r.categoryName}</span>
              <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" onclick="BookmarksManager.toggleBookmark('${r.id}')" title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark Resource'}" aria-label="Bookmark">
                <i class="fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark"></i>
              </button>
            </div>
            <h3 class="resource-title">${r.title}</h3>
            <p class="resource-desc">${r.description}</p>
          </div>

          <div>
            <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap;">
              <span class="badge badge-indigo"><i class="fa-solid fa-layer-group"></i> ${r.difficulty}</span>
              <span class="badge badge-emerald"><i class="fa-solid fa-file-code"></i> ${r.type}</span>
            </div>

            <div class="resource-meta">
              <span><i class="fa-solid fa-clock"></i> ${r.duration}</span>
              <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                View Resource <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
};

/* ==========================================================================
   9. COURSES MODULE
   ========================================================================== */
const CoursesManager = {
  container: document.getElementById('courses-grid-container'),
  modal: document.getElementById('course-modal'),
  modalContent: document.getElementById('course-modal-content'),

  init() {
    this.render();
    document.getElementById('close-course-modal')?.addEventListener('click', () => {
      this.modal.classList.remove('active');
    });
  },

  render() {
    if (!this.container) return;

    this.container.innerHTML = ICT_DATA.courses.map(c => `
      <div class="glass-card course-card fade-in-up">
        <div class="course-banner" style="background: ${c.thumbnailGradient};">
          <i class="${c.icon}"></i>
          <span class="badge badge-amber course-badge-floating"><i class="fa-solid fa-star"></i> ${c.rating}</span>
        </div>

        <div class="course-body">
          <span class="badge badge-cyan" style="align-self: flex-start; margin-bottom: 0.75rem;">${c.difficulty}</span>
          <h3 class="course-title">${c.title}</h3>
          <div class="course-instructor">
            <i class="fa-solid fa-chalkboard-user"></i>
            <span>${c.instructor}</span>
          </div>
          <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">
            ${c.description}
          </p>

          <div class="course-progress-wrap">
            <div class="progress-labels">
              <span>Course Progress</span>
              <span>${c.progress}%</span>
            </div>
            <div class="progress-bar-track">
              <div class="progress-bar-fill" style="width: ${c.progress}%;"></div>
            </div>
          </div>

          <div class="course-details-row">
            <span><i class="fa-solid fa-clock"></i> ${c.duration}</span>
            <span><i class="fa-solid fa-book-open"></i> ${c.lessonsCount} Lessons</span>
          </div>

          <div style="display: flex; gap: 0.75rem; margin-top: 1.25rem;">
            <button class="btn btn-secondary btn-sm" style="flex: 1;" onclick="CoursesManager.showSyllabus('${c.id}')">
              <i class="fa-solid fa-list-check"></i> Syllabus
            </button>
            <button class="btn btn-primary btn-sm" style="flex: 1;" onclick="CoursesManager.enrollCourse('${c.title}')">
              <i class="fa-solid fa-graduation-cap"></i> Enroll
            </button>
          </div>
        </div>
      </div>
    `).join('');
  },

  showSyllabus(courseId) {
    const course = ICT_DATA.courses.find(c => c.id === courseId);
    if (!course || !this.modalContent) return;

    this.modalContent.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
        <div style="width: 52px; height: 52px; border-radius: var(--radius-md); background: ${course.thumbnailGradient}; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1.5rem;">
          <i class="${course.icon}"></i>
        </div>
        <div>
          <h3 style="font-size: 1.35rem; font-weight: 800;">${course.title}</h3>
          <span style="font-size: 0.85rem; color: var(--text-muted);">Instructor: ${course.instructor} (${course.role})</span>
        </div>
      </div>

      <h4 style="margin-bottom: 1rem; font-size: 1.05rem; display: flex; align-items: center; gap: 0.5rem;">
        <i class="fa-solid fa-bars-staggered" style="color: var(--accent-cyan);"></i> Complete Course Curriculum (${course.lessonsCount} Modules)
      </h4>

      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
        ${course.syllabus.map(item => `
          <li style="padding: 0.85rem 1.25rem; background: var(--bg-tertiary); border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 0.9rem; display: flex; align-items: center; gap: 0.75rem;">
            <i class="fa-solid fa-circle-check" style="color: var(--accent-emerald);"></i>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>

      <div class="flex justify-between items-center" style="border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
        <span style="font-size: 0.85rem; color: var(--text-muted);"><i class="fa-solid fa-users"></i> ${course.studentsEnrolled} Students Enrolled</span>
        <button class="btn btn-primary" onclick="CoursesManager.enrollCourse('${course.title}')">
          <i class="fa-solid fa-rocket"></i> Start Learning Now
        </button>
      </div>
    `;

    this.modal.classList.add('active');
  },

  enrollCourse(courseTitle) {
    Toast.show(`Successfully enrolled in ${courseTitle}! Check your student dashboard.`, 'success', 4000);
    this.modal.classList.remove('active');
  }
};

/* ==========================================================================
   10. NOTES & STUDY MATERIALS MODULE
   ========================================================================== */
const NotesManager = {
  container: document.getElementById('notes-grid-container'),
  pills: document.getElementById('notes-category-pills'),
  searchInput: document.getElementById('notes-search-input'),
  selectedCategory: 'all',
  searchQuery: '',

  init() {
    this.render();

    if (this.pills) {
      this.pills.querySelectorAll('.filter-pill').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.selectedCategory = e.currentTarget.getAttribute('data-category');
          this.pills.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          this.render();
        });
      });
    }

    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.render();
      });
    }
  },

  render() {
    if (!this.container) return;

    const filtered = ICT_DATA.notes.filter(n => {
      const matchesCat = this.selectedCategory === 'all' || n.category === this.selectedCategory;
      const matchesSearch = !this.searchQuery || 
        n.title.toLowerCase().includes(this.searchQuery) ||
        n.description.toLowerCase().includes(this.searchQuery) ||
        n.categoryName.toLowerCase().includes(this.searchQuery);

      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      this.container.innerHTML = `
        <div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
          <p style="color: var(--text-muted);">No study notes found matching your criteria.</p>
        </div>
      `;
      return;
    }

    this.container.innerHTML = filtered.map(n => `
      <div class="glass-card note-card fade-in-up">
        <div class="note-pdf-icon">
          <i class="fa-solid fa-file-pdf"></i>
          <span>${n.format}</span>
        </div>

        <div class="note-content">
          <h3 class="note-title">${n.title}</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.5rem;">${n.description}</p>
          <div class="note-meta-pills">
            <span><i class="fa-solid fa-calendar-check"></i> ${n.semester}</span>
            <span>•</span>
            <span><i class="fa-solid fa-hard-drive"></i> ${n.fileSize}</span>
            <span>•</span>
            <span><i class="fa-solid fa-download"></i> ${n.downloads} Downloads</span>
          </div>

          <div class="note-actions">
            <button class="btn btn-outline btn-sm" onclick="NotesManager.downloadNote('${n.title}')">
              <i class="fa-solid fa-download"></i> Download PDF
            </button>
            <button class="btn btn-secondary btn-sm" onclick="NotesManager.previewNote('${n.title}', '${n.pages}')">
              <i class="fa-solid fa-eye"></i> Quick View
            </button>
          </div>
        </div>
      </div>
    `).join('');
  },

  downloadNote(title) {
    Toast.show(`Downloading "${title}" (PDF)...`, 'success', 3000);
  },

  previewNote(title, pages) {
    Toast.show(`Previewing document: ${title} (${pages} Pages)`, 'info', 3000);
  }
};

/* ==========================================================================
   11. CODING RESOURCES & CHALLENGES MODULE
   ========================================================================== */
const CodingManager = {
  challengesContainer: document.getElementById('challenges-container'),
  beginnerContainer: document.getElementById('beginner-projects-container'),
  cheatsheetsContainer: document.getElementById('cheatsheets-container'),

  init() {
    this.renderChallenges();
    this.renderBeginnerProjects();
    this.renderCheatsheets();
  },

  renderChallenges() {
    if (!this.challengesContainer) return;

    this.challengesContainer.innerHTML = ICT_DATA.codingResources.challenges.map((ch, idx) => `
      <div class="challenge-card">
        <div class="challenge-header" onclick="CodingManager.toggleChallenge('ch-body-${idx}')">
          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <span class="badge ${ch.difficulty === 'Easy' ? 'badge-emerald' : 'badge-amber'}">${ch.difficulty}</span>
            <strong style="font-size: 1.05rem;">${ch.title}</strong>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-size: 0.8rem; color: var(--text-muted);"><i class="fa-solid fa-users"></i> ${ch.solvedCount} Solved</span>
            <i class="fa-solid fa-chevron-down" style="color: var(--accent-cyan);"></i>
          </div>
        </div>

        <div class="challenge-body" id="ch-body-${idx}">
          <p class="challenge-prompt">${ch.prompt}</p>
          <div style="display: flex; gap: 0.4rem; margin-bottom: 1rem;">
            ${ch.tags.map(t => `<span class="badge badge-indigo">${t}</span>`).join('')}
          </div>

          <div class="code-snippet-box">
            <button class="copy-code-btn" onclick="CodingManager.copySnippet(this)">
              <i class="fa-regular fa-copy"></i> Copy Code
            </button>
            <pre><code>${this.escapeHtml(ch.codeSnippet)}</code></pre>
          </div>
        </div>
      </div>
    `).join('');
  },

  renderBeginnerProjects() {
    if (!this.beginnerContainer) return;

    this.beginnerContainer.innerHTML = ICT_DATA.codingResources.beginnerProjects.map(p => `
      <div class="glass-card fade-in-up">
        <div class="flex justify-between items-center" style="margin-bottom: 0.65rem;">
          <span class="badge badge-cyan">${p.level}</span>
          <i class="fa-solid fa-cube" style="color: var(--accent-cyan);"></i>
        </div>
        <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem;">${p.title}</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${p.desc}</p>
        <div class="flex gap-2" style="flex-wrap: wrap;">
          ${p.tech.map(t => `<span class="skill-tag">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  },

  renderCheatsheets() {
    if (!this.cheatsheetsContainer) return;

    this.cheatsheetsContainer.innerHTML = ICT_DATA.codingResources.cheatSheets.map(cs => `
      <div class="cheatsheet-card fade-in-up">
        <div class="cheatsheet-icon">
          <i class="${cs.icon}"></i>
        </div>
        <div>
          <strong style="font-size: 0.95rem; display: block; margin-bottom: 0.2rem;">${cs.name}</strong>
          <span style="font-size: 0.78rem; color: var(--text-muted);">${cs.desc}</span>
        </div>
      </div>
    `).join('');
  },

  toggleChallenge(id) {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.style.display === 'none') {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  },

  copySnippet(btn) {
    const code = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(code).then(() => {
      btn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
      Toast.show('Code snippet copied to clipboard!', 'success');
      setTimeout(() => {
        btn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy Code`;
      }, 2000);
    });
  },

  escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
};

/* ==========================================================================
   12. EVENTS & ANNOUNCEMENTS MODULE
   ========================================================================== */
const EventsManager = {
  container: document.getElementById('events-grid-container'),
  pills: document.getElementById('events-filter-pills'),
  modal: document.getElementById('event-modal'),
  modalContent: document.getElementById('event-modal-content'),
  selectedCategory: 'all',

  init() {
    this.render();

    if (this.pills) {
      this.pills.querySelectorAll('.filter-pill').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.selectedCategory = e.currentTarget.getAttribute('data-category');
          this.pills.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          this.render();
        });
      });
    }

    document.getElementById('close-event-modal')?.addEventListener('click', () => {
      this.modal.classList.remove('active');
    });
  },

  render() {
    if (!this.container) return;

    const filtered = ICT_DATA.events.filter(ev => {
      return this.selectedCategory === 'all' || ev.category === this.selectedCategory;
    });

    this.container.innerHTML = filtered.map(ev => `
      <div class="glass-card event-card fade-in-up">
        <div class="event-image-wrap">
          <img src="${ev.image}" alt="${ev.title}" class="event-img" loading="lazy">
          <span class="event-status-pill ${ev.statusClass}">${ev.status}</span>
        </div>

        <div class="event-body">
          <span class="badge badge-cyan" style="align-self: flex-start; margin-bottom: 0.65rem;">${ev.type}</span>
          <h3 class="event-title">${ev.title}</h3>
          
          <div class="event-meta-list">
            <div class="event-meta-item">
              <i class="fa-solid fa-calendar-day"></i>
              <span>${ev.date}</span>
            </div>
            <div class="event-meta-item">
              <i class="fa-solid fa-clock"></i>
              <span>${ev.time}</span>
            </div>
            <div class="event-meta-item">
              <i class="fa-solid fa-location-dot"></i>
              <span>${ev.location} (${ev.mode})</span>
            </div>
          </div>

          <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.25rem;">
            ${ev.description.substring(0, 110)}...
          </p>

          <div class="flex justify-between items-center" style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-color);">
            <span style="font-size: 0.8rem; color: var(--accent-emerald); font-weight: 600;">
              <i class="fa-solid fa-ticket"></i> ${ev.seatsLeft} Seats Left
            </span>
            <button class="btn btn-primary btn-sm" onclick="EventsManager.showEventDetails('${ev.id}')">
              Details & Register <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  },

  showEventDetails(eventId) {
    const event = ICT_DATA.events.find(e => e.id === eventId);
    if (!event || !this.modalContent) return;

    this.modalContent.innerHTML = `
      <img src="${event.image}" alt="${event.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: 1.5rem;">
      <div class="flex justify-between items-center" style="margin-bottom: 0.75rem;">
        <span class="badge badge-cyan">${event.type}</span>
        <span class="event-status-pill ${event.statusClass}" style="position: static;">${event.status}</span>
      </div>

      <h3 style="font-size: 1.45rem; font-weight: 800; margin-bottom: 0.75rem;">${event.title}</h3>
      <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">${event.description}</p>

      <div class="grid grid-cols-2" style="gap: 1rem; margin-bottom: 1.5rem;">
        <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: var(--radius-md);">
          <strong style="display: block; font-size: 0.85rem; color: var(--accent-cyan);"><i class="fa-solid fa-calendar"></i> Date & Time:</strong>
          <span style="font-size: 0.9rem;">${event.date} | ${event.time}</span>
        </div>
        <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: var(--radius-md);">
          <strong style="display: block; font-size: 0.85rem; color: var(--accent-cyan);"><i class="fa-solid fa-trophy"></i> Rewards / Prizes:</strong>
          <span style="font-size: 0.9rem;">${event.prizePool}</span>
        </div>
      </div>

      <h4 style="margin-bottom: 0.75rem; font-size: 1rem;"><i class="fa-solid fa-list-check" style="color: var(--accent-cyan);"></i> Event Agenda:</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 2rem;">
        ${event.agenda.map(a => `<li style="font-size: 0.88rem; color: var(--text-secondary);"><i class="fa-solid fa-clock" style="color: var(--text-muted); margin-right: 0.5rem;"></i>${a}</li>`).join('')}
      </ul>

      <!-- Registration Form in Modal -->
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.5rem;">
        <h4 style="margin-bottom: 1rem; font-size: 1.1rem;"><i class="fa-solid fa-user-plus" style="color: var(--accent-cyan);"></i> Quick Registration Form</h4>
        <form onsubmit="EventsManager.handleRegister(event, '${event.title}')">
          <div class="grid grid-cols-2" style="gap: 1rem; margin-bottom: 1rem;">
            <input type="text" class="form-control" placeholder="Your Full Name" required>
            <input type="email" class="form-control" placeholder="Email Address" required>
          </div>
          <div class="grid grid-cols-2" style="gap: 1rem; margin-bottom: 1rem;">
            <input type="text" class="form-control" placeholder="Polytechnic Roll / ID" required>
            <input type="text" class="form-control" placeholder="Department & Semester" required>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%;">
            <i class="fa-solid fa-check-circle"></i> Confirm Registration
          </button>
        </form>
      </div>
    `;

    this.modal.classList.add('active');
  },

  handleRegister(e, eventTitle) {
    e.preventDefault();
    Toast.show(`Registered successfully for "${eventTitle}"! Check your email for pass details.`, 'success', 4500);
    this.modal.classList.remove('active');
  }
};

/* ==========================================================================
   13. CAREER & INTERNSHIPS MODULE
   ========================================================================== */
const CareersManager = {
  container: document.getElementById('careers-grid-container'),
  pills: document.getElementById('career-filter-pills'),
  resumeList: document.getElementById('resume-tips-list'),
  interviewList: document.getElementById('interview-tips-list'),
  selectedCategory: 'all',

  init() {
    this.render();
    this.renderGuidance();

    if (this.pills) {
      this.pills.querySelectorAll('.filter-pill').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.selectedCategory = e.currentTarget.getAttribute('data-category');
          this.pills.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          this.render();
        });
      });
    }
  },

  render() {
    if (!this.container) return;

    const filtered = ICT_DATA.careers.filter(c => {
      return this.selectedCategory === 'all' || c.category === this.selectedCategory;
    });

    this.container.innerHTML = filtered.map(c => `
      <div class="glass-card career-card fade-in-up">
        <div>
          <div class="career-header">
            <div>
              <h3 class="career-title">${c.title}</h3>
              <span class="career-company">${c.company}</span>
            </div>
            <span class="badge badge-amber">${c.badge}</span>
          </div>

          <div class="career-salary">
            <i class="fa-solid fa-coins"></i> ${c.salary}
          </div>

          <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">
            ${c.description}
          </p>

          <div class="career-skills-tags">
            ${c.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
          </div>
        </div>

        <div>
          <div class="career-footer">
            <span><i class="fa-solid fa-location-dot"></i> ${c.location}</span>
            <span><i class="fa-solid fa-hourglass-half"></i> ${c.deadline}</span>
          </div>

          <button class="btn btn-outline btn-sm" style="width: 100%; margin-top: 1rem;" onclick="CareersManager.applyOpportunity('${c.title}', '${c.company}')">
            Apply Now <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    `).join('');
  },

  renderGuidance() {
    if (this.resumeList) {
      this.resumeList.innerHTML = ICT_DATA.careerGuidance.resumeTips.map(tip => `
        <li><i class="fa-solid fa-check" style="color: var(--accent-cyan); margin-right: 0.5rem;"></i>${tip}</li>
      `).join('');
    }
    if (this.interviewList) {
      this.interviewList.innerHTML = ICT_DATA.careerGuidance.interviewPrep.map(tip => `
        <li><i class="fa-solid fa-check" style="color: var(--accent-emerald); margin-right: 0.5rem;"></i>${tip}</li>
      `).join('');
    }
  },

  applyOpportunity(title, company) {
    Toast.show(`Application portal opened for ${title} at ${company}!`, 'info', 3500);
  }
};

/* ==========================================================================
   14. INTERACTIVE LEARNING ROADMAPS MODULE
   ========================================================================== */
const RoadmapsManager = {
  tabsContainer: document.getElementById('roadmap-tabs-container'),
  displayWrapper: document.getElementById('roadmap-display-wrapper'),
  activeRoadmapId: 'frontend',
  storageKey: 'cpi_ict_roadmap_progress',

  init() {
    this.renderTabs();
    this.renderActiveRoadmap();
  },

  getProgress() {
    return JSON.parse(localStorage.getItem(this.storageKey)) || {};
  },

  toggleStepProgress(roadmapId, stepId) {
    const progress = this.getProgress();
    if (!progress[roadmapId]) progress[roadmapId] = [];

    if (progress[roadmapId].includes(stepId)) {
      progress[roadmapId] = progress[roadmapId].filter(id => id !== stepId);
      Toast.show('Step unchecked.', 'info', 1500);
    } else {
      progress[roadmapId].push(stepId);
      Toast.show('Checkpoint completed! Keep it up! 🚀', 'success', 2000);
    }

    localStorage.setItem(this.storageKey, JSON.stringify(progress));
    this.renderActiveRoadmap();
  },

  renderTabs() {
    if (!this.tabsContainer) return;

    this.tabsContainer.innerHTML = ICT_DATA.roadmaps.map(rm => `
      <button class="roadmap-tab-btn ${rm.id === this.activeRoadmapId ? 'active' : ''}" onclick="RoadmapsManager.selectRoadmap('${rm.id}')">
        <i class="${rm.icon}"></i> ${rm.name}
      </button>
    `).join('');
  },

  selectRoadmap(id) {
    this.activeRoadmapId = id;
    this.renderTabs();
    this.renderActiveRoadmap();
  },

  renderActiveRoadmap() {
    if (!this.displayWrapper) return;
    const rm = ICT_DATA.roadmaps.find(r => r.id === this.activeRoadmapId);
    if (!rm) return;

    const progress = this.getProgress();
    const completedSteps = progress[rm.id] || [];
    const percent = Math.round((completedSteps.length / rm.steps.length) * 100);

    this.displayWrapper.innerHTML = `
      <div class="roadmap-header-info">
        <div>
          <span class="badge badge-cyan" style="margin-bottom: 0.5rem;"><i class="fa-solid fa-clock"></i> Duration: ${rm.duration}</span>
          <h3 style="font-size: 1.5rem; font-weight: 800;">${rm.name} Journey</h3>
          <p style="color: var(--text-secondary); font-size: 0.92rem; margin-top: 0.25rem;">${rm.description}</p>
        </div>

        <div class="roadmap-progress-badge">
          <i class="fa-solid fa-chart-pie" style="color: var(--accent-cyan); font-size: 1.5rem;"></i>
          <div>
            <strong style="display: block; font-size: 0.95rem;">Track Progress: ${percent}%</strong>
            <span style="font-size: 0.78rem; color: var(--text-muted);">${completedSteps.length} of ${rm.steps.length} Milestones Checked</span>
          </div>
        </div>
      </div>

      <div class="roadmap-timeline">
        ${rm.steps.map((step, idx) => {
          const isDone = completedSteps.includes(step.id);
          return `
            <div class="roadmap-node ${isDone ? 'completed' : ''}">
              <div class="node-checkpoint" onclick="RoadmapsManager.toggleStepProgress('${rm.id}', '${step.id}')" title="Click to toggle status">
                ${isDone ? '<i class="fa-solid fa-check"></i>' : (idx + 1)}
              </div>

              <div class="node-content-card">
                <div class="node-title-row">
                  <h4 class="node-title">${step.title}</h4>
                  <span class="badge ${isDone ? 'badge-emerald' : 'badge-indigo'}">${isDone ? 'Completed' : step.status}</span>
                </div>

                <div class="node-skills-list">
                  ${step.skills.map(s => `<span class="node-skill-pill">${s}</span>`).join('')}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
};

/* ==========================================================================
   15. PROJECTS SHOWCASE MODULE
   ========================================================================== */
const ProjectsManager = {
  container: document.getElementById('projects-grid-container'),
  pills: document.getElementById('projects-filter-pills'),
  submitModal: document.getElementById('project-submit-modal'),
  triggerBtn: document.getElementById('submit-project-trigger'),
  selectedCategory: 'all',

  init() {
    this.render();

    if (this.pills) {
      this.pills.querySelectorAll('.filter-pill').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.selectedCategory = e.currentTarget.getAttribute('data-category');
          this.pills.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          this.render();
        });
      });
    }

    if (this.triggerBtn && this.submitModal) {
      this.triggerBtn.addEventListener('click', () => this.submitModal.classList.add('active'));
    }

    document.getElementById('close-project-submit-modal')?.addEventListener('click', () => {
      this.submitModal.classList.remove('active');
    });

    // Form Submission
    document.getElementById('project-submission-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      Toast.show('Project submitted successfully! Our Technical Lead will review it shortly.', 'success', 5000);
      e.target.reset();
      this.submitModal.classList.remove('active');
    });
  },

  render() {
    if (!this.container) return;

    const filtered = ICT_DATA.projects.filter(p => {
      return this.selectedCategory === 'all' || p.category === this.selectedCategory;
    });

    this.container.innerHTML = filtered.map(p => `
      <div class="glass-card project-card fade-in-up">
        <div class="project-thumbnail">
          <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy">
          <div class="project-overlay-actions">
            <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
            </a>
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <i class="fa-brands fa-github"></i> Code
            </a>
          </div>
        </div>

        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <span class="project-author"><i class="fa-solid fa-user-circle"></i> ${p.author}</span>
          <p class="project-desc">${p.description}</p>
          <div class="project-tech-stack">
            ${p.tech.map(t => `<span class="skill-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }
};

/* ==========================================================================
   16. TEAM MEMBERS MODULE
   ========================================================================== */
const TeamManager = {
  container: document.getElementById('team-grid-container'),
  pills: document.getElementById('team-filter-pills'),
  selectedCategory: 'all',

  init() {
    this.render();

    if (this.pills) {
      this.pills.querySelectorAll('.filter-pill').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.selectedCategory = e.currentTarget.getAttribute('data-category');
          this.pills.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          this.render();
        });
      });
    }
  },

  render() {
    if (!this.container) return;

    const filtered = ICT_DATA.team.filter(m => {
      return this.selectedCategory === 'all' || m.category === this.selectedCategory;
    });

    this.container.innerHTML = filtered.map(m => `
      <div class="glass-card team-card fade-in-up">
        <div class="team-avatar-wrapper">
          <img src="${m.image}" alt="${m.name}" class="team-avatar" loading="lazy">
        </div>
        <h3 class="team-name">${m.name}</h3>
        <span class="team-role">${m.role}</span>
        <span class="team-dept">${m.department}</span>
        <p class="team-bio">${m.bio}</p>

        <div class="team-socials">
          <a href="${m.socials.github}" class="team-social-link" title="GitHub"><i class="fa-brands fa-github"></i></a>
          <a href="${m.socials.linkedin}" class="team-social-link" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="${m.socials.twitter}" class="team-social-link" title="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>
    `).join('');
  }
};

/* ==========================================================================
   17. GALLERY & LIGHTBOX MODULE
   ========================================================================== */
const GalleryManager = {
  container: document.getElementById('gallery-grid-container'),
  pills: document.getElementById('gallery-filter-pills'),
  lightbox: document.getElementById('lightbox-modal'),
  lightboxImg: document.getElementById('lightbox-img'),
  lightboxCaption: document.getElementById('lightbox-caption'),
  prevBtn: document.getElementById('lightbox-prev'),
  nextBtn: document.getElementById('lightbox-next'),
  closeBtn: document.getElementById('close-lightbox'),
  currentIndex: 0,
  currentImages: [],
  selectedCategory: 'all',

  init() {
    this.render();

    if (this.pills) {
      this.pills.querySelectorAll('.filter-pill').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.selectedCategory = e.currentTarget.getAttribute('data-category');
          this.pills.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          this.render();
        });
      });
    }

    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.closeLightbox());
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevImage());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextImage());

    window.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowLeft') this.prevImage();
      if (e.key === 'ArrowRight') this.nextImage();
    });
  },

  render() {
    if (!this.container) return;

    this.currentImages = ICT_DATA.gallery.filter(g => {
      return this.selectedCategory === 'all' || g.category === this.selectedCategory;
    });

    this.container.innerHTML = this.currentImages.map((g, idx) => `
      <div class="gallery-item fade-in-up" onclick="GalleryManager.openLightbox(${idx})">
        <img src="${g.image}" alt="${g.title}" class="gallery-img" loading="lazy">
        <div class="gallery-overlay">
          <span class="gallery-date">${g.categoryName} • ${g.date}</span>
          <h4 class="gallery-caption">${g.title}</h4>
        </div>
      </div>
    `).join('');
  },

  openLightbox(index) {
    this.currentIndex = index;
    const item = this.currentImages[index];
    if (!item) return;

    this.lightboxImg.src = item.image;
    this.lightboxCaption.innerHTML = `<strong>${item.title}</strong><br><span style="font-size: 0.85rem; color: var(--text-muted);">${item.caption}</span>`;
    this.lightbox.classList.add('active');
  },

  closeLightbox() {
    this.lightbox.classList.remove('active');
  },

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.currentImages.length) % this.currentImages.length;
    this.openLightbox(this.currentIndex);
  },

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.currentImages.length;
    this.openLightbox(this.currentIndex);
  }
};

/* ==========================================================================
   18. FAQ ACCORDION MODULE
   ========================================================================== */
const FAQManager = {
  container: document.getElementById('faq-container'),

  init() {
    if (!this.container) return;

    this.container.innerHTML = ICT_DATA.faqs.map((faq, idx) => `
      <div class="faq-item ${idx === 0 ? 'active' : ''}">
        <button class="faq-question" onclick="FAQManager.toggle(this)">
          <span>${faq.q}</span>
          <i class="fa-solid fa-chevron-down faq-chevron"></i>
        </button>
        <div class="faq-answer" style="${idx === 0 ? 'max-height: 200px;' : ''}">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join('');
  },

  toggle(btn) {
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-answer');
    const isActive = item.classList.contains('active');

    // Close all other items
    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.faq-answer').style.maxHeight = '0';
    });

    if (!isActive) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 50 + 'px';
    }
  }
};

/* ==========================================================================
   19. FORMS & VALIDATION (CONTACT & NEWSLETTER)
   ========================================================================== */
const FormsManager = {
  contactForm: document.getElementById('contact-form'),
  newsletterForm: document.getElementById('newsletter-form'),

  init() {
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const msg = document.getElementById('contact-message').value.trim();

        if (!name || !email || !msg) {
          Toast.show('Please fill in all required fields.', 'warning');
          return;
        }

        Toast.show(`Thank you, ${name}! Your message has been sent to the CPI ICT Club team.`, 'success', 5000);
        this.contactForm.reset();
      });
    }

    if (this.newsletterForm) {
      this.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value.trim();
        if (email) {
          Toast.show(`Subscribed ${email} to CPI ICT Club Tech Briefing!`, 'success', 4000);
          this.newsletterForm.reset();
        }
      });
    }

    // Set dynamic current year in footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }
};

/* ==========================================================================
   20. BACK TO TOP BUTTON
   ========================================================================== */
const BackToTopManager = {
  btn: document.getElementById('back-to-top'),

  init() {
    if (!this.btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        this.btn.classList.add('visible');
      } else {
        this.btn.classList.remove('visible');
      }
    });

    this.btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};
