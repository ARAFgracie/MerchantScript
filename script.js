
// MerchantScript — Main JavaScript

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#mainNav');
const bagCount = document.querySelector('#bagCount');
const toast = document.querySelector('#toast');

let bagItems = 0;
let toastTimer;

// Mobile Navigation
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');

  menuToggle.setAttribute(
    'aria-expanded',
    String(isOpen)
  );
});

// Close menu after clicking a navigation link
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Add products to bag preview
document.querySelectorAll('.quick-add').forEach(button => {
  button.addEventListener('click', () => {

    bagItems++;

    bagCount.textContent = bagItems;

    const productName = button.dataset.product;

    showToast(
      `${productName} added to your bag preview`
    );
  });
});

// Notification system
function showToast(message) {

  toast.textContent = message;

  toast.classList.add('show');

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// Dynamic copyright year
document.querySelector('#year').textContent =
  new Date().getFullYear();
