// ============================================================
//  PersonalTrainz — Workout App JS
// ============================================================

// ── Workout Data ────────────────────────────────────────────
// Categories: stretch | abs | push | legs | arms
const DAYS = [
  {
    key: 'sun',
    name: 'Sunday',
    letter: 'S',
    subtitle: 'Rest Day',
    isRest: true,
    exercises: []
  },
  {
    key: 'mon',
    name: 'Monday',
    letter: 'M',
    subtitle: 'Chest & Core',
    isRest: false,
    exercises: [
      { id: 'mon_1',  name: 'Toe Stretching Hold',      detail: '30 sec · 4 sets',  type: 'timed', duration: 30,  sets: 4, category: 'stretch' },
      { id: 'mon_2',  name: 'Cat Pose',                  detail: '1 min hold',        type: 'timed', duration: 60,  sets: 1, category: 'stretch' },
      { id: 'mon_3',  name: 'Squats',                    detail: '30 reps',           type: 'reps',  reps: 30,             category: 'legs'    },
      { id: 'mon_4',  name: 'Diamond Push-ups',          detail: '30 reps',           type: 'reps',  reps: 30,             category: 'push'    },
      { id: 'mon_5',  name: 'Declined Push-ups',         detail: '20 reps',           type: 'reps',  reps: 20,             category: 'push'    },
      { id: 'mon_6',  name: 'Plank',                     detail: '2 min hold',        type: 'timed', duration: 120, sets: 1, category: 'abs'     },
      { id: 'mon_7',  name: 'Seated In-outs',            detail: '30 reps',           type: 'reps',  reps: 30,             category: 'abs'     },
      { id: 'mon_8',  name: 'Leg Raises',                detail: '30 reps',           type: 'reps',  reps: 30,             category: 'abs'     },
      { id: 'mon_9',  name: 'Russian Twists',            detail: '20 reps',           type: 'reps',  reps: 20,             category: 'abs'     },
      { id: 'mon_10', name: 'Cross Mountain Climbers',   detail: '40 reps',           type: 'reps',  reps: 40,             category: 'abs'     },
    ]
  },
  {
    key: 'tue',
    name: 'Tuesday',
    letter: 'T',
    subtitle: 'Shoulders & Core',
    isRest: false,
    exercises: [
      { id: 'tue_1',  name: 'Seated Toe Stretching Hold', detail: '20 sec · 2 sets',  type: 'timed', duration: 20,  sets: 2, category: 'stretch' },
      { id: 'tue_2',  name: 'Cat Pose',                   detail: '1 min hold',        type: 'timed', duration: 60,  sets: 1, category: 'stretch' },
      { id: 'tue_3',  name: 'Squats',                     detail: '30 reps',           type: 'reps',  reps: 30,             category: 'legs'    },
      { id: 'tue_4',  name: 'Pike Push-ups',              detail: '15 reps',           type: 'reps',  reps: 15,             category: 'push'    },
      { id: 'tue_5',  name: 'Declined Push-ups',          detail: '20 reps',           type: 'reps',  reps: 20,             category: 'push'    },
      { id: 'tue_6',  name: 'Plank',                      detail: '1 min hold',        type: 'timed', duration: 60,  sets: 1, category: 'abs'     },
      { id: 'tue_7',  name: 'Seated In-outs',             detail: '30 reps',           type: 'reps',  reps: 30,             category: 'abs'     },
      { id: 'tue_8',  name: 'Cross Mountain Climbers',    detail: '40 reps',           type: 'reps',  reps: 40,             category: 'abs'     },
      { id: 'tue_9',  name: 'Russian Twists',             detail: '20 reps',           type: 'reps',  reps: 20,             category: 'abs'     },
      { id: 'tue_10', name: 'Leg Raises',                 detail: '30 reps',           type: 'reps',  reps: 30,             category: 'abs'     },
    ]
  },
  {
    key: 'wed',
    name: 'Wednesday',
    letter: 'W',
    subtitle: 'Triceps & Core',
    isRest: false,
    exercises: [
      { id: 'wed_1',  name: 'Toe Stretching Hold',        detail: '30 sec · 4 sets',  type: 'timed', duration: 30,  sets: 4, category: 'stretch' },
      { id: 'wed_2',  name: 'Cat Pose',                   detail: '1 min hold',        type: 'timed', duration: 60,  sets: 1, category: 'stretch' },
      { id: 'wed_3',  name: 'Squats',                     detail: '30 reps',           type: 'reps',  reps: 30,             category: 'legs'    },
      { id: 'wed_4',  name: 'Tricep Dips',                detail: '20 reps',           type: 'reps',  reps: 20,             category: 'arms'    },
      { id: 'wed_5',  name: 'Diamond Push-ups',           detail: '30 reps',           type: 'reps',  reps: 30,             category: 'push'    },
      { id: 'wed_6',  name: 'Plank',                      detail: '2 min hold',        type: 'timed', duration: 120, sets: 1, category: 'abs'     },
      { id: 'wed_7',  name: 'Seated In-outs',             detail: '30 reps',           type: 'reps',  reps: 30,             category: 'abs'     },
      { id: 'wed_8',  name: 'Leg Raises',                 detail: '30 reps',           type: 'reps',  reps: 30,             category: 'abs'     },
      { id: 'wed_9',  name: 'Cross Mountain Climbers',    detail: '40 reps',           type: 'reps',  reps: 40,             category: 'abs'     },
      { id: 'wed_10', name: 'Russian Twists',             detail: '20 reps',           type: 'reps',  reps: 20,             category: 'abs'     },
    ]
  },
  {
    key: 'thu',
    name: 'Thursday',
    letter: 'T',
    subtitle: 'Upper Body & Core',
    isRest: false,
    exercises: [
      { id: 'thu_1',  name: 'Seated Toe Stretching Hold', detail: '20 sec · 2 sets',  type: 'timed', duration: 20,  sets: 2, category: 'stretch' },
      { id: 'thu_2',  name: 'Cat Pose',                   detail: '1 min hold',        type: 'timed', duration: 60,  sets: 1, category: 'stretch' },
      { id: 'thu_3',  name: 'Squats',                     detail: '30 reps',           type: 'reps',  reps: 30,             category: 'legs'    },
      { id: 'thu_4',  name: 'Diamond Push-ups',           detail: '30 reps',           type: 'reps',  reps: 30,             category: 'push'    },
      { id: 'thu_5',  name: 'Pike Push-ups',              detail: '15 reps',           type: 'reps',  reps: 15,             category: 'push'    },
      { id: 'thu_6',  name: 'Declined Push-ups',          detail: '20 reps',           type: 'reps',  reps: 20,             category: 'push'    },
      { id: 'thu_7',  name: 'Plank',                      detail: '1 min hold',        type: 'timed', duration: 60,  sets: 1, category: 'abs'     },
      { id: 'thu_8',  name: 'Seated In-outs',             detail: '30 reps',           type: 'reps',  reps: 30,             category: 'abs'     },
      { id: 'thu_9',  name: 'Russian Twists',             detail: '20 reps',           type: 'reps',  reps: 20,             category: 'abs'     },
      { id: 'thu_10', name: 'Cross Mountain Climbers',    detail: '40 reps',           type: 'reps',  reps: 40,             category: 'abs'     },
    ]
  },
  {
    key: 'fri',
    name: 'Friday',
    letter: 'F',
    subtitle: 'Full Upper & Core',
    isRest: false,
    exercises: [
      { id: 'fri_1',  name: 'Toe Stretching Hold',        detail: '30 sec · 4 sets',  type: 'timed', duration: 30,  sets: 4, category: 'stretch' },
      { id: 'fri_2',  name: 'Cat Pose',                   detail: '1 min hold',        type: 'timed', duration: 60,  sets: 1, category: 'stretch' },
      { id: 'fri_3',  name: 'Squats',                     detail: '30 reps',           type: 'reps',  reps: 30,             category: 'legs'    },
      { id: 'fri_4',  name: 'Diamond Push-ups',           detail: '30 reps',           type: 'reps',  reps: 30,             category: 'push'    },
      { id: 'fri_5',  name: 'Tricep Dips',                detail: '20 reps',           type: 'reps',  reps: 20,             category: 'arms'    },
      { id: 'fri_6',  name: 'Pike Push-ups',              detail: '15 reps',           type: 'reps',  reps: 15,             category: 'push'    },
      { id: 'fri_7',  name: 'Plank',                      detail: '2 min hold',        type: 'timed', duration: 120, sets: 1, category: 'abs'     },
      { id: 'fri_8',  name: 'Leg Raises',                 detail: '30 reps',           type: 'reps',  reps: 30,             category: 'abs'     },
      { id: 'fri_9',  name: 'Seated In-outs',             detail: '30 reps',           type: 'reps',  reps: 30,             category: 'abs'     },
      { id: 'fri_10', name: 'Cross Mountain Climbers',    detail: '40 reps',           type: 'reps',  reps: 40,             category: 'abs'     },
      { id: 'fri_11', name: 'Russian Twists',             detail: '20 reps',           type: 'reps',  reps: 20,             category: 'abs'     },
    ]
  },
  {
    key: 'sat',
    name: 'Saturday',
    letter: 'S',
    subtitle: 'Full Intensity',
    isRest: false,
    exercises: [
      { id: 'sat_1',  name: 'Toe Stretching Hold',        detail: '30 sec · 4 sets',  type: 'timed', duration: 30,  sets: 4, category: 'stretch' },
      { id: 'sat_2',  name: 'Seated Toe Stretching Hold', detail: '20 sec · 2 sets',  type: 'timed', duration: 20,  sets: 2, category: 'stretch' },
      { id: 'sat_3',  name: 'Cat Pose',                   detail: '1 min hold',        type: 'timed', duration: 60,  sets: 1, category: 'stretch' },
      { id: 'sat_4',  name: 'Squats',                     detail: '30 reps',           type: 'reps',  reps: 30,             category: 'legs'    },
      { id: 'sat_5',  name: 'Diamond Push-ups',           detail: '30 reps',           type: 'reps',  reps: 30,             category: 'push'    },
      { id: 'sat_6',  name: 'Declined Push-ups',          detail: '20 reps',           type: 'reps',  reps: 20,             category: 'push'    },
      { id: 'sat_7',  name: 'Pike Push-ups',              detail: '15 reps',           type: 'reps',  reps: 15,             category: 'push'    },
      { id: 'sat_8',  name: 'Tricep Dips',                detail: '20 reps',           type: 'reps',  reps: 20,             category: 'arms'    },
      { id: 'sat_9',  name: 'Plank',                      detail: '2 min hold',        type: 'timed', duration: 120, sets: 1, category: 'abs'     },
      { id: 'sat_10', name: 'Seated In-outs',             detail: '30 reps',           type: 'reps',  reps: 30,             category: 'abs'     },
      { id: 'sat_11', name: 'Leg Raises',                 detail: '30 reps',           type: 'reps',  reps: 30,             category: 'abs'     },
      { id: 'sat_12', name: 'Russian Twists',             detail: '20 reps',           type: 'reps',  reps: 20,             category: 'abs'     },
      { id: 'sat_13', name: 'Cross Mountain Climbers',    detail: '40 reps',           type: 'reps',  reps: 40,             category: 'abs'     },
    ]
  },
];

// ── State ────────────────────────────────────────────────────
const todayIndex = new Date().getDay(); // 0=Sun … 6=Sat
let activeDay = todayIndex;             // always locked to today
let completedExercises = loadCompleted();

// Timer state
let timerExercise = null;
let timerInterval = null;
let timerRunning  = false;
let timerSeconds  = 0;
let timerCurrentSet = 1;
let timerTotalSets  = 1;
let timerDuration   = 0;

// ── Persistence ──────────────────────────────────────────────
function storageKey(dayKey) {
  const today = new Date().toISOString().slice(0, 10);
  return `pt_${dayKey}_${today}`;
}

function loadCompleted() {
  const data = {};
  DAYS.forEach(d => {
    try {
      const raw = localStorage.getItem(storageKey(d.key));
      data[d.key] = raw ? JSON.parse(raw) : [];
    } catch { data[d.key] = []; }
  });
  return data;
}

function saveCompleted(dayKey) {
  localStorage.setItem(storageKey(dayKey), JSON.stringify(completedExercises[dayKey]));
}

function isCompleted(dayKey, exId) {
  return (completedExercises[dayKey] || []).includes(exId);
}

function toggleCompleted(dayKey, exId) {
  if (!completedExercises[dayKey]) completedExercises[dayKey] = [];
  const idx = completedExercises[dayKey].indexOf(exId);
  if (idx === -1) completedExercises[dayKey].push(exId);
  else completedExercises[dayKey].splice(idx, 1);
  saveCompleted(dayKey);
}

// ── Rendering ────────────────────────────────────────────────
function render() {
  renderTabs();
  renderContent();
  updateHeaderProgress();
}

function renderTabs() {
  const container = document.getElementById('day-tabs');
  container.innerHTML = '';

  DAYS.forEach((day, index) => {
    const isToday  = index === todayIndex;
    const isLocked = !isToday;

    const tab = document.createElement('button');
    tab.className = 'day-tab';
    if (day.isRest) tab.classList.add('rest-tab');
    if (isToday)    tab.classList.add('active', 'today-indicator');
    if (isLocked)   tab.classList.add('locked');

    tab.setAttribute('aria-label', isLocked ? `${day.name} — locked` : day.name);
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', isToday ? 'true' : 'false');
    tab.disabled = isLocked;

    const todayDot = isToday  ? `<span class="today-dot"></span>` : '';
    const lockIcon = isLocked ? `<span class="day-tab-lock" aria-hidden="true">🔒</span>` : '';

    tab.innerHTML = `
      <span class="day-tab-letter">${day.letter}</span>
      <span class="day-tab-label">${day.key.toUpperCase()}</span>
      ${todayDot}
      ${lockIcon}
    `;

    // Only today's tab is interactive
    if (isToday) {
      tab.addEventListener('click', () => {
        stopTimer();
        render();
        tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      });
    }

    container.appendChild(tab);
  });
}

function renderContent() {
  const main = document.getElementById('main-content');
  const day  = DAYS[activeDay];

  if (day.isRest) {
    main.innerHTML = `
      <div class="rest-day-screen">
        <div class="rest-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
            <line x1="6" y1="1" x2="6" y2="4"/>
            <line x1="10" y1="1" x2="10" y2="4"/>
            <line x1="14" y1="1" x2="14" y2="4"/>
          </svg>
        </div>
        <h2 class="rest-title">Rest Day</h2>
        <p class="rest-subtitle">Recovery is part of the program. Rest, hydrate, and come back stronger tomorrow.</p>
      </div>
    `;
    return;
  }

  const exercises = day.exercises;
  const doneCount = exercises.filter(ex => isCompleted(day.key, ex.id)).length;
  const total     = exercises.length;
  const pct       = total > 0 ? Math.round((doneCount / total) * 100) : 0;
  const allDone   = doneCount === total && total > 0;
  const isToday   = activeDay === todayIndex;

  // Group exercises by section
  const sections = [
    { label: 'Stretches',   filter: e => e.category === 'stretch' },
    { label: 'Strength',    filter: e => ['push','arms','legs'].includes(e.category) },
    { label: 'Core & Cardio', filter: e => e.category === 'abs' },
  ];

  let sectionsHTML = '';
  sections.forEach(sec => {
    const items = exercises.filter(sec.filter);
    if (!items.length) return;

    sectionsHTML += `<div class="section-label">${sec.label}</div>`;
    sectionsHTML += `<div class="exercises-list">`;
    items.forEach((ex, i) => {
      const done  = isCompleted(day.key, ex.id);
      const isTimed = ex.type === 'timed';
      sectionsHTML += buildExerciseCard(ex, done, isTimed, day.key);
    });
    sectionsHTML += `</div>`;
  });

  main.innerHTML = `
    <div class="day-header">
      <div class="day-header-top">
        <div>
          <div class="day-name">${day.name}</div>
          <div class="day-focus">${day.subtitle}</div>
        </div>
        ${isToday ? `<span class="day-today-badge">Today</span>` : ''}
      </div>
      <div class="day-stats">
        <div class="stat-pill">
          <span class="stat-pill-value">${total}</span>
          exercises
        </div>
        <div class="stat-pill">
          <span class="stat-pill-value">${doneCount}</span>
          done
        </div>
        <div class="stat-pill">
          <span class="stat-pill-value">${pct}%</span>
          progress
        </div>
      </div>
    </div>

    <div class="day-progress-bar-wrap">
      <div class="progress-bar-track">
        <div class="progress-bar-fill" style="width:${pct}%"></div>
      </div>
    </div>

    <div class="completed-banner ${allDone ? 'show' : ''}">
      <div class="completed-banner-icon">✦</div>
      <div class="completed-banner-title">Workout Complete!</div>
      <div class="completed-banner-sub">You crushed ${day.name}. Rest up for tomorrow.</div>
    </div>

    ${sectionsHTML}
  `;

  // Attach events
  main.querySelectorAll('.exercise-card').forEach(card => {
    const exId  = card.dataset.exId;
    const dayKey = card.dataset.dayKey;

    // Tap card = toggle done
    card.addEventListener('click', e => {
      if (e.target.closest('.timer-btn')) return;
      toggleCompleted(dayKey, exId);
      renderContent();
      updateHeaderProgress();
    });

    // Timer button
    const timerBtn = card.querySelector('.timer-btn');
    if (timerBtn) {
      timerBtn.addEventListener('click', e => {
        e.stopPropagation();
        const ex = DAYS[activeDay].exercises.find(x => x.id === exId);
        if (ex) openTimer(ex);
      });
    }
  });
}

function buildExerciseCard(ex, done, isTimed, dayKey) {
  const badgeClass = `badge-${ex.category}`;
  const categoryLabel = {
    stretch: 'Stretch',
    abs:     'Abs',
    push:    'Push',
    legs:    'Legs',
    arms:    'Arms',
  }[ex.category] || ex.category;

  const timerBtnHTML = isTimed ? `
    <button class="timer-btn" aria-label="Start timer for ${ex.name}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    </button>
  ` : '';

  return `
    <div class="exercise-card ${done ? 'done' : ''}" data-ex-id="${ex.id}" data-day-key="${dayKey}" role="listitem">
      <div class="exercise-check" aria-hidden="true">
        <svg class="check-icon" viewBox="0 0 12 12" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="2 6 5 9 10 3"/>
        </svg>
      </div>
      <div class="exercise-info">
        <div class="exercise-name-row">
          <span class="exercise-name">${ex.name}</span>
          <span class="category-badge ${badgeClass}">${categoryLabel}</span>
        </div>
        <div class="exercise-detail">${ex.detail}</div>
      </div>
      ${timerBtnHTML}
    </div>
  `;
}

function updateHeaderProgress() {
  const day = DAYS[activeDay];
  if (day.isRest) {
    document.getElementById('progress-count').innerHTML = '';
    return;
  }
  const exercises = day.exercises;
  const done  = exercises.filter(ex => isCompleted(day.key, ex.id)).length;
  const total = exercises.length;
  const pct   = total > 0 ? (done / total) : 0;
  const circ  = 2 * Math.PI * 12; // r=12
  const offset = circ - (circ * pct);

  document.getElementById('progress-count').innerHTML = `
    <div class="header-progress">
      <span class="progress-text">${done}/${total}</span>
      <div class="progress-ring-wrap">
        <svg class="progress-ring" width="32" height="32" viewBox="0 0 32 32">
          <circle class="progress-ring-bg"   cx="16" cy="16" r="12" stroke-width="2"/>
          <circle class="progress-ring-fill" cx="16" cy="16" r="12" stroke-width="2"
            stroke-dasharray="${circ.toFixed(2)}"
            stroke-dashoffset="${offset.toFixed(2)}"/>
        </svg>
      </div>
    </div>
  `;
}

// ── Timer Logic ──────────────────────────────────────────────
function openTimer(ex) {
  timerExercise   = ex;
  timerDuration   = ex.duration;
  timerTotalSets  = ex.sets || 1;
  timerCurrentSet = 1;
  timerSeconds    = ex.duration;
  timerRunning    = false;
  clearInterval(timerInterval);

  const modal = document.getElementById('timer-modal');
  modal.classList.remove('hidden');
  renderTimer();
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerExercise = null;
  document.getElementById('timer-modal').classList.add('hidden');
}

function renderTimer() {
  if (!timerExercise) return;

  document.getElementById('timer-exercise-name').textContent = timerExercise.name;

  // Sets row
  const setsRow = document.getElementById('timer-sets-row');
  if (timerTotalSets > 1) {
    let dotsHTML = `<span class="timer-set-label">Set ${timerCurrentSet} of ${timerTotalSets}</span>`;
    for (let i = 1; i <= timerTotalSets; i++) {
      let cls = 'timer-set-dot';
      if (i < timerCurrentSet) cls += ' done';
      else if (i === timerCurrentSet) cls += ' active';
      dotsHTML += `<span class="${cls}"></span>`;
    }
    setsRow.innerHTML = dotsHTML;
    setsRow.style.display = 'flex';
  } else {
    setsRow.innerHTML = '';
    setsRow.style.display = 'none';
  }

  updateTimerDisplay();
  updateTimerButtons();
}

function updateTimerDisplay() {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  const display = `${mins > 0 ? mins + ':' : ''}${mins > 0 ? String(secs).padStart(2,'0') : secs}`;

  const el = document.getElementById('timer-digits');
  el.textContent = display;
  el.classList.toggle('running', timerRunning);

  const status = document.getElementById('timer-status');
  if (timerRunning) status.textContent = 'Running…';
  else if (timerSeconds === 0) status.textContent = timerCurrentSet < timerTotalSets ? 'Set done — rest!' : 'All sets done!';
  else status.textContent = 'Ready';
}

function updateTimerButtons() {
  const toggleBtn  = document.getElementById('timer-toggle');
  const nextSetBtn = document.getElementById('timer-next-set');
  const finishedBtn= document.getElementById('timer-finished');

  const expired = timerSeconds === 0;

  if (expired && timerCurrentSet < timerTotalSets) {
    // Show next set button
    nextSetBtn.classList.add('visible');
    finishedBtn.style.display = 'none';
    toggleBtn.textContent = 'Start';
    toggleBtn.classList.remove('paused');
    toggleBtn.disabled = true;
    toggleBtn.style.opacity = '0.4';
  } else if (expired && timerCurrentSet >= timerTotalSets) {
    nextSetBtn.classList.remove('visible');
    finishedBtn.style.display = 'flex';
    toggleBtn.disabled = true;
    toggleBtn.style.opacity = '0.4';
  } else {
    nextSetBtn.classList.remove('visible');
    finishedBtn.style.display = 'none';
    toggleBtn.disabled = false;
    toggleBtn.style.opacity = '1';

    if (timerRunning) {
      toggleBtn.textContent = 'Pause';
      toggleBtn.classList.add('paused');
    } else {
      toggleBtn.textContent = timerSeconds < timerDuration ? 'Resume' : 'Start';
      toggleBtn.classList.remove('paused');
    }
  }
}

function tickTimer() {
  if (timerSeconds > 0) {
    timerSeconds--;
    updateTimerDisplay();
    updateTimerButtons();
    if (timerSeconds === 0) {
      clearInterval(timerInterval);
      timerRunning = false;
      vibrate();
    }
  }
}

function vibrate() {
  if ('vibrate' in navigator) {
    navigator.vibrate([100, 50, 100, 50, 200]);
  }
}

// ── Timer Event Setup ────────────────────────────────────────
function setupTimerEvents() {
  // Backdrop close
  document.getElementById('timer-backdrop').addEventListener('click', stopTimer);

  // Toggle start/pause
  document.getElementById('timer-toggle').addEventListener('click', () => {
    if (timerSeconds === 0) return;
    if (timerRunning) {
      clearInterval(timerInterval);
      timerRunning = false;
    } else {
      timerRunning = true;
      timerInterval = setInterval(tickTimer, 1000);
    }
    updateTimerDisplay();
    updateTimerButtons();
  });

  // Reset
  document.getElementById('timer-reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerRunning  = false;
    timerSeconds  = timerDuration;
    updateTimerDisplay();
    updateTimerButtons();
  });

  // Next set
  document.getElementById('timer-next-set').addEventListener('click', () => {
    if (timerCurrentSet < timerTotalSets) {
      timerCurrentSet++;
      timerSeconds = timerDuration;
      timerRunning = false;
      clearInterval(timerInterval);
      renderTimer();
    }
  });

  // Close
  document.getElementById('timer-close').addEventListener('click', stopTimer);

  // Mark done & close
  document.getElementById('timer-finished').addEventListener('click', () => {
    if (timerExercise) {
      const day = DAYS[activeDay];
      if (!isCompleted(day.key, timerExercise.id)) {
        toggleCompleted(day.key, timerExercise.id);
        renderContent();
        updateHeaderProgress();
      }
    }
    stopTimer();
  });
}

// ── PWA Registration ─────────────────────────────────────────
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  render();
  setupTimerEvents();
  registerSW();
});
