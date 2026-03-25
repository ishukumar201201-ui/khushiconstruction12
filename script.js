document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CONTACT FORM LOGIC ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = this.querySelector('input[type="text"]');
            const submitBtn = this.querySelector('.submit-btn');
            
            if(!nameInput || !submitBtn) return;

            const name = nameInput.value.trim();
            const originalBtnText = submitBtn.innerText;

            // Loading State
            submitBtn.innerText = "Processing...";
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.7";

            setTimeout(() => {
                alert("Thank you " + name + "! Your quotation request has been sent to KHUSHI Construction.");
                this.reset();
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
            }, 1500);
        });
    }

    // --- 2. SMOOTH SCROLL ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- 3. PREMIUM DARK MODE (LOCALSTORAGE) ---
    const toggleSwitch = document.querySelector('#checkbox'); // Matches HTML ID
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (toggleSwitch) toggleSwitch.checked = true;
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- 4. PASSWORD SHOW/HIDE (FIXED FOR WAVY DESIGN) ---
    const togglePassword = document.querySelector('#togglePassword');
    const passwordField = document.querySelector('#password');

    if (togglePassword && passwordField) {
        togglePassword.addEventListener('click', function () {
            // Password type change logic
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            
            // Icon Toggle (Slash se Eye aur Eye se Slash)
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
});

// --- DARK MODE LOGIC ---
const checkbox = document.getElementById('checkbox');

// Ye check karega ki button click hua ya nahi
if (checkbox) {
    checkbox.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        
        // Optional: User ki preference save karne ke liye
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// Page load hote hi purana theme apply karne ke liye
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if(checkbox) checkbox.checked = true;
    }
};