(
    function() {
        let modalElem = document.querySelector('.modal');
        let modalWindow = document.querySelector('.modal_window')
        let showModalButton = document.querySelectorAll('.modal_button');
        let closeModalButton = document.querySelector('.close_button');


        let height = modalWindow.offsetHeight;
        let positionY = -1000 - height;
        modalWindow.style.top = positionY + 'px';

        let blockPosition = 0 + window.pageYOffset;

        function showModal() {
            positionY = 100;
            modalWindow.style.top = positionY + pageYOffset + 'px';
        }

        function closeModal() {
            positionY = -1000 - positionY - height;
            modalWindow.style.top = positionY + 'px';
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