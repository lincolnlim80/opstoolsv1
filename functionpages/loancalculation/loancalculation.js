//define variables to be used in JS
var ip_Price = 1000000;
var ip_LTV = 75;
var ip_Age = 40;
var op_Loan = 750000;
var op_CPF = 200000;
var op_Cash = 50000;
var ip_check2 = "0";
var ip_check3 = "1";
var ip_cpfpc = 20;
var ip_cashpc = 5;
var op_Repay = 3959;
var ip_Rate = 4;
var ip_Tenure = 25;
var ip_facility = "Private - Bank Loan";
var ip_numprop = "1#";
var ip_firstloanyr = "15";
var ip_remainlease = "50";
var ip_totincome = 15000;
var ip_totproploan = 1000000;
var ip_totliab = 3959;
var op_msrpc = 26.3;
var op_tdsrpc = 26.3;


//define variables to be used in JS that links with HTML objects
var $facility_rangeslider = $('#js-facility-range');
var $numprop_rangeslider = $('#js-numprop-range');
var $remainlease_rangeslider = $('#js-remainlease-range');
var $Price_rangeslider = $('#js-price-range');
var $Price_amount = $('#js-price-input');
var $LTV_rangeslider = $('#js-ltv-range');
var $LTV_amount = $('#js-ltv-input');
var $Rate_rangeslider = $('#js-rate-range');
var $Rate_amount = $('#js-rate-input');
var $Tenure_rangeslider = $('#js-tenure-range');
var $Tenure_amount = $('#js-tenure-input');
var $Age_rangeslider = $('#js-age-range');
var $Age_amount = $('#js-age-input');
var $firstloanyr_rangeslider = $('#js-firstloanyr-range');
var $firstloanyr_amount = $('#js-firstloanyr-input');
var $Totincome_rangeslider = $('#js-totincome-range');
var $Totincome_amount = $('#js-totincome-input');
var $totproploan_rangeslider = $('#js-totproploan-range');
var $totproploan_amount = $('#js-totproploan-input');
var $Totliab_rangeslider = $('#js-totliab-range');
var $Totliab_amount = $('#js-totliab-input');

//checkbox
// Bind function to onclick event for checkbox
//refinance checkbox
document.getElementById('check2').onclick = function() {
    // access properties using this keyword
    if ( this.checked ) {
        // Returns true if checked
       ip_check2 = "1";
    } else {
        // Returns false if not checked
       ip_check2 = "0";
    }
reassessLTVTenure();
getLoan();
};

// Bind function to onclick event for checkbox
// max LTV check box
document.getElementById('check3').onclick = function() {
    // access properties using this keyword
    if ( this.checked ) {
        // Returns true if checked
       ip_check3 = "1"; 
    } else {
        // Returns false if not checked
       ip_check3 = "0"; 
    }
reassessLTVTenure();
getLoan();
};

//end checkbox

//function for rangeslider. If this moves, then textvalues and inputbox get updated
//------------
$facility_rangeslider.on('input', function() {
  var facility = this.value * 1;
  
    if (facility == 1) {
    ip_facility = "Private - Bank Loan";
  } else if (facility == 2) {
    ip_facility = "HDB - Bank Loan";
  } else if (facility == 3) {
    ip_facility = "HDB - HDB Loan";
  }
  $("#textfacility").html("<strong>" + ip_facility + "</strong>");
reassessLTVTenure();
getLoan();
}); 

$Age_rangeslider.on('input', function() {
  ip_Age = this.value * 1;
  var age = $Age_amount[0].value = this.value;
reassessLTVTenure();
getLoan();
}); 

$Age_amount.on('input', function() {  $Age_rangeslider.val(this.value).change();
  ip_Age = this.value * 1;
reassessLTVTenure();
getLoan();
});


$numprop_rangeslider.on('input', function() {
  var numprop = this.value * 1;
  
    if (numprop == 1) {
    ip_numprop = "1#";
  } else if (numprop == 2) {
    ip_numprop = "2#";
  } else if (numprop == 3) {
    ip_numprop = ">2#";
  }
  $("#textnumprop").html("<strong>" + ip_numprop + "</strong>");
reassessLTVTenure();
getLoan();
}); 


$remainlease_rangeslider.on('input', function() {
  ip_remainlease = this.value * 1;
  $("#textremainlease").html("<strong>" + ip_remainlease + "</strong>");
reassessLTVTenure();
getLoan();
}); 


$firstloanyr_rangeslider.on('input', function() {
  ip_firstloanyr = this.value * 1;
  var firstloanyr = $firstloanyr_amount[0].value = this.value;
reassessLTVTenure();
getLoan();
}); 

$firstloanyr_amount.on('input', function() {  $firstloanyr_rangeslider.val(this.value).change();
  ip_firstloanyr = this.value * 1;
reassessLTVTenure();
getLoan();
});


$Price_rangeslider.on('input', function() {
  ip_Price = this.value * 1;
  var price = $Price_amount[0].value = this.value;
   $("#textprice").html("<strong>" + numberWithCommas(ip_Price)+ "</strong>");
getLoan();
}); 

$Price_amount.on('input', function() {  $Price_rangeslider.val(this.value).change();
  ip_Price = this.value * 1;
   $("#textprice").html("<strong>" + numberWithCommas(ip_Price)+ "</strong>");
getLoan();
});

//------------
$LTV_rangeslider.on('input', function() {
  ip_LTV = this.value * 1;
  ip_cashpc = 5;
  ip_cpfpc = 100 - ip_LTV - ip_cashpc;
var ltv = $LTV_amount[0].value = this.value;  
   $("#textltv").html("<strong>" + numberWithCommas(ip_LTV)+ "</strong>");
getLoan();
}); 
 
$LTV_amount.on('input', function() {
  $LTV_rangeslider.val(this.value).change();
  ip_LTV = this.value * 1;
  ip_cashpc = 5;
  ip_cpfpc = 100 - ip_LTV - ip_cashpc;
   $("#textltv").html("<strong>" + numberWithCommas(ip_LTV)+ "</strong>");
getLoan();
});

$Rate_rangeslider.on('input', function() {
  ip_Rate = this.value * 1;
  var rate = $Rate_amount[0].value = this.value; 
   $("#textrate").html("<strong>" + numberWithCommas(ip_Rate)+ "</strong>");
getLoan();
}); 

$Rate_amount.on('input', function() {  $Rate_rangeslider.val(this.value).change();
  ip_Rate = this.value * 1;
   $("#textrate").html("<strong>" + numberWithCommas(ip_Rate)+ "</strong>");
getLoan();
});

$Tenure_rangeslider.on('input', function() {
  ip_Tenure = this.value * 1;
  var tenure = $Tenure_amount[0].value = this.value; 
   $("#texttenure").html("<strong>" + numberWithCommas(ip_Tenure)+ "</strong>");
getLoan();
}); 

$Tenure_amount.on('input', function() {  $Tenure_rangeslider.val(this.value).change();
  ip_Tenure = this.value * 1;
   $("#texttenure").html("<strong>" + numberWithCommas(ip_Tenure)+ "</strong>");
getLoan();
});


