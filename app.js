function criptografarTexto() {
  const input_tela1 = document.getElementById('tela1').value
  if (verificarPalavraSimples(input_tela1)) {
    alert('Por favor, digite apenas letras minisculas sem acentos')
    return
  }

  const writeResult = criptografar(input_tela1)
  document.getElementById('anwser-text').value = writeResult
}

function descriptografarTexto() {
  const input_tela1 = document.getElementById('tela1').value
  if (verificarPalavraSimples(input_tela1)) {
    alert('Por favor, digite apenas letras minúsculas e sem acento.')
    return
  }

  const writeResult = descriptografar(input_tela1)
  document.getElementById('anwser-text').value = writeResult
}

function copyResult() {}

function verificarPalavraSimples(palavra) {
  return /^[A-ZÀ-ÖØ-Þ]/.test(palavra)
}

function criptografar(string) {
  const result = string
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat')

  return result
}

function descriptografar(string) {
  const result = string
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u')

  return result
}
function copyResult() {
  const texto = document.getElementById('anwser-text').value
  const textarea = document.createElement('textarea')

  textarea.value = texto
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
  alert('Texto copiado com sucesso!')
}
