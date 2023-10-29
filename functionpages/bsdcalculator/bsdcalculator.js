//define variables to be used in JS
var ip_PropertyPrice = '1000000';
var ip_NumProperties = '1';
var ip_Citizenship = 'Singaporean';
var op_BSD = '24,600';
var op_ABSD = '0';
var op_BSDpc = 2.46;
var op_ABSDpc = 0;
var op_totaldutypc = 2.46;


//define variables to be used in JS that links with HTML objects
var $PropertyPrice_rangeslider = $('#js-amount-range');
var $PropertyPrice_amount = $('#js-amount-input');
var $NumProp_rangeslider = $('#js-numprop-range');
var $Citizen_rangeslider = $('#js-citizen-range');

//function for rangeslider. If this moves, then textvalues and inputbox get updated
$PropertyPrice_rangeslider.on('input', function() {
  var propprice = $PropertyPrice_amount[0].value = this.value;
  var propprice_text = parseInt(propprice);
  ip_PropertyPrice = propprice_text;
  $("#textpropprice").html("<strong>" + numberWithCommas(ip_PropertyPrice.toFixed(0)) + "</strong>");
getBSD();
getABSD();    
});

//function for input box. If this changes, then range slider and textvalues get updated
$PropertyPrice_amount.on('input', function() {
  $PropertyPrice_rangeslider.val(this.value).change();
  ip_PropertyPrice = this.value * 1;  //interestingly need a multiplier for the value in ip_PropertyPrice to update and display correctly
  $("#textpropprice").html("<strong>" + numberWithCommas(ip_PropertyPrice.toFixed(0)) + "</strong>");
getBSD();
getABSD();  
});

//------------
$NumProp_rangeslider.on('input', function() {
  ip_NumProperties = this.value * 1;
    if (ip_NumProperties == 3) {
       $("#textnumprop").html("<strong>" + ">" + ip_NumProperties.toFixed(0)+ "</strong>");
  } else {
       $("#textnumprop").html("<strong>" + ip_NumProperties.toFixed(0)+ "</strong>");
  }  
getBSD();
getABSD();  
}); 
//------------
$Citizen_rangeslider.on('input', function() {
  var citizenship = this.value * 1;
  
    if (citizenship == 1) {
    ip_Citizenship = "Singaporean";
  } else if (citizenship == 2) {
    ip_Citizenship = "SPR";
  } else if (citizenship == 3) {
    ip_Citizenship = "Foreigner";
  } else if (citizenship == 4) {
    ip_Citizenship = "Entities";
  } else if (citizenship == 5) {
    ip_Citizenship = "Housing Dev.";
  }
  $("#textcitizen").html("<strong>" + ip_Citizenship + "</strong>");
getBSD();
getABSD();
}); 

//functions written below this line
//--------------------------------------------------
//function to display numbers with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getVal(y) {
  const val = document.querySelector('input').value;
  console.log(val);
}


function getBSD() {
  if (ip_PropertyPrice <= 180000) {
    op_BSD = ip_PropertyPrice * 0.01;
  } else if (ip_PropertyPrice >180000 && ip_PropertyPrice <= 360000) {
    op_BSD = (180000 * 0.01) + (ip_PropertyPrice-180000) * 0.02;
  } else if (ip_PropertyPrice >360000 && ip_PropertyPrice <= 1000000) {
    op_BSD = (180000 * 0.01) + (180000 * 0.02) + (ip_PropertyPrice-360000) * 0.03;
  } else if (ip_PropertyPrice >1000000 && ip_PropertyPrice <= 1500000) {
    op_BSD = (180000 * 0.01) + (180000 * 0.02) + (640000 * 0.03) + (ip_PropertyPrice-1000000) * 0.04;
  } else if (ip_PropertyPrice >1500000 && ip_PropertyPrice <= 3000000) {
    op_BSD = (180000 * 0.01) + (180000 * 0.02) + (640000 * 0.03) + (500000 * 0.04) + (ip_PropertyPrice-1500000) * 0.05;
  } else if (ip_PropertyPrice >3000000) {
    op_BSD = (180000 * 0.01) + (180000 * 0.02) + (640000 * 0.03) + (500000 * 0.04) + (1500000 * 0.05) + (ip_PropertyPrice-3000000) * 0.06;
  } 

op_BSDpc = op_BSD/ip_PropertyPrice*100
  
$("#textbsdpc").html("<strong>" + numberWithCommas(parseFloat(op_BSDpc).toFixed(2)) + "</strong>");

$("#textbsd").html("<strong>" + numberWithCommas(parseFloat(op_BSD).toFixed(0)) + "</strong>");
}

function getABSD() {
  
 if (ip_Citizenship === "Singaporean" && ip_NumProperties == 1) {
    op_ABSD = ip_PropertyPrice * 0;
  } else if (ip_Citizenship === "Singaporean" && ip_NumProperties == 2) {
    op_ABSD = ip_PropertyPrice * 0.20;
  } else if (ip_Citizenship === "Singaporean" && ip_NumProperties > 2) {
    op_ABSD = ip_PropertyPrice * 0.30;
  } else if (ip_Citizenship === "SPR" && ip_NumProperties == 1) {
    op_ABSD = ip_PropertyPrice * 0.05;
  } else if (ip_Citizenship === "SPR" && ip_NumProperties == 2) {
    op_ABSD = ip_PropertyPrice * 0.30;
  } else if (ip_Citizenship === "SPR" && ip_NumProperties > 2) {
    op_ABSD = ip_PropertyPrice * 0.35;
  } else if (ip_Citizenship === "Foreigner" && ip_NumProperties > 0) {
    op_ABSD = ip_PropertyPrice * 0.60;
  } else if (ip_Citizenship === "Entities" && ip_NumProperties > 0) {
    op_ABSD = ip_PropertyPrice * 0.65;
  } else if (ip_Citizenship === "Housing Dev." && ip_NumProperties > 0) {
    op_ABSD = ip_PropertyPrice * 0.40;
  }
  
op_ABSDpc = op_ABSD/ip_PropertyPrice*100
  
$("#textabsdpc").html("<strong>" + numberWithCommas(parseFloat(op_ABSDpc).toFixed(2)) + "</strong>");
  
$("#textabsd").html("<strong>" + numberWithCommas(parseFloat(op_ABSD).toFixed(0)) + "</strong>");  // got to parse as op_ABSD was not a number
  getTotalDuty()
}



function getTotalDuty() {
  
op_totaldutypc = op_BSDpc + op_ABSDpc;
$("#textotaldutypc").html("<strong>" + numberWithCommas(parseFloat(op_totaldutypc).toFixed(2)) + "</strong>");
  
op_TotalDuty = parseFloat(op_BSD) + parseFloat(op_ABSD);
$("#texttotalduty").html("<strong>" + numberWithCommas(parseFloat(op_TotalDuty).toFixed(0)) + "</strong>");  // got to parse as op_ABSD was not a number
  
}

