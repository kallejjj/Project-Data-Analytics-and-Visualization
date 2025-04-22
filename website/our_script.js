document.addEventListener('DOMContentLoaded', () => {
const headers = document.querySelectorAll('.sidebar h3');
const sections = document.querySelectorAll('.content-section');

headers.forEach(header => {
  header.addEventListener('click', () => {
    headers.forEach(h => h.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    header.classList.add('active');
    const target = header.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});
});
