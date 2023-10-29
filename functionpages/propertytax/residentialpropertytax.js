//define variables to be used in JS
var ip_AnnualValue = 24000;
var ip_Occupancy = 1;
var op_PropertyTax = 580;

//define variables to be used in JS that links with HTML objects
var $AnnualValue_rangeslider = $('#js-av-range');
var $AnnualValue_amount = $('#js-av-input');
var $Occupancy_rangeslider = $('#js-occupancy-range');

//function for rangeslider. If this moves, then textvalues and inputbox get updated
$AnnualValue_rangeslider.on('input', function() {
  var annualvalue = $AnnualValue_amount[0].value = this.value;
  var annualvalue_text = parseInt(annualvalue);
  ip_AnnualValue = annualvalue_text;
    $("#textav").html("<strong>" + numberWithCommas(ip_AnnualValue.toFixed(0)) + "</strong>");
    if (ip_Occupancy == 1) {
      getPropertyTaxOwner();
     } else if (ip_Occupancy == 2) {
       getPropertyTaxNonOwner();
     } 
   });

//function for input box. If this changes, then range slider and textvalues get updated
$AnnualValue_amount.on('input', function() {
  $AnnualValue_rangeslider.val(this.value).change();
  ip_AnnualValue = this.value * 1;
  $("#textav").html("<strong>" + numberWithCommas(ip_AnnualValue.toFixed(0)) + "</strong>");
  if (ip_Occupancy == 1) {
    getPropertyTaxOwner();
   } else if (ip_Occupancy == 2) {
     getPropertyTaxNonOwner();
   } 
 });

//------------
$Occupancy_rangeslider.on('input', function() {
  ip_Occupancy = this.value;
   if (ip_Occupancy == 1) {
    $("#textoccupancy").html("<strong>" + "Owner"+ "</strong>");
    getPropertyTaxOwner();
  } else if (ip_Occupancy == 2) {
    $("#textoccupancy").html("<strong>" + "Non-Owner"+ "</strong>");
    getPropertyTaxNonOwner();
  } 
}); 


//functions written below this line
//--------------------------------------------------
//function to display numbers with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getPropertyTaxOwner() {
  if (ip_AnnualValue <= 8000) {
    op_PropertyTax = 0;
  } else if (ip_AnnualValue >8000 && ip_AnnualValue <= 30000) {
    op_PropertyTax = (0) + (ip_AnnualValue-8000) * 0.04;
  } else if (ip_AnnualValue >30000 && ip_AnnualValue <= 40000) {
    op_PropertyTax = (880) + (ip_AnnualValue-30000) * 0.06;
  } else if (ip_AnnualValue >40000 && ip_AnnualValue <= 55000) {
    op_PropertyTax = (1480) + (ip_AnnualValue-40000) * 0.1;
  } else if (ip_AnnualValue >55000 && ip_AnnualValue <= 70000) {
    op_PropertyTax = (2980) + (ip_AnnualValue-55000) * 0.14;
  } else if (ip_AnnualValue >70000 && ip_AnnualValue <= 85000) {
    op_PropertyTax = (5080) + (ip_AnnualValue-70000) * 0.2;
  } else if (ip_AnnualValue >85000 && ip_AnnualValue <= 100000) {
    op_PropertyTax = (8080) + (ip_AnnualValue-85000) * 0.26;
  } else if (ip_AnnualValue >100000) {
    op_PropertyTax = (11980) + (ip_AnnualValue-100000) * 0.32;
  } 
  $("#textpropertytax").html("<strong>" + numberWithCommas(parseFloat(op_PropertyTax.toFixed(2)) + "</strong>"));
}


function getPropertyTaxNonOwner() {
  if (ip_AnnualValue <= 30000) {
    op_PropertyTax = ip_AnnualValue * 0.12;
  } else if (ip_AnnualValue >30000 && ip_AnnualValue <= 45000) {
    op_PropertyTax = (3600) + (ip_AnnualValue-30000) * 0.2;
  } else if (ip_AnnualValue >45000 && ip_AnnualValue <= 60000) {
    op_PropertyTax = (6600) + (ip_AnnualValue-45000) * 0.28;
  } else if (ip_AnnualValue >60000) {
    op_PropertyTax = (10800) + (ip_AnnualValue-60000) * 0.36;
  } 
  $("#textpropertytax").html("<strong>" + numberWithCommas(parseFloat(op_PropertyTax.toFixed(2)) + "</strong>"));
}