
  // Scroll reveal
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Nav shadow on scroll
  const nav = document.getElementById('nav');
  addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 10), { passive: true });

  // Festive offer countdown — ends 8 Nov 2026, 11:59 PM IST
  const end = new Date('2026-11-08T23:59:59+05:30').getTime();
  function tick() {
    let d = end - Date.now();
    if (d < 0) d = 0;
    const days = Math.floor(d / 86400000);
    const hrs = Math.floor(d % 86400000 / 3600000);
    const min = Math.floor(d % 3600000 / 60000);
    const sec = Math.floor(d % 60000 / 1000);
    document.getElementById('cd-d').textContent = days;
    document.getElementById('cd-h').textContent = String(hrs).padStart(2, '0');
    document.getElementById('cd-m').textContent = String(min).padStart(2, '0');
    document.getElementById('cd-s').textContent = String(sec).padStart(2, '0');
  }
  if (document.getElementById('cd-d')) { tick(); setInterval(tick, 1000); }


  // v5: English / Telugu toggle
  const TE = {
    "Benefits": "ప్రయోజనాలు",
    "Surya Namaskar": "సూర్య నమస్కారం",
    "Classes": "తరగతులు",
    "Timings": "సమయాలు",
    "Contact": "సంప్రదించండి",
    "Register": "నమోదు",
    "Yoga for a Better You": "మెరుగైన మీ కోసం యోగా",
    "Register Now": "ఇప్పుడే నమోదు చేసుకోండి",
    "WhatsApp Us": "WhatsApp చేయండి",
    "Shri Yoga, Guntur — live online and in-studio classes for every level, in calm morning and evening batches. Begin your practice today.": "శ్రీ యోగా, గుంటూరు — ప్రతి స్థాయికి ప్రత్యక్ష ఆన్‌లైన్ మరియు స్టూడియో తరగతులు, ప్రశాంతమైన ఉదయం మరియు సాయంత్రం బ్యాచ్‌లలో. ఈరోజే మీ సాధన ప్రారంభించండి.",
    "Festive offer": "పండుగ ఆఫర్",
    "till 8th Nov": "నవంబర్ 8 వరకు",
    "Why practice with us": "మాతో ఎందుకు సాధన చేయాలి",
    "Yoga that meets you where you are — gentle, guided, and regular.": "మీరు ఎక్కడున్నా అక్కడే కలిసే యోగా — సున్నితమైన, మార్గదర్శక, క్రమమైన.",
    "Reduce Stress": "ఒత్తిడిని తగ్గించండి",
    "Improve Health": "ఆరోగ్యాన్ని మెరుగుపరచండి",
    "Increase Flexibility": "వశ్యతను పెంచండి",
    "Enhance Focus": "ఏకాగ్రతను పెంచండి",
    "The Sun Salutation — a flowing sequence that wakes up the whole body, breath by breath.": "సూర్య నమస్కారం — శ్వాసతో శరీరాన్ని మేల్కొలిపే ప్రవాహ క్రమం.",
    "Illustrative artwork of the Sun Salutation flow.": "సూర్య నమస్కార ప్రవాహానికి చెందిన చిత్రణ కళ.",
    "Explore the steps": "అడుగులను అన్వేషించండి",
    "Tap a step to see its name and breath.": "దాని పేరు మరియు శ్వాసను చూడటానికి ఒక అడుగును నొక్కండి.",
    "Take a breath": "ఒక శ్వాస తీసుకోండి",
    "Box breathing · 4 seconds in, 4 hold, 4 out. One minute of calm, right here.": "బాక్స్ బ్రీతింగ్ · 4 సెకన్లు లోపలికి, 4 నిలిపి, 4 బయటకు. ఇక్కడే ఒక నిమిషం ప్రశాంతత.",
    "Breathe with the circle. Tap the button to pause anytime.": "వృత్తంతో శ్వాస తీసుకోండి. ఎప్పుడైనా ఆపడానికి బటన్‌ను నొక్కండి.",
    "Festive Season Discount": "పండుగ సీజన్ డిస్కౌంట్",
    "Offer valid only till 8th November — reserve your slot before it ends.": "ఆఫర్ నవంబర్ 8 వరకు మాత్రమే — ముగిసేలోపు మీ స్థానాన్ని రిజర్వ్ చేసుకోండి.",
    "Days": "రోజులు",
    "Hours": "గంటలు",
    "Minutes": "నిమిషాలు",
    "Seconds": "సెకన్లు",
    "Classes & pricing": "తరగతులు & ధరలు",
    "Two ways to practice — pick what suits your day.": "సాధన చేయడానికి రెండు మార్గాలు — మీ రోజుకు సరిపోయేదాన్ని ఎంచుకోండి.",
    "Online Yoga Classes": "ఆన్‌లైన్ యోగా తరగతులు",
    "Live classes from your home, on any device.": "మీ ఇంటి నుండే ప్రత్యక్ష తరగతులు, ఏ పరికరంలోనైనా.",
    "45-minute live sessions": "45 నిమిషాల ప్రత్యక్ష సెషన్‌లు",
    "Morning & evening batches": "ఉదయం & సాయంత్రం బ్యాచ్‌లు",
    "All levels welcome": "అన్ని స్థాయిల వారికి స్వాగతం",
    "Register for Online": "ఆన్‌లైన్ కోసం నమోదు",
    "Offline Yoga Classes": "ఆఫ్‌లైన్ యోగా తరగతులు",
    "In-studio practice at our Guntur centre.": "గుంటూరు కేంద్రంలో స్టూడియో సాధన.",
    "45-minute guided sessions": "45 నిమిషాల మార్గదర్శక సెషన్‌లు",
    "Personal attention in small batches": "చిన్న బ్యాచ్‌లలో వ్యక్తిగత శ్రద్ధ",
    "Register for Offline": "ఆఫ్‌లైన్ కోసం నమోదు",
    "MOST POPULAR": "అత్యంత ప్రజాదరణ",
    "Class timings": "తరగతి సమయాలు",
    "Two batches a day — start your morning with yoga, or unwind in the evening.": "రోజుకు రెండు బ్యాచ్‌లు — ఉదయం యోగాతో ప్రారంభించండి, లేదా సాయంత్రం విశ్రాంతి తీసుకోండి.",
    "Morning Batch": "ఉదయం బ్యాచ్",
    "Evening Batch": "సాయంత్రం బ్యాచ్",
    "Visit or reach us": "మమ్మల్ని సందర్శించండి లేదా సంప్రదించండి",
    "📍 Location": "📍 స్థానం",
    "📞 Enquiries & Registration": "📞 విచారణలు & నమోదు",
    "Call Now": "ఇప్పుడే కాల్ చేయండి",
    "WhatsApp": "వాట్సాప్",
    "📍 Get Directions": "📍 మార్గం చూడండి",
    "Fill Registration Form": "నమోదు ఫారం నింపండి",
    "⭐ Review us on Google": "⭐ Googleలో మమ్మల్ని రివ్యూ చేయండి",
    "Yoga for a Better You · Guntur": "మెరుగైన మీ కోసం యోగా · గుంటూరు",
    "© 2026 Shri Yoga. It's never too late to begin.": "© 2026 శ్రీ యోగా. ప్రారంభించడానికి ఎప్పుడూ ఆలస్యం కాదు.",
    "📞 Call": "📞 కాల్",
    "💬 WhatsApp": "💬 వాట్సాప్",
    "How it works": "ఇది ఎలా పనిచేస్తుంది",
    "Breathe in slowly through the nose for 4 counts.": "ముక్కుతో మెల్లగా 4 లెక్కల పాటు శ్వాస లోపలికి తీసుకోండి.",
    "Hold gently for 4 counts, without strain.": "ఒత్తిడి లేకుండా 4 లెక్కల పాటు మెల్లగా నిలిపి ఉంచండి.",
    "Breathe out slowly through the mouth for 4 counts.": "నోటితో మెల్లగా 4 లెక్కల పాటు శ్వాస బయటకు వదలండి.",
    "← Back to Home": "← హోమ్‌కు తిరిగి వెళ్ళండి",
    "Follow the flow, one breath at a time.": "ఒక్కో శ్వాసతో ప్రవాహాన్ని అనుసరించండి.",
    "Explore Surya Namaskar →": "సూర్య నమస్కార్‌ను అన్వేషించండి →",
    "Gallery": "గ్యాలరీ",
    "Online Classes": "ఆన్‌లైన్ తరగతులు",
    "Offline Classes": "ఆఫ్‌లైన్ తరగతులు",
    "From our classes": "మా తరగతుల నుండి",
    "A glimpse of our online and offline sessions.": "మా ఆన్‌లైన్ మరియు ఆఫ్‌లైన్ సెషన్ల యొక్క చిన్న పరిచయం.",
    "View full gallery →": "పూర్తి గ్యాలరీ చూడండి →",
    "Moments from our online and offline sessions.": "మా ఆన్‌లైన్ మరియు ఆఫ్‌లైన్ సెషన్ల నుండి క్షణాలు."
  };
  const TE_HTML = {
    ".hero h1": "<em>ప్రారంభించడానికి</em> ఎప్పుడూ ఆలస్యం కాదు.",
    ".hero-note": "<b>కొన్ని స్థానాలు మాత్రమే</b> · పండుగ డిస్కౌంట్ నవంబర్ 8న ముగుస్తుంది",
    ".offer-prices": "ఆన్‌లైన్ <s>₹1500</s> <b>₹1000</b> &nbsp;·&nbsp; ఆఫ్‌లైన్ <s>₹2000</s> <b>₹1500</b>",
    ".slots": '<span class="pulse"></span>కొన్ని స్థానాలు మాత్రమే అందుబాటులో ఉన్నాయి — త్వరలో నమోదు చేసుకోండి.'
  };
  let lang = "en";
  function applyLang(next) {
    lang = next;
    document.querySelectorAll("h1,h2,h3,p,span,a,li,button,div").forEach(el => {
      if (el.children.length !== 0) return;
      if (el.dataset.en === undefined) el.dataset.en = el.textContent;
      const key = el.dataset.en.trim();
      if (lang === "te" && TE[key]) el.textContent = TE[key];
      else if (lang === "en") el.textContent = el.dataset.en;
    });
    Object.keys(TE_HTML).forEach(sel => {
      const el = document.querySelector(sel);
      if (!el) return;
      if (el.dataset.enHtml === undefined) el.dataset.enHtml = el.innerHTML;
      el.innerHTML = lang === "te" ? TE_HTML[sel] : el.dataset.enHtml;
    });
    document.getElementById("langToggle").textContent = lang === "te" ? "English" : "తెలుగు";
    document.documentElement.lang = lang;
    renderDynamic();
  }
  // v5: greeting + day theme (IST)
  const GREET = {
    morning: {en: "Good morning · Namaste", te: "శుభోదయం · నమస్తే"},
    afternoon: {en: "Good afternoon · Namaste", te: "శుభ మధ్యాహ్నం · నమస్తే"},
    evening: {en: "Good evening · Namaste", te: "శుభ సాయంత్రం · నమస్తే"},
    night: {en: "Good night · Namaste", te: "శుభ రాత్రి · నమస్తే"}
  };
  function istHourMin() {
    const parts = new Intl.DateTimeFormat("en-GB", {timeZone: "Asia/Kolkata", hour: "numeric", minute: "numeric", hour12: false}).formatToParts(new Date());
    let h = 0, m = 0;
    parts.forEach(p => { if (p.type === "hour") h = parseInt(p.value, 10) % 24; if (p.type === "minute") m = parseInt(p.value, 10); });
    return {h: h, m: m};
  }
  function dayPeriod() {
    const h = istHourMin().h;
    if (h >= 5 && h < 12) return "morning";
    if (h >= 12 && h < 17) return "afternoon";
    if (h >= 17 && h < 20) return "evening";
    return "night";
  }
  function renderGreet() {
    const p = dayPeriod();
    document.body.classList.toggle("dusk", p === "evening");
    document.body.classList.toggle("night", p === "night");
    const el = document.getElementById("dayGreet");
    if (el) el.textContent = GREET[p][lang];
  }
  // v5: next batch indicator (batches 6:00 AM & 7:00 PM IST)
  function fmtDur(mins) {
    if (mins >= 60) return Math.floor(mins / 60) + "h " + (mins % 60) + "m";
    return mins + "m";
  }
  function fmtDurTe(mins) {
    if (mins >= 60) return Math.floor(mins / 60) + "గం " + (mins % 60) + "ని";
    return mins + "ని";
  }
  function renderNextBatch() {
    const now = istHourMin();
    const m = now.h * 60 + now.m;
    const slots = [
      {name: {en: "Morning", te: "ఉదయం"}, start: 360, end: 405},
      {name: {en: "Evening", te: "సాయంత్రం"}, start: 1140, end: 1185}
    ];
    let text = "";
    const on = slots.find(s => m >= s.start && m < s.end);
    if (on) {
      const left = on.end - m;
      text = lang === "te"
        ? on.name.te + " బ్యాచ్ ఇప్పుడు జరుగుతోంది · " + left + "ని లో ముగుస్తుంది"
        : on.name.en + " batch is on now · ends in " + fmtDur(left);
    } else {
      const next = slots.find(s => m < s.start);
      if (next) {
        const left = next.start - m;
        text = lang === "te"
          ? "తదుపరి బ్యాచ్: " + next.name.te + " · " + fmtDurTe(left) + " లో ప్రారంభం"
          : "Next batch: " + next.name.en + " · starts in " + fmtDur(left);
      } else {
        const left = (24 * 60 - m) + 360;
        text = lang === "te"
          ? "తదుపరి బ్యాచ్: ఉదయం · " + fmtDurTe(left) + " లో ప్రారంభం"
          : "Next batch: Morning · starts in " + fmtDur(left);
      }
    }
    const el = document.getElementById("nextBatch");
    if (el) el.innerHTML = "<span>" + text + "</span>";
  }
  // v5: breathe widget (box breathing 4-4-4)
  const BREATHE = [
    {label: {en: "Breathe in", te: "శ్వాస లోపలికి"}, s: 4, scale: 1.35},
    {label: {en: "Hold", te: "ఆపండి"}, s: 4, scale: 1.35},
    {label: {en: "Breathe out", te: "శ్వాస బయటకు"}, s: 4, scale: 1}
  ];
  let breatheOn = false, breatheStep = 0, breatheTimer = null;
  function breatheTick() {
    if (!breatheOn) return;
    const ph = BREATHE[breatheStep % 3];
    const circle = document.getElementById("breatheCircle");
    const phase = document.getElementById("breathePhase");
    circle.style.transitionDuration = ph.s + "s";
    circle.style.transform = "scale(" + ph.scale + ")";
    phase.textContent = ph.label[lang];
    breatheStep++;
    breatheTimer = setTimeout(breatheTick, ph.s * 1000);
  }
  function renderBreatheBtn() {
    const btn = document.getElementById("breatheBtn");
    const phase = document.getElementById("breathePhase");
    if (!btn) return;
    btn.textContent = breatheOn
      ? (lang === "te" ? "ఆపండి" : "Pause")
      : (lang === "te" ? "శ్వాస ప్రారంభించండి" : "Start breathing");
    if (!breatheOn) phase.textContent = lang === "te" ? "సిద్ధమా?" : "Ready?";
  }
  if (document.getElementById("breatheBtn")) document.getElementById("breatheBtn").addEventListener("click", () => {
    breatheOn = !breatheOn;
    if (breatheOn) { breatheStep = 0; breatheTick(); }
    else { clearTimeout(breatheTimer); document.getElementById("breatheCircle").style.transform = "scale(1)"; }
    renderBreatheBtn();
  });
  // v5: Surya explorer
  const STEPS = [
    {n: "Pranamasana", b: {en: "Exhale", te: "శ్వాస బయటకు"}, c: {en: "Stand tall, palms together at the heart.", te: "నిటారుగా నిలబడి, గుండె వద్ద చేతులు జోడించండి."}},
    {n: "Hasta Uttanasana", b: {en: "Inhale", te: "శ్వాస లోపలికి"}, c: {en: "Sweep the arms up and gently arch back.", te: "చేతులను పైకి చాపి, మెల్లగా వెనక్కి వంగండి."}},
    {n: "Padahastasana", b: {en: "Exhale", te: "శ్వాస బయటకు"}, c: {en: "Fold forward, hands toward the floor.", te: "ముందుకు వంగి, చేతులను నేల వైపు చాపండి."}},
    {n: "Ashwa Sanchalanasana", b: {en: "Inhale", te: "శ్వాస లోపలికి"}, c: {en: "Step one leg back, chest open, gaze forward.", te: "ఒక కాలు వెనక్కి వేసి, ఛాతీ తెరిచి, ముందుకు చూడండి."}},
    {n: "Dandasana", b: {en: "Hold steady", te: "నిలకడగా ఉంచండి"}, c: {en: "Step back to a strong straight plank.", te: "బలమైన నిటారుగా ఉన్న ప్లాంక్‌లోకి వెనక్కి అడుగు వేయండి."}},
    {n: "Ashtanga Namaskara", b: {en: "Exhale", te: "శ్వాస బయటకు"}, c: {en: "Knees, chest and chin to the floor.", te: "మోకాళ్లు, ఛాతీ మరియు గడ్డం నేలకు తాకండి."}},
    {n: "Bhujangasana", b: {en: "Inhale", te: "శ్వాస లోపలికి"}, c: {en: "Slide forward, lift the chest.", te: "ముందుకు జారి, ఛాతీని పైకి లేపండి."}},
    {n: "Adho Mukha Svanasana", b: {en: "Exhale", te: "శ్వాస బయటకు"}, c: {en: "Lift the hips into an inverted V.", te: "తుంటిని పైకి లేపి విలోమ V ఆకారం చేయండి."}},
    {n: "Ashwa Sanchalanasana", b: {en: "Inhale", te: "శ్వాస లోపలికి"}, c: {en: "Step forward, chest open.", te: "ముందుకు అడుగు వేసి, ఛాతీ తెరవండి."}},
    {n: "Padahastasana", b: {en: "Exhale", te: "శ్వాస బయటకు"}, c: {en: "Fold forward again.", te: "మళ్లీ ముందుకు వంగండి."}},
    {n: "Hasta Uttanasana", b: {en: "Inhale", te: "శ్వాస లోపలికి"}, c: {en: "Rise and arch back.", te: "పైకి లేచి వెనక్కి వంగండి."}},
    {n: "Pranamasana", b: {en: "Exhale", te: "శ్వాస బయటకు"}, c: {en: "Return to standing, palms at the heart.", te: "నిలబడి, గుండె వద్ద చేతులు జోడించండి."}}
  ];
  let expStep = 0;
  function renderExp() {
    if (!document.getElementById("expName")) return;
    const s = STEPS[expStep];
    document.getElementById("expName").textContent = (expStep + 1) + " · " + s.n;
    document.getElementById("expBreath").textContent = s.b[lang];
    document.getElementById("expCue").textContent = s.c[lang];
    document.querySelectorAll("#suryaChips .chip").forEach((ch, i) => ch.classList.toggle("active", i === expStep));
  }
  (function buildChips() {
    const wrap = document.getElementById("suryaChips");
    if (!wrap) return;
    STEPS.forEach((s, i) => {
      const b = document.createElement("button");
      b.className = "chip";
      b.type = "button";
      b.textContent = (i + 1) + " " + s.n;
      b.addEventListener("click", () => { expStep = i; renderExp(); });
      wrap.appendChild(b);
    });
    renderExp();
  })();
  // v5: blooming lotus on scroll
  const lotus = document.getElementById("lotusSvg");
  function lotusBloom() {
    if (!lotus) return;
    const r = lotus.getBoundingClientRect();
    const p = Math.max(0.15, Math.min(1, (window.innerHeight - r.top) / (window.innerHeight * 0.9)));
    lotus.style.setProperty("--bloom", p.toFixed(2));
  }
  let lotusTicking = false;
  window.addEventListener("scroll", () => {
    if (lotusTicking) return;
    lotusTicking = true;
    requestAnimationFrame(() => { lotusBloom(); lotusTicking = false; });
  }, {passive: true});
  lotusBloom();
  // v5: wiring + live updates
  function renderDynamic() {
    renderGreet();
    renderNextBatch();
    renderExp();
    renderBreatheBtn();
  }
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.querySelector(".nav-links");
  if (menuBtn && navLinks) menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
  document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks && navLinks.classList.remove("open")));
  document.getElementById("langToggle").addEventListener("click", () => applyLang(lang === "en" ? "te" : "en"));
  renderGreet();
  renderNextBatch();
  setInterval(renderNextBatch, 30000);
