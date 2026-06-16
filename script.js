const escapePhrases = [
    "لا بتهزري طبعاً! 😂",
    "متحاوليش مش هتضغطي عليه 🙄",
    "لالا عيدي حساباتك و فكري تاني كده 😂",
    "الزرار دا مقفول لراحة عملائنا ونبض قلوبنا 🔒",
    "مفيش الكلام دا انسي بقولك مفيش ضغط على الزرار دا😂🏃",
    "طب انا بقول تجربي تضغطي على الزرار التاني تعبتيني معاكي😂💣"
];

const sliderComments = {
    0: "صفر؟؟؟؟؟ طب انتي مصدقة بجد اللي انتي مختاراه دا؟🫠",
    20: "امممم.. 20%؟ لا لسة بعييييييييييد اوي! 😂",
    50: "نص نص؟ لا لسة شوية كتير اوي كمان 🤨",
    75: "قربناااا..لسة شوييييية كمااان اهو 😩",
    90: "ايوة قربنا اهو خلاص هانت .... زقة كمان بقا 🤩😂",
    100: "اخيييرا حمد الله على السلامة😂❤️❤️❤️"
};

function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(`page${pageNumber}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    triggerExplosion();
}

const runawayBtn = document.getElementById('runaway-btn');
const escapeMessage = document.getElementById('escape-message');

if (runawayBtn) {
    ['mouseenter', 'touchstart'].forEach(eventType => {
        runawayBtn.addEventListener(eventType, function(e) {
            if (eventType === 'touchstart') e.preventDefault();

            const card = runawayBtn.parentElement;
            const cardWidth = card.clientWidth;
            const cardHeight = card.clientHeight;

            const randomX = Math.floor(Math.random() * (cardWidth - runawayBtn.offsetWidth));
            const randomY = Math.floor(Math.random() * (cardHeight - runawayBtn.offsetHeight));

            runawayBtn.style.position = 'absolute';
            runawayBtn.style.left = randomX + 'px';
            runawayBtn.style.top = randomY + 'px';

            const randomPhrase = escapePhrases[Math.floor(Math.random() * escapePhrases.length)];
            escapeMessage.innerText = randomPhrase;
        });
    });
}

const slider = document.getElementById('loveSlider');
const sliderValue = document.getElementById('sliderValue');
const loveComment = document.getElementById('loveComment');
const sliderNextBtn = document.getElementById('sliderNextBtn');

if (slider) {
    slider.addEventListener('input', function() {
        const val = parseInt(this.value);
        sliderValue.innerText = val;

        if (val === 0) {
            loveComment.innerText = sliderComments[0];
        } else if (val > 0 && val <= 30) {
            loveComment.innerText = sliderComments[20];
        } else if (val > 30 && val <= 65) {
            loveComment.innerText = sliderComments[50];
        } else if (val > 65 && val <= 85) {
            loveComment.innerText = sliderComments[75];
        } else if (val > 85 && val < 100) {
            loveComment.innerText = sliderComments[90];
        } else if (val === 100) {
            loveComment.innerText = sliderComments[100];
            sliderNextBtn.classList.remove('invisible');
            sliderNextBtn.style.opacity = "1";
            sliderNextBtn.style.pointerEvents = "auto";
        }

        if (val < 100) {
            sliderNextBtn.classList.add('invisible');
        }
    });
}

function createHeart() {
    const container = document.getElementById('heartsContainer');
    if (!container) return;

    const heart = document.createElement('div');
    heart.classList.add('heart-sparkle');
    heart.innerHTML = Math.random() > 0.5 ? '❤️' : '💖';
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 15 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    
    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 400);

function triggerExplosion() {
    for (let i = 0; i < 15; i++) {
        setTimeout(createHeart, i * 50);
    }
}