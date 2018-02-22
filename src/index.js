module.exports = function solveEquation(equation) {

  var a = equation.substring(0, equation.indexOf("* x^2"));
  var b = equation.substring(equation.indexOf("* x^2")+ 5, equation.indexOf("* x "));
  var c = equation.substring(equation.indexOf("* x ")+ 4,equation.length);

  a = Number (a.split(' ').join(""));
  b = Number (b.split(' ').join(""));
  c = Number (c.split(' ').join(""));

  var D = b*b - 4*a*c;
  var x1 = (- b + Math.sqrt(D))/(2*a);
  var x2 = (- b - Math.sqrt(D))/(2*a);
  var solution = [Math.round(x1), Math.round(x2)];
  return solution.sort(function(a,b){return a-b;});  
}
