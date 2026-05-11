// Cuộn mượt mà cho các liên kết điều hướng
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer cho hoạt hình
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Quan sát các phần cho hoạt hình
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Thêm hiệu ứng cuộn cho điều hướng
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hiệu ứng gõ chữ cho slogan hero (tùy chọn nâng cao)
const slogan = document.querySelector('.hero-slogan');
const originalText = slogan.textContent;
slogan.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        slogan.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Bắt đầu hiệu ứng gõ chữ sau khi tải trang
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Hiệu ứng parallax cho các phần tử nổi (nhẹ nhàng)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    document.querySelectorAll('.element').forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        element.style.transform = `translateY(${rate * speed}px)`;
    });
});