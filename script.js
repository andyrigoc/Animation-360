document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.search-bar');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  }
});
