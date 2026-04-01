async function loadComponent(selector, file) {
  const el = document.querySelector(selector);
  if (!el) return;
  const res = await fetch(file);
  el.innerHTML = await res.text();
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('#navbar-placeholder', '/navbar.html');
  loadComponent('#footer-placeholder', '/footer.html');
});