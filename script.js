// Pegamos o formulário da página
const form = document.querySelector("form");

// Pegamos os campos de entrada de valor e moeda
const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency");

// Pegamos os elementos que vamos atualizar
const description = document.getElementById("description");
const result = document.getElementById("result");
const footer = document.querySelector("footer");
const errorMessage = document.getElementById("error-message"); // Novo: área para mensagens de erro

// Definimos as taxas de câmbio fixas
const exchangeRates = {
  USD: 4.86, // Taxa do Dólar para Real
  EUR: 5.30, // Taxa do Euro para Real
  GBP: 6.20  // Taxa da Libra para Real
};

// Quando o formulário for enviado...
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o recarregamento da página

  // Pegamos o valor digitado e a moeda escolhida
  const amount = parseFloat(amountInput.value.replace(",", "."));
  const currency = currencySelect.value;

  // Se não preencher direito, mostramos erro elegante
  if (!amount || !currency) {
    errorMessage.textContent = "Por favor, preencha todos os campos corretamente.";
    errorMessage.style.display = "block"; // Mostra a mensagem de erro
    footer.classList.remove("show-result"); // Garante que o resultado não apareça
    footer.classList.remove("animate-footer"); // Remove animação se houver
    return;
  }

  // Se tudo certo, some a mensagem de erro
  errorMessage.style.display = "none";

  // Pegamos a taxa de câmbio correspondente
  const rate = exchangeRates[currency];

  // Calculamos o valor convertido
  const convertedAmount = amount * rate;

  // Atualizamos os textos
  description.textContent = `1 ${currency} = R$ ${rate.toFixed(2)}`;
  result.textContent = `${convertedAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

  // Mostramos o footer com o resultado e aplicamos a animação
  footer.classList.add("show-result");
  footer.classList.add("animate-footer"); // Animação suave
});
