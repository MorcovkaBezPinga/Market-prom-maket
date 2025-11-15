// ===== МОДАЛЬНОЕ ОКНО ВХОДА =====
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.add('active');
        document.getElementById('modalEmail').focus();
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Закрытие модального окна при клике вне его
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeLoginModal();
            }
        });
    }
});

// Обработка отправки формы входа через модал
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('modalEmail').value;
    const password = document.getElementById('modalPassword').value;
    
    if (email && password) {
        // Извлекаем имя пользователя из email
        const username = email.split('@')[0];
        
        // Сохраняем имя пользователя в localStorage
        localStorage.setItem('fitnesHubUser', username);
        
        // Обновляем интерфейс
        updateUserDisplay(username);
        
        // Закрываем модальное окно
        closeLoginModal();
        
        // Очищаем форму
        event.target.reset();
    }
}

function updateUserDisplay(username) {
    const loginBtn = document.getElementById('loginBtn');
    const userInfo = document.getElementById('userInfo');
    const usernameSpan = document.getElementById('username');
    
    if (username) {
        // Показываем информацию пользователя
        usernameSpan.textContent = username;
        userInfo.style.display = 'flex';
        if (loginBtn) loginBtn.style.display = 'none';
    } else {
        // Показываем кнопку входа
        userInfo.style.display = 'none';
        if (loginBtn) loginBtn.style.display = 'block';
    }
}

function logout() {
    localStorage.removeItem('fitnesHubUser');
    updateUserDisplay(null);
}

// Восстанавливаем состояние входа при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    const savedUser = localStorage.getItem('fitnesHubUser');
    if (savedUser) {
        updateUserDisplay(savedUser);
    }
});

// ===== ЯЗЫКОВАЯ ЛОКАЛИЗАЦИЯ =====
const translations = {
    ru: {
        // Навигация
        'nav-home': 'Главная',
        'nav-about': 'О нас',
        'nav-services': 'Услуги',
        'nav-gallery': 'Галерея',
        'nav-contact': 'Контакты',
        
        // Заголовок
        'header-title': 'Добро пожаловать в FitnesHub',
        'header-subtitle': 'Ваш путь к здоровью и красивому телу начинается здесь',
        
        // О нас
        'about-title': 'О нас',
        'about-p1': 'FitnesHub - это современный фитнес-клуб, созданный для помощи вам в достижении ваших целей в области здоровья и фитнеса.',
        'about-p2': 'Наша команда опытных тренеров готова помочь вам на каждом шаге вашего фитнес-путешествия. Мы предоставляем полный спектр услуг, от групповых тренировок до персональных занятий.',
        'about-p3': 'Используя современное оборудование и инновационные подходы, мы гарантируем результаты.',
        'stat-members': 'Активных членов',
        'stat-trainers': 'Тренеров',
        'stat-years': 'Лет опыта',
        
        // Услуги
        'services-title': 'Наши услуги',
        'service-1-title': 'Тренировки с железом',
        'service-1-desc': 'Полный спектр тренажеров и свободных весов для развития силы и мышечной массы.',
        'service-2-title': 'Кардио зона',
        'service-2-desc': 'Беговые дорожки, велотренажеры и эллиптические машины для кардиотренировок.',
        'service-3-title': 'Йога и растяжка',
        'service-3-desc': 'Специальные классы для улучшения гибкости и психического здоровья.',
        'service-4-title': 'Боксинг',
        'service-4-desc': 'Интенсивные тренировки по боксингу под руководством профессионалов.',
        'service-5-title': 'Групповые тренировки',
        'service-5-desc': 'Энергичные групповые классы: зумба, аэробика и танцы.',
        'service-6-title': 'Персональный тренер',
        'service-6-desc': 'Индивидуальные тренировки, разработанные специально для вас.',
        
        // Галерея
        'gallery-title': 'Галерея',
        'gallery-1': 'Зал силовых тренировок',
        'gallery-2': 'Кардио зона',
        'gallery-3': 'Бассейн',
        'gallery-4': 'Раздевалка',
        'gallery-5': 'Персональные тренировки',
        'gallery-6': 'Спортивный бег',
        
        // Контакты
        'contact-title': 'Свяжитесь с нами',
        'contact-address': '📍 Адрес',
        'contact-address-value': 'ул. Фитнес, 123<br />Город, 12345',
        'contact-phone': '📞 Телефон',
        'contact-email': '📧 Email',
        'contact-hours': '🕐 График работы',
        'contact-hours-value': 'Пн-Пт: 06:00 - 23:00<br />Сб-Вс: 08:00 - 22:00',
        
        // Футер
        'footer-slogan': 'Ваш партнер в здоровом образе жизни',
        'footer-links': 'Быстрые ссылки',
        'footer-link-home': 'Главная',
        'footer-link-about': 'О нас',
        'footer-link-services': 'Услуги',
        'footer-link-gallery': 'Галерея',
        'footer-info': 'Информация',
        'footer-copyright': '© 2025 FitnesHub. Все права защищены.',
        
        // Модаль логина
        'login-title': 'Вход в FitnesHub',
        'logout-btn': 'Выход',
    },
    uk: {
        // Навігація
        'nav-home': 'Головна',
        'nav-about': 'Про нас',
        'nav-services': 'Послуги',
        'nav-gallery': 'Галерея',
        'nav-contact': 'Контакти',
        
        // Заголовок
        'header-title': 'Ласкаво просимо до FitnesHub',
        'header-subtitle': 'Ваш шлях до здоров\'я та красивого тіла починається тут',
        
        // Про нас
        'about-title': 'Про нас',
        'about-p1': 'FitnesHub - це сучасний фітнес-клуб, створений для того, щоб допомогти вам досягти своїх цілей у здоров\'ї та фітнесі.',
        'about-p2': 'Наша команда досвідчених тренерів готова допомогти вам на кожному кроці вашої фітнес-подорожі. Ми надаємо повний спектр послуг від групових занять до особистих тренувань.',
        'about-p3': 'Використовуючи сучасне обладнання та інноваційні підходи, ми гарантуємо результати.',
        'stat-members': 'Активних членів',
        'stat-trainers': 'Тренерів',
        'stat-years': 'Років досвіду',
        
        // Послуги
        'services-title': 'Наші послуги',
        'service-1-title': 'Тренування з залізом',
        'service-1-desc': 'Повний спектр тренажерів та вільних ваг для розвитку сили та м\'язової маси.',
        'service-2-title': 'Кардіо зона',
        'service-2-desc': 'Бігові доріжки, велотренажери та еліптичні машини для кардіотренування.',
        'service-3-title': 'Йога та розтяжка',
        'service-3-desc': 'Спеціальні класи для поліпшення гнучкості та психічного здоров\'я.',
        'service-4-title': 'Бокс',
        'service-4-desc': 'Інтенсивні тренування з боксу під керівництвом професіоналів.',
        'service-5-title': 'Групові тренування',
        'service-5-desc': 'Енергійні групові класи: зумба, аеробіка та танці.',
        'service-6-title': 'Особистий тренер',
        'service-6-desc': 'Індивідуальні тренування, розроблені спеціально для вас.',
        
        // Галерея
        'gallery-title': 'Галерея',
        'gallery-1': 'Зал силових тренувань',
        'gallery-2': 'Кардіо зона',
        'gallery-3': 'Басейн',
        'gallery-4': 'Роздягальня',
        'gallery-5': 'Особисті тренування',
        'gallery-6': 'Спортивний біг',
        
        // Контакти
        'contact-title': 'Зв\'яжіться з нами',
        'contact-address': '📍 Адреса',
        'contact-address-value': 'вул. Фітнес, 123<br />Місто, 12345',
        'contact-phone': '📞 Телефон',
        'contact-email': '📧 Email',
        'contact-hours': '🕐 Графік роботи',
        'contact-hours-value': 'Пн-Пт: 06:00 - 23:00<br />Сб-Нд: 08:00 - 22:00',
        
        // Футер
        'footer-slogan': 'Ваш партнер у здоровому способі життя',
        'footer-links': 'Швидкі посилання',
        'footer-link-home': 'Головна',
        'footer-link-about': 'Про нас',
        'footer-link-services': 'Послуги',
        'footer-link-gallery': 'Галерея',
        'footer-info': 'Інформація',
        'footer-copyright': '© 2025 FitnesHub. Усі права захищені.',
        
        // Модаль логіну
        'login-title': 'Вхід до FitnesHub',
        'logout-btn': 'Вихід',
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-gallery': 'Gallery',
        'nav-contact': 'Contacts',
        
        // Header
        'header-title': 'Welcome to FitnesHub',
        'header-subtitle': 'Your path to health and a beautiful body begins here',
        
        // About
        'about-title': 'About Us',
        'about-p1': 'FitnesHub is a modern fitness club created to help you achieve your health and fitness goals.',
        'about-p2': 'Our team of experienced trainers is ready to help you at every step of your fitness journey. We provide a full range of services, from group classes to personal training.',
        'about-p3': 'Using modern equipment and innovative approaches, we guarantee results.',
        'stat-members': 'Active Members',
        'stat-trainers': 'Trainers',
        'stat-years': 'Years of Experience',
        
        // Services
        'services-title': 'Our Services',
        'service-1-title': 'Strength Training',
        'service-1-desc': 'Full range of training equipment and free weights for strength and muscle development.',
        'service-2-title': 'Cardio Zone',
        'service-2-desc': 'Treadmills, exercise bikes and elliptical machines for cardio workouts.',
        'service-3-title': 'Yoga and Stretching',
        'service-3-desc': 'Special classes to improve flexibility and mental health.',
        'service-4-title': 'Boxing',
        'service-4-desc': 'Intense boxing training under professional supervision.',
        'service-5-title': 'Group Training',
        'service-5-desc': 'Energetic group classes: zumba, aerobics and dancing.',
        'service-6-title': 'Personal Trainer',
        'service-6-desc': 'Individual training sessions designed specifically for you.',
        
        // Gallery
        'gallery-title': 'Gallery',
        'gallery-1': 'Strength Training Zone',
        'gallery-2': 'Cardio Zone',
        'gallery-3': 'Swimming Pool',
        'gallery-4': 'Locker Room',
        'gallery-5': 'Personal Training',
        'gallery-6': 'Sports Running',
        
        // Contacts
        'contact-title': 'Contact Us',
        'contact-address': '📍 Address',
        'contact-address-value': 'Fitness St., 123<br />City, 12345',
        'contact-phone': '📞 Phone',
        'contact-email': '📧 Email',
        'contact-hours': '🕐 Working Hours',
        'contact-hours-value': 'Mon-Fri: 06:00 - 23:00<br />Sat-Sun: 08:00 - 22:00',
        
        // Footer
        'footer-slogan': 'Your partner in a healthy lifestyle',
        'footer-links': 'Quick Links',
        'footer-link-home': 'Home',
        'footer-link-about': 'About',
        'footer-link-services': 'Services',
        'footer-link-gallery': 'Gallery',
        'footer-info': 'Information',
        'footer-copyright': '© 2025 FitnesHub. All rights reserved.',
        
        // Login Modal
        'login-title': 'Login to FitnesHub',
        'logout-btn': 'Logout',
    }
};

function setLanguage(lang) {
    localStorage.setItem('fitnesHubLanguage', lang);
    
    // Обновляем активную кнопку
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Обновляем текст на странице
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Инициализация языка при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('fitnesHubLanguage') || 'ru';
    setLanguage(savedLanguage);
    
    // Добавляем обработчики на кнопки языков
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
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
        openLoginModal();
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

console.log('✅ FitnesHub JavaScript загружен успешно!');