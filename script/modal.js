document.addEventListener('DOMContentLoaded', () => {
    const modalButtons = document.querySelectorAll('[data-target]');
    const modals = document.querySelectorAll('.modal');

    modalButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const targetSelector = button.getAttribute('data-target');
            const targetModal = document.querySelector(targetSelector);

            if (targetModal) {
                targetModal.classList.add('visible');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeModals() {
        modals.forEach((modal) => {
            modal.classList.remove('visible');
        });

        document.body.style.overflow = 'auto';
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModals();
        }
    });

    modals.forEach((modal) => {
        modal.addEventListener('click', (event) => {
            if (!event.target.closest('.modal-content')) {
                closeModals();
            }
        });
    });

    const dismissButtons = document.querySelectorAll('.popin-dismiss');
    dismissButtons.forEach((dismissButton) => {
        dismissButton.addEventListener('click', () => {
            closeModals();
        });
    });
});