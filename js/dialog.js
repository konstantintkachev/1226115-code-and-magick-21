'use strict';
(function () {
    var setup = document.querySelector('.setup');
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = setup.querySelector('.setup-close');
    var setupDefaultTop = setup.offsetTop;
    var setupDefaultLeft = setup.offsetLeft;

    var setupDefaultPosition = function () {
        setup.style.top = setupDefaultTop + 'px';
        setup.style.left = setupDefaultLeft + 'px';
    }

    setupOpen.addEventListener('click', function () {
        setup.classList.remove('hidden');
        setupDefaultPosition();
    });

    setupClose.addEventListener('click', function () {
        setup.classList.add('hidden');
        setupDefaultPosition();
    });

    document.addEventListener('keydown', function (evt) {
        if (document.activeElement === setupUserName) {
            // Ничего не происходит
        } else if (evt.key === 'Escape') {
        setup.classList.add('hidden');
        setupDefaultPosition();
        }
    });

    setupOpen.addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter') {
            setup.classList.remove('hidden');
            setupDefaultPosition();
        }
    });

    // Присваивание классу 'setup-close' атрибут для закрытие иконки на Enter
    setupClose.setAttribute('tabindex', 0);
    setupClose.addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter') {
            setup.classList.add('hidden');
        } 
    });
})();
