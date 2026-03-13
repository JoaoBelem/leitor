const enviarTexto = document.getElementById('enviarTexto');
const leitor = document.getElementById('leitor');

enviarTexto.querySelector('textarea').focus();
enviarTexto.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = enviarTexto.elements.texto.value;
  const paragrafos = texto.split(/\n\s*/);
  const html = paragrafos.map(p => `<p>${p}</p>`).join("");
  leitor.innerHTML = html;
  enviarTexto.classList.add('hidden');
})


const fontForm = document.forms.fontForm;
const controls = document.getElementById('controls');
const temas =
  [{ 'bg': "#000", "color": '#ddd' },
  { 'bg': "#222", "color": '#ddd' },
  { 'bg': "#251d0c", "color": '#ddd' },
  { 'bg': "#062229", "color": '#ccc' },
  { 'bg': "#000000", "color": '#00a000' }]

temas.forEach((i) => {
  const div = document.createElement('div');
  div.style = `background-color:${i.bg}; color: ${i.color}`;
  div.innerText = 'a';
  controls.querySelector('.bg .select').appendChild(div);

  div.addEventListener('click', () => {
    leitor.style.backgroundColor = i.bg;
    leitor.style.color = i.color;
  })
})

fontForm.tmn.addEventListener('change', (e) => {
  e.preventDefault();
  leitor.style.fontSize = `${fontForm.tmn.value}px`
})

document.getElementById('reset').addEventListener('click', (e) => {
  e.preventDefault();
  enviarTexto.classList.remove('hidden');
  leitor.innerText = '';
})

const fontes = fontForm.elements.fontes;
fontes.querySelectorAll('option').forEach((item) => {
  item.style.fontFamily = item.value;
})

fontes.addEventListener('change', () => {
  leitor.style.fontFamily = fontes.value;
})