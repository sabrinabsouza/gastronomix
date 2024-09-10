// tag <link> para adicionar o Font Awesome
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';

// tag <link> ao <head> do documento
document.head.appendChild(link);

//ícone Font Awesome ao elemento com id "icon"
const iconElement = document.getElementById('icon');

