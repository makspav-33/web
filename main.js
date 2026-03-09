const info = {
  os: "Ubuntu 24",
  browser: "Chrome",
};

localStorage.setItem("info", JSON.stringify(info));

const getInfo = JSON.parse(localStorage.getItem("info"));

console.log(getInfo);

const contactList = document.querySelector(".contact-list");

contactList.innerHTML += `
     <p>
         OS:
         <span>${getInfo.os}</span>
      </p>
      <p>
         Browser:
         <span>${getInfo.browser}</span>
      </p>
`;
