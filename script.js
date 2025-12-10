// Fungsi untuk membuka popup fitur menarik
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

// Fungsi untuk menampilkan informasi skill
function showSkillInfo(skill) {
    let title = "";
    let desc = "";

    if(skill === "html") {
        title = "HTML";
        desc = "HTML adalah bahasa dasar untuk membuat struktur halaman web seperti teks, gambar, tabel, dan layout. Saya menggunakan HTML5 dengan semantik yang baik untuk membuat struktur website yang mudah diakses dan SEO friendly.";
    }

    if(skill === "css") {
        title = "CSS";
        desc = "CSS digunakan untuk mengatur tampilan website seperti warna, ukuran font, layout, animasi, dan desain visual lainnya. Saya menguasai CSS3 termasuk Flexbox, Grid, animasi, dan desain responsif.";
    }

    if(skill === "js") {
        title = "JavaScript";
        desc = "JavaScript digunakan untuk membuat website interaktif seperti popup, animasi, validasi form, hingga aplikasi web dinamis. Saya memahami ES6+ syntax dan DOM manipulation.";
    }

    if(skill === "php") {
        title = "PHP";
        desc = "PHP adalah bahasa backend untuk membuat sistem login, CRUD, database, dan server processing pada aplikasi web. Saya dapat membangun aplikasi web dinamis dengan PHP dan MySQL.";
    }

    if(skill === "arduino") {
        title = "Arduino";
        desc = "Arduino adalah platform mikrokontroler untuk membuat project hardware seperti robot avoider, smart home, sensor, dan kontrol otomatis. Saya memiliki pengalaman dalam pemrograman IoT dengan Arduino.";
    }

    // Tampilkan popup
    document.getElementById("skillTitle").innerText = title;
    document.getElementById("skillDesc").innerText = desc;
    document.getElementById("skillPopup").style.display = "flex";
}

// Fungsi untuk menutup popup skill
function closeSkillPopup() {
    document.getElementById("skillPopup").style.display = "none";
}

// Fungsi untuk menutup popup fitur menarik
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Fungsi untuk membuka link kontak
function openContact(type, value) {
    if (type === 'email') {
        window.location.href = `mailto:${value}`;
    } else if (type === 'phone') {
        window.location.href = `tel:${value}`;
    } else if (type === 'whatsapp') {
        window.open(`https://wa.me/${value}`, '_blank');
    } else if (type === 'instagram') {
        window.open(`https://instagram.com/${value}`, '_blank');
    } else if (type === 'github') {
        window.open(`https://github.com/${value}`, '_blank');
    }
}

// Smooth scroll untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efek scroll untuk navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 14, 27, 0.95)';
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.background = 'rgba(10, 14, 27, 0.95)';
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    }
});