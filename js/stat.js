'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    'rgba(0, 0, 0, 0.3)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );
  ctx.fillStyle = '#000';
  ctx.font = `16pt PT Mono`;
  ctx.textBaseline = 'hanging';
  ctx.fillText(`Ура вы победили!`, 120, 30);
  ctx.fillText(`Список результатов: `, 120, 50);

  var maxTime = getMaxElement(times);
  var colorColumns = ['rgba(255, 0, 0, 1)', 'hsl(244, 90%, 19%)', 'hsl(240, 3%, 41%)', 'hsl(252, 4%, 24%)'];

  for (var i = 0; i < players.length && i < colorColumns.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(
      players[i],
      CLOUD_X + TEXT_WIDTH + (TEXT_WIDTH + TEXT_WIDTH) * i, 
      CLOUD_HEIGHT - CLOUD_Y - GAP
    );
    ctx.fillStyle = colorColumns[i];
    ctx.fillRect(
      CLOUD_X + TEXT_WIDTH + (TEXT_WIDTH + TEXT_WIDTH) * i, 
      CLOUD_HEIGHT - GAP - FONT_GAP - GAP - (BAR_HEIGHT * times[i] / maxTime),
      BAR_WIDTH,
      BAR_HEIGHT * times[i] / maxTime
    );
    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + TEXT_WIDTH + (TEXT_WIDTH + TEXT_WIDTH) * i, 
      CLOUD_HEIGHT - GAP - FONT_GAP - GAP - (BAR_HEIGHT * times[i] / maxTime) - GAP * 2,
      BAR_WIDTH
    );
  }
};