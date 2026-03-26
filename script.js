/* ═══════════════════════════════════════════════════════════
   VEDANSH WAGH — PORTFOLIO  |  script.js
   ═══════════════════════════════════════════════════════════ */

// ── Loader ──────────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    startAnimations();
  }, 2000);
});

// ── Custom Cursor ────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

(function followCursor() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(followCursor);
})();

document.querySelectorAll('a,button,.project-card,.contact-link,.skill-item').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// ── Navbar ───────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── Typed Text ───────────────────────────────────────────────
const phrases = [
  'Full Stack Developer',
  'AI Enthusiast',
  'Problem Solver',
  'React Engineer',
  'Backend Architect'
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typedText');

function typeWriter() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      setTimeout(() => { deleting = true; typeWriter(); }, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(typeWriter, deleting ? 50 : 85);
}

// ── Canvas Background ────────────────────────────────────────
function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const PARTICLE_COUNT = 80;
  const particles = [];

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.color = Math.random() < 0.5 ? '99,102,241' : Math.random() < 0.5 ? '139,92,246' : '6,182,212';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  const CONNECT_DIST = 120;

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          ctx.save();
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99,102,241,${0.12 * (1 - dist / CONNECT_DIST)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
}

// ── Counter Animation ────────────────────────────────────────
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

// ── Skill Bars ───────────────────────────────────────────────
function animateSkillBars() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    const w = bar.dataset.width;
    setTimeout(() => { bar.style.width = w + '%'; }, 200);
  });
}

// ── Reveal on Scroll ─────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, entry.target.dataset.delay || 0);
    }
  });
}, { threshold: 0.15 });

function setupReveal() {
  const elements = document.querySelectorAll('.skill-category, .project-card, .gh-stat-card, .about-card-glow, .about-content, .contact-info, .contact-form-wrap, .timeline-item');
  elements.forEach((el, i) => {
    el.classList.add('reveal');
    el.dataset.delay = (i % 4) * 100;
    revealObserver.observe(el);
  });
}

// ── Counter Observer ────────────────────────────────────────
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-count]').forEach(el => {
        animateCounter(el, parseInt(el.dataset.count));
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

// ── Skills Observer ──────────────────────────────────────────
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkillBars();
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

// ── Project Filtering ────────────────────────────────────────
function setupFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const cat = card.dataset.category || '';
        if (filter === 'all' || cat.includes(filter)) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeInUp 0.4s ease both';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// ── Heatmap Generator ────────────────────────────────────────
function generateHeatmap() {
  const heatmap = document.getElementById('heatmap');
  if (!heatmap) return;
  const weeks = 26;
  const days = 7;

  for (let w = 0; w < weeks; w++) {
    const col = document.createElement('div');
    col.className = 'hm-col';
    for (let d = 0; d < days; d++) {
      const cell = document.createElement('div');
      cell.className = 'hm-cell';
      // Randomize with realistic commit distribution
      const r = Math.random();
      let level = 0;
      if (r > 0.5) level = 1;
      if (r > 0.7) level = 2;
      if (r > 0.85) level = 3;
      if (r > 0.93) level = 4;
      cell.classList.add('l' + level);
      // recent weeks more active
      if (w > 20 && Math.random() > 0.4) cell.classList.remove('l0', 'l1', 'l2', 'l3', 'l4'), cell.classList.add('l' + (Math.floor(Math.random() * 3) + 2));
      col.appendChild(cell);
    }
    heatmap.appendChild(col);
  }
}

// ── Contact Form ─────────────────────────────────────────────
function setupForm() {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
      note.textContent = "Thanks for reaching out! I'll get back to you soon.";
      form.reset();
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        btn.disabled = false;
        note.textContent = '';
      }, 3500);
    }, 1500);
  });
}

// ── Resume Button ────────────────────────────────────────────
function setupResume() {
  const btn = document.getElementById('resumeBtn');
  if (!btn) return;
  btn.addEventListener('click', e => {
    e.preventDefault();
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...';
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-file-arrow-down"></i> Download Resume';
      alert('Resume download will be available once you link your resume PDF. Update the href in the HTML to your resume file path.');
    }, 1000);
  });
}

// ── Smooth Nav Highlight ─────────────────────────────────────
function setupActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    });
  });
}

// ── Init ─────────────────────────────────────────────────────
function startAnimations() {
  initCanvas();
  typeWriter();
  setupReveal();
  setupFilters();
  generateHeatmap();
  setupForm();
  setupResume();
  setupActiveNav();

  // Counters
  const heroSection = document.getElementById('home');
  if (heroSection) counterObserver.observe(heroSection);
  const ghSection = document.getElementById('github');
  if (ghSection) counterObserver.observe(ghSection);

  // Skill bars
  const skillSection = document.getElementById('skills');
  if (skillSection) skillObserver.observe(skillSection);

  // Hero section counters run on load
  document.querySelectorAll('.hero-stats [data-count]').forEach(el => {
    setTimeout(() => animateCounter(el, parseInt(el.dataset.count)), 2200);
  });
}
