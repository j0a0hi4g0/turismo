document.getElementById('translate-button').addEventListener('click', function() {
    var languageSelect = document.getElementById('language-select');
    var selectedLanguage = languageSelect.options[languageSelect.selectedIndex].value;
    translateContent(selectedLanguage);
  });
  
  function aumentarFonte() {
    var conteudo = document.getElementById("conteudo");
    var fontSize = window.getComputedStyle(conteudo, null).getPropertyValue('font-size');
    var currentSize = parseFloat(fontSize);
    conteudo.style.fontSize = (currentSize + 2) + 'px';
  }
  
  function diminuirFonte() {
    var conteudo = document.getElementById("conteudo");
    var fontSize = window.getComputedStyle(conteudo, null).getPropertyValue('font-size');
    var currentSize = parseFloat(fontSize);
    conteudo.style.fontSize = (currentSize - 2) + 'px';
  }
  
  
  