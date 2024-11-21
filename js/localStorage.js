
if (!localStorage.getItem('emails')) {
  localStorage.setItem('emails', JSON.stringify([])); 
}

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.querySelector('input[type="email"]');
  const email = emailInput.value.trim();
  
  
  if (email === "") {
    alert("Por favor, digite um email válido.");
    return;
  }

  
  const emails = JSON.parse(localStorage.getItem('emails'));

  
  if (emails.includes(email)) {
    alert("Este email já está cadastrado.");
  } else {
    
    emails.push(email);
    localStorage.setItem('emails', JSON.stringify(emails));


    alert("Email cadastrado com sucesso!");
  }

 
  emailInput.value = '';
});
