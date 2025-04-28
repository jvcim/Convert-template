// Pegamos o formulário da página
const form = document.querySelector("form"); // Constante, pois o form não muda

// Quando o formulário for enviado...
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o comportamento padrão (não recarrega a página)
  
  // Aqui ainda vamos capturar o valor digitado e a moeda escolhida
  console.log("Formulário enviado!"); // Teste para confirmar que o evento está funcionando
});
