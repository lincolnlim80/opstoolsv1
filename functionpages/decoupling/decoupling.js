/// things to do
// work out inter relationships
// when market value changes redo xx calculation

//define variables to be used in JS
var ip_MV = 1500000;  //current market value
var ip_OL = 200000;  //outstanding loan
var ip_LPCPF_owed = -50000;  //leaving party cpf owef
var ip_SPCPF_saved = 50000;  //staying party cpf saved in oa account
var ip_LPsharepc = 50;  //share of leaving party to be bought by staying party
var ip_SPloanpc = 75; 

var op_LPsharevalue = 750000;
var op_SPsharevalue = -750000;
var op_LPloan = -100000;
var op_SPloan = 562500;
var op_SPcurrentloan = 100000;
var op_LPcashbalance = 600000;
var op_SPcashbalance = -137500;
var op_OverallCashBalance = 0;

//BSD Variables
var dropdown_NumProperties = document.getElementById("NumProperties");
var dropdown_Citizenship = document.getElementById("Citizenship");
var ip_NumProperties = '1';
var ip_Citizenship = 'Singaporean';
var op_BSD = '24,600';
var op_ABSD = '0';
var op_BSDpc = 2.46;
var op_ABSDpc = 0;
var op_totaldutypc = 2.46;

//define variables to be used in JS that links with HTML objects
var $MV_rangeslider = $('#js-mv-range');
var $MV_amount = $('#js-mv-input');
var $OL_rangeslider = $('#js-ol-range');
var $OL_amount = $('#js-ol-input');
var $LPCPF_owed_rangeslider = $('#js-lpcpfowed-range');
var $LPCPF_owed_amount = $('#js-lpcpfowed-input');
var $SPCPF_saved_rangeslider = $('#js-spcpfsaved-range');
var $SPCPF_saved_amount = $('#js-spcpfsaved-input');
var $LP_sharepc_rangeslider = $('#js-lpsharepc-range');
var $LP_sharepc_amount = $('#js-lpsharepc-input');
var $SP_loanpc_amount = $('#js-sploanpc-input');

//function for rangeslider. If this moves, then textvalues and inputbox get updated
$MV_rangeslider.on('input', function() {
  ip_MV = this.value * 1;
  $MV_amount[0].value = this.value;
recalculate(); 
}); 

$MV_amount.on('input', function() {$MV_rangeslider.val(this.value).change();
  ip_MV = this.value * 1;
  recalculate(); 
}); 

$OL_rangeslider.on('input', function() {
    ip_OL = this.value * 1;
    $OL_amount[0].value = this.value;
    recalculate(); 
}); 
  
$OL_amount.on('input', function() {$OL_rangeslider.val(this.value).change();
ip_OL = this.value * 1;
recalculate(); 
}); 

$LPCPF_owed_rangeslider.on('input', function() {
    ip_LPCPF_owed = this.value * 1;
    $LPCPF_owed_amount[0].value = this.value;
    recalculate(); 
}); 
  
$LPCPF_owed_amount.on('input', function() {$LPCPF_owed_rangeslider.val(this.value).change();
ip_LPCPF_owed = this.value * 1;
recalculate(); 
}); 

$SPCPF_saved_rangeslider.on('input', function() {
    ip_SPCPF_saved = this.value * 1;
    $SPCPF_saved_amount[0].value = this.value;
    recalculate(); 
}); 
  
$SPCPF_saved_amount.on('input', function() {$SPCPF_saved_rangeslider.val(this.value).change();
ip_SPCPF_saved = this.value * 1;
recalculate(); 
}); 

$LP_sharepc_rangeslider.on('input', function() {
    ip_LPsharepc = this.value * 1;
    $LP_sharepc_amount[0].value = this.value;
    recalculate(); 
}); 
  
$LP_sharepc_amount.on('input', function() {
    $LP_sharepc_rangeslider.val(this.value).change();
    ip_LPsharepc = this.value * 1;
    recalculate(); 
}); 


$SP_loanpc_amount.on('input', function() {
ip_SPloanpc   = this.value * 1;
recalculate(); 
});

dropdown_NumProperties.addEventListener("change", function() {
    recalculate(); 
});

dropdown_Citizenship.addEventListener("change", function() {
    recalculate(); 
});

//functions written below this line
//--------------------------------------------------
//function to display numbers with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//calculates cash balance
function recalculate() {
    op_LPsharevalue = ip_LPsharepc/100 * ip_MV;
    op_SPsharevalue = ip_MV - op_LPsharevalue;
    $("#output-lpsharesvalue").html(numberWithCommas(parseFloat(op_LPsharevalue).toFixed(0)));
    $("#output-spsharesvalue").html(numberWithCommas(parseFloat(-op_SPsharevalue).toFixed(0)));
    op_LPloan = -ip_LPsharepc/100 * ip_OL;
    $("#output-lploansettlement").html(numberWithCommas(parseFloat(op_LPloan).toFixed(0)));
    op_SPcurrentloan = ip_OL + op_LPloan;
    $("#textspcurrentloan").html(numberWithCommas(parseFloat(op_SPcurrentloan).toFixed(0)));
    op_SPloan = ip_SPloanpc/100 * op_LPsharevalue;
    $("#output-sploansettlement").html(numberWithCommas(parseFloat(op_SPloan).toFixed(0)));
    op_LPcashbalance = op_LPsharevalue + op_LPloan + ip_LPCPF_owed;
    $("#output-lpcashbalance").html(numberWithCommas(parseFloat(op_LPcashbalance).toFixed(0)));
    $("#output-lpcashbalance1").html(numberWithCommas(parseFloat(op_LPcashbalance).toFixed(0)));
    op_SPcashbalance = -op_SPsharevalue + op_SPloan + ip_SPCPF_saved;
    $("#output-spcashbalance").html(numberWithCommas(parseFloat(op_SPcashbalance).toFixed(0)));
    $("#output-spcashbalance1").html(numberWithCommas(parseFloat(op_SPcashbalance).toFixed(0)));

    //determine BSD input values
    ip_NumProperties = dropdown_NumProperties.value;
    ip_Citizenship = dropdown_Citizenship.value;
    //BSD Calculator
    if (op_SPsharevalue <= 180000) {
        op_BSD = op_SPsharevalue * 0.01;
    } else if (op_SPsharevalue >180000 && op_SPsharevalue <= 360000) {
        op_BSD = (180000 * 0.01) + (op_SPsharevalue-180000) * 0.02;
    } else if (op_SPsharevalue >360000 && op_SPsharevalue <= 1000000) {
        op_BSD = (180000 * 0.01) + (180000 * 0.02) + (op_SPsharevalue-360000) * 0.03;
    } else if (op_SPsharevalue >1000000 && op_SPsharevalue <= 1500000) {
        op_BSD = (180000 * 0.01) + (180000 * 0.02) + (640000 * 0.03) + (op_SPsharevalue-1000000) * 0.04;
    } else if (op_SPsharevalue >1500000 && op_SPsharevalue <= 3000000) {
        op_BSD = (180000 * 0.01) + (180000 * 0.02) + (640000 * 0.03) + (500000 * 0.04) + (op_SPsharevalue-1500000) * 0.05;
    } else if (op_SPsharevalue >3000000) {
        op_BSD = (180000 * 0.01) + (180000 * 0.02) + (640000 * 0.03) + (500000 * 0.04) + (1500000 * 0.05) + (op_SPsharevalue-3000000) * 0.06;
    } 

    op_BSDpc = op_BSD/op_SPsharevalue*100
  
    $("#textbsdpc").html(numberWithCommas(parseFloat(op_BSDpc).toFixed(1)));
    $("#textbsd").html(numberWithCommas(parseFloat(op_BSD).toFixed(0)));
    
    //ABSD Calculator
    if (ip_Citizenship === "Singaporean" && ip_NumProperties == 1) {
        op_ABSD = op_SPsharevalue * 0;
    } else if (ip_Citizenship === "Singaporean" && ip_NumProperties == 2) {
        op_ABSD = op_SPsharevalue * 0.20;
    } else if (ip_Citizenship === "Singaporean" && ip_NumProperties > 2) {
        op_ABSD = op_SPsharevalue * 0.30;
    } else if (ip_Citizenship === "SPR" && ip_NumProperties == 1) {
        op_ABSD = op_SPsharevalue * 0.05;
    } else if (ip_Citizenship === "SPR" && ip_NumProperties == 2) {
        op_ABSD = op_SPsharevalue * 0.30;
    } else if (ip_Citizenship === "SPR" && ip_NumProperties > 2) {
        op_ABSD = op_SPsharevalue * 0.35;
    } else if (ip_Citizenship === "Foreigner" && ip_NumProperties > 0) {
        op_ABSD = op_SPsharevalue * 0.60;
    }
    
    op_ABSDpc = op_ABSD/op_SPsharevalue*100
    
    $("#textabsdpc").html(numberWithCommas(parseFloat(op_ABSDpc).toFixed(1)));
    $("#textabsd").html(numberWithCommas(parseFloat(op_ABSD).toFixed(0)));  // got to parse as op_ABSD was not a number
    
    //Total Duty Calculator
    op_totaldutypc = op_BSDpc + op_ABSDpc;
    $("#texttotaldutypc").html(numberWithCommas(parseFloat(op_totaldutypc).toFixed(1)));
    
    op_TotalDuty = parseFloat(op_BSD) + parseFloat(op_ABSD);
    $("#texttotalduty").html(numberWithCommas(parseFloat(op_TotalDuty).toFixed(0)));  // got to parse as op_ABSD was not a number
    $("#texttotalduty1").html(numberWithCommas(parseFloat(op_TotalDuty).toFixed(0)));  // got to parse as op_ABSD was not a number


    //Continue with Decoupling Calc
    op_OverallCashBalance = op_LPcashbalance + op_SPcashbalance - op_TotalDuty - 6000;
    $("#output-overallcashbalance").html(numberWithCommas(parseFloat(op_OverallCashBalance).toFixed(0)));
}

//Calculate Leaving Party New Loan
//define variables to be used in JS
var ip_NewPropertyprice = 1000000;
var ip_LTV = 0.75;
var ip_Loanamount = 750000;
var ip_IR = 5;
var ip_Tenure = 20;
var op_Monthlymortgage = 4950;

//define variables to be used in JS that links with HTML objects
var $Propertyprice_rangeslider = $('#js-propertyprice-range');
var $Propertyprice_amount = $('#js-propertyprice-input');
var $LTV_rangeslider = $('#js-ltv-range');
var $LTV_amount = $('#js-ltv-input');
var $Loanamount_rangeslider = $('#js-loanamount-range');
var $Loanamount_amount = $('#js-loanamount-input');
var $IR_rangeslider = $('#js-ir-range');
var $IR_amount = $('#js-ir-input');
var $Tenure_rangeslider = $('#js-tenure-range');
var $Tenure_amount = $('#js-tenure-input');

//function for rangeslider. If this moves, then textvalues and inputbox get updated
$Propertyprice_rangeslider.on('input', function() {
    ip_NewPropertyprice = this.value * 1;
    $Propertyprice_amount[0].value = this.value;
    recalculateLoanAmount();
    MonthlyMortgage(); 
}); 
  
$Propertyprice_amount.on('input', function() {
    $Propertyprice_rangeslider.val(this.value).change();
    ip_NewPropertyprice = this.value * 1;
    recalculateLoanAmount();
    MonthlyMortgage(); 
}); 

$LTV_rangeslider.on('input', function() {
    ip_LTV = this.value * 1/100;
    $LTV_amount[0].value = this.value;
    recalculateLoanAmount();
    MonthlyMortgage(); 
}); 
  
$LTV_amount.on('input', function() {
    $LTV_rangeslider.val(this.value).change();
    ip_LTV = this.value * 1/100;
    recalculateLoanAmount();
    MonthlyMortgage(); 
}); 

$Loanamount_rangeslider.on('input', function() {
    ip_Loanamount = this.value * 1;
    $Loanamount_amount[0].value = this.value;
    recalculatePropertyPrice();
    MonthlyMortgage(); 
}); 
  
$Loanamount_amount.on('input', function() {
    $Loanamount_rangeslider.val(this.value).change();
    ip_Loanamount = this.value * 1;
    recalculatePropertyPrice();
    MonthlyMortgage(); 
}); 

$IR_rangeslider.on('input', function() {
    ip_IR = this.value * 1;
    $IR_amount[0].value = this.value;
    MonthlyMortgage(); 
}); 
  
$IR_amount.on('input', function() {
    $IR_rangeslider.val(this.value).change();
    ip_IR = this.value * 1;
    MonthlyMortgage(); 
}); 

$Tenure_rangeslider.on('input', function() {
    ip_Tenure = this.value * 1;
    $Tenure_amount[0].value = this.value;
    MonthlyMortgage(); 
}); 
  
$Tenure_amount.on('input', function() {
    $Tenure_rangeslider.val(this.value).change();
    ip_Tenure = this.value * 1;
    MonthlyMortgage(); 
}); 

function recalculateLoanAmount(){
    ip_Loanamount = ip_NewPropertyprice * ip_LTV;
    $Loanamount_rangeslider.val(ip_Loanamount).change();
    $Loanamount_amount[0].value = ip_Loanamount;
}

function recalculatePropertyPrice(){
    ip_NewPropertyprice = ip_Loanamount / ip_LTV;
    $Propertyprice_rangeslider.val(ip_NewPropertyprice).change();
    $Propertyprice_amount[0].value = ip_NewPropertyprice;
}

function MonthlyMortgage(){
    op_Monthlymortgage = Math.round(ip_Loanamount * ip_IR/100/12* (1+ip_IR/100/12)**(ip_Tenure*12)/((1+ip_IR/100/12)**(ip_Tenure*12)-1));
    $("#textmonthlymortgage").html(numberWithCommas(parseFloat(op_Monthlymortgage).toFixed(0)));
}


//Calculate Staying Party New Loan
//define variables to be used in JS
var ip_spcurrentMonthlymortgage = 633;
var ip_spLoanamount = 562500;
var ip_spIR = 5;
var ip_spTenure = 20;
var op_spaddedMonthlymortgage = 2501;
var op_sptotalMonthlymortgage = 3134;

//define variables to be used in JS that links with HTML objects
var $Currentmortgage_amount = $('#js-spcurrentmortgage-input');
var $Extraloan_rangeslider = $('#js-extraloan-range');
var $Extraloan_amount = $('#js-extraloan-input');
var $spIR_rangeslider = $('#js-spir-range');
var $spIR_amount = $('#js-spir-input');
var $spTenure_rangeslider = $('#js-sptenure-range');
var $spTenure_amount = $('#js-sptenure-input');

$Currentmortgage_amount.on('input', function() {
    ip_spcurrentMonthlymortgage = this.value * 1;
    MonthlyspMortgage(); 
}); 

//function for rangeslider. If this moves, then textvalues and inputbox get updated
$Extraloan_rangeslider.on('input', function() {
    ip_spLoanamount = this.value * 1;
    $Extraloan_amount[0].value = this.value;
    MonthlyspMortgage(); 
}); 
  
$Extraloan_amount.on('input', function() {
    $Extraloan_rangeslider.val(this.value).change();
    ip_spLoanamount = this.value * 1;
    console.log(ip_spLoanamount);
    MonthlyspMortgage(); 
}); 

$spIR_rangeslider.on('input', function() {
    ip_spIR = this.value * 1;
    $spIR_amount[0].value = this.value;
    MonthlyspMortgage(); 
}); 
  
$spIR_amount.on('input', function() {
    $spIR_rangeslider.val(this.value).change();
    ip_spIR = this.value * 1;
    MonthlyspMortgage(); 
}); 

$spTenure_rangeslider.on('input', function() {
    ip_spTenure = this.value * 1;
    $spTenure_amount[0].value = this.value;
    MonthlyspMortgage(); 
}); 
  
$spTenure_amount.on('input', function() {
    $spTenure_rangeslider.val(this.value).change();
    ip_spTenure = this.value * 1;
    MonthlyspMortgage(); 
}); 

function MonthlyspMortgage(){
    op_spaddedMonthlymortgage = Math.round(ip_spLoanamount * ip_spIR/100/12* (1+ip_spIR/100/12)**(ip_spTenure*12)/((1+ip_spIR/100/12)**(ip_spTenure*12)-1));
    console.log(op_spaddedMonthlymortgage);
    $("#textspaddedmonthlymortgage").html(numberWithCommas(parseFloat(op_spaddedMonthlymortgage).toFixed(0)));
    op_sptotalMonthlymortgage = ip_spcurrentMonthlymortgage + op_spaddedMonthlymortgage;
    $("#textsptotalmonthlymortgage").html(numberWithCommas(parseFloat(op_sptotalMonthlymortgage).toFixed(0)));
}
