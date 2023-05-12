		var lang = 'pt'; // idioma padrão é português

		// função para traduzir texto para inglês
		function translateToEnglish() {
			lang = 'en'; // define o idioma como inglês
			document.getElementById('welcome').innerHTML = 'Welcome to our travel website!';
			document.getElementById('explore').innerHTML = 'Explore the world and discover new places to visit. We have information about popular destinations and travel tips to help you plan your next adventure.';
			document.getElementById('popular').innerHTML = 'Popular destinations:';
		}

		// função para traduzir texto para português
		function translateToPortuguese() {
			lang = 'pt'; // define o idioma como português
			document.getElementById('welcome').innerHTML = 'Bem-vindo ao nosso site de viagens!';
			document.getElementById('explore').innerHTML = 'Explore o mundo e descubra novos lugares para visitar. Temos informações sobre destinos populares e dicas de viagem para ajudá-lo a planejar sua próxima aventura.';
			document.getElementById('popular').innerHTML = 'Destinos populares:';
		}

		// função para mudar o idioma do site
		function changeLanguage() {
			if (lang === 'pt') {
				translateToEnglish();
			} else {
				translateToPortuguese();
			}
		}
	