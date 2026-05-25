// ── NAV ──
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}
function setActive(el) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  el.classList.add('active');
  closeSidebar();
}
// Auto-highlight current page
document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item[data-page]').forEach(el => {
    if (el.dataset.page === page) el.classList.add('active');
  });
  // Set today's date
  const el = document.getElementById('todayDate');
  if (el) {
    const d = new Date();
    const days = ['日','一','二','三','四','五','六'];
    el.textContent = `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日　週${days[d.getDay()]}`;
  }
});

// ── TOAST ──
function showToast(msg, duration = 2500) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

// ── STORE DATA (shared state) ──
// Stored in localStorage so all pages share it
const STORE_KEY = 'ug_store_data';
const SETTINGS_KEY = 'ug_settings';

function getStores() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : getDefaultStores();
  } catch { return getDefaultStores(); }
}

function saveStores(data) {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

function getSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? JSON.parse(raw) : getDefaultSettings();
  } catch { return getDefaultSettings(); }
}

function saveSettings(s) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
}

function getDefaultSettings() {
  return { redPct: 20, ambPct: 10, baseMode: 'psd', lineNotify: true, emailNotify: false, cooldown: 4 };
}

function getDefaultStores() {
  const DOW = new Date().getDay();
  return [
    { id:1, name:'台北信義店', area:'北部', today:8420, psd:{0:7100,1:7800,2:7650,3:7900,4:8100,5:10200,6:10800} },
    { id:2, name:'台北西門店', area:'北部', today:5100, psd:{0:5200,1:7100,2:6900,3:7000,4:7300,5:9100,6:9600} },
    { id:3, name:'台北士林店', area:'北部', today:6200, psd:{0:5800,1:6400,2:6200,3:6500,4:6600,5:8300,6:8700} },
    { id:4, name:'新竹竹北店', area:'北部', today:5800, psd:{0:4600,1:5100,2:4900,3:5200,4:5300,5:6800,6:7200} },
    { id:5, name:'桃園中壢店', area:'北部', today:4300, psd:{0:4800,1:5800,2:5600,3:5700,4:5900,5:7400,6:7800} },
    { id:6, name:'台中逢甲店', area:'中部', today:7980, psd:{0:6900,1:7500,2:7300,3:7600,4:7700,5:9600,6:10100} },
    { id:7, name:'台中北區店', area:'中部', today:5200, psd:{0:5100,1:5600,2:5400,3:5500,4:5700,5:7100,6:7500} },
    { id:8, name:'高雄三多店', area:'南部', today:7650, psd:{0:6600,1:7200,2:7000,3:7300,4:7400,5:9200,6:9700} },
    { id:9, name:'高雄鳳山店', area:'南部', today:4500, psd:{0:4700,1:5200,2:5000,3:5100,4:5300,5:6600,6:6900} },
    { id:10, name:'台南成大店', area:'南部', today:6600, psd:{0:5800,1:6300,2:6100,3:6400,4:6500,5:8100,6:8500} },
  ];
}

// ── ALERT LOGIC ──
function getTodayDOW() { return new Date().getDay(); }
function getBase(s) { return s.psd[getTodayDOW()]; }
function pctDiff(a, b) { return Math.round((a - b) / b * 100); }
function getAlert(s, cfg) {
  const p = pctDiff(s.today, getBase(s));
  if (p <= -cfg.redPct) return 'red';
  if (p <= -cfg.ambPct) return 'amber';
  return null;
}
