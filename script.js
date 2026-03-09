// script.js
// ====================== COMENTÁRIOS EXPLICANDO TUDO ======================

// 1. Menu Hamburguer (responsivo)
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');

hamburger.addEventListener('click', () => {
    navMobile.classList.toggle('active');
    
    // Animação das barras virando X
    const bars = hamburger.querySelectorAll('.bar');
    if (navMobile.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }
});

// 2. Scroll suave para as seções (efeito profissional)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        
        // Fecha menu mobile se estiver aberto
        if (navMobile.classList.contains('active')) {
            hamburger.click();
        }
        
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 3. Destacar link do menu conforme rola a página
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});

// 4. Função de revelar mistério (interatividade JS)
function revelarMistério(numero) {
    const mist = document.getElementById(`mistério-${numero}`);
    if (mist) {
        mist.classList.toggle('mostrar');
        
        // Efeito extra: mudar cor do botão temporariamente
        const btn = event.target;
        const corOriginal = btn.style.background;
        btn.style.background = 'linear-gradient(45deg, #00ff9d, #00ccff)';
        setTimeout(() => {
            btn.style.background = corOriginal;
        }, 800);
    }
}

// 5. Efeito ÉPICO da espada (o "efeito legal" pedido)
function golpeFinal() {
    const espada = document.getElementById('espada');
    
    // Animação de golpe
    espada.classList.add('ativo');
    
    // Tremor na tela (shake)
    document.body.style.transition = 'transform 80ms';
    document.body.style.transform = 'translateX(8px)';
    
    setTimeout(() => {
        document.body.style.transform = 'translateX(-8px)';
    }, 80);
    
    setTimeout(() => {
        document.body.style.transform = 'translateX(6px)';
    }, 160);
    
    setTimeout(() => {
        document.body.style.transform = 'translateX(0)';
        espada.classList.remove('ativo');
        
        // Mensagem final épica
        alert('💥 O golpe foi tão forte que até o site tremeu! Você completou a lenda!');
    }, 800);
}

// 6. Animação extra ao carregar a página
window.addEventListener('load', () => {
    console.log('%c✅ Site da Lenda carregado com sucesso! Agora é só estudar e arrasar na apresentação!', 
                'color: #9B30FF; font-size: 16px; font-weight: bold');
    
    // Pequeno efeito de fade no header
    document.querySelector('.header').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.header').style.transition = 'opacity 1s';
        document.querySelector('.header').style.opacity = '1';
    }, 300);
});