//functions written below this line
//--------------------------------------------------
//function to display numbers with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// function to reassess LTV and Tenure
function reassessLTVTenure() {
if (ip_check3 == "1") {
  //for max LTV,
        if (ip_facility == "Private - Bank Loan") {
          var ltvcheck = 75;
          ip_cashpc = 5;
          ip_cpfpc = 20;
                if (ip_numprop === "1#") {
                ltvcheck = 75;
                ip_cashpc = 5;
                ip_cpfpc = 20;
                }
                if (ip_numprop === "2#") {
                ltvcheck = 45;
                ip_cashpc = 25;
                ip_cpfpc = 30;
                }
                if (ip_numprop === ">2#") {
                ltvcheck = 35;
                ip_cashpc = 25;
                ip_cpfpc = 40;
                }
                if (ltvcheck > 60 && Number(ip_remainlease) <= 40){
                ltvcheck = 60;
                ip_cashpc = 5;
                ip_cpfpc = 35;
                }
          ip_LTV = ltvcheck;
          $LTV_rangeslider.val(ip_LTV).change();
          $LTV_amount[0].value = ip_LTV;
          var tenurecheck = Math.min(65-ip_Age , 30);
              if (ip_check2 == "1") {
              tenurecheck = Math.min(75-ip_Age , 35 - ip_firstloanyr);
              }
          ip_Tenure = tenurecheck;
          $Tenure_rangeslider.val(ip_Tenure).change();
          $Tenure_amount[0].value = ip_Tenure;
        } else if (ip_facility == "HDB - Bank Loan") {
          var ltvcheck = 75;
          ip_cashpc = 5;
          ip_cpfpc = 20;
          if (ip_numprop === "1#") {
                if (Number(ip_remainlease) <= 40){
                    ltvcheck = 60;
                    ip_cashpc = 5;
                    ip_cpfpc = 35;
                    }
            ip_LTV = ltvcheck;
            $LTV_rangeslider.val(ip_LTV).change();
            $LTV_amount[0].value = ip_LTV;
            var tenurecheck = Math.min(65-ip_Age , 25);
                if (ip_check2 == "1") {
                tenurecheck = Math.min(75-ip_Age , 30 - ip_firstloanyr);
                }
            ip_Tenure = tenurecheck;
            $Tenure_rangeslider.val(ip_Tenure).change();
            $Tenure_amount[0].value = ip_Tenure;
            } else if (ip_numprop === "2#") {
                alert("Must dispose HDB first.");
                ip_numprop = "1#";
                $numprop_rangeslider.val(1).change();
                $("#textnumprop").html("<strong>" + ip_numprop + "</strong>");
            } else if (ip_numprop === ">2#") {
                alert("Must dispose HDB first.");
                ip_numprop = "1#";
                $numprop_rangeslider.val(1).change();
                $("#textnumprop").html("<strong>" + ip_numprop + "</strong>");
            }
        } else if (ip_facility == "HDB - HDB Loan") {
          ip_LTV = "80";
          ip_cashpc = 5;
          ip_cpfpc = 15;          
          $LTV_rangeslider.val(ip_LTV).change();
          $LTV_amount[0].value = ip_LTV;
          var tenurecheck = Math.min(25 , 65-ip_Age , ip_remainlease - 20);
          if (ip_check2 == "1") {
              alert("HDB loan does not offer refinance");
            // Uncheck
            document.getElementById('check2').checked = false;
            ip_check2 = "0";
          }
          ip_Tenure = tenurecheck;
          $Tenure_rangeslider.val(ip_Tenure).change();
          $Tenure_amount[0].value = ip_Tenure;
        }

} else {
  //for max Tenure,
        if (ip_facility == "Private - Bank Loan") {
          var ltvcheck = 55;
          ip_cashpc = 10;
          ip_cpfpc = 35;
                if (ip_numprop === "1#") {
                ltvcheck = 55;
                ip_cashpc = 10;
                ip_cpfpc = 35;
                }
                if (ip_numprop === "2#") {
                ltvcheck = 25;
                ip_cashpc = 25;
                ip_cpfpc = 50;
                }
                if (ip_numprop === ">2#") {
                ltvcheck = 15;
                ip_cashpc = 25;
                ip_cpfpc = 60;
                }
          ip_LTV = ltvcheck;
          $LTV_rangeslider.val(ip_LTV).change();
          $LTV_amount[0].value = ip_LTV;
          var tenurecheck = 35;
              if (ip_check2 == "1") {
              tenurecheck = Math.min(75-ip_Age , 35 - ip_firstloanyr);
              }
          ip_Tenure = tenurecheck;
          $Tenure_rangeslider.val(ip_Tenure).change();
          $Tenure_amount[0].value = ip_Tenure;
        } else if (ip_facility == "HDB - Bank Loan") {
          var ltvcheck = 55;
          ip_cashpc = 10;
          ip_cpfpc = 35;
          ip_LTV = ltvcheck;
          $LTV_rangeslider.val(ip_LTV).change();
          $LTV_amount[0].value = ip_LTV;
          var tenurecheck = 30;
              if (ip_check2 == "1") {
              tenurecheck = Math.min(75-ip_Age , 30 - ip_firstloanyr);
              }
          ip_Tenure = tenurecheck;
          $Tenure_rangeslider.val(ip_Tenure).change();
          $Tenure_amount[0].value = ip_Tenure;
        } else if (ip_facility == "HDB - HDB Loan") {
          ip_LTV = "80";
          $LTV_rangeslider.val(ip_LTV).change();
          $LTV_amount[0].value = ip_LTV;
          var tenurecheck = Math.min(25 , 65-ip_Age , ip_remainlease - 20);
          ip_Tenure = tenurecheck;
          $Tenure_rangeslider.val(ip_Tenure).change();
          $Tenure_amount[0].value = ip_Tenure;
        }
}
}
  
function getLoan() {
op_Loan = parseFloat(ip_Price * ip_LTV/100);
op_CPF = parseFloat(ip_Price * ip_cpfpc/100);
op_Cash = parseFloat(ip_Price * ip_cashpc/100);

op_Repay = Math.round(op_Loan * ip_Rate/100/12* (1+ip_Rate/100/12)**(ip_Tenure*12)/((1+ip_Rate/100/12)**(ip_Tenure*12)-1));
  
//  set ip_totproploan and ip_totliab
ip_totproploan = op_Repay
$totproploan_amount[0].value = ip_totproploan 
$totproploan_rangeslider.val(ip_totproploan).change();
assessMSR();
ip_totliab = op_Repay
$Totliab_amount[0].value = ip_totliab
$Totliab_rangeslider.val(ip_totliab).change();
assessTDSR();
// 
  
$("#textloan").html("<strong>" + numberWithCommas(parseFloat(op_Loan).toFixed(0)) + "</strong>");  
$("#textrepay").html("<strong>" + numberWithCommas(parseFloat(op_Repay).toFixed(0)) + "</strong>");
$("#textltvpc").html("<strong>" + numberWithCommas(parseFloat(ip_LTV).toFixed(0)) + "</strong>");  
$("#textcpf").html("<strong>" + numberWithCommas(parseFloat(op_CPF).toFixed(0)) + "</strong>");  
$("#textcpfpc").html("<strong>" + numberWithCommas(parseFloat(ip_cpfpc).toFixed(0)) + "</strong>");  
$("#textcash").html("<strong>" + numberWithCommas(parseFloat(op_Cash).toFixed(0)) + "</strong>");  
$("#textcashpc").html("<strong>" + numberWithCommas(parseFloat(ip_cashpc).toFixed(0)) + "</strong>");  
}

//-- Loan Assessment
$Totincome_rangeslider.on('input', function() {
  ip_totincome = this.value * 1;
  var totincome = $Totincome_amount[0].value = this.value;
   $("#texttotincome").html("<strong>" + numberWithCommas(ip_totincome)+ "</strong>");
assessMSR();
assessTDSR();
}); 

$Totincome_amount.on('input', function() {  $Totincome_rangeslider.val(this.value).change();
  ip_totincome = this.value * 1;
   $("#texttotincome").html("<strong>" + numberWithCommas(ip_totincome)+ "</strong>");
assessMSR();
assessTDSR();
});

$totproploan_rangeslider.on('input', function() {
  ip_totproploan = this.value * 1;
  var totproploan = $totproploan_amount[0].value = this.value;
   $("#texttotproploan").html("<strong>" + numberWithCommas(ip_totproploan)+ "</strong>");
assessMSR();
  //  set ip_totliab
ip_totliab = ip_totproploan
$Totliab_amount[0].value = ip_totliab
$Totliab_rangeslider.val(ip_totliab).change();
assessTDSR();
// 

  
}); 

$totproploan_amount.on('input', function() {  $totproploan_rangeslider.val(this.value).change();
  ip_totproploan = this.value * 1;
   $("#texttotproploan").html("<strong>" + numberWithCommas(ip_totproploan)+ "</strong>");
assessMSR();
  //  set ip_totliab
ip_totliab = ip_totproploan
$Totliab_amount[0].value = ip_totliab
$Totliab_rangeslider.val(ip_totliab).change();
assessTDSR();
});

$Totliab_rangeslider.on('input', function() {
  ip_totliab = this.value * 1;
  var totliab = $Totliab_amount[0].value = this.value;
   $("#texttotliab").html("<strong>" + numberWithCommas(ip_totliab)+ "</strong>");
assessTDSR();
}); 

$Totliab_amount.on('input', function() {  
  $Totliab_rangeslider.val(this.value).change();
  ip_totliab = this.value * 1;
   $("#texttotliab").html("<strong>" + numberWithCommas(ip_totliab)+ "</strong>");
assessTDSR();
});




//-- msr and tdsr assessment
function assessMSR() {
  op_msrpc = ip_totproploan / ip_totincome*100;
  op_msrpc = Math.round(op_msrpc * 100) / 100
  if (op_msrpc <= 30) {
       $("#textmsr").html("<strong>" + "PASSED" + "</strong>");
       $("#textmsrpc").html("<strong>" + "(" + op_msrpc + ")" + "</strong>");
} else {
       $("#textmsr").html("<strong>" + "FAILED" + "</strong>");
       $("#textmsrpc").html("<strong>" + "(" + op_msrpc + ")" + "</strong>");
}
}

function assessTDSR() {
  op_tdsrpc = ip_totliab / ip_totincome*100;
  op_tdsrpc = Math.round(op_tdsrpc * 100) / 100
  if (op_tdsrpc <= 55) {
       $("#texttdsr").html("<strong>" + "PASSED" + "</strong>");
       $("#texttdsrpc").html("<strong>" + "(" + op_tdsrpc + ")" + "</strong>");
} else {
       $("#texttdsr").html("<strong>" + "FAILED" + "</strong>");
       $("#texttdsrpc").html("<strong>" + "(" + op_tdsrpc + ")" + "</strong>");
}
}