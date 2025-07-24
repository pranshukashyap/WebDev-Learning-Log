const contactForm  = document.getElementById("contact-form");   // matches <form id="contact-form">
const contactsList = document.getElementById("contacts-list");  // matches <div id="contacts-list">

let contacts = [];   


async function saveContact(name, email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const contact = { name, email };
      contacts.push(contact);
      resolve(contact);
    }, 500);                      
  });
}


function displayContacts() {
  contactsList.innerHTML = "";

  if (contacts.length === 0) {
    contactsList.innerHTML = "<p>No contacts added yet.</p>";
    return;
  }

  contacts.forEach((contact, index) => {
    const card = document.createElement("div");
    card.className = "contact-card";
    card.innerHTML = `
      <h3>${contact.name}</h3>
      <p>${contact.email}</p>
      <button class="delete-btn" onclick="confirmDelete(${index})">Delete</button>
    `;
    contactsList.appendChild(card);
  });
}


function confirmDelete(index) {
  const confirmed = confirm("Are you sure you want to delete this contact?");
  if (confirmed) {
    contacts.splice(index, 1);
    displayContacts();
  }
}



contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name  = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Please fill in both fields.");
    return;
  }

  await saveContact(name, email);  
  displayContacts();               
  contactForm.reset();             
});

/* ---------- Initial render ---------- */
displayContacts();