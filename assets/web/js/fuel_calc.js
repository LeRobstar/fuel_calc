function calc_total_costs() {
  var dist = $("#distance").val();
  var csmp = $("#consumption").val();
  var price = $("#price").val();
  var pcnt = $("#person_count").val();

  var output = (dist * csmp * price) / (pcnt * 100);

  $("#total_costs").text(output);
}

$(document).ready(function() {
  calc_total_costs();

  $("input").on( "change", calc_total_costs);
});
