document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var endereco = document.getElementById('endereco').value;
    var telefone = document.getElementById('telefone').value;
    var cpf = document.getElementById('cpf').value;

    if (nome.trim() === '') {
        alert('Por favor, insira o nome.');
        document.getElementById('nome').classList.add('invalid');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor, insira um email válido.');
        document.getElementById('email').classList.add('invalid');
        return;
    }

    if (endereco.trim() === '') {
        alert('Por favor, insira o endereço.');
        document.getElementById('endereco').classList.add('invalid');
        return;
    }

    if (!/^\d+$/.test(telefone)) {
        alert('Por favor, insira um número de telefone válido.');
        document.getElementById('telefone').classList.add('invalid');
        return;
    }

    if (!/^\d+$/.test(cpf)) {
        alert('Por favor, insira um CPF válido.');
        document.getElementById('cpf').classList.add('invalid');
        return;
    }

    alert('Cliente cadastrado com sucesso!');
});
