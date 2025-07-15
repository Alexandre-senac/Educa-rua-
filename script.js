document.addEventListener('DOMContentLoaded', () => {
    // Menu Hambúrguer para Responsividade
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');

    if (hamburgerMenu && navList) {
        hamburgerMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });

        // Fechar o menu ao clicar em um item (para navegação suave)
        document.querySelectorAll('.nav-list li a').forEach(item => {
            item.addEventListener('click', () => {
                navList.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            });
        });
    }

    // Funcionalidade para copiar chave Pix
    const copyPixButtons = document.querySelectorAll('.copy-pix');
    copyPixButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pixKey = button.dataset.pix;
            navigator.clipboard.writeText(pixKey).then(() => {
                const originalText = button.textContent;
                button.textContent = 'Copiado!';
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Falha ao copiar texto: ', err);
                alert('Erro ao copiar a chave Pix. Por favor, copie manualmente: ' + pixKey);
            });
        });
    });

    // Animação de rolagem suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Ajusta o scroll para levar em conta o cabeçalho fixo
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Validação básica de formulário (exemplo para o formulário de voluntário)
    const volunteerForm = document.querySelector('#participar .form-container:first-of-type form');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', (e) => {
            // Exemplo de validação simples: verifica se campos estão preenchidos
            const name = volunteerForm.querySelector('input[type="text"]').value;
            const email = volunteerForm.querySelector('input[type="email"]').value;
            const message = volunteerForm.querySelector('textarea').value;

            if (!name || !email || !message) {
                e.preventDefault(); // Impede o envio se os campos estiverem vazios
                alert('Por favor, preencha todos os campos obrigatórios.');
            } else {
                // Em um projeto real, você enviaria os dados para um servidor aqui
                alert('Sua inscrição de voluntário foi enviada com sucesso! Entraremos em contato em breve.');
                volunteerForm.reset(); // Limpa o formulário após o envio
                e.preventDefault(); // Impede o recarregamento da página
            }
        });
    }

    // Você pode replicar a validação para os outros formulários de forma semelhante
});