(
    function() {
        let modalElem = document.querySelector('.modal');
        let modalWindow = document.querySelector('.modal_window')
        let showModalButton = document.querySelectorAll('.modal_button');
        let closeModalButton = document.querySelector('.close_button');


        let height = modalWindow.offsetHeight;
        let positionY = 0 - height;
        modalWindow.style.top = positionY + 'px';

        let blockPosition = 0;

        function showModal() {
            positionY = 100;
            modalWindow.style.top = positionY + pageYOffset + 'px';
            modalWindow.style.opacity = 1;
        }

        function closeModal() {
            positionY = 0 - positionY - height;
            modalWindow.style.top = positionY + 'px';
            modalWindow.style.opacity = 0;
        }

        function blockContent() {
            modalElem.style.top = blockPosition + window.pageYOffset + 'px';
            modalElem.style.display = 'block';
        }

        function unblockContent() {
            modalElem.style.display = 'none';
        }

        showModalButton[0].addEventListener('click', function() {
            showModal();
            blockContent();
            document.body.style.overflow = 'hidden';
        });
        showModalButton[1].addEventListener('click', function() {
            showModal();
            blockContent();
            document.body.style.overflow = 'hidden';
        });
        closeModalButton.addEventListener('click', function() {
            closeModal();
            unblockContent();
            document.body.style.overflow = '';
        });

        window.addEventListener('scroll', function() {
            modalElem.style.top = blockPosition + pageYOffset + 'px';
            modalWindow.style.top = positionY + pageYOffset + 'px';
        });
    }
)();