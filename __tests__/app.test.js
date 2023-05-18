const { JSDOM } = require('jsdom');
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html);



describe('prueba de carga de elemento', () => {
  test('el elemento de texto se carga correctamente', () => {
    
    const textoElemento = dom.window.document.getElementById('texto');
    expect(textoElemento).not.toBeNull();
  });

  test('el elemento tiene el texto correcto', () => {
    
    const textoElemento = dom.window.document.getElementById('texto');
    expect(textoElemento.textContent).toBe('Este es el texto que queremos validar que se cargue');

  });
});
