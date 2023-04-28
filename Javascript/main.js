// XSS => Cross-Site Scripting attacks

const form = document.querySelector('.top-banner form');
const input = document.querySelector('.top-banner input');
const msg = document.querySelector('.top-banner .msg');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const value = input.value;
  msg.innerHTML = value;
});
