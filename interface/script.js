document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('formSimulador').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o comportamento padrão do formulário (envio)

    const idade = parseInt(document.getElementById('idade').value); // Obtém a idade informada
    const plano = document.getElementById('plano').value; // Obtém o plano selecionado

    let precoBase = 0;
    // Definir o preço base de acordo com o plano selecionado
    switch (plano) {
      case 'essencial':
        precoBase = 29.90;
        break;
      case 'completo':
        precoBase = 59.90;
        break;
      case 'premium':
        precoBase = 99.90;
        break;
      default:
        precoBase = 0;
    }

    let adicional = 0;
    // Aplica um adicional com base na idade
    if (idade > 60) {
      adicional = 0.50 * precoBase;
    } else if (idade > 40) {
      adicional = 0.20 * precoBase;
    }

    const precoFinal = precoBase + adicional; // Calcula o preço final

    // Exibe o resultado na tela
    document.getElementById('resultado').textContent = `Valor estimado: R$ ${precoFinal.toFixed(2)} por mês`;
  });
});