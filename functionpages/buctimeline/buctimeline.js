//define variables to be used in JS
var myStartDate = new Date(Date.now() + 0 * 86400000);
// $("#textstartdate").html("<strong>" + myStartDate.toDateString() + "</strong>");
$("#textstartdate").html(myStartDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));
//set date picker to today
var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
$('#campaignstart').val(today);



var ip_PropertyPrice = 2000000;
var ip_CPF = 250000;
var ip_LTV = 75; 
var ip_Rate = 4;

var ip_DecisionDays = 14;
var ip_BookingDays = 14;
var ip_OTPDays = 21;
var ip_ExerciseDays = 14;
var ip_DPDays = 7;
var ip_FoundationDays = 9;
var ip_ReinforceDays = 8;
var ip_PartitionDays = 6;
var ip_RoofingDays = 4;
var ip_DWEDays = 4;
var ip_CRDDays = 4;
var ip_SUDays = 4;
var ip_TOPDays = 0;
var ip_CompletionDays = 6;

var op_Cash = 250000;
var op_LoanAmount = 1500000;
var op_CPFpc = 12.5;
var op_Cashpc = 12.5;
var op_paymentbooking5pc = 100000;
var op_paymentstampduty = 0;
var op_paymentdownpayment15pc = 300000;
var op_paymentfoundation10pc = 200000;
var op_paymentsuperstructure10pc = 200000;
var op_paymentwalls5pc = 100000;
var op_paymentroof5pc = 100000;
var op_paymentelectrical5pc = 100000;
var op_paymentroad5pc = 100000;
var op_paymentutilities25pc = 500000;
var op_paymentcompletion15pc = 300000;

var op_bookingDate = new Date();
var op_otpreceivedDate = new Date();
var op_exerciseDate = new Date();
var op_stampdutyDate = new Date();
var op_dpDate = new Date();
var op_foundationdoneDate = new Date();
var op_reinforcedoneDate = new Date();
var op_partitiondoneDate = new Date();
var op_roofingdoneDate = new Date();
var op_dweDate = new Date();
var op_crdDate = new Date();
var op_suDate = new Date();
var op_topDate = new Date();
var op_completionDate = new Date();

//get start date
document.getElementById("campaignstart").addEventListener("change", function() {
    var inputdate = this.value;
    myStartDate = new Date(inputdate);
    myStartDate.setHours(8, 0, 0, 0);
$("#textstartdate").html(myStartDate.toLocaleDateString('en-US', { weekday: 'short', month:'short', day: 'numeric', year:'2-digit'}));
//initialise after entering start date

getBookingDate();
getOTPreceivedDate();
getExerciseDate();
getStampdutyDate();
getDPDate();
getFoundationdoneDate();
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
});

//define variables to be used in JS that links with HTML objects
var $propertyprice_rangeslider = $('#js-propertyprice-range');
var $propertyprice_amount = $('#js-propertyprice-input');
var $cpf_rangeslider = $('#js-cpf-range');
var $cpf_amount = $('#js-cpf-input');
var $ltv_amount = $('#js-ltv-input');


var $decisiondays_rangeslider = $('#js-decisiondays-range');
var $bookingdays_rangeslider = $('#js-bookingdays-range');
var $otpdays_rangeslider = $('#js-otpdays-range');
var $exercisedays_rangeslider = $('#js-exercisedays-range');
var $dpdays_rangeslider = $('#js-dpdays-range');
var $foundationdays_rangeslider = $('#js-foundationdays-range');
var $reinforcedays_rangeslider = $('#js-reinforcedays-range');
var $partitiondays_rangeslider = $('#js-partitiondays-range');
var $roofingdays_rangeslider = $('#js-roofingdays-range');
var $dwedays_rangeslider = $('#js-dwedays-range');
var $crddays_rangeslider = $('#js-crddays-range');
var $sudays_rangeslider = $('#js-sudays-range');
var $topdays_rangeslider = $('#js-topdays-range');
var $completiondays_rangeslider = $('#js-completiondays-range');

var $decisiondays_amount = $('#js-decisiondays-input');
var $bookingdays_amount = $('#js-bookingdays-input');
var $otpdays_amount = $('#js-otpdays-input');
var $exercisedays_amount = $('#js-exercisedays-input');
var $dpdays_amount = $('#js-dpdays-input');
var $foundationdays_amount = $('#js-foundationdays-input');
var $reinforcedays_amount = $('#js-reinforcedays-input');
var $partitiondays_amount = $('#js-partitiondays-input');
var $roofingdays_amount = $('#js-roofingdays-input');
var $dwedays_amount = $('#js-dwedays-input');
var $crddays_amount = $('#js-crddays-input');
var $sudays_amount = $('#js-sudays-input');
var $topdays_amount = $('#js-topdays-input');
var $completiondays_amount = $('#js-completiondays-input');
//----------------
getBookingDate();
getOTPreceivedDate();
getExerciseDate();
getStampdutyDate();
getDPDate();
getFoundationdoneDate();
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
//----------------

//----------------

$decisiondays_rangeslider.on('input', function() {
  var num = this.value;
  var num_text = parseInt(num);
  ip_DecisionDays = num_text;
    $("#textdecisiondays").html("<strong>" + numberWithCommas(ip_DecisionDays.toFixed(0)) + "</strong>");
getBookingDate();
getOTPreceivedDate();
getExerciseDate();
getStampdutyDate();
getDPDate();
getFoundationdoneDate();
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
});

$decisiondays_amount.on('input', function() {  $decisiondays_rangeslider.val(this.value).change();
  ip_DecisionDays = this.value * 1;   $("#textdecisiondays").html("<strong>" + numberWithCommas(ip_DecisionDays.toFixed(0)) + "</strong>");
  getBookingDate();
  getOTPreceivedDate();
  getExerciseDate();
  getStampdutyDate();
  getDPDate();
  getFoundationdoneDate();
  getReinforcedoneDate();
  getPartitiondoneDate();
  getRoofingdoneDate();
  getDWEDate();
  getCRDDate();
  getSUDate();
  getTOPDate();
  getCompletionDate();
  });

//----------------

$propertyprice_rangeslider.on('input', function() {
  ip_PropertyPrice = this.value * 1;
  $propertyprice_amount[0].value = this.value;
  getLoanCash();
  getPayments();
}); 

$propertyprice_amount.on('input', function() {
  $propertyprice_rangeslider.val(this.value).change();
  ip_PropertyPrice = this.value * 1;
  getLoanCash();
  getPayments();
});

$cpf_rangeslider.on('input', function() {
  ip_CPF = this.value * 1;
  $cpf_amount[0].value = this.value;
  getLoanCash();
  getPayments();
}); 

$cpf_amount.on('input', function() {
  $cpf_rangeslider.val(this.value).change();  
  ip_CPF = this.value * 1;
  getLoanCash();
  getPayments();
});

$ltv_amount.on('input', function() {
  ip_LTV = this.value * 1;
  getLoanCash();
  getPayments();
});



$bookingdays_rangeslider.on('input', function() {
  var num = this.value;
  var num_text = parseInt(num);
  ip_BookingDays = num_text;
    $("#textbookingdays").html("<strong>" + numberWithCommas(ip_BookingDays.toFixed(0)) + "</strong>");
getOTPreceivedDate();
getExerciseDate();
getStampdutyDate();
getDPDate();
getFoundationdoneDate();
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
});

$bookingdays_amount.on('input', function() {  
  $bookingdays_rangeslider.val(this.value).change();
  ip_BookingDays = this.value * 1;   
  $("#textbookingdays").html("<strong>" + numberWithCommas(ip_BookingDays.toFixed(0)) + "</strong>");
getOTPreceivedDate();
getExerciseDate();
getStampdutyDate();
getDPDate();
getFoundationdoneDate();
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
  });


//----------------

$otpdays_rangeslider.on('input', function() {
  var num = this.value;
  var num_text = parseInt(num);
  ip_OTPDays = num_text;
    $("#textotpdays").html("<strong>" + numberWithCommas(ip_OTPDays.toFixed(0)) + "</strong>");
getExerciseDate();
getStampdutyDate();
getDPDate();
getFoundationdoneDate();
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
});

$otpdays_amount.on('input', function() {  
  $otpdays_rangeslider.val(this.value).change();
  ip_OTPDays = this.value * 1;   
  $("#textotpdays").html("<strong>" + numberWithCommas(ip_OTPDays.toFixed(0)) + "</strong>");
getExerciseDate();
getStampdutyDate();
getDPDate();
getFoundationdoneDate();
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
  });

//----------------

$exercisedays_rangeslider.on('input', function() {
  var num = this.value;
  var num_text = parseInt(num);
  ip_ExerciseDays = num_text;
    $("#textexercisedays").html("<strong>" + numberWithCommas(ip_ExerciseDays.toFixed(0)) + "</strong>");
getStampdutyDate();
getDPDate();
getFoundationdoneDate();
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
});

$exercisedays_amount.on('input', function() {  $exercisedaysslider.val(this.value).change();
  ip_ExerciseDays = this.value * 1;   $("#textexercisedays").html("<strong>" + numberWithCommas(ip_ExerciseDays.toFixed(0)) + "</strong>");
getStampdutyDate();
getDPDate();
getFoundationdoneDate();
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
  });

//----------------

$dpdays_rangeslider.on('input', function() {
  var num = this.value;
  var num_text = parseInt(num);
  ip_DPDays = num_text;
    $("#textdpdays").html("<strong>" + numberWithCommas(ip_DPDays.toFixed(0)) + "</strong>");
getDPDate();
getFoundationdoneDate();
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
});

$dpdays_amount.on('input', function() {  $dpdaysslider.val(this.value).change();
  ip_DPDays = this.value * 1;   $("#textdpdays").html("<strong>" + numberWithCommas(ip_DPDays.toFixed(0)) + "</strong>");
getDPDate();
getFoundationdoneDate();
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
  });

//----------------

$foundationdays_rangeslider.on('input', function() {
  var num = this.value;
  var num_text = parseInt(num);
  ip_FoundationDays = num_text;
    $("#textfoundationdays").html("<strong>" + numberWithCommas(ip_FoundationDays.toFixed(0)) + "</strong>");
getFoundationdoneDate();
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
});

$foundationdays_amount.on('input', function() {  $foundationdaysslider.val(this.value).change();
  ip_FoundationDays = this.value * 1;   $("#textfoundationdays").html("<strong>" + numberWithCommas(ip_FoundationDays.toFixed(0)) + "</strong>");
getFoundationdoneDate();
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
  });

//----------------

$reinforcedays_rangeslider.on('input', function() {
  var num = this.value;
  var num_text = parseInt(num);
  ip_ReinforceDays = num_text;
    $("#textreinforcedays").html("<strong>" + numberWithCommas(ip_ReinforceDays.toFixed(0)) + "</strong>");
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
});

$reinforcedays_amount.on('input', function() {  $reinforcedaysslider.val(this.value).change();
  ip_ReinforceDays = this.value * 1;   $("#textreinforcedays").html("<strong>" + numberWithCommas(ip_ReinforceDays.toFixed(0)) + "</strong>");
getReinforcedoneDate();
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
  });

//----------------

$partitiondays_rangeslider.on('input', function() {
  var num = this.value;
  var num_text = parseInt(num);
  ip_PartitionDays = num_text;
    $("#textpartitiondays").html("<strong>" + numberWithCommas(ip_PartitionDays.toFixed(0)) + "</strong>");
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
});

$partitiondays_amount.on('input', function() {  $partitiondaysslider.val(this.value).change();
  ip_PartitionDays = this.value * 1;   $("#textpartitiondays").html("<strong>" + numberWithCommas(ip_PartitionDays.toFixed(0)) + "</strong>");
getPartitiondoneDate();
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
  });

//----------------

$roofingdays_rangeslider.on('input', function() {
  var num = this.value;
  var num_text = parseInt(num);
  ip_RoofingDays = num_text;
    $("#textroofingdays").html("<strong>" + numberWithCommas(ip_RoofingDays.toFixed(0)) + "</strong>");
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
});

$roofingdays_amount.on('input', function() {  $roofingdaysslider.val(this.value).change();
  ip_RoofingDays = this.value * 1;   $("#textroofingdays").html("<strong>" + numberWithCommas(ip_RoofingDays.toFixed(0)) + "</strong>");
getRoofingdoneDate();
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
  });


//----------------

$dwedays_rangeslider.on('input', function() {
  var num = this.value;
  var num_text = parseInt(num);
  ip_DWEDays = num_text;
    $("#textdwedays").html("<strong>" + numberWithCommas(ip_DWEDays.toFixed(0)) + "</strong>");
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
});

$dwedays_amount.on('input', function() {  $dwedaysslider.val(this.value).change();
  ip_DWEDays = this.value * 1;   $("#textdwedays").html("<strong>" + numberWithCommas(ip_DWEDays.toFixed(0)) + "</strong>");
getDWEDate();
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
  });

//----------------

$crddays_rangeslider.on('input', function() {
  var num = this.value;
  var num_text = parseInt(num);
  ip_CRDDays = num_text;
    $("#textcrddays").html("<strong>" + numberWithCommas(ip_CRDDays.toFixed(0)) + "</strong>");
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
});

$crddays_amount.on('input', function() {  $crddaysslider.val(this.value).change();
  ip_CRDDays = this.value * 1;   $("#textcrddays").html("<strong>" + numberWithCommas(ip_CRDDays.toFixed(0)) + "</strong>");
getCRDDate();
getSUDate();
getTOPDate();
getCompletionDate();
  });
  
//----------------

$sudays_rangeslider.on('input', function() {
  var num = this.value;
  var num_text = parseInt(num);
  ip_SUDays = num_text;
    $("#textsudays").html("<strong>" + numberWithCommas(ip_SUDays.toFixed(0)) + "</strong>");
getSUDate();
getTOPDate();
getCompletionDate();
});

$sudays_amount.on('input', function() {  $sudaysslider.val(this.value).change();
  ip_SUDays = this.value * 1;   $("#textsudays").html("<strong>" + numberWithCommas(ip_SUDays.toFixed(0)) + "</strong>");
getSUDate();
getTOPDate();
getCompletionDate();
  });

//----------------

$topdays_rangeslider.on('input', function() {
  var num = this.value;
  var num_text = parseInt(num);
  ip_TOPDays = num_text;
    $("#texttopdays").html("<strong>" + numberWithCommas(ip_TOPDays.toFixed(0)) + "</strong>");
getTOPDate();
getCompletionDate();
});

$topdays_amount.on('input', function() {  $topdaysslider.val(this.value).change();
  ip_TOPDays = this.value * 1;   $("#texttopdays").html("<strong>" + numberWithCommas(ip_TOPDays.toFixed(0)) + "</strong>");
getTOPDate();
getCompletionDate();
  });


//----------------

$completiondays_rangeslider.on('input', function() {
  var num = this.value;
  var num_text = parseInt(num);
  ip_CompletionDays = num_text;
    $("#textcompletiondays").html("<strong>" + numberWithCommas(ip_CompletionDays.toFixed(0)) + "</strong>");
getCompletionDate();
});

$completiondays_amount.on('input', function() {  $completiondaysslider.val(this.value).change();
  ip_CompletionDays = this.value * 1;   $("#textcompletiondays").html("<strong>" + numberWithCommas(ip_CompletionDays.toFixed(0)) + "</strong>");
getCompletionDate();
  });


  //functions written below this line
//--------------------------------------------------
//function to display numbers with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getLoanCash() {
  op_LoanAmount = (ip_LTV/100) * ip_PropertyPrice;
  op_CPFpc = ip_CPF/ip_PropertyPrice*100;
  op_Cash = ip_PropertyPrice - ip_CPF - op_LoanAmount;
  op_Cashpc = op_Cash/ip_PropertyPrice*100;
  $("#js-textloanamount").html(numberWithCommas(Math.round(op_LoanAmount))); 
  $("#js-textcpfpc").html(op_CPFpc.toFixed(1));
  $("#js-textcash").html(numberWithCommas(Math.round(op_Cash)));
  $("#js-textcashpc").html(op_Cashpc.toFixed(1));
}

function getPayments() {
  op_paymentbooking5pc = 0.05 * ip_PropertyPrice;
  $("#paymentbooking5pc").html(numberWithCommas(Math.round(op_paymentbooking5pc)));
  op_paymentstampduty
  op_paymentdownpayment15pc = 0.15 * ip_PropertyPrice;
  $("#paymentdownpayment15pc").html(numberWithCommas(Math.round(op_paymentdownpayment15pc)));
  op_paymentfoundation10pc = 0.1 * ip_PropertyPrice;
  $("#paymentfoundation10pc").html(numberWithCommas(Math.round(op_paymentfoundation10pc)));
  op_paymentsuperstructure10pc = 0.1 * ip_PropertyPrice;
  $("#paymentsuperstructure10pc").html(numberWithCommas(Math.round(op_paymentsuperstructure10pc)));
  op_paymentwalls5pc = 0.05 * ip_PropertyPrice;
  $("#paymentwalls5pc").html(numberWithCommas(Math.round(op_paymentwalls5pc)));
  op_paymentroof5pc = 0.05 * ip_PropertyPrice;
  $("#paymentroof5pc").html(numberWithCommas(Math.round(op_paymentroof5pc)));
  op_paymentelectrical5pc = 0.05 * ip_PropertyPrice;
  $("#paymentelectrical5pc").html(numberWithCommas(Math.round(op_paymentelectrical5pc)));
  op_paymentroad5pc = 0.05 * ip_PropertyPrice;
  $("#paymentroad5pc").html(numberWithCommas(Math.round(op_paymentroad5pc)));
  op_paymentutilities25pc = 0.25 * ip_PropertyPrice;
  $("#paymentutilities25pc").html(numberWithCommas(Math.round(op_paymentutilities25pc)));
  op_paymentcompletion15pc = 0.15 * ip_PropertyPrice;
  $("#paymentcompletion15pc").html(numberWithCommas(Math.round(op_paymentcompletion15pc)));
}

function getBookingDate() {
var someDate = new Date(myStartDate);
var numberOfDaysToAdd = ip_DecisionDays;
op_BookingDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
let calcDate = new Date(op_BookingDate);
calcDate.setHours(8, 0, 0, 0);
$("#textbookingdate").html(calcDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));
op_bookingDate = calcDate;
}

function getOTPreceivedDate() {
  var someDate = new Date(myStartDate);
  var numberOfDaysToAdd = ip_BookingDays + ip_DecisionDays;
  op_OTPreceivedDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
  let calcDate = new Date(op_OTPreceivedDate);
  calcDate.setHours(8, 0, 0, 0);
  $("#textotpreceiveddate").html(calcDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));
  }
  
function getExerciseDate() {
  var someDate = new Date(myStartDate);
  var numberOfDaysToAdd = ip_OTPDays + ip_BookingDays + ip_DecisionDays;
  op_ExerciseDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
  let calcDate = new Date(op_ExerciseDate);
  calcDate.setHours(8, 0, 0, 0);
  $("#textexercisedate").html(calcDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));
  }

function getStampdutyDate() {
  var someDate = new Date(myStartDate);
  var numberOfDaysToAdd = ip_ExerciseDays + ip_OTPDays + ip_BookingDays + ip_DecisionDays;
  op_StampdutyDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
  let calcDate = new Date(op_StampdutyDate);
  calcDate.setHours(8, 0, 0, 0);
  $("#textstampdutydate").html(calcDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));
  }
  
function getDPDate() {
  var someDate = new Date(myStartDate);
  var numberOfDaysToAdd = ip_DPDays + ip_ExerciseDays + ip_OTPDays + ip_BookingDays + ip_DecisionDays;
  op_DPDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
  let calcDate = new Date(op_DPDate);
  calcDate.setHours(8, 0, 0, 0);
  $("#textdpdate").html(calcDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));

let calcDate2 = new Date(op_BookingDate);
calcDate2.setHours(8, 0, 0, 0);
// Calculate the time difference in milliseconds
var timeDiff = Math.abs(calcDate.getTime() - calcDate2.getTime());
// Convert the time difference to days
var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
var daysover = daysDiff - 56;

if (daysDiff > 56) {
  $("#textcheck").html("<strong>" + "ERROR: Over by " + daysover + "</strong>");
} else {
  $("#textcheck").html("<strong>" + daysDiff + "" + "</strong>");
}
  }


function getFoundationdoneDate() {
  var someDate = new Date(myStartDate);
  var numberOfDaysToAdd = ip_FoundationDays*30 + ip_DPDays + ip_ExerciseDays + ip_OTPDays + ip_BookingDays + ip_DecisionDays;
  op_FoundationdoneDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
  let calcDate = new Date(op_FoundationdoneDate);
  calcDate.setHours(8, 0, 0, 0);
  $("#textfoundationdonedate").html(calcDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));
  }

function getReinforcedoneDate() {
  var someDate = new Date(myStartDate);
  var numberOfDaysToAdd = ip_ReinforceDays*30 + ip_FoundationDays*30 + ip_DPDays + ip_ExerciseDays + ip_OTPDays + ip_BookingDays + ip_DecisionDays;
  op_ReinforcedoneDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
  let calcDate = new Date(op_ReinforcedoneDate);
  calcDate.setHours(8, 0, 0, 0);
  $("#textreinforcedonedate").html(calcDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));
  }
 
function getPartitiondoneDate() {
  var someDate = new Date(myStartDate);
  var numberOfDaysToAdd = ip_PartitionDays*30 + ip_ReinforceDays*30 + ip_FoundationDays*30 + ip_DPDays + ip_ExerciseDays + ip_OTPDays + ip_BookingDays + ip_DecisionDays;
  op_PartitiondoneDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
  let calcDate = new Date(op_PartitiondoneDate);
  calcDate.setHours(8, 0, 0, 0);
  $("#textpartitiondonedate").html(calcDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));
  }
  
function getRoofingdoneDate() {
  var someDate = new Date(myStartDate);
  var numberOfDaysToAdd = ip_RoofingDays*30 + ip_PartitionDays*30 + ip_ReinforceDays*30 + ip_FoundationDays*30 + ip_DPDays + ip_ExerciseDays + ip_OTPDays + ip_BookingDays + ip_DecisionDays;
  op_RoofingdoneDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
  let calcDate = new Date(op_RoofingdoneDate);
  calcDate.setHours(8, 0, 0, 0);
  $("#textroofingdonedate").html(calcDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));
  }

function getDWEDate() {
  var someDate = new Date(myStartDate);
  var numberOfDaysToAdd = ip_DWEDays*30 + ip_RoofingDays*30 + ip_PartitionDays*30 + ip_ReinforceDays*30 + ip_FoundationDays*30 + ip_DPDays + ip_ExerciseDays + ip_OTPDays + ip_BookingDays + ip_DecisionDays;
  op_dweDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
  let calcDate = new Date(op_dweDate);
  calcDate.setHours(8, 0, 0, 0);
  $("#textdwedonedate").html(calcDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));
  }

function getCRDDate() {
  var someDate = new Date(myStartDate);
  var numberOfDaysToAdd = ip_CRDDays*30 + ip_DWEDays*30 + ip_RoofingDays*30 + ip_PartitionDays*30 + ip_ReinforceDays*30 + ip_FoundationDays*30 + ip_DPDays + ip_ExerciseDays + ip_OTPDays + ip_BookingDays + ip_DecisionDays;
  op_crdDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
  let calcDate = new Date(op_crdDate);
  calcDate.setHours(8, 0, 0, 0);
  $("#textcrddonedate").html(calcDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));
  }


 function getSUDate() {
  var someDate = new Date(myStartDate);
  var numberOfDaysToAdd = ip_SUDays*30 + ip_CRDDays*30 + ip_DWEDays*30 + ip_RoofingDays*30 + ip_PartitionDays*30 + ip_ReinforceDays*30 + ip_FoundationDays*30 + ip_DPDays + ip_ExerciseDays + ip_OTPDays + ip_BookingDays + ip_DecisionDays;
  op_suDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
  let calcDate = new Date(op_suDate);
  calcDate.setHours(8, 0, 0, 0);
  $("#textsudonedate").html(calcDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));
  }

 function getTOPDate() {
  var someDate = new Date(myStartDate);
  var numberOfDaysToAdd = ip_TOPDays*30 + ip_SUDays*30 + ip_CRDDays*30 + ip_DWEDays*30 + ip_RoofingDays*30 + ip_PartitionDays*30 + ip_ReinforceDays*30 + ip_FoundationDays*30 + ip_DPDays + ip_ExerciseDays + ip_OTPDays + ip_BookingDays + ip_DecisionDays;
  op_topDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
  let calcDate = new Date(op_topDate);
  calcDate.setHours(8, 0, 0, 0);
  $("#texttopdate").html(calcDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));
  }
  

 function getCompletionDate() {
  var someDate = new Date(myStartDate);
  var numberOfDaysToAdd = ip_CompletionDays*30 + ip_TOPDays*30 + ip_SUDays*30 + ip_CRDDays*30 + ip_DWEDays*30 + ip_RoofingDays*30 + ip_PartitionDays*30 + ip_ReinforceDays*30 + ip_FoundationDays*30 + ip_DPDays + ip_ExerciseDays + ip_OTPDays + ip_BookingDays + ip_DecisionDays;
  op_completionDate = someDate.setDate(myStartDate.getDate() + numberOfDaysToAdd);
  let calcDate = new Date(op_completionDate);
  calcDate.setHours(8, 0, 0, 0);
  $("#textcompletiondate").html(calcDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year:'2-digit' }));
  }
