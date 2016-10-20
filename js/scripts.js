$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var varSideA = parseInt($("input#sideA").val());
    var varSideB = parseInt($("input#sideB").val());
    var varSideC = parseInt($("input#sideC").val());

    if (varSideA === 0 || varSideB === 0 || varSideC === 0) {
        $('#none').show();
        $('#equilateral').hide();
        $('#isosceles').hide();
        $('#scalene').hide();
      } else if (!varSideA || !varSideB || !varSideC) {
        $('#none').show();
        $('#equilateral').hide();
        $('#isosceles').hide();
        $('#scalene').hide();
      } else if (varSideA === varSideB && varSideB === varSideC) {
        $('#equilateral').show();
        $('#isosceles').hide();
        $('#scalene').hide();
        $('#none').hide();
      } else if (varSideA === varSideB && varSideA != varSideC && varSideA + varSideB > varSideC || varSideA === varSideC && varSideA != varSideB && varSideA + varSideC > varSideB || varSideB === varSideC && varSideA != varSideC && varSideB + varSideC > varSideA) {
        $('#isosceles').show();
        $('#equilateral').hide();
        $('#scalene').hide();
        $('#none').hide();
      } else if (varSideA != varSideB && varSideB != varSideC && varSideA + varSideB > varSideC || varSideA != varSideB && varSideB != varSideC && varSideA + varSideC > varSideB && varSideA != varSideB && varSideB != varSideC && varSideB + varSideC > varSideA) {
        $('#scalene').show();
        $('#isosceles').hide();
        $('#equilateral').hide();
        $('#none').hide();
      } else {
        $('#none').show();
        $('#scalene').hide();
        $('#isosceles').hide();
        $('#equilateral').hide();
      }

    event.preventDefault();
  });
});
