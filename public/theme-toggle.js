window.onload = function() {
  const themeButton = document.createElement('button');
  themeButton.innerHTML = 'Theme';
  themeButton.style.position = 'absolute';
  themeButton.style.top = '10px';
  themeButton.style.right = '10px';

  document.body.appendChild(themeButton);

  themeButton.onclick = function() {
    const isDarkMode = document.body.classList.contains('dark');
    if (isDarkMode) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Apply the stored theme on page load
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark');
  }
};
