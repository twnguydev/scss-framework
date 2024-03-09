document.addEventListener('DOMContentLoaded', () => {
    const tabListItems = document.querySelectorAll('.tab-list li');

    tabListItems.forEach((tabItem) => {
        tabItem.addEventListener('click', () => {
            const targetSelector = tabItem.getAttribute('data-target');
            const targetTab = document.querySelector(targetSelector);

            if (targetTab) {
                document.querySelectorAll('.tab-content > .tab-pane').forEach((tabPane) => {
                    tabPane.classList.remove('active');
                });

                targetTab.classList.add('active');

                document.querySelectorAll('.tab-list li').forEach((item) => {
                    item.classList.remove('active');
                });

                tabItem.classList.add('active');
            }
        });
    });
});