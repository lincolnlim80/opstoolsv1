//define variables to be used in JS
var ip_Size = 1000;
var ip_PSF = 2000;
var op_Budget = 2000000;
var op_Type = '';
var op_Sqm = '';

//define variables to be used in JS that links with HTML objects
var $Size_rangeslider = $('#js-size-range');
var $Size_amount = $('#js-size-input');
var $PSF_rangeslider = $('#js-psf-range');
var $PSF_amount = $('#js-psf-input');

//function for rangeslider. If this moves, then textvalues and inputbox get updated
$Size_rangeslider.on('input', function() {
  ip_Size = this.value * 1;
  var size = $Size_amount[0].value = this.value;
  op_Sqm = ip_Size / 3.2808 / 3.2808
   $("#textsqft").html("<strong>" + numberWithCommas(ip_Size)+ "</strong>");
   $("#textsqm").html("<strong>" + numberWithCommas(parseFloat(op_Sqm).toFixed(1))+ "</strong>");
getType();
getBudget();  
}); 

$Size_amount.on('input', function() {  $Size_rangeslider.val(this.value).change();
  ip_Size = this.value * 1;
  op_Sqm = ip_Size / 3.2808 / 3.2808
   $("#textsqft").html("<strong>" + numberWithCommas(ip_Size)+ "</strong>");
   $("#textsqm").html("<strong>" + numberWithCommas(parseFloat(op_Sqm).toFixed(1))+ "</strong>");
getType();
getBudget();
});

//------------
$PSF_rangeslider.on('input', function() {
  ip_PSF = this.value * 1;
  var psf = $PSF_amount[0].value = this.value;
   $("#textpsf").html("<strong>" + numberWithCommas(ip_PSF)+ "</strong>");
getBudget();
}); 

$PSF_amount.on('input', function() {
  $PSF_rangeslider.val(this.value).change();
  ip_PSF = this.value * 1;
   $("#textpsf").html("<strong>" + numberWithCommas(ip_PSF)+ "</strong>");
getBudget();
});
//functions written below this line
//--------------------------------------------------
//function to display numbers with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getBudget() {
op_Budget = parseFloat(ip_Size * ip_PSF);
$("#textbudget").html("<strong>" + numberWithCommas(parseFloat(op_Budget).toFixed(0)) + "</strong>");  
}

function getType() {
   if (ip_Size <= 350) {
    op_Type = "Shoebox (or similar)";  
  } else if (ip_Size > 350 && ip_Size <= 500) {
    op_Type = "1 Bedroom (or similar)";  
  } else if (ip_Size > 500 && ip_Size <= 580) {
    op_Type = "1 Bedroom + Study (or similar)";  
  } else if (ip_Size > 580 && ip_Size <= 700) {
    op_Type = "2 Bedroom (or similar)"; 
  } else if (ip_Size > 700 && ip_Size <= 800) {
    op_Type = "2 Bedroom + Study (or similar)"; 
  } else if (ip_Size > 800 && ip_Size <= 1030) {
    op_Type = "3 Bedroom (or similar)"; 
  } else if (ip_Size > 1030 && ip_Size <= 1075) {
    op_Type = "3 Bedroom + Study (or similar)"; 
  }  else if (ip_Size > 1075 && ip_Size <= 1125) {
    op_Type = "3 Bedroom Luxury (or similar)"; 
  } else if (ip_Size > 1125 && ip_Size <= 1275) {
    op_Type = "4 Bedroom (or similar)"; 
  } else if (ip_Size > 1275 && ip_Size <= 1375) {
    op_Type = "4 Bedroom + Study (or similar)"; 
  } else if (ip_Size > 1375 && ip_Size <= 1500) {
    op_Type = "4 Bedroom Luxury (or similar)"; 
  } else if (ip_Size > 1500 && ip_Size <= 2150) {
    op_Type = "5 Bedroom (or similar)"; 
  } else if (ip_Size > 1500) {
    op_Type = "Penthouse (or similar)"; 
  }
   $("#texttype").html("<strong>" + op_Type + "</strong>");
}