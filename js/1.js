function toggle() { 
    document.body.classList.toggle('dark'); 
    localStorage.theme = document.body.classList.contains('dark') ? 'dark' : 'light'; 
  }
  if (localStorage.theme === 'dark') document.body.classList.add('dark');