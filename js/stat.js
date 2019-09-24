'use strict';

var cloudParams = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 10,
  GAP: 10,
  MAIN_COLOR: '#fff',
  SHADOW_COLOR: 'rgba(0, 0, 0, 0.7)'
};

var textParams = {
  COLOR: '#000',
  FONT: 'bold 16px PT Mono',
  LEFT_POSITION: 120,
  TOP_POSITION: 40,
  BOTTOM_GAP: 20,
  MESSAGE_1: 'Ура вы победили!',
  MESSAGE_2: 'Список результатов:'
};

var barParams = {
  WIDTH: 40,
  MAX_HEIGHT: 150,
  LEFT_POSITION: 150,
  BOTTOM_POSITION: 240,
  GAP_TOP: 10,
  GAP_RIGHT: 90,
  YOUR_COLOR: 'rgba(255, 0, 0, 1)'
};

// Отрисовка облака и тени
var drawCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloudParams.WIDTH, cloudParams.HEIGHT);
};
// Отрисовка облака и тени

// Отрисовка текста
var drawText = function (ctx, message, font, color) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(message, textParams.LEFT_POSITION, textParams.TOP_POSITION);
  textParams.TOP_POSITION += textParams.BOTTOM_GAP;
};
// Отрисовка текста

// Максимальный результат
var maxValue = function (value) {
  return Math.max.apply(null, value);
};
// Максимальный результат

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx, cloudParams.X + cloudParams.GAP, cloudParams.Y + cloudParams.GAP, cloudParams.SHADOW_COLOR);
  drawCloud(ctx, cloudParams.X, cloudParams.Y, cloudParams.MAIN_COLOR);

  drawText(ctx, textParams.MESSAGE_1, textParams.FONT, textParams.COLOR);
  drawText(ctx, textParams.MESSAGE_2, textParams.FONT, textParams.COLOR);

  // Максимальный результат
  var barMaxTime = maxValue(times);
  // Максимальный результат

  // Отрисовка гистограммы
  var barMargin = barParams.LEFT_POSITION;
  names.forEach(function (name, i) {
    var barPercent = Math.round(times[i] * 100 / barMaxTime);
    var barHeight = Math.round((barParams.MAX_HEIGHT - barParams.GAP_TOP) * barPercent / 100);
    var barTimePosition = barParams.BOTTOM_POSITION - barHeight - 10;
    var barColor = name === 'Вы'
      ? barParams.YOUR_COLOR
      : 'hsl(240, 100%, ' + Math.random().toFixed(1) * 100 + '%)';

    ctx.fillStyle = textParams.COLOR;
    ctx.font = textParams.FONT;
    ctx.fillText(name, barMargin, 260);

    ctx.fillStyle = barColor;
    ctx.fillRect(barMargin, barParams.BOTTOM_POSITION, barParams.WIDTH, -barHeight);

    ctx.fillStyle = textParams.COLOR;
    ctx.font = textParams.FONT;
    ctx.fillText(Math.round(times[i]), barMargin, barTimePosition);
    barMargin += barParams.GAP_RIGHT;
  });
  // Отрисовка гистограммы
};
