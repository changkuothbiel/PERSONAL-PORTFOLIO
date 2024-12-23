// JavaScript for portfolio functionality

document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for the header name
    const typingName = document.getElementById('typing-name');
    const nameText = "Changkuoth Biel";
    let index = 0;

    function type() {
        if (index < nameText.length) {
            typingName.textContent += nameText.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }
    type();

    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextItem() {
        currentItem = (currentItem + 1) % carouselItems.length;
        showItem(currentItem);
    }

    function prevItem() {
        currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
        showItem(currentItem);
    }

    // Initially show the first carousel item
    showItem(currentItem);

    // Optional: Add buttons for next/prev functionality
    const nextButton = document.createElement('button');
    const prevButton = document.createElement('button');
    nextButton.textContent = 'Next';
    prevButton.textContent = 'Previous';

    nextButton.addEventListener('click', nextItem);
    prevButton.addEventListener('click', prevItem);

    const portfolioSection = document.querySelector('#portfolio');
    portfolioSection.appendChild(prevButton);
    portfolioSection.appendChild(nextButton);

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Add dynamic active link highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const offsetTop = section.offsetTop - 50;
            const offsetBottom = offsetTop + section.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                const activeLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
                document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
                activeLink.classList.add('active');
            }
        });
    });
});
