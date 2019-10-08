'use strict';

var setup = document.querySelector('.setup');
var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardParams = {
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  LAST_NAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  ROBE_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
};
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupFocusOn = false;
var ESC_KEY = 27;
var ENTER_KEY = 13;
var wizardSetup = setup.querySelector('.setup-wizard');
var wizardSetupCoat = wizardSetup.querySelector('.wizard-coat');
var wizardSetupEyes = wizardSetup.querySelector('.wizard-eyes');
var fireballSetup = setup.querySelector('.setup-fireball-wrap');

var getRandomElement = function (arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))];
};

// Mассив параметров магов
var generateWizards = function (wizardAmount) {
  var wizards = [];
  for (var i = 0; i < wizardAmount; i++) {
    var wizard = {
      name: getRandomElement(wizardParams.NAMES) + ' ' + getRandomElement(wizardParams.LAST_NAMES),
      coatColor: getRandomElement(wizardParams.ROBE_COLORS),
      eyesColor: getRandomElement(wizardParams.EYES_COLORS)
    };
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

var WIZARDS_AMOUNT = 4;
var wizards = generateWizards(WIZARDS_AMOUNT);

var addWizards = function (wizardsArr) {
  var fragment = document.createDocumentFragment();
  wizardsArr.forEach(function (wizard) {
    fragment.appendChild(renderWizard(wizard));
  });

  return similarList.appendChild(fragment);
};

addWizards(wizards);
document.querySelector('.setup-similar').classList.remove('hidden');

// Окно не закрывается при фокусе на элементе "Имя"
setupUserName.addEventListener('focus', function () {
  setupFocusOn = true;
});

setupUserName.addEventListener('blur', function () {
  setupFocusOn = false;
});

var pressEscOnPopup = function (evt) {
  if (evt.keyCode === ESC_KEY) {
    if (!setupFocusOn) {
      closePopup();
    }
  }
};
// Окно не закрывается при фокусе на элементе "Имя"

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', pressEscOnPopup);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', pressEscOnPopup);
};

// Открытие окна
setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY) {
    openPopup();
  }
});
// Открытие окна

// Закрытие окна
setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY) {
    closePopup();
  }
});
// Закрытие окна

// Установка цветов
wizardSetupCoat.addEventListener('click', function () {
  var randomColor = getRandomElement(wizardParams.ROBE_COLORS);
  wizardSetupCoat.style.fill = randomColor;
  setup.querySelector('input[name=coat-color]').value = randomColor;
});

wizardSetupEyes.addEventListener('click', function () {
  var randomColor = getRandomElement(wizardParams.EYES_COLORS);
  wizardSetupEyes.style.fill = randomColor;
  setup.querySelector('input[name=eyes-color]').value = randomColor;
});

fireballSetup.addEventListener('click', function () {
  var randomColor = getRandomElement(FIREBALL_COLORS);
  fireballSetup.style.backgroundColor = randomColor;
  fireballSetup.querySelector('input[name=fireball-color]').value = randomColor;
});
// Установка цветов
