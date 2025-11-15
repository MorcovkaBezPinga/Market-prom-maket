// Плавная прокрутка вверх
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('hidden');
    } else {
        scrollToTopBtn.classList.add('hidden');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Активный пункт меню при скролле
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Добавляем стиль для активного пункта меню в CSS
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        background-color: rgba(255, 255, 255, 0.3);
        border-bottom: 3px solid #ffff00;
    }
`;
document.head.appendChild(style);

// Анимация появления элементов при прокрутке
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Наблюдаем за всеми карточками услуг
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Наблюдаем за элементами галереи
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.8)';
    item.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    observer.observe(item);
});

// Наблюдаем за элементами контактной информации
document.querySelectorAll('.info-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    observer.observe(item);
});

// Клик на кнопку "Начать тренировку"
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        document.querySelector('#auth').scrollIntoView({ behavior: 'smooth' });
    });
}

// Эффект при наведении на логотип
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Добавляем parallax эффект для хедера
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        header.style.backgroundPosition = `center ${window.scrollY * 0.5}px`;
    }
});

// Подсказка при наведении на кнопку скролла вверх
scrollToTopBtn.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

/* ===== АВТОРИЗАЦИЯ ===== */

// Обработка формы входа
document.querySelectorAll('.auth-form')[0]?.addEventListener('submit', function(e) {
    e.preventDefault();
    const method = document.querySelector('input[name="login-method"]:checked').value;
    const contact = method === 'email' 
        ? document.getElementById('login-email').value 
        : document.getElementById('login-phone').value;
    const password = document.getElementById('login-password').value;
    
    alert(`Спасибо за попытку входа!\n${method === 'email' ? 'Email' : 'Номер'}: ${contact}\nПароль получен!`);
});

// Переключение между Email и Phone при входе
document.querySelectorAll('input[name="login-method"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const emailInput = document.getElementById('login-email');
        const phoneGroup = document.getElementById('phone-group');
        const phoneInput = document.getElementById('login-phone');
        
        if (this.value === 'email') {
            emailInput.style.display = 'block';
            phoneGroup.style.display = 'none';
            emailInput.required = true;
            phoneInput.required = false;
        } else {
            emailInput.style.display = 'none';
            phoneGroup.style.display = 'block';
            emailInput.required = false;
            phoneInput.required = true;
        }
    });
});

console.log('✅ FitnesHub JavaScript загружен успешно!');