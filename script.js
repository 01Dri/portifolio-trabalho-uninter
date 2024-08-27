
// Aqui estou capturando o eventos de "submit" do botão, ou seja, ao usuario pressionar o botão, eu capturo esse evento
document.getElementById('contact-form').addEventListener('submit', function(event) {

    // Travando o evento, para exibir o overlay 
    event.preventDefault();
    showOverlay();
});

function showOverlay() {
    document.getElementById('overlay').classList.remove('hidden');
}


// Caso o usuário dê um click na tela equanto o overlay está a mostra, ele é ocultado novamente.
document.getElementById('overlay').addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.add('hidden');

        clearFields();
    }
});



function clearFields() {
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('mensagem').value = "";
}

function remainingMonthToGraduation(dataFim) {
    const hoje = new Date();
    const fim = new Date(dataFim);
    
    let meses = (fim.getFullYear() - hoje.getFullYear()) * 12;
    meses -= hoje.getMonth();
    meses += fim.getMonth();
    
    return meses <= 0 ? 0 : meses;
}

const dataConclusao = '2026-12-01';
const mesesRestantes = remainingMonthToGraduation(dataConclusao);
document.getElementById('meses-restantes').innerHTML = `<strong>${mesesRestantes}</strong> meses.`;
