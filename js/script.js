// ===== القائمة المنسدلة (Hamburger Menu) =====
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// ===== نموذج الجلسة التجريبية (واتساب) =====
const trialForm = document.getElementById('trialForm');
if (trialForm) {
    trialForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('trialName').value.trim();
        const phone = document.getElementById('trialPhone').value.trim();
        const service = document.getElementById('trialService').value;

        if (!name || !phone || !service) {
            alert('الرجاء ملء جميع الحقول');
            return;
        }

        const message = `طلب جلسة تجريبية في FitZone Gym%0Aالاسم: ${name}%0Aرقم الموبايل: ${phone}%0Aالخدمة المطلوبة: ${service}`;
        const whatsappNumber = '2010XXXXXXXX'; // غير الرقم ده لرقمك

        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

        document.getElementById('trialMessage').style.display = 'block';
        trialForm.reset();

        setTimeout(() => {
            document.getElementById('trialMessage').style.display = 'none';
        }, 8000);
    });
}

// ===== تبديل اللغة (عربي / إنجليزي) =====
document.getElementById('lang-toggle').addEventListener('click', function() {
    const isArabic = document.documentElement.lang === 'ar';
    document.documentElement.lang = isArabic ? 'en' : 'ar';
    document.documentElement.dir = isArabic ? 'ltr' : 'rtl';
    this.textContent = isArabic ? '🇸🇦 AR' : '🇬🇧 EN';
    alert(isArabic ? 'تم التبديل إلى الإنجليزية' : 'Switched to Arabic');
});