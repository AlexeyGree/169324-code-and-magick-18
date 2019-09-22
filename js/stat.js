'use strict';

window.renderStatistics = function (canvas, names, times) {
  var ctx = canvas;
  cloudDraw(canvas, cloudParams);
  textDraw(canvas, textParams);

  // Максимальный результат
  var barMaxTime = maxValue(times);
  // Максимальный результат

  // Отрисовка гистограммы
  var barMargin = barParams.LEFTPOSITION;
  names.forEach(function (item, i) {
    var barPercent = Math.round(times[i] * 100 / barMaxTime);
    var barHeight = Math.round((barParams.MAXHEIGHT - barParams.GAP) * barPercent / 100);
    var barTimePosition = barParams.BOTTOMPOSITION - barHeight - 10;
    // var colorSaturation = Math.random().toFixed(1) * 100;
    var barColor = item === 'Вы'
      ? barParams.YOURCOLOR
      : barParams.COMPETITORCOLOR;

    ctx.fillStyle = textParams.COLOR;
    ctx.font = textParams.FONT;
    ctx.fillText(item, barMargin, 260);

    ctx.fillStyle = barColor;
    ctx.fillRect(barMargin, barParams.BOTTOMPOSITION, barParams.WIDTH, -barHeight);

    ctx.fillStyle = textParams.COLOR;
    ctx.font = textParams.FONT;
    ctx.fillText(Math.round(times[i]), barMargin, barTimePosition);
    barMargin += 90;
  });
  // Отрисовка гистограммы
};

// Отрисовка облака и тени
var cloudDraw = function (canvas, params) {
  var ctx = canvas;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(params.X + params.GAP, params.Y + params.GAP, params.WIDTH, params.HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(params.X, params.Y, params.WIDTH, params.HEIGHT);
};
// Отрисовка облака и тени

// Отрисовка текста
var textDraw = function (canvas, params) {
  var ctx = canvas;
  ctx.fillStyle = params.COLOR;
  ctx.font = params.FONT;
  ctx.fillText('Ура вы победили!', params.LEFTPOSITION, params.TOPPOSITIONFIRST);

  ctx.fillStyle = params.COLOR;
  ctx.font = params.FONT;
  ctx.fillText('Список результатов:', params.LEFTPOSITION, params.TOPPOSITIONSECOND);
};
// Отрисовка текста

// Максимальный результат
var maxValue = function (value) {
  return value.reduce(function (a, b) {
    return Math.max(a, b);
  });
};
// Максимальный результат

var cloudParams = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 10,
  GAP: 10
};

var textParams = {
  COLOR: '#000',
  FONT: 'bold 16px PT Mono',
  LEFTPOSITION: 120,
  TOPPOSITIONFIRST: 40,
  TOPPOSITIONSECOND: 60
};

var barParams = {
  WIDTH: 40,
  MAXHEIGHT: 150,
  LEFTPOSITION: 150,
  BOTTOMPOSITION: 240,
  GAP: 10,
  YOURCOLOR: 'rgba(255, 0, 0, 1)',
  COLORSATURATION: Math.random().toFixed(1) * 100,
  COMPETITORCOLOR: 'hsl(240, 100%, ' + barParams.COLORSATURATION + '%)'
};
