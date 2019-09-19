'use strict';

(function () {
  window.renderStatistics = function (canvas, userNames, timeSpend) {
    this.ctx = canvas;
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    this.ctx.fillRect(110, 20, 420, 270);

    this.ctx.fillStyle = '#fff';
    this.ctx.fillRect(100, 10, 420, 270);

    this.ctx.fillStyle = '#000';
    this.ctx.font = 'bold 16px PT Mono';
    this.ctx.fillText('Ура вы победили!', 120, 40);

    this.ctx.fillStyle = '#000';
    this.ctx.font = 'bold 16px PT Mono';
    this.ctx.fillText('Список результатов:', 120, 60);

    var names = [];
    var times = [];
    // Копируем элементы массивов
    for (var i = 0; i < userNames.length; i++) {
      names[i] = userNames[i];
      times[i] = Math.round(timeSpend[i]);
    }
    // Копируем элементы массивов

    // Максимальный результат
    var gistMaxTime = 0;
    for (var j = 0; j < names.length; j++) {
      if (gistMaxTime < times[j]) {
        gistMaxTime = times[j];
      }
    }
    // Максимальный результат

    // Отрисовка гистограммы
    var gistMargin = 150;
    for (var p = 0; p < names.length; p++) {
      var gistPercent = Math.round(times[p] * 100 / gistMaxTime);
      var gistHeight = Math.round(140 * gistPercent / 100);
      var gistTimePosition = 240 - gistHeight - 10;
      var gistColor = Math.random().toFixed(1) * 100;

      this.ctx.fillStyle = '#000';
      this.ctx.font = 'bold 16px PT Mono';
      this.ctx.fillText(names[p], gistMargin, 260);

      this.ctx.fillStyle = 'hsl(240, 100%, ' + gistColor + '%)';
      if (names[p] === 'Вы') {
        this.ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      }
      this.ctx.fillRect(gistMargin, 240, 40, -gistHeight);

      this.ctx.fillStyle = '#000';
      this.ctx.font = 'bold 16px PT Mono';
      this.ctx.fillText(times[p], gistMargin, gistTimePosition);
      gistMargin += 90;
    }
    // Отрисовка гистограммы
  };
})();
