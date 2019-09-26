'use strict';

var userDialog = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var ROBE_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var randomize = function (arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))];
};

// Mассив параметров магов
var generateWizardsParams = function (firstName, lastName, robeColor, eyeColor) {
  var wizardsParams = [];
  for (var i = 0; i < 4; i++) {
    wizardsParams[i] = {};
    wizardsParams[i].name = randomize(firstName) + ' ' + randomize(lastName);
    wizardsParams[i].coatColor = randomize(robeColor);
    wizardsParams[i].eyesColor = randomize(eyeColor);
  }
  return wizardsParams;
};
// Mассив параметров магов

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
var wizards = generateWizardsParams(WIZARD_NAMES, WIZARD_LAST_NAMES, ROBE_COLOR, EYES_COLOR);
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
