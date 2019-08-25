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