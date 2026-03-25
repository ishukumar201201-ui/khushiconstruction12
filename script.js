document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 1. Saari values aur elements ko select karna
            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            const messageInput = this.querySelector('textarea');
            const submitBtn = this.querySelector('.submit-btn');
            
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const originalBtnText = submitBtn.innerText;

            // 2. Validation: Check karna ki fields khali to nahi hain
            if (name === "" || email === "") {
                alert("Please fill in all required fields.");
                return;
            }

            // 3. Loading State: Button ko disable karna aur text badalna
            submitBtn.innerText = "Processing...";
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.7";

            // 4. Simulate API Call (Fake loading effect for 1.5 seconds)
            setTimeout(() => {
                // Success Message
                alert("Thank you " + name + "! Your message has been sent. We will get back to you soon.");
                
                // Form Reset karna
                this.reset();
                
                // Button ko wapas normal karna
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
                
            }, 1500);
        });
    }

    // 5. Smooth Scroll: "Get Free Quotation" button ke liye
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

// --- PREMIUM DARK MODE SWITCH LOGIC ---

// Naye classes ke hisaab se elements select karein
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme'); // Optional: user preference save karne ke liye

// Pehle se set preference check karein (agar save ki ho)
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
    }
}

// Switch change hone par class toggle karein
toggleSwitch.addEventListener('change', function(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        // Icon update styling se handle ho raha hai, JS mein zaroorat nahi
        // Optional: Preference save karein
        // localStorage.setItem('theme', 'dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        // Optional: Preference remove karein
        // localStorage.setItem('theme', 'light-mode');
    }
});