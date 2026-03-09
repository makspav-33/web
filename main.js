
localStorage.setItem('systemInfo', navigator.userAgent);

const getSystemInfo = localStorage.getItem('systemInfo');

const footer = document.querySelector('footer');

footer.innerHTML += `
  <section class='card contact'>
    <h2>System info</h2>
    <span>${getSystemInfo}</span>
  </section>
`

async function getComents() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/16/comments');
    const data = await response.json();
    renderComments(data);
  } catch (error) {
    alert('Сталася помилка: ', error);
  }
}

function renderComments(comments) {
  const section = document.createElement('section');
  section.className = 'card';

  const title = document.createElement('h2');
  title.textContent = 'Comments';
  section.appendChild(title);

  const list = document.createElement('ol');

  comments.forEach((comment) => {
    const item = document.createElement('li');
    item.innerHTML = `
      <p><strong>${comment.name}</strong> (${comment.email})</p>
      <p>${comment.body}</p>
    `;
    list.appendChild(item);
  });

  section.appendChild(list);
  footer.appendChild(section);
}
getComents();


window.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    document.getElementById('modal-feedback').style.display = 'block';
  }, 60000);

  document.getElementById('modal-close').onclick = function() {
    document.getElementById('modal-feedback').style.display = 'none';
  };
});


window.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    document.getElementById('modal-feedback').style.display = 'block';
  }, 60000);

  document.getElementById('modal-close').onclick = function() {
    document.getElementById('modal-feedback').style.display = 'none';
  };
});

function getAutoTheme() {
  const hour = new Date().getHours();
  return (hour >= 7 && hour < 21) ? 'light' : 'dark';
}

function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.checked = (theme === 'dark');
}

applyTheme(getAutoTheme());

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
  const theme = themeToggle.checked ? 'dark' : 'light';
  applyTheme(theme);
});

setInterval(() => {
  applyTheme(getAutoTheme());
}, 60000);
