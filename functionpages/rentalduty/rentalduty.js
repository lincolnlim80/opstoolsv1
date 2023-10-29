//define variables to be used in JS
var ip_RentalFee = '4000';
var ip_NumYears = '2';
var op_TotalDuty = '384';

//define variables to be used in JS that links with HTML objects
var $RentalFee_rangeslider = $('#js-amount-range');
var $RentalFee_amount = $('#js-amount-input');
var $NumYears_rangeslider = $('#js-numyears-range');

//function for rangeslider. If this moves, then textvalues and inputbox get updated
$RentalFee_rangeslider.on('input', function() {
  var rentalfee = $RentalFee_amount[0].value = this.value;
  var rentalfee_text = parseInt(rentalfee);
  ip_RentalFee = rentalfee_text;
    $("#textrentalfee").html("<strong>" + numberWithCommas(ip_RentalFee.toFixed(0)) + "</strong>");
getTotalDuty()
});

//function for input box. If this changes, then range slider and textvalues get updated
$RentalFee_amount.on('input', function() {
  $RentalFee_rangeslider.val(this.value).change();
  ip_RentalFee = this.value * 1;
  $("#textrentalfee").html("<strong>" + numberWithCommas(ip_RentalFee.toFixed(0)) + "</strong>");
getTotalDuty()
});

//------------
$NumYears_rangeslider.on('input', function() {
  ip_NumYears = this.value * 1;
   $("#textnumyears").html("<strong>" + ip_NumYears.toFixed(0)+ "</strong>");
getTotalDuty()
}); 


//functions written below this line
//--------------------------------------------------
//function to display numbers with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getTotalDuty() {
op_TotalDuty = parseFloat(ip_RentalFee * ip_NumYears * 12 * 0.004);
$("#texttotalduty").html("<strong>" + numberWithCommas(parseFloat(op_TotalDuty).toFixed(0)) + "</strong>");  // got to parse as op_ABSD was not a number
  
}