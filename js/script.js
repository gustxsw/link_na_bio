// Exibe uma mensagem no console ao carregar a página
console.log("Página carregada!");

// Alternar Dark Mode
const toggleDarkMode = document.getElementById('toggle-dark-mode');
toggleDarkMode.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no corpo
    document.body.classList.toggle('dark-mode');

    // Salva o estado no localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
});

// Verifica o estado do modo escuro no localStorage ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const darkModeState = localStorage.getItem('dark-mode');
    if (darkModeState === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});

// Captura cliques nos links e registra no console
document.querySelectorAll(".links a").forEach(link => {
    link.addEventListener("click", event => {
        console.log(`Link clicado: ${event.target.textContent}`);
    });
});

// Animação suave ao carregar o conteúdo da página
window.addEventListener("load", () => {
    document.querySelector(".card").classList.add("fade-in");
});

// Formulário de Contato - Mensagem ao enviar
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Obrigado por entrar em contato! Responderemos em breve.');
    contactForm.reset();
});

// Suaviza transições de foco nos links
document.querySelectorAll(".links a, .footer a").forEach(link => {
    link.addEventListener("focus", () => {
        link.style.outline = "2px solid var(--primary-color)";
    });

    link.addEventListener("blur", () => {
        link.style.outline = "none";
    });
});

document.querySelectorAll(".links a").forEach(link => {
    link.addEventListener("click", event => {
        // Captura o texto do link clicado
        const linkText = event.target.textContent;
        const linkURL = event.target.href;

        // Envia o evento para o Google Analytics
        gtag('event', 'click', {
            'event_category': 'Links',
            'event_label': linkText,
            'value': linkURL
        });

        console.log(`Link clicado: ${linkText} (${linkURL})`);
    });
});
