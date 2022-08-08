const SCORECARD_X = 400;
const SCORECARD_Y = BG;
const SCORECARD_LABEL_X_OFFSET = 40;
let SCORECARD_LABEL_Y_OFFSET = 60;
const SCORECARD_TEXT_HEIGHT = 40;

function drawScorecard() {
  stroke('black');
  rect(BG, 0, SCORECARD_X, SCORECARD_Y);

  strokeWeight(1);
  textSize(16);
  text('Key Metrics', BG + SCORECARD_LABEL_X_OFFSET, SCORECARD_LABEL_Y_OFFSET);
}

function addToScorecard(metricName, score) {
  fill('black');
  strokeWeight(0.5);
  textSize(14);
  // move down to the next column
  SCORECARD_LABEL_Y_OFFSET += SCORECARD_TEXT_HEIGHT;
  text(metricName, BG + SCORECARD_LABEL_X_OFFSET, SCORECARD_LABEL_Y_OFFSET);
  text(score.toFixed(2), BG + SCORECARD_X - SCORECARD_LABEL_X_OFFSET * 2, SCORECARD_LABEL_Y_OFFSET);
}