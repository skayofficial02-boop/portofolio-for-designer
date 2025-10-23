// Menunggu sampai seluruh halaman HTML dimuat
document.addEventListener("DOMContentLoaded", function() {
    
    // Cari form login berdasarkan ID-nya
    const loginForm = document.getElementById("login-form");

    // Tambahkan "event listener" yang akan berjalan saat form di-submit
    loginForm.addEventListener("submit", function(event) {
        
        // 1. Mencegah form mengirim data ke server (perilaku default)
        event.preventDefault(); 
        
        // 2. Tampilkan pesan sederhana (opsional)
        console.log("Login diklik. Mengarahkan ke home.html...");

        // 3. Arahkan pengguna ke halaman home.html
        // INI HANYA SIMULASI! Tidak ada pemeriksaan username/password.
        window.location.href = "home.html";
    });

});
