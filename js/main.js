const itens = [...document.querySelectorAll('#checklist input[type="checkbox"]')];
const contador = document.getElementById('contador');
const barra = document.getElementById('barra-progresso');

function atualizarProgresso() {
  const feitos = itens.filter(item => item.checked).length;
  contador.textContent = `${feitos} de ${itens.length} concluídos`;
  barra.style.width = `${(feitos / itens.length) * 100}%`;
  itens.forEach(item => item.closest('label').classList.toggle('concluido', item.checked));
}

itens.forEach(item => item.addEventListener('change', atualizarProgresso));
atualizarProgresso();
