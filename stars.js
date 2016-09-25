const space = function(a) {
  if (a === 0) { 
    return "";
  }
  return " " + space(a - 1);
};

const stars = function(b) {
  if (b === 0) {
    return "";
  }
  return "*" + stars(b - 1);
};

const add = function(a, b, c) {
  if (c === 0) {
    return "";
  }
  console.log(space(a) + stars(b));
  add(a - 1, b + 2, c - 1);
};
const triangleStars = function (c) {
  add(c - 1, 1, c);
};
triangleStars(5);