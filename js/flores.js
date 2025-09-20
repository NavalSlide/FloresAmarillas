onload = () => {
    const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    const messages = [
        "En este campo de sueños, florece mi cariño para ti.",
        "Cada girasol guarda un rayo de sol, incluso en la noche más oscura.",
        "Que estas estrellas fugaces cumplan todos tus deseos."
    ];
    let messageIndex = 0;
    const messageElement = document.getElementById('special-message');

    function showNextMessage() {
        messageElement.style.opacity = 0;
        setTimeout(() => {
        messageIndex = (messageIndex + 1) % messages.length;
        messageElement.innerText = messages[messageIndex];
        messageElement.style.opacity = 1;
        }, 2000);
    }
    messageElement.innerText = messages[0];
    messageElement.style.opacity = 1;
    setInterval(showNextMessage, 7000); 

    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.top = Math.random() * 60 + '%';
        star.style.animationDelay = '0s';
        star.style.animationDuration = (Math.random() * 1.5 + 2) + 's';
        document.querySelector('.shooting-stars').appendChild(star);
        setTimeout(() => star.remove(), 4000);
    }
    setInterval(() => {
        if (Math.random() > 0.3) createShootingStar();
    }, Math.random() * 5000 + 3000);
    
    
    function createStars() {
        const numStars = 100;
        const sky = document.body;
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * window.innerWidth + 'px';
            star.style.top = Math.random() * (window.innerHeight * 0.7) + 'px'; // Solo en la parte superior
            star.style.animationDelay = Math.random() * 3 + 's';
            sky.appendChild(star);
        }
    }

    function createFirefly() {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.left = Math.random() * window.innerWidth + 'px';
        firefly.style.top = Math.random() * window.innerHeight + 'px';
        firefly.style.animationDuration = (15 + Math.random() * 10) + 's';
        firefly.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(firefly);
    }
    
    createStars();
    for (let i = 0; i < 15; i++) {
        createFirefly();
    }

    clearTimeout(c);
    }, 1000);
};