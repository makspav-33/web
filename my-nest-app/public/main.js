localStorage.setItem("systemInfo", navigator.userAgent);

const getSystemInfo = localStorage.getItem("systemInfo");

const footer = document.querySelector("footer");

footer.innerHTML += `
  <section class='card contact'>
    <h2>System info</h2>
    <span>${getSystemInfo}</span>
  </section>
`;

async function getComents() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/16/comments",
    );
    const data = await response.json();
    renderComments(data);
  } catch (error) {
    alert("Сталася помилка: ", error);
  }
}

function renderComments(comments) {
  const section = document.createElement("section");
  section.className = "card";

  const title = document.createElement("h2");
  title.textContent = "Comments";
  section.appendChild(title);

  const list = document.createElement("ol");

  list.innerHTML = comments
    .map(
      (comment) => `
      <li>
        <p><strong>${comment.name}</strong> (${comment.email})</p>
        <p>${comment.body}</p>
      </li>
    `,
    )
    .join("");

  section.appendChild(list);
  footer.appendChild(section);
}
getComents();

function showModal() {
  setTimeout(() => {
    document.getElementById("modal-feedback").style.display = "block";
  }, 10000);

  document.getElementById("modal-close").onclick = function () {
    document.getElementById("modal-feedback").style.display = "none";
  };
}

const form = document.getElementById('feedback-form'); // Додай id="contactForm" у свій тег <form>

if (form) {
  form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Зупиняємо стандартне перезавантаження сторінки

    // Збираємо дані з форми
    const formData = new FormData(form);
    
    // Перетворюємо їх у звичайний об'єкт JavaScript
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      // Відправляємо POST-запит на наш власний сервер NestJS
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Кажемо серверу, що відправляємо JSON
        },
        body: JSON.stringify(data) // Перетворюємо об'єкт у рядок JSON
      });

      if (response.ok) {
        alert('Повідомлення успішно відправлено!');
        form.reset(); // Очищаємо форму
      } else {
        // Якщо NestJS повернув помилку валідації (наприклад, коротке повідомлення)
        const errorData = await response.json();
        console.error('Помилки валідації:', errorData.message);
        alert('Помилка валідації. Перевірте консоль для деталей.');
      }
    } catch (error) {
      console.error('Помилка відправки:', error);
      alert('Сталася помилка при відправці.');
    }
  });
}

showModal();

function getAutoTheme() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 21 ? "light" : "dark";
}

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.checked = theme === "dark";
}

applyTheme(getAutoTheme());

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("change", () => {
  const theme = themeToggle.checked ? "dark" : "light";
  applyTheme(theme);
});

setInterval(() => {
  applyTheme(getAutoTheme());
}, 60000);
