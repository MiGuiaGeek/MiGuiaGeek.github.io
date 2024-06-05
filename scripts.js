document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-btn'); // Obtener todos los botones de copiar

    // Función para copiar al portapapeles
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Texto copiado al portapapeles: ' + text);
                // Mostrar mensaje "Copiado" y tick
                const button = document.activeElement;
                button.innerHTML = '✓ ¡Copiado!';
                setTimeout(function() {
                    button.innerHTML = '❐ Copiar código';
                }, 2000); // Restaurar el texto original después de 2 segundos
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles: ', err);
                alert('Error al copiar al portapapeles');
            });
    }

    // Agregar evento de clic a cada botón de copiar
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeBlock = this.parentElement.querySelector('code');
            const codeText = codeBlock.textContent;
            copyToClipboard(codeText);
        });
    });

    const articles = document.querySelectorAll('.article'); // Selecciona todos los elementos con la clase 'article'
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase().trim(); // Obtiene el término de búsqueda

        articles.forEach(function(article) {
            const title = article.querySelector('h3').textContent.toLowerCase(); // Obtiene el texto del título en minúsculas
            const description = article.querySelector('p').textContent.toLowerCase(); // Obtiene el texto de la descripción en minúsculas

            // Comprueba si el término de búsqueda está presente en el título o en la descripción
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                article.style.display = 'block'; // Muestra el artículo si coincide con el término de búsqueda
            } else {
                article.style.display = 'none'; // Oculta el artículo si no coincide con el término de búsqueda
            }
        });
    });
});
