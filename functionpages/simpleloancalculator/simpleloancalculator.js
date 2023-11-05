//define variables to be used in JS
var ip_Propertyprice = 1000000;
var ip_LTV = 0.75;  //it's fraction here
var ip_Loanamount = 750000;
var ip_IR = 5;  // it's percentage here
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
    ip_Propertyprice = this.value * 1;
    $Propertyprice_amount[0].value = this.value;
    recalculateLoanAmount();
    MonthlyMortgage(); 
}); 
  
$Propertyprice_amount.on('input', function() {
    $Propertyprice_rangeslider.val(this.value).change();
    ip_Propertyprice = this.value * 1;
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

//functions written below this line
//--------------------------------------------------
//function to display numbers with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function recalculateLoanAmount(){
    ip_Loanamount = ip_Propertyprice * ip_LTV;
    $Loanamount_rangeslider.val(ip_Loanamount).change();
    $Loanamount_amount[0].value = ip_Loanamount;
}

function recalculatePropertyPrice(){
    ip_Propertyprice = ip_Loanamount / ip_LTV;
    $Propertyprice_rangeslider.val(ip_Propertyprice).change();
    $Propertyprice_amount[0].value = ip_Propertyprice;
}

function MonthlyMortgage(){
    op_Monthlymortgage = ip_Loanamount * (ip_IR/100/12) * Math.pow(1 + ip_IR/100/12, (ip_Tenure*12)) / (Math.pow(1 + ip_IR/100/12, (ip_Tenure*12)) - 1);
    // op_Monthlymortgagex = Math.round(ip_Loanamount * ip_IR/100/12* (1+ip_IR/100/12)**(ip_Tenure*12)/((1+ip_IR/100/12)**(ip_Tenure*12)-1));
    $("#textmonthlymortgage").html(numberWithCommas(parseFloat(op_Monthlymortgage).toFixed(0)));
}
