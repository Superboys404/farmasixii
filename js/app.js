const AV = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#cfeaf5"/><circle cx="50" cy="38" r="18" fill="#7fb9d3"/><path d="M14 100c2-26 20-36 36-36s34 10 36 36z" fill="#7fb9d3"/></svg>');
const GP = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100"><rect width="160" height="100" fill="#cfeaf5"/><circle cx="55" cy="40" r="10" fill="#7fb9d3"/><path d="M0 100l50-34 30 20 30-24 50 38z" fill="#7fb9d3"/></svg>');
const e = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const img = (src, alt, fb = AV, cls = "") =>
  `<img class="${cls}" src="${e(src)}" alt="${e(alt)}" loading="lazy" onerror="this.onerror=null;this.src='${fb}'">`;
const person = (p, sub) => `<div class="mem">${img(p.foto, p.nama)}<b>${e(p.nama)}</b>${sub ? `<small>${e(sub)}</small>` : ""}</div>`;
const W = SITE.waliKelas;

document.title = SITE.judul;
document.getElementById("brand").textContent = SITE.brand;
document.getElementById("app").innerHTML = `
<section id="home">${img(SITE.logo, "Logo kelas", AV, "logo")}<h1>${e(SITE.judul)}</h1><p class="sub">${e(SITE.sambutan)}</p><a class="cta" href="#pengurus">Kenali kami</a></section>
<section id="pengurus"><h2>Pengurus Kelas</h2>
  <div class="mem wali">${img(W.foto, W.nama)}<b>${e(W.nama)}</b><small>${e(W.jabatan)}</small></div>
  <div class="grid">${SITE.pengurus.map(p => person(p, p.jabatan)).join("")}</div></section>
<section id="anggota"><h2>Anggota Kelas</h2>
  <div class="grid">${SITE.anggota.map(p => person(p)).join("")}</div></section>
<section id="jadwal"><h2>Jadwal Pelajaran</h2>
  <div class="days">${Object.entries(SITE.jadwal).map(([d, l]) => `<div class="day"><h3>${e(d)}</h3><div>${l.map(e).join("\n")}</div></div>`).join("")}</div></section>
<section id="galeri"><h2>Galeri Kegiatan</h2>
  <div class="gal">${SITE.galeri.map(g => `<div class="card">${img(g.foto, g.judul, GP)}<b>${e(g.judul)}</b><small>${e(g.tanggal)}</small></div>`).join("")}</div></section>
<section id="motto"><h2>Motto Kelas</h2><div class="motto">${SITE.motto.map(e).join("\n")}</div></section>
<footer><h2>Sosok di Balik Layar</h2>
  <div class="crew"><span class="pill">Web Developer &amp; Wakil Ketua Kelas</span><br><span class="lead">${e(SITE.pembuat)}</span></div>
  <div class="crew"><span class="pill">Creative &amp; Content Support</span><div class="t">${SITE.tim.map(e).join("\n")}</div></div>
  <div class="copy">${e(SITE.hakCipta)}</div></footer>`;
