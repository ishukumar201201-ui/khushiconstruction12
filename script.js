document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
    const body = document.body;

    // Load Theme Preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if(checkbox) checkbox.checked = true;
    }

    // Toggle Theme
    if(checkbox) {
        checkbox.addEventListener('change', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }

    // Smooth Scroll Animation for Cards
    const cards = document.querySelectorAll('.s-card, .stat-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = '0.6s ease-out';
        observer.observe(card);
    });
});