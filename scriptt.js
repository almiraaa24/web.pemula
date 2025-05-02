ocument.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});
//Tambahkan event listener pada form
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form yang mengakibatkan halaman reload
        this.reset(); // Menghapus isi form
        alert("Form telah berhasil dikirim dan data dihapus!"); // Opsional: pesan sukses
    });