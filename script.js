const switchMode = document.querySelector('button.mode-switch'),
  body = document.querySelector('body'),
  closeBtn = document.querySelector('.btn-close-right'),
  rightSide = document.querySelector('.right-side'),
  expandBtn = document.querySelector('.expand-btn');

switchMode.addEventListener('click', () => {
  body.classList.toggle('dark');
});
closeBtn.addEventListener('click', () => {
  rightSide.classList.remove('show');
  expandBtn.classList.add('show');
});
expandBtn.addEventListener('click', () => {
  rightSide.classList.add('show');
  expandBtn.classList.remove('show');
});
