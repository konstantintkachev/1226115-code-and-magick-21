'use strict';
(function () {
    // Реализация перетаскивания окна
    var setupDialogElement = document.querySelector('.setup');
    var dialogHandle = setupDialogElement.querySelector('.upload');
    dialogHandle.addEventListener('mousedown', function (evt) {
        evt.preventDefault();
        var startCoards = {
            x: evt.clientX,
            y: evt.clientY
        };
        var dragged = false;

        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();
            dragged = true;

            var shift = {
                x: startCoards.x - moveEvt.clientX,
                y: startCoards.y - moveEvt.clientY
            };
            startCoards = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };
            setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
            setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
        };

    var onMouseUp = function (upEvt) {
        upEvt.preventDefault();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        if (dragged) {
            var onClickPreventDefault = function (clickEvt) {
                clickEvt.preventDefault();
                dialogHandle.removeEventListener('click', onClickPreventDefault);
            };
            dialogHandle.addEventListener('click', onClickPreventDefault);
        }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    });
})();
