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

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Close all
      faqItems.forEach(i => i.classList.remove("active"));

      // Open clicked one (if it wasn’t already open)
      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
});