// GSAP para animações
gsap.registerPlugin();

// Tela de introdução
const introScreen = document.querySelector(".intro-screen");
const introText = document.querySelector(".intro-text");
const introSubtext = document.querySelector(".intro-subtext");
const introLoader = document.querySelector(".intro-loader");
const mainContent = document.querySelector(".main-content");

// Sequência de animações
const introTimeline = gsap.timeline();

introTimeline
    .to(introText, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
    })
    .to(introText, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        delay: 1, // Tempo que o texto fica visível
        ease: "power2.inOut",
    })
    .to(introSubtext, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
    })
    .to(introLoader, {
        opacity: 1,
        duration: 0.5,
    })
    .to(introScreen, {
        opacity: 0,
        duration: 1.5,
        delay: 1, // Tempo antes de desaparecer
        ease: "power2.inOut",
        onComplete: () => {
            introScreen.style.display = "none";
            mainContent.style.display = "block";
            // Animação do conteúdo principal
            gsap.fromTo(
                mainContent,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
            );
            // Animação do logo
            gsap.fromTo(
                ".logo",
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
            );
            // Animação da caixa
            gsap.fromTo(
                ".container",
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
            );
        },
    });

// Efeito de carregamento
const loader = document.getElementById("loader");
const timerElement = document.getElementById("timer");
loader.style.display = "block";

function startCountdown(duration) {
    let countdown = duration;
    
    function updateTimer() {
        const days = Math.floor(countdown / (60 * 60 * 24));
        const hours = Math.floor((countdown % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((countdown % (60 * 60)) / 60);
        const seconds = countdown % 60;
        
        timerElement.innerHTML = `
            <span>${days}d</span> 
            <span>${hours}h</span> 
            <span>${minutes}m</span> 
            <span>${seconds}s</span>
        `;
        
        if (countdown > 0) {
            countdown--;
            setTimeout(updateTimer, 1000);
        } else {
            timerElement.textContent = "Estamos prontos!";
        }
        loader.style.display = "none";
    }
    updateTimer();
}

startCountdown(30 * 24 * 60 * 60); // 30 dias em segundos