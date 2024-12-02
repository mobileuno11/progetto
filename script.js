// Funzione per cambiare lingua
function changeLanguage(lang) {
    fetch('translations/translations.json')
        .then(response => response.json())
        .then(data => {
            // Seleziona le traduzioni per la lingua scelta
            const translations = data[lang];

            // Modifica il contenuto della pagina
            document.getElementById('title').innerText = translations.title;
            document.getElementById('description').innerText = translations.description;
        })
        .catch(error => console.log('Errore nel caricamento delle traduzioni:', error));
}

