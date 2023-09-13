const form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário

   
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

  
    const alertMessage = `Nome: ${firstName}\nSobrenome: ${lastName}\nE-mail: ${email}\nMensagem: ${message}`;
    alert("Dados do formulário:\n" + alertMessage);

   
    alert("O formulário foi enviado com sucesso! breve entraremos em contato");


    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});