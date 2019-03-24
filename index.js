console.log('hi');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const MID = canvas.height / 2;

// ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
function drawCirc(from, to, high) {
  const radius = Math.abs(to - from) / 2;
  const start = to + (from - to) / 2;
  ctx.beginPath();
  if (!high) {
    ctx.arc(start + 4, MID, radius, Math.PI, 0);
  } else {
    ctx.arc(start + 4, MID, radius, 0, Math.PI);
  }
  ctx.stroke();
}
ctx.lineWidth = 2.0;

const s = new Set();
let i = 1;
let n = 0;
let max = 0;
while (i < 600) {
  let nn = n - i;
  if (nn < 1 || s.has(nn)) {
    nn = n + i;
  }
  drawCirc(n, nn, !!(i % 2));
  s.add(n);
  n = nn;
  i += 1;
  if (n > max) {
    max = n;
  }
  console.log(i, n, max);
}
