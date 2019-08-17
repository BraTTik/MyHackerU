(
    function() {
        let caruselElem = document.querySelector('.carusel');
        let caruselListElem = document.querySelector('.carusel ul');
        let caruselListArr = document.querySelectorAll('.carusel li');
        let triggerArr = document.querySelectorAll('.trigger div');
        let slideCnt = caruselListArr.length;
        let width;
        let height;

        function resizeHandler() {
            width = caruselElem.offsetWidth;
            height = caruselElem.offsetHeight;

            for (let i = 0; i < slideCnt; i++) {
                caruselListArr[i].style.width = width + 'px';
                caruselListArr[i].style.height = height + 'px';
            }

            caruselListElem.style.left = -slideNumber * width + 'px';
        }

        let slideNumber = 0;
        resizeHandler();


        function goLeft(event) {
            console.log(event);
            if (slideNumber > 0) {
                slideNumber--;
                caruselListElem.style.left = -slideNumber * width + 'px';
            }
        }

        function goRight(event) {
            console.log(event);
            if (slideNumber < slideCnt - 1) {
                slideNumber++;
                caruselListElem.style.left = -slideNumber * width + 'px';
            }
        }

        triggerArr[0].addEventListener('click', function(event) { goLeft(event) });
        triggerArr[1].addEventListener('click', function(event) { goRight(event) });
        window.addEventListener('resize', function() { resizeHandler() });
    }
)();

(
    function() {
        let boxElem = document.getElementById('box');

        function move(event) {
            console.log(event);
        }

        window.addEventListener('keypress', function(event) { move(event) });
    }
)();