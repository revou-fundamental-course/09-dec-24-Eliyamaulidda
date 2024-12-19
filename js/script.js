console.log('JavaScript berhasil tersambung');

        // Slider Functionality
        let indexSlide = 0;

        function nextSlide() {
            showBanner(indexSlide += 1); 
        }

        function showBanner(n) {
            const imageList = document.getElementsByClassName('banner-slide'); 

            if (n > imageList.length - 1) indexSlide = 0; 

            for (let i = 0; i < imageList.length; i++) {
                imageList[i].style.display = "none";
            }

            imageList[indexSlide].style.display = "block";
        }

        setInterval(nextSlide, 3000);

        // Form Validation
        function validateForm() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const location = document.getElementById('location').value;

            if (name === '') {
                alert('Nama tidak boleh kosong');
                return;
            }

            if (email === '') {
                alert('Email tidak boleh kosong');
                return;
            }

            if (location === '') {
                alert('Harap pilih lokasi');
                return;
            }

            alert(`Terima kasih, ${name}! Data Anda telah disubmit.`);
            document.getElementById('contact-form').reset();
        }