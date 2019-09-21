'use strict';

window.renderStatistics = function (canvas, names, times) {
  var ctx = canvas;
  cloudDraw(canvas);
  textDraw(canvas);

  // Максимальный результат
  var barMaxTime = maxValue(times);
  // Максимальный результат

  // Отрисовка гистограммы
  var barMargin = 150;
  names.forEach(function (item, i) {
    var barPercent = Math.round(times[i] * 100 / barMaxTime);
    var barHeight = Math.round(140 * barPercent / 100);
    var barTimePosition = 240 - barHeight - 10;
    var colorSaturation = Math.random().toFixed(1) * 100;
    var barColor = item === 'Вы'
      ? 'rgba(255, 0, 0, 1)'
      : 'hsl(240, 100%, ' + colorSaturation + '%)';

    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px PT Mono';
    ctx.fillText(item, barMargin, 260);

    ctx.fillStyle = barColor;
    ctx.fillRect(barMargin, 240, 40, -barHeight);

    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px PT Mono';
    ctx.fillText(Math.round(times[i]), barMargin, barTimePosition);
    barMargin += 90;
  });
  // Отрисовка гистограммы
};

// Отрисовка облака и тени
var cloudDraw = function (canvas) {
  var ctx = canvas;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);
};
// Отрисовка облака и тени

// Отрисовка текста
var textDraw = function (canvas) {
  var ctx = canvas;
  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Список результатов:', 120, 60);
};
// Отрисовка текста

// Максимальный результат
var maxValue = function (value) {
  return value.reduce(function (a, b) {
    return Math.max(a, b);
  });
};
// Максимальный результат
