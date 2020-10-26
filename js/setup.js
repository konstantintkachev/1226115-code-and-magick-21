'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coathColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var colorFireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var wizardArray = [];

function randomWizard () {
    var objectWizards = {};
    objectWizards.name = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + surname[Math.floor(Math.random() * surname.length)];
    objectWizards.coathColor = coathColor[Math.floor(Math.random() * coathColor.length)];
    objectWizards.eyesColor = eyesColor[Math.floor(Math.random() * eyesColor.length)];
    return objectWizards; 
}

function getWizardsRay (count) {
    for (var i = 0; i < count; i++) {
        wizardArray.push(randomWizard());
    }
}
getWizardsRay(4);

var renderWizard = function (properties) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = properties.name;
    wizardElement.querySelector('.wizard-coat').style.fill = properties.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = properties.eyesColor;
    return wizardElement;
  };
  
var fragment = document.createDocumentFragment();

function getWizardsTemlate (array) {
    for (var j = 0; j < array.length; j++) {
      fragment.appendChild(renderWizard(wizardArray[j]));
    }
} 
getWizardsTemlate(wizardArray);
similarListElement.appendChild(fragment);

// Открытие/закрытие окна настройки персонажа:

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var setupPlayer = document.querySelector('.setup-player');
// Цвет пальто
var wizardCoat = setupPlayer.querySelector('.wizard-coat');
var inputWizardCoat = setupPlayer.querySelector('input[name="coat-color"]');
// Цвет глаз
var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
var inputWizardEyes = setupPlayer.querySelector('input[name="eyes-color"]');
// Цвет огненного мяча
var setupFireballWrap = setupPlayer.querySelector('.setup-fireball-wrap');
var inputSetupFireballWrap = setupPlayer.querySelector('input[name="fireball-color"]');

// Ф-я для выбора рандомного цвета 
function colorRandom (element) {
    var colorRandomForAll = element[Math.floor(Math.random() * element.length)];
    return colorRandomForAll;
}

wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = colorRandom(coathColor);
    inputWizardCoat.value = colorRandom(coathColor);
});

wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = colorRandom(eyesColor);
    inputWizardEyes.value = colorRandom(eyesColor);
});

setupFireballWrap.addEventListener('click', function () {
    setupFireballWrap.style.background = colorRandom(colorFireball);
    inputSetupFireballWrap.value = colorRandom(colorFireball);
});


setupUserName.setAttribute('minlength', 2);

setupOpen.addEventListener('click', function () {
    setup.classList.remove('hidden');
});

setupClose.addEventListener('click', function () {
    setup.classList.add('hidden');
});

document.addEventListener('keydown', function (evt) {
    if (document.activeElement === setupUserName) {
      // Ничего не происходит
    } else if (evt.key === 'Escape') {
        setup.classList.add('hidden');
    }
  });

setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
        setup.classList.remove('hidden');
    }
});
// Присваивание классу 'setup-close' атрибут для закрытие иконки на Enter
setupClose.setAttribute('tabindex', 0);
setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
        setup.classList.add('hidden');
    } 
});