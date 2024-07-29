// Cotação de moedas do dia
const USD = 5.65;
const EUR = 6.14;
const GBP = 7.28;

// Obtendo os elementos do formulário
const form = document.querySelector('form');
const amount =  document.querySelector('#amount');
const currency = document.querySelector('#currency');
const footer = document.querySelector('main footer');
const description = document.querySelector('#description');
const result = document.querySelector('#result');


// Mainpulando o input amount para receber somente números.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, '');
});

// Captando o evento de submit (enviar) no formulário
form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'US$');
            break;
        case 'EUR':
            convertCurrency(amount.value, EUR, '€');
            break;
        case 'GBP':
            convertCurrency(amount.value, GBP, '£');
            break;
        default:
            alert('Selecione uma moeda válida');
    }
};

// Função para converter a moeda.

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

        let total = amount * price;
        total = formatCurrencyBRL(total).replace('R$', '');
        result.textContent = `${total} Reais`;

        footer.classList.add('show-result');
    } catch (error) {
        console.log(error);
        footer.classList.remove('show-result');
        alert('Não foi possível converter');
    }
};

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
};
