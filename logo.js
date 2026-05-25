/* ═══════════════════════════════════════════
   Unique Green 營運管理系統 — main.css v2
   ═══════════════════════════════════════════ */
:root {
  --sidebar-w: 230px;
  --topbar-h: 58px;

  /* Brand */
  --ug-dark:       #07120a;
  --ug-dark-2:     #0d1f10;
  --ug-green:      #1f8c3b;
  --ug-green-mid:  #27a847;
  --ug-green-light:#e4f5ea;
  --ug-green-pale: #f0faf3;
  --ug-border:     #c8e6d0;
  --ug-text-dark:  #112718;
  --ug-text-mid:   #2a5e38;
  --ug-text-muted: #4e8060;
  --ug-nav-text:   #7ab88a;
  --ug-nav-muted:  #3a6448;

  /* Status */
  --red:   #dc2626; --red-bg:   #fef2f2; --red-bd:   #fecaca;
  --amber: #d97706; --amber-bg: #fffbeb; --amber-bd: #fde68a;
  --green-ok: #16a34a;

  /* Shadow */
  --sh-sm: 0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04);
  --sh-md: 0 4px 12px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.04);
  --sh-lg: 0 8px 24px rgba(0,0,0,.10), 0 4px 8px rgba(0,0,0,.05);

  --font: 'Segoe UI', 'PingFang TC', 'Microsoft JhengHei', sans-serif;
  --radius: 10px;
  --radius-sm: 7px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--font);
  background: var(--ug-green-pale);
  color: var(--ug-text-dark);
  overflow-x: hidden;
}

/* ────────────────────────────────────────────
   SIDEBAR
   ──────────────────────────────────────────── */
.sidebar {
  position: fixed; top: 0; left: 0;
  width: var(--sidebar-w); height: 100vh;
  background: var(--ug-dark);
  display: flex; flex-direction: column;
  z-index: 100;
  transition: transform .3s cubic-bezier(.4,0,.2,1);
  border-right: 1px solid #0f2716;
}
.sidebar-logo {
  padding: 22px 20px 16px;
  border-bottom: 1px solid #0f2716;
  display: flex; align-items: center; gap: 10px;
}
.sidebar-logo img { height: 32px; display: block; }
.sidebar-logo .brand-text { display: flex; flex-direction: column; }
.sidebar-logo .brand-name { font-size: 13px; font-weight: 700; color: #c8e6cc; letter-spacing: .04em; }
.sidebar-logo .tagline { font-size: 10px; color: var(--ug-nav-muted); letter-spacing: .10em; margin-top: 2px; }
.sidebar-nav { flex: 1; padding: 10px 0; overflow-y: auto; }
.nav-group-label {
  font-size: 10px; font-weight: 600;
  color: var(--ug-nav-muted); letter-spacing: .12em;
  padding: 14px 18px 5px; text-transform: uppercase;
}
.nav-item {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 18px; font-size: 13px; color: var(--ug-nav-text);
  cursor: pointer; transition: background .15s;
  border-left: 2px solid transparent;
  text-decoration: none;
}
.nav-item:hover { background: #112418; color: #b0d8b4; }
.nav-item.active { background: #163020; color: #cce8d0; border-left-color: var(--ug-green-mid); }
.nav-item i { font-size: 14px; width: 16px; text-align: center; flex-shrink: 0; }
.nav-badge {
  background: #dc2626; color: #fff; font-size: 10px;
  padding: 1px 6px; border-radius: 99px; margin-left: auto;
}
.sidebar-footer {
  padding: 14px 18px; border-top: 1px solid #0f2716;
}
.avatar-row { display: flex; align-items: center; gap: 10px; }
.avatar {
  width: 32px; height: 32px; border-radius: 50%;
  background: linear-gradient(135deg,var(--ug-green),#16a34a);
  color: #d4f0da; display: flex; align-items: center;
  justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0;
}
.avatar-name { font-size: 12px; color: var(--ug-nav-text); font-weight: 600; }
.avatar-role { font-size: 11px; color: var(--ug-nav-muted); margin-top: 2px; }

/* ────────────────────────────────────────────
   MOBILE HEADER
   ──────────────────────────────────────────── */
.mobile-header {
  display: none; position: fixed; top: 0; left: 0; right: 0; height: 52px;
  background: var(--ug-dark); z-index: 200;
  align-items: center; justify-content: space-between;
  padding: 0 16px; border-bottom: 1px solid #0f2716;
}
.mobile-header img { height: 26px; }
.mobile-header .brand-name { font-size: 13px; font-weight: 700; color: #c8e6cc; }
.hamburger { background: none; border: none; cursor: pointer; color: var(--ug-nav-text); font-size: 20px; padding: 6px; }
.sidebar-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.55); z-index: 99; }
.sidebar-overlay.show { display: block; }

/* ────────────────────────────────────────────
   LAYOUT
   ──────────────────────────────────────────── */
.main { margin-left: var(--sidebar-w); min-height: 100vh; display: flex; flex-direction: column; }
.topbar {
  position: sticky; top: 0; z-index: 50;
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  height: var(--topbar-h);
  border-bottom: 1px solid var(--ug-border);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 22px; gap: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,.04);
}
.topbar-left { display: flex; align-items: center; gap: 8px; }
.page-title { font-size: 15px; font-weight: 700; color: var(--ug-text-dark); }
.breadcrumb { font-size: 12px; color: var(--ug-text-muted); }
.topbar-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
.date-pill {
  font-size: 11px; color: var(--ug-text-muted);
  background: var(--ug-green-light); padding: 4px 11px;
  border-radius: 99px; white-space: nowrap; border: 1px solid var(--ug-border);
}
.btn {
  font-size: 12px; padding: 6px 14px; border-radius: var(--radius-sm);
  cursor: pointer; border: 1px solid var(--ug-border);
  background: transparent; color: var(--ug-text-mid);
  white-space: nowrap; transition: all .15s; font-weight: 500;
  display: inline-flex; align-items: center; gap: 5px;
}
.btn:hover { background: var(--ug-green-light); border-color: var(--ug-green); }
.btn.primary {
  background: var(--ug-green); border-color: var(--ug-green); color: #e4f5ea;
  box-shadow: 0 1px 3px rgba(31,140,59,.3);
}
.btn.primary:hover { background: var(--ug-green-mid); border-color: var(--ug-green-mid); }
.btn.danger { background: #fef2f2; border-color: #fecaca; color: #dc2626; }
.btn.danger:hover { background: #fee2e2; }
.content { padding: 20px 22px; flex: 1; }
.section-gap { margin-bottom: 16px; }

/* ────────────────────────────────────────────
   ALERT STRIP
   ──────────────────────────────────────────── */
.alert-strip {
  background: var(--amber-bg); border: 1px solid var(--amber-bd);
  border-radius: var(--radius-sm); padding: 10px 14px;
  font-size: 13px; color: #78350f;
  display: flex; align-items: center; gap: 8px; margin-bottom: 14px;
}
.alert-strip i { color: var(--amber); flex-shrink: 0; }
.alert-strip.danger { background: var(--red-bg); border-color: var(--red-bd); color: #7f1d1d; }
.alert-strip.danger i { color: var(--red); }

/* ────────────────────────────────────────────
   METRIC CARDS
   ──────────────────────────────────────────── */
.metrics-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-bottom: 16px; }
.mc {
  background: #fff;
  border: 1px solid var(--ug-border);
  border-radius: var(--radius);
  padding: 14px 16px;
  box-shadow: var(--sh-sm);
  transition: box-shadow .2s, transform .2s;
  position: relative; overflow: hidden;
}
.mc::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--ug-green), var(--ug-green-mid));
  border-radius: var(--radius) var(--radius) 0 0;
}
.mc:hover { box-shadow: var(--sh-md); transform: translateY(-1px); }
.mc .lb { font-size: 11px; color: var(--ug-text-muted); margin-bottom: 6px; display: flex; align-items: center; gap: 5px; font-weight: 500; }
.mc .vl { font-size: 22px; font-weight: 700; color: var(--ug-text-dark); line-height: 1.1; }
.mc .sb { font-size: 11px; margin-top: 4px; font-weight: 500; }
.up  { color: #16a34a; } .dn { color: #dc2626; } .wn { color: #d97706; }

/* ────────────────────────────────────────────
   CARDS
   ──────────────────────────────────────────── */
.card {
  background: #fff; border: 1px solid var(--ug-border);
  border-radius: var(--radius); padding: 16px;
  box-shadow: var(--sh-sm);
}
.card-hd {
  font-size: 12px; font-weight: 700; color: var(--ug-text-mid);
  margin-bottom: 12px; display: flex; align-items: center; gap: 6px;
  text-transform: uppercase; letter-spacing: .04em;
}

.table-card {
  background: #fff; border: 1px solid var(--ug-border);
  border-radius: var(--radius); padding: 16px; overflow-x: auto;
  box-shadow: var(--sh-sm);
}

/* ────────────────────────────────────────────
   CHART LAYOUT
   ──────────────────────────────────────────── */
.charts-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px; }
.charts-row-wide { display: grid; grid-template-columns: 2fr 1fr; gap: 14px; margin-bottom: 16px; }
.leg { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 10px; font-size: 11px; color: var(--ug-text-muted); }
.li { display: flex; align-items: center; gap: 4px; }
.ls { width: 10px; height: 10px; border-radius: 2px; flex-shrink: 0; }

/* Trend toggle */
.chart-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.toggle-group { display: flex; background: var(--ug-green-light); border-radius: 6px; padding: 2px; gap: 2px; }
.toggle-btn {
  font-size: 11px; padding: 3px 10px; border-radius: 4px; cursor: pointer;
  border: none; background: transparent; color: var(--ug-text-muted); font-weight: 500;
  transition: all .15s;
}
.toggle-btn.active { background: #fff; color: var(--ug-green); box-shadow: var(--sh-sm); }

/* ────────────────────────────────────────────
   TABLE
   ──────────────────────────────────────────── */
table.dt { width: 100%; border-collapse: collapse; font-size: 12px; min-width: 500px; }
.dt th {
  font-size: 11px; font-weight: 600; color: var(--ug-text-muted);
  padding: 8px 10px; border-bottom: 2px solid var(--ug-border);
  text-align: left; white-space: nowrap;
  background: var(--ug-green-pale);
}
.dt th:first-child { border-radius: var(--radius-sm) 0 0 0; }
.dt th:last-child  { border-radius: 0 var(--radius-sm) 0 0; }
.dt td { padding: 9px 10px; border-bottom: 1px solid #edf7f0; color: var(--ug-text-dark); white-space: nowrap; }
.dt tr:last-child td { border-bottom: none; }
.dt tr:hover td { background: var(--ug-green-pale); }
.dt .rank-medal { font-size: 16px; }

/* ────────────────────────────────────────────
   BADGE
   ──────────────────────────────────────────── */
.badge { display: inline-block; font-size: 10px; padding: 2px 8px; border-radius: 99px; font-weight: 600; }
.b-g { background: #d1fae5; color: #065f46; }
.b-r { background: #fee2e2; color: #991b1b; }
.b-y { background: #fef3c7; color: #92400e; }

/* ────────────────────────────────────────────
   PROGRESS BAR
   ──────────────────────────────────────────── */
.bar-w { width: 60px; background: #e4f0e8; border-radius: 3px; height: 6px; display: inline-block; vertical-align: middle; overflow: hidden; }
.bar-f { height: 6px; border-radius: 3px; transition: width .6s ease; }

/* ────────────────────────────────────────────
   ACHIEVEMENT GRID
   ──────────────────────────────────────────── */
.achieve-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 10px; }
.achieve-card {
  background: #fff; border: 1px solid var(--ug-border);
  border-radius: var(--radius); padding: 14px 12px;
  box-shadow: var(--sh-sm); transition: box-shadow .2s, transform .2s;
  display: flex; flex-direction: column; align-items: center; text-align: center;
}
.achieve-card:hover { box-shadow: var(--sh-md); transform: translateY(-1px); }
.achieve-card.ac-red { border-top: 3px solid var(--red); }
.achieve-card.ac-amber { border-top: 3px solid var(--amber); }
.achieve-card.ac-green { border-top: 3px solid var(--green-ok); }

/* Circular gauge */
.gauge-wrap { position: relative; width: 72px; height: 72px; margin: 6px auto 10px; }
.gauge-svg { width: 72px; height: 72px; transform: rotate(-90deg); }
.gauge-bg { fill: none; stroke: #e4f0e8; stroke-width: 8; }
.gauge-fill { fill: none; stroke-width: 8; stroke-linecap: round; transition: stroke-dasharray .8s ease; }
.gauge-pct {
  position: absolute; inset: 0; display: flex; align-items: center;
  justify-content: center; font-size: 13px; font-weight: 700; color: var(--ug-text-dark);
}
.ac-name { font-size: 12px; font-weight: 600; color: var(--ug-text-dark); margin-bottom: 2px; }
.ac-area { font-size: 10px; color: var(--ug-text-muted); }
.ac-rev  { font-size: 13px; font-weight: 600; color: var(--ug-text-dark); margin-top: 4px; }
.ac-vs   { font-size: 11px; margin-top: 2px; font-weight: 500; }

/* ────────────────────────────────────────────
   UPLOAD AREA
   ──────────────────────────────────────────── */
.upload-area {
  border: 2px dashed var(--ug-border); border-radius: var(--radius);
  padding: 36px 24px; text-align: center; cursor: pointer;
  transition: border-color .2s, background .2s;
  background: #fff;
}
.upload-area:hover, .upload-area.drag-over { border-color: var(--ug-green); background: var(--ug-green-light); }
.upload-area i { font-size: 40px; color: var(--ug-green); margin-bottom: 12px; display: block; }
.upload-area .u-title { font-size: 15px; font-weight: 600; color: var(--ug-text-mid); margin-bottom: 4px; }
.upload-area .u-sub { font-size: 12px; color: var(--ug-text-muted); }

/* ────────────────────────────────────────────
   SETTINGS
   ──────────────────────────────────────────── */
.settings-card {
  background: #fff; border: 1px solid var(--ug-border);
  border-radius: var(--radius); padding: 18px 20px; margin-bottom: 14px;
  box-shadow: var(--sh-sm);
}
.settings-card .sh {
  font-size: 14px; font-weight: 700; color: var(--ug-text-dark);
  margin-bottom: 14px; display: flex; align-items: center; gap: 7px;
  padding-bottom: 12px; border-bottom: 1px solid var(--ug-border);
}
.field-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 11px 0; border-bottom: 1px solid #edf7f0; flex-wrap: wrap; gap: 8px;
}
.field-row:last-child { border-bottom: none; padding-bottom: 0; }
.field-label { font-size: 13px; color: var(--ug-text-dark); font-weight: 500; }
.field-sub { font-size: 11px; color: var(--ug-text-muted); margin-top: 2px; }
.pv { font-size: 14px; font-weight: 700; min-width: 36px; text-align: right; }
.pv.rv { color: #991b1b; } .pv.av { color: #92400e; }

/* Toggle switch */
.toggle { position: relative; display: inline-block; width: 38px; height: 22px; }
.toggle input { opacity: 0; width: 0; height: 0; }
.tks { position: absolute; cursor: pointer; inset: 0; background: #cbd5e1; border-radius: 22px; transition: .2s; }
.tks:before { position: absolute; content: ""; height: 16px; width: 16px; left: 3px; bottom: 3px; background: #fff; border-radius: 50%; transition: .2s; box-shadow: 0 1px 3px rgba(0,0,0,.2); }
input:checked + .tks { background: var(--ug-green); }
input:checked + .tks:before { transform: translateX(16px); }

.save-bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px; background: var(--ug-green-light);
  border-radius: var(--radius-sm); margin-top: 6px;
  flex-wrap: wrap; gap: 8px; border: 1px solid var(--ug-border);
}

/* ────────────────────────────────────────────
   STORE CHIPS
   ──────────────────────────────────────────── */
.store-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(152px,1fr)); gap: 8px; margin-bottom: 16px; }
.chip {
  border: 1px solid var(--ug-border); border-radius: var(--radius-sm);
  padding: 10px 12px; cursor: pointer; background: #fff; transition: all .15s;
  box-shadow: var(--sh-sm);
}
.chip:hover { background: var(--ug-green-light); border-color: var(--ug-green); }
.chip.sel { background: #eff6ff; border-color: #93c5fd; box-shadow: 0 0 0 2px rgba(147,197,253,.3); }
.chip.sel .sn { color: #1d4ed8; }
.chip.alr { border-left: 3px solid var(--red); }
.chip.ala { border-left: 3px solid var(--amber); }
.sn { font-size: 13px; font-weight: 600; color: var(--ug-text-dark); }
.sa { font-size: 11px; color: var(--ug-text-muted); margin-top: 2px; }
.sr { font-size: 12px; color: var(--ug-text-dark); margin-top: 5px; font-weight: 500; }
.sd { font-size: 11px; margin-top: 1px; font-weight: 500; }

/* ────────────────────────────────────────────
   TOAST
   ──────────────────────────────────────────── */
.toast {
  position: fixed; bottom: 24px; right: 24px;
  background: var(--ug-dark-2); color: #c8e6cc;
  font-size: 13px; padding: 11px 20px; border-radius: var(--radius-sm);
  z-index: 9999; opacity: 0; transform: translateY(8px);
  transition: opacity .3s, transform .3s; pointer-events: none;
  box-shadow: var(--sh-lg); border: 1px solid #1a3a20;
}
.toast.show { opacity: 1; transform: translateY(0); }

/* ────────────────────────────────────────────
   RESPONSIVE
   ──────────────────────────────────────────── */
@media (max-width: 768px) {
  .sidebar { transform: translateX(-100%); }
  .sidebar.open { transform: translateX(0); }
  .mobile-header { display: flex; }
  .main { margin-left: 0; padding-top: 52px; }
  .topbar { padding: 0 14px; }
  .date-pill { display: none; }
  .btn:not(.primary):not(.keep-mobile) { display: none; }
  .content { padding: 14px 14px; }
  .metrics-grid { grid-template-columns: repeat(2,1fr); gap: 8px; }
  .charts-row, .charts-row-wide { grid-template-columns: 1fr; }
  .mc .vl { font-size: 18px; }
  .achieve-grid { grid-template-columns: repeat(auto-fill, minmax(140px,1fr)); }
}
@media (max-width: 420px) {
  .mc { padding: 10px 12px; }
  .mc .vl { font-size: 16px; }
  .metrics-grid { grid-template-columns: 1fr 1fr; }
}

/* ────────────────────────────────────────────
   RANGE SLIDER
   ──────────────────────────────────────────── */
input[type="range"] {
  -webkit-appearance: none; appearance: none;
  height: 5px; background: var(--ug-border); border-radius: 5px; outline: none;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none;
  width: 18px; height: 18px; border-radius: 50%;
  background: var(--ug-green); cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,.2);
  border: 2px solid #fff;
}
input[type="range"]::-moz-range-thumb {
  width: 18px; height: 18px; border-radius: 50%;
  background: var(--ug-green); cursor: pointer; border: 2px solid #fff;
}

/* ────────────────────────────────────────────
   SECTION DIVIDER
   ──────────────────────────────────────────── */
.section-title {
  font-size: 11px; font-weight: 700; color: var(--ug-text-muted);
  text-transform: uppercase; letter-spacing: .1em;
  margin-bottom: 10px; display: flex; align-items: center; gap: 6px;
}
.section-title::after { content: ''; flex: 1; height: 1px; background: var(--ug-border); }

/* ────────────────────────────────────────────
   MISC UTILS
   ──────────────────────────────────────────── */
.text-muted { color: var(--ug-text-muted); }
.fw6 { font-weight: 600; }
.fw7 { font-weight: 700; }
.gap-12 { margin-bottom: 12px; }
.gap-16 { margin-bottom: 16px; }
