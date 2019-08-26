(
    function() {
        let sliderElem = document.querySelector('.slider ul');
        let slideElems = document.querySelectorAll('header .slider .slide');

        let slideCnt = 0;

        let posElems = document.querySelectorAll('header .position li');
        let buttons = document.querySelector('header .slider_buttons').children;
        buttons[0].addEventListener('click', function() { previousSlide() });
        buttons[1].addEventListener('click', function() { nextSlide() });

        function showPosition() {
            for (let i = 0; i < slideElems.length; i++) {
                if (i == slideCnt) {
                    posElems[i].classList.add('onscreen');
                } else {
                    posElems[i].classList.remove('onscreen');
                }
            }
        }


        function nextSlide() {
            if (slideCnt < slideElems.length - 1) {
                slideCnt++;
                sliderElem.style.left = -slideCnt * 100 + 'vw';
                showPosition();
            }
        }

        function previousSlide() {
            if (slideCnt > 0) {
                slideCnt--;
                sliderElem.style.left = -slideCnt * 100 + 'vw';
                showPosition();
            }
        }
    }
)();

// Слайдер партнёров и клиентов

(
    function() {
        let sliderElem = document.querySelector('.partners .slider');
        let ulElem = document.querySelector('.partners .slider ul');
        let slidesElem = document.querySelectorAll('.partners .slider .slide');
        let sliderPanelElem = document.querySelector('.partners .slider-panel');
        let width;
        let height;
        let slideCnt = 0;
        let posElems = document.querySelectorAll('.partners .position li');

        let buttons = document.querySelector('.partners .slider_buttons').children;
        buttons[0].addEventListener('click', function() { previousSlide() });
        buttons[1].addEventListener('click', function() { nextSlide() });

        resizeHandler();

        window.addEventListener('resize', function() { resizeHandler() });

        function nextSlide() {
            if (slideCnt < slidesElem.length - 1) {
                slideCnt++;
                ulElem.style.left = -width * slideCnt + 'px';
            }
            showPosition();
        }

        function previousSlide() {
            if (slideCnt > 0) {
                slideCnt--;
                ulElem.style.left = -width * slideCnt + 'px';
            }
            showPosition();
        }

        function resizeHandler() {
            width = sliderElem.offsetWidth;
            height = sliderElem.offsetHeight;
            for (let i = 0; i < slidesElem.length; i++) {
                slidesElem[i].style.width = width + 'px';
                slidesElem[i].style.height = height + 'px';
            }
            ulElem.style.left = -width * slideCnt + 'px';
            sliderPanelElem.style.width = width + 'px';
        }

        function showPosition() {
            for (let i = 0; i < slidesElem.length; i++) {
                if (i == slideCnt) {
                    posElems[i].classList.add('onscreen');
                } else {
                    posElems[i].classList.remove('onscreen');
                }
            }
        }
    }
)();

(
    function() {
        let sliderElem = document.querySelector('.feedback .slider');
        let ulElem = document.querySelector('.feedback .slider ul');
        let slidesElem = document.querySelectorAll('.feedback .slider .slide');
        let sliderPanelElem = document.querySelector('.feedback .slider-panel');
        let width;
        let height;
        let slideCnt = 0;
        let posElems = document.querySelectorAll('.feedback .position li');

        let buttons = document.querySelector('.feedback .slider_buttons').children;
        buttons[0].addEventListener('click', function() { previousSlide() });
        buttons[1].addEventListener('click', function() { nextSlide() });

        resizeHandler();

        window.addEventListener('resize', function() { resizeHandler() });

        function nextSlide() {
            if (slideCnt < slidesElem.length - 1) {
                slideCnt++;
                ulElem.style.left = -width * slideCnt + 'px';
            }
            showPosition();
        }

        function previousSlide() {
            if (slideCnt > 0) {
                slideCnt--;
                ulElem.style.left = -width * slideCnt + 'px';
            }
            showPosition();
        }

        function resizeHandler() {
            width = sliderElem.offsetWidth;
            height = sliderElem.offsetHeight;
            for (let i = 0; i < slidesElem.length; i++) {
                slidesElem[i].style.width = width + 'px';
                slidesElem[i].style.minHeight = height + 'px';
            }
            ulElem.style.left = -width * slideCnt + 'px';
            sliderPanelElem.style.width = width + 'px';
        }

        function showPosition() {
            for (let i = 0; i < slidesElem.length; i++) {
                if (i == slideCnt) {
                    posElems[i].classList.add('onscreen');
                } else {
                    posElems[i].classList.remove('onscreen');
                }
            }
        }
    }
)();