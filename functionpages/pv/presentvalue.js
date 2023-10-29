//define variables to be used in JS
var ip_FV = 100000;
var ip_YRS = 10;
var ip_DR = 2;
var op_PV = 82035;

//define variables to be used in JS that links with HTML objects
var $FV_rangeslider = $('#js-fv-range');
var $FV_amount = $('#js-fv-input');
var $YRS_rangeslider = $('#js-yrs-range');
var $YRS_amount = $('#js-yrs-input');
var $DR_rangeslider = $('#js-dr-range');
var $DR_amount = $('#js-dr-input');

//function for rangeslider. If this moves, then textvalues and inputbox get updated
$FV_rangeslider.on('input', function() {
  ip_FV = this.value * 1;
  $FV_amount[0].value = this.value;
getPV();
}); 

$FV_amount.on('input', function() {$FV_rangeslider.val(this.value).change();
  ip_FV = this.value * 1;
getPV();
});

//------------
//function for rangeslider. If this moves, then textvalues and inputbox get updated
$YRS_rangeslider.on('input', function() {
  ip_YRS = this.value * 1;
  $YRS_amount[0].value = this.value;
getPV();
}); 

$YRS_amount.on('input', function() {$YRS_rangeslider.val(this.value).change();
  ip_YRS = this.value * 1;
getPV();
});

//------------
$DR_rangeslider.on('input', function() {
  ip_DR = this.value * 1;
  $DR_amount[0].value = this.value;
getPV();
}); 

$DR_amount.on('input', function() {
  $DR_rangeslider.val(this.value).change();
  ip_DR = this.value * 1;
  $("#textdr").html(numberWithCommas(parseFloat(ip_DR).toFixed(0)));  
  getPV();
});
//functions written below this line
//--------------------------------------------------
//function to display numbers with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getPV() {
op_PV = parseFloat(ip_FV / Math.pow((1+ip_DR/100), ip_YRS));
$("#textpv").html("<strong>" + numberWithCommas(parseFloat(op_PV).toFixed(0)) + "</strong>");  
}