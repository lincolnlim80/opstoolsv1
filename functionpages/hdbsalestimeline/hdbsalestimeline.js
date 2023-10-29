//define variables to be used in JS
var myStartDate = new Date(Date.now() + 0 * 86400000);
$("#textstartdate").html("<strong>" + myStartDate.toDateString() + "</strong>");
//set date picker to today
var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
$('#campaignstart').val(today);

//-----

var ip_MarketingDays = 28;
var ip_OTPDays = 21;
var ip_ExerciseDays = 30;
var ip_ApplicationDays = 14;
var ip_AcceptanceDays = 7;
var ip_EndorsementDays = 7;
var ip_ApprovalDays = 28;
var ip_CompletionDays = 92;

var op_otpDate = new Date();
var op_exerciseDate = new Date();
var op_applicationDate = new Date();
var op_acceptanceDate = new Date();
var op_endorsementDate = new Date();
var op_approvalDate = new Date();
var op_CompletionDate = new Date();
var op_HandoverDate = new Date();

//get start date
document.getElementById("campaignstart").addEventListener("change", function() {
    var inputdate = this.value;
    myStartDate = new Date(inputdate);
//    console.log(inputdate); //e.g. 2015-11-13
//    console.log(mystartdate); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)
$("#textstartdate").html("<strong>" + myStartDate.toDateString() + "</strong>");
//initialise after entering start date
getOTPDate();
getExerciseDate();
getApplicationDate();
getAcceptanceDate();
getEndorsementDate();
getApprovalDate();
getCompletionDate();
getHandoverDate();
});

//define variables to be used in JS that links with HTML objects
var $marketingdays_rangeslider = $('#js-marketingdays-range');
var $otpdays_rangeslider = $('#js-otpdays-range');
var $exercisedays_rangeslider = $('#js-exercisedays-range');
var $applicationdays_rangeslider = $('#js-applicationdays-range');
var $acceptancedays_rangeslider = $('#js-acceptancedays-range');
var $endorsementdays_rangeslider = $('#js-endorsementdays-range');
var $approvaldays_rangeslider = $('#js-approvaldays-range');
var $completiondays_rangeslider = $('#js-completiondays-range');

var $marketingdays_amount = $('#js-marketingdays-input');
var $otpdays_amount = $('#js-otpdays-input');
var $exercisedays_amount = $('#js-exercisedays-input');
var $applicationdays_amount = $('#js-applicationdays-input');
var $acceptancedays_amount = $('#js-acceptancedays-input');
var $endorsementdays_amount = $('#js-endorsementdays-input');
var $approvaldays_amount = $('#js-approvaldays-input');
var $completiondays_amount = $('#js-completiondays-input');
//----------------
//----------------

getOTPDate();
getExerciseDate();
getApplicationDate();
getAcceptanceDate();
getEndorsementDate();
getApprovalDate();
getCompletionDate();
getHandoverDate();

//----------------

$marketingdays_rangeslider.on('input', function() {
  var num = $marketingdays_amount[0].value = this.value;
  var num_text = parseInt(num);
  ip_MarketingDays = num_text;
    $("#textmarketingdays").html("<strong>" + numberWithCommas(ip_MarketingDays.toFixed(0)) + "</strong>");
getOTPDate();
getExerciseDate();
getApplicationDate();
getAcceptanceDate();
getEndorsementDate();
getApprovalDate();
getCompletionDate();
getHandoverDate();
});

$marketingdays_amount.on('input', function() {  $marketingdays_rangeslider.val(this.value).change();
  ip_MarketingDays = this.value * 1;   $("#textmarketingdays").html("<strong>" + numberWithCommas(ip_MarketingDays.toFixed(0)) + "</strong>");
getOTPDate();
getExerciseDate();
getApplicationDate();
getAcceptanceDate();
getEndorsementDate();
getApprovalDate();
getCompletionDate();
getHandoverDate();
});

//-----------------
$otpdays_rangeslider.on('input', function() {
  var num = $otpdays_amount[0].value = this.value;
  var num_text = parseInt(num);
  ip_OTPDays = num_text;
    $("#textotpdays").html("<strong>" + numberWithCommas(ip_OTPDays.toFixed(0)) + "</strong>");
getExerciseDate();
getApplicationDate();
getAcceptanceDate();
getEndorsementDate();
getApprovalDate();
getCompletionDate();
getHandoverDate();
});

$otpdays_amount.on('input', function() {  $otpdays_rangeslider.val(this.value).change();
  ip_OTPDays = this.value * 1;   $("#textotpdays").html("<strong>" + numberWithCommas(ip_OTPDays.toFixed(0)) + "</strong>");
getExerciseDate();
getApplicationDate();
getAcceptanceDate();
getEndorsementDate();
getApprovalDate();
getCompletionDate();
getHandoverDate();
});


//-----------------
$exercisedays_rangeslider.on('input', function() {
  var num = $exercisedays_amount[0].value = this.value;
  var num_text = parseInt(num);
  ip_ExerciseDays = num_text;
    $("#textexercisedays").html("<strong>" + numberWithCommas(ip_ExerciseDays.toFixed(0)) + "</strong>");
getApplicationDate();
getAcceptanceDate();
getEndorsementDate();
getApprovalDate();
getCompletionDate();
getHandoverDate();
});

$exercisedays_amount.on('input', function() {  $exercisedays_rangeslider.val(this.value).change();
  ip_ExerciseDays = this.value * 1;   $("#textexercisedays").html("<strong>" + numberWithCommas(ip_ExerciseDays.toFixed(0)) + "</strong>");
getApplicationDate();
getAcceptanceDate();
getEndorsementDate();
getApprovalDate();
getCompletionDate();
getHandoverDate();
});

//-----------------
$applicationdays_rangeslider.on('input', function() {
  var num = $applicationdays_amount[0].value = this.value;
  var num_text = parseInt(num);
  ip_ApplicationDays = num_text;
    $("#textapplicationdays").html("<strong>" + numberWithCommas(ip_ApplicationDays.toFixed(0)) + "</strong>");
getAcceptanceDate();
getEndorsementDate();
getApprovalDate();
getCompletionDate();
getHandoverDate();
});

$applicationdays_amount.on('input', function() {  $applicationdays_rangeslider.val(this.value).change();
  ip_ApplicationDays = this.value * 1;   $("#textapplicationdays").html("<strong>" + numberWithCommas(ip_ApplicationDays.toFixed(0)) + "</strong>");
getAcceptanceDate();
getEndorsementDate();
getApprovalDate();
getCompletionDate();
getHandoverDate();
});

//-----------------
$acceptancedays_rangeslider.on('input', function() {
  var num = $acceptancedays_amount[0].value = this.value;
  var num_text = parseInt(num);
  ip_AcceptanceDays = num_text;
    $("#textacceptancedays").html("<strong>" + numberWithCommas(ip_AcceptanceDays.toFixed(0)) + "</strong>");
getEndorsementDate();
getApprovalDate();
getCompletionDate();
getHandoverDate();
});

$acceptancedays_amount.on('input', function() {  $acceptancedays_rangeslider.val(this.value).change();
  ip_AcceptanceDays = this.value * 1;   $("#textacceptancedays").html("<strong>" + numberWithCommas(ip_AcceptanceDays.toFixed(0)) + "</strong>");
getEndorsementDate();
getApprovalDate();
getCompletionDate();
getHandoverDate();
});

//-----------------
$endorsementdays_rangeslider.on('input', function() {
  var num = $endorsementdays_amount[0].value = this.value;
  var num_text = parseInt(num);
  ip_EndorsementDays = num_text;
    $("#textendorsementdays").html("<strong>" + numberWithCommas(ip_EndorsementDays.toFixed(0)) + "</strong>");
getApprovalDate();
getCompletionDate();
getHandoverDate();
});

$endorsementdays_amount.on('input', function() {  $endorsementdays_rangeslider.val(this.value).change();
  ip_EndorsementDays = this.value * 1;   $("#textendorsementdays").html("<strong>" + numberWithCommas(ip_EndorsementDays.toFixed(0)) + "</strong>");
getApprovalDate();
getCompletionDate();
getHandoverDate();
});


//-----------------
$approvaldays_rangeslider.on('input', function() {
  var num = $approvaldays_amount[0].value = this.value;
  var num_text = parseInt(num);
  ip_ApprovalDays = num_text;
    $("#textapprovaldays").html("<strong>" + numberWithCommas(ip_ApprovalDays.toFixed(0)) + "</strong>");
getCompletionDate();
getHandoverDate();
});

$approvaldays_amount.on('input', function() {  $approvaldays_rangeslider.val(this.value).change();
  ip_ApprovalDays = this.value * 1;   $("#textapprovaldays").html("<strong>" + numberWithCommas(ip_ApprovalDays.toFixed(0)) + "</strong>");
getCompletionDate();
getHandoverDate();
});

//-----------------
$completiondays_rangeslider.on('input', function() {
  var num = $completiondays_amount[0].value = this.value;
  var num_text = parseInt(num);
  ip_CompletionDays = num_text;
    $("#textcompletiondays").html("<strong>" + numberWithCommas(ip_CompletionDays.toFixed(0)) + "</strong>");
getHandoverDate();
});

$completiondays_amount.on('input', function() {  $completiondays_rangeslider.val(this.value).change();
  ip_CompletionDays = this.value * 1;   $("#textcompletiondays").html("<strong>" + numberWithCommas(ip_CompletionDays.toFixed(0)) + "</strong>");
getHandoverDate();
});
//functions written below this line
//--------------------------------------------------
//function to display numbers with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getOTPDate() {
var someDate = new Date(myStartDate);  //-- all setDate assumed current month..so need to insert myStartDate here to let someDate know which month we are refering to
var numberOfDaysToAdd = ip_MarketingDays;
op_otpDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
let calcDate = new Date(op_otpDate);
$("#textotpdate").html("<strong>" + calcDate.toDateString() + "</strong>");
}

function getExerciseDate() {
var someDate = new Date(myStartDate);
var numberOfDaysToAdd = ip_MarketingDays + ip_OTPDays;
op_ExerciseDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
let calcDate = new Date(op_ExerciseDate);
$("#textexercisedate").html("<strong>" + calcDate.toDateString() + "</strong>");
}

function getApplicationDate() {
var someDate = new Date(myStartDate);
var numberOfDaysToAdd = ip_MarketingDays + ip_OTPDays + ip_ExerciseDays;
op_ApplicationDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
let calcDate = new Date(op_ApplicationDate);
$("#textapplicationdate").html("<strong>" + calcDate.toDateString() + "</strong>");
}

function getAcceptanceDate() {
var someDate = new Date(myStartDate);
var numberOfDaysToAdd = ip_MarketingDays + ip_OTPDays + ip_ExerciseDays  + ip_ApplicationDays;
op_AcceptanceDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
let calcDate = new Date(op_AcceptanceDate);
$("#textacceptancedate").html("<strong>" + calcDate.toDateString() + "</strong>");
}

function getEndorsementDate() {
var someDate = new Date(myStartDate);
var numberOfDaysToAdd = ip_MarketingDays + ip_OTPDays + ip_ExerciseDays  + ip_ApplicationDays  + ip_AcceptanceDays;
op_EndorsementDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
let calcDate = new Date(op_EndorsementDate);
$("#textendorsementdate").html("<strong>" + calcDate.toDateString() + "</strong>");
}

function getApprovalDate() {
var someDate = new Date(myStartDate);
var numberOfDaysToAdd = ip_MarketingDays + ip_OTPDays + ip_ExerciseDays  + ip_ApplicationDays  + ip_AcceptanceDays  + ip_EndorsementDays;
op_ApprovalDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
let calcDate = new Date(op_ApprovalDate);
$("#textapprovaldate").html("<strong>" + calcDate.toDateString() + "</strong>");
}

function getCompletionDate() {
var someDate = new Date(myStartDate);
var numberOfDaysToAdd = ip_MarketingDays + ip_OTPDays + ip_ExerciseDays  + ip_ApplicationDays  + ip_AcceptanceDays  + ip_EndorsementDays  + ip_ApprovalDays;
op_CompletionDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
let calcDate = new Date(op_CompletionDate);
$("#textcompletiondate").html("<strong>" + calcDate.toDateString() + "</strong>");
}

function getHandoverDate() {
var someDate = new Date(myStartDate);
var numberOfDaysToAdd = ip_MarketingDays + ip_OTPDays + ip_ExerciseDays  + ip_ApplicationDays  + ip_AcceptanceDays  + ip_EndorsementDays  + ip_ApprovalDays  + ip_CompletionDays ;
op_HandoverDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
let calcDate = new Date(op_HandoverDate);
$("#texthandoverdate").html("<strong>" + calcDate.toDateString() + "</strong>");
}