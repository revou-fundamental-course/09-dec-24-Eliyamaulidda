// Ini Javascript
console.log('Javascript berhasil tersambung');

console.log('Javascript berhasil tersambung');

let indexSlide = 0;

nextSlide(); 

// Fungsi untuk melanjutkan slide ke berikutnya
function nextSlide() {
    showBanner(indexSlide += 1); 
}

// Fungsi untuk menampilkan slide
function showBanner(n) {
    const imageList = document.getElementsByClassName('banner-slide'); 

    if (n > imageList.length - 1) indexSlide = 0; 

    for (let i = 0; i < imageList.length; i++) {
        imageList[i].style.display = "none";
    }

    imageList[indexSlide].style.display = "block";
}

// Automatisasi perubahan slide setiap 3 detik
setInterval(nextSlide, 3000);
