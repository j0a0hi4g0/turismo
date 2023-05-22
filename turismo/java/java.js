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


function translateContent(language) {
  var translations = {
    en: {
      'Selecione o idioma de destino:': 'Select the target language:',
      'Traduzir': 'Translate',
      'Corcovado - Rio de Janeiro, RJ': 'Corcovado - Rio de Janeiro, RJ',
      'O Corcovado é um dos pontos turísticos mais famosos do Brasil. Localizado na cidade do Rio de Janeiro, possui uma estátua do Cristo Redentor no topo, que atrai visitantes de todo o mundo.': 'Corcovado is one of the most famous tourist attractions in Brazil. Located in the city of Rio de Janeiro, it features a statue of Christ the Redeemer at the top, attracting visitors from all over the world.',
      'Cataratas do Iguaçu - Foz do Iguaçu, PR': 'Iguaçu Falls - Foz do Iguaçu, PR',
      'As Cataratas do Iguaçu são uma das maiores atrações turísticas do Brasil. Localizadas na cidade de Foz do Iguaçu, na fronteira com a Argentina, são formadas por uma série de quedas d\'água impressionantes.': 'Iguaçu Falls is one of the biggest tourist attractions in Brazil. Located in the city of Foz do Iguaçu, on the border with Argentina, it consists of a series of impressive waterfalls.',
      'Amazônia - Manaus, AM': 'Amazon - Manaus, AM',
      'A Amazônia é a maior floresta tropical do mundo e uma das sete maravilhas naturais. Localizada principalmente no estado do Amazonas, é conhecida por sua biodiversidade única e pela cultura indígena.': 'The Amazon is the largest tropical rainforest in the world and one of the seven natural wonders. Located mainly in the state of Amazonas, it is known for its unique biodiversity and indigenous culture.'
    },
    pt: {
      'Select the target language:': 'Selecione o idioma de destino:',
      'Translate': 'Traduzir',
      'Corcovado - Rio de Janeiro, RJ': 'Corcovado - Rio de Janeiro, RJ',
      'Corcovado is one of the most famous tourist attractions in Brazil. Located in the city of Rio de Janeiro, it features a statue of Christ the Redeemer at the top, attracting visitors from all over the world.': 'O Corcovado é um dos pontos turísticos mais famosos do Brasil. Localizado na cidade do Rio de Janeiro, possui uma estátua do Cristo Redentor no topo, que atrai visitantes de todo o mundo.',
      'Iguaçu Falls - Foz do Iguaçu, PR': 'Cataratas do Iguaçu - Foz do Iguaçu, PR',
      'Iguaçu Falls is one of the biggest tourist attractions in Brazil. Located in the city of Foz do Iguaçu, on the border with Argentina, it consists of a series of impressive waterfalls.': 'As Cataratas do Iguaçu são uma das maiores atrações turísticas do Brasil. Localizadas na cidade de Foz do Iguaçu, na fronteira com a Argentina, são formadas por uma série de quedas d\'água impressionantes.',
      'Amazon - Manaus, AM': 'Amazônia - Manaus, AM',
      'The Amazon is the largest tropical rainforest in the world and one of the seven natural wonders. Located mainly in the state of Amazonas, it is known for its unique biodiversity and indigenous culture.': 'A Amazônia é a maior floresta tropical do mundo e uma das sete maravilhas naturais. Localizada principalmente no estado do Amazonas, é conhecida por sua biodiversidade única e pela cultura indígena.'
    }
  };

  var titles = document.getElementsByTagName('h2');
  var paragraphs = document.getElementsByTagName('p');

  for (var i = 0; i < titles.length; i++) {
    var translation = translations[language][titles[i].textContent];
    if (translation) {
      titles[i].textContent = translation;
    }
  }

  for (var i = 0; i < paragraphs.length; i++) {
    var translation = translations[language][paragraphs[i].textContent];
    if (translation) {
      paragraphs[i].textContent = translation;
    }
  }
}
