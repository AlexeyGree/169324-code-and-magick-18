'use strict';

var userDialog = document.querySelector('.setup');
var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardParams = {
  WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  WIZARD_LAST_NAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  ROBE_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green']
};
// var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
// var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
// var ROBE_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
// var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var randomize = function (arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))];
};

// Mассив параметров магов
var generateWizards = function (wizardAmount) {
  var wizards = [];
  for (var i = 0; i < wizardAmount; i++) {
    var wizard = {};
    wizard.name = randomize(wizardParams.WIZARD_NAMES) + ' ' + randomize(wizardParams.WIZARD_LAST_NAMES);
    wizard.coatColor = randomize(wizardParams.ROBE_COLOR);
    wizard.eyesColor = randomize(wizardParams.EYES_COLOR);
    wizards.push(wizard);
  }
  return wizards;
};
// Mассив параметров магов

var renderWizard = function (wizard) {
  var currentWizard = similarWizardTemplate.cloneNode(true);

  currentWizard.querySelector('.setup-similar-label').textContent = wizard.name;
  currentWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  currentWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return currentWizard;
};

var fragment = document.createDocumentFragment();
var wizards = generateWizards(4);

var addWizards = function (wizardsArr) {
  wizardsArr.forEach(function (wizard) {
    fragment.appendChild(renderWizard(wizard));
  });

  return similarList.appendChild(fragment);
};

addWizards(wizards);
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
