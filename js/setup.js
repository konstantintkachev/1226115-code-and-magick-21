'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coathColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardArray = [];

function randomWizard (count) {
    for (var i = 0; i < count; i++) {
        var objectWizards = {};
        objectWizards.push = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + '' + surname[Math.floor(Math.random() * surname.length)];
        objectWizards.push = coathColor[Math.floor(Math.random() * coathColor.length)];
        objectWizards.push = eyesColor[Math.floor(Math.random() * eyesColor.length)];
    }
    return count; 
}
randomWizard(wizardArray);

var renderWizard = function (properties) {
    var wizardElement = templateElement.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = properties.WIZARD_NAMES;
    wizardElement.querySelector('.wizard-coat').style.fill = properties.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = properties.eyesColor;
    return wizardElement;
  };
  
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardArray.length; i++) {
    fragment.appendChild(renderWizard(wizardArray[i]));
  }
  userDialog.appendChild(fragment);

