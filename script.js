window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    // 2.5 saniye sonra yükleme ekranını kaldır (progress bar animasyonuyla uyumlu)
    setTimeout(() => {
        loader.style.opacity = '0';
        
        // Loader tamamen kaybolduktan sonra DOM'dan kaldır ve ana içeriği göster
        setTimeout(() => {
            loader.style.display = 'none';
            mainContent.classList.remove('hidden');
            
            // Yumuşak bir geçiş için görünürlük sınıfını ekle
            setTimeout(() => {
                mainContent.classList.add('visible');
                document.body.style.overflow = 'auto'; // Kaydırmayı tekrar aç
            }, 50);
        }, 800);
        
    }, 2500); // 2.5 saniye bekle
});

function openKvkk() {
    document.getElementById("kvkkModal").style.display = "block";
    document.body.style.overflow = "hidden"; // Arka plan kaymasını engeller
}

function closeKvkk() {
    document.getElementById("kvkkModal").style.display = "none";
    document.body.style.overflow = "auto"; // Kaymayı geri açar
}

// Modal dışına tıklandığında kapatma
window.onclick = function(event) {
    let modal = document.getElementById("kvkkModal");
    if (event.target == modal) {
        closeKvkk();
    }
}

// Kullanım Koşulları Modalını Aç
function openUsage() {
    document.getElementById("usageModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

// Kullanım Koşulları Modalını Kapat
function closeUsage() {
    document.getElementById("usageModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Global Kapatma (Dışarı tıklandığında her iki modalı da kapatır)
window.onclick = function(event) {
    let kvkkModal = document.getElementById("kvkkModal");
    let usageModal = document.getElementById("usageModal");
    
    if (event.target == kvkkModal) {
        closeKvkk();
    }
    if (event.target == usageModal) {
        closeUsage();
    }
}

// Çerez Politikası Aç/Kapat
function openCookie() {
    document.getElementById("cookieModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeCookie() {
    document.getElementById("cookieModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Diğerlerini de buraya eklediğini varsayıyorum (openKvkk, openUsage vb.)

// TÜM MODALLAR İÇİN TEK TIKLAMA KONTROLÜ
window.onclick = function(event) {
    const kvkkModal = document.getElementById("kvkkModal");
    const usageModal = document.getElementById("usageModal");
    const cookieModal = document.getElementById("cookieModal");
    
    if (event.target == kvkkModal) closeKvkk();
    if (event.target == usageModal) closeUsage();
    if (event.target == cookieModal) closeCookie();
}

// Mesafeli Satış Sözleşmesi Aç/Kapat
function openSales() {
    document.getElementById("salesModal").style.display = "block";
    document.body.style.overflow = "hidden";
}
function closeSales() {
    document.getElementById("salesModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// İptal ve İade Koşulları Aç/Kapat
function openRefund() {
    document.getElementById("refundModal").style.display = "block";
    document.body.style.overflow = "hidden";
}
function closeRefund() {
    document.getElementById("refundModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// GLOBAL KAPATMA (Hangi modal açıksa dışarı tıklandığında onu kapatır)
window.onclick = function(event) {
    const modals = ["kvkkModal", "usageModal", "cookieModal", "salesModal", "refundModal"];
    modals.forEach(id => {
        const modal = document.getElementById(id);
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}