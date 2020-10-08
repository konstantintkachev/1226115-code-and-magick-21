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
debugger