'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 260;
var CLOUD_X = 100;
var CLOUD_Y = 20;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
var colorColumns = ['rgba(255, 0, 0, 1)', 'hsl(244, 90%, 19%)', 'hsl(240, 3%, 41%)', 'hsl(252, 4%, 24%)'];

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
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
  ctx.fillText(
    'Вы',
    CLOUD_X + TEXT_WIDTH, 
    CLOUD_HEIGHT - GAP
  );
  ctx.fillRect(
    CLOUD_X + TEXT_WIDTH, 
    TEXT_WIDTH,
    colorColumns[0]
  );
};