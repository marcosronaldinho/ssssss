// script.js
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particlesArray = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
        this.color = Math.random() > 0.5 ? '#ff1e56' : '#c026d3';
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < 120; i++) particlesArray.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

// MENU + PROGRESS
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');
const progress = document.getElementById('progress');

hamburger.addEventListener('click', () => {
    navMobile.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        if (navMobile.classList.contains('active')) hamburger.click();
    });
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progress.style.width = `${scrollPercent}%`;
});

// REVELAR SEGREDOS
function revelarSegredo(num) {
    const el = document.getElementById(`segredo-${num}`);
    if (el) {
        if (el.style.display === 'block') {
            el.style.display = 'none';
        } else {
            el.style.display = 'block';
            el.innerHTML = num === 2 
                ? '“A sombra não é sua inimiga... ela é você.”' 
                : 'Você ganhou o poder do Guardião!';
        }
    }
}

// GOLPE FINAL
function golpeFinal() {
    const sword = document.getElementById('sword');
    sword.style.transition = 'transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
    sword.style.transform = 'rotate(-120deg) scale(1.8)';
    
    document.body.style.transition = 'filter 80ms';
    document.body.style.filter = 'brightness(2.5) saturate(2)';
    
    setTimeout(() => {
        document.body.style.filter = 'none';
        sword.style.transform = 'rotate(-35deg) scale(1.2)';
    }, 180);
    
    setTimeout(() => {
        alert('💥 O GOLPE FINAL FOI DESFERIDO!\n\nElara venceu. Eldoria está salva!');
    }, 700);
}

// CONFETTI + FINAL
function launchConfetti() {
    const colors = ['#ff1e56', '#c026d3', '#ffffff'];
    for (let i = 0; i < 180; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-20px';
            confetti.style.fontSize = '1.8rem';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            confetti.textContent = ['🗡️','✨','🌟','🔥'][Math.floor(Math.random()*4)];
            document.body.appendChild(confetti);
            
            const duration = Math.random() * 4000 + 3000;
            confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random()*80 - 40}deg)`, opacity: 0 }
            ], { duration, easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)' });
            
            setTimeout(() => confetti.remove(), duration);
        }, i * 2);
    }
}

function finalizarLenda() {
    const msg = document.getElementById('mensagem-final');
    msg.innerHTML = `<strong>PARABÉNS!</strong><br>Você completou <span style="color:#ff1e56">A Lenda do Cavaleiro das Sombras</span>.<br>Agora vá e crie sua própria história! 🚀`;
    msg.style.opacity = '1';
    launchConfetti();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function iniciarJornada() {
    document.getElementById('secao2').scrollIntoView({ behavior: 'smooth' });
}

// INICIALIZAÇÃO
window.onload = () => {
    initParticles();
    animateParticles();
    
    document.querySelector('.hero-content').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.hero-content').style.transition = 'all 1.8s cubic-bezier(0.23,1,0.32,1)';
        document.querySelector('.hero-content').style.opacity = '1';
    }, 400);
    
    console.log('%c✅ Site completo e corrigido! Botões lindos, menu legível e pronto para entregar!', 'color:#c026d3; font-size:18px; font-weight:bold');
};
