//define variables to be used in JS
var ip_PropertyPrice = '1000000';
var ip_OL = '200000';
var ip_CPF = '200000';
var ip_RL = '0';
var op_CashProceeds = '';
var ip_NumYears = '>3';
var op_SSD = '0';
var ip_Legal = '5000';
var ip_Agentpercent = '2';
var op_Agentamount = '20000';
var op_CashPayment = '';

//define variables to be used in JS that links with HTML objects
var $PropertyPrice_rangeslider = $('#js-amount-range');
var $PropertyPrice_amount = $('#js-amount-input');
var $OL_rangeslider = $('#js-ol-range');
var $OL_amount = $('#js-ol-input');
var $CPF_rangeslider = $('#js-cpf-range');
var $CPF_amount = $('#js-cpf-input');
var $RL_rangeslider = $('#js-rl-range');
var $RL_amount = $('#js-rl-input');
var $NumYears_rangeslider = $('#js-numyears-range');
var $Legal_rangeslider = $('#js-legal-range');
var $Legal_amount = $('#js-legal-input');
var $Agentpercent_rangeslider = $('#js-agentpercent-range');
var $Agentpercent_amount = $('#js-agentpercent-input');

getCashProceeds();
getCashPayment();
getFinalCashPosition();


//function for rangeslider. If this moves, then textvalues and inputbox get updated
$PropertyPrice_rangeslider.on('input', function() {
  var propprice = $PropertyPrice_amount[0].value = this.value;
  var propprice_text = parseInt(propprice);
  ip_PropertyPrice = propprice_text;
  $("#textpropprice").html("<strong>" + numberWithCommas(ip_PropertyPrice.toFixed(0)) + "</strong>");
getSSD();
getAgentFee()
getCashProceeds();
getCashPayment();
getFinalCashPosition();
});

$PropertyPrice_amount.on('input', function() {
  $PropertyPrice_rangeslider.val(this.value).change();
  ip_PropertyPrice = this.value * 1; 
  $("#textpropprice").html("<strong>" + numberWithCommas(ip_PropertyPrice.toFixed(0)) + "</strong>");
getSSD();
getAgentFee()
getCashProceeds();
getCashPayment();
getFinalCashPosition();
});

//------------
$OL_rangeslider.on('input', function() {
  var ol = $OL_amount[0].value = this.value;
  var ol_text = parseInt(ol);
  ip_OL = this.value * 1;
  $("#textol").html("<strong>" + numberWithCommas(ip_OL.toFixed(0)) + "</strong>");
getCashProceeds();
getFinalCashPosition();
});

$OL_amount.on('input', function() {
  $OL_rangeslider.val(this.value).change();
  ip_OL = this.value * 1;  
  $("#textol").html("<strong>" + numberWithCommas(ip_OL.toFixed(0)) + "</strong>");
getCashProceeds();
getFinalCashPosition();
});

//------------
$CPF_rangeslider.on('input', function() {
  var cpf = $CPF_amount[0].value = this.value;
  var cpf_text = parseInt(cpf);
  ip_CPF = this.value * 1;
  $("#textcpf").html("<strong>" + numberWithCommas(ip_CPF.toFixed(0)) + "</strong>");
getCashProceeds();
getFinalCashPosition();
});

$CPF_amount.on('input', function() {
  $CPF_rangeslider.val(this.value).change();
  ip_CPF = this.value * 1;  
  $("#textcpf").html("<strong>" + numberWithCommas(ip_CPF.toFixed(0)) + "</strong>");
getCashProceeds();
getFinalCashPosition();
});
//------------
$RL_rangeslider.on('input', function() {
  var rl = $RL_amount[0].value = this.value;
  var rl_text = parseInt(rl);
  ip_RL = this.value * 1;
  $("#textrl").html("<strong>" + numberWithCommas(ip_RL.toFixed(0)) + "</strong>");
getCashProceeds();
getFinalCashPosition();
});

$RL_amount.on('input', function() {
  $RL_rangeslider.val(this.value).change();
  ip_RL = this.value * 1;  
  $("#textrl").html("<strong>" + numberWithCommas(ip_RL.toFixed(0)) + "</strong>");
getCashProceeds();
getFinalCashPosition();
});

//------------
$NumYears_rangeslider.on('input', function() {
  var numyears = this.value * 1;
    if (numyears == 1) {
    ip_NumYears = "1";  
    op_SSD = ip_PropertyPrice * 0.12;
  } else if (numyears == 2) {
    ip_NumYears = "2";  
    op_SSD = ip_PropertyPrice * 0.08;
  } else if (numyears == 3) {
    ip_NumYears = "3";  
    op_SSD = ip_PropertyPrice * 0.04;
  } else if (numyears == 4) {
    ip_NumYears = ">3";  
    op_SSD = ip_PropertyPrice * 0;
  }
  $("#textssd").html("<strong>" + numberWithCommas(parseFloat(op_SSD).toFixed(0)) + "</strong>");
  $("#textnumyears").html("<strong>" + ip_NumYears + "</strong>");
getCashPayment();
getFinalCashPosition();
}); 

//------------
$Legal_rangeslider.on('input', function() {
  var legal = $Legal_amount[0].value = this.value;
  var legal_text = parseInt(legal);
  ip_Legal = this.value * 1;
  $("#textlegal").html("<strong>" + numberWithCommas(ip_Legal.toFixed(0)) + "</strong>");
getCashPayment();
getFinalCashPosition();
});

$Legal_amount.on('input', function() {
  $Legal_rangeslider.val(this.value).change();
  ip_Legal = this.value * 1;  
  $("#textlegal").html("<strong>" + numberWithCommas(ip_Legal.toFixed(0)) + "</strong>");
getCashPayment();
getFinalCashPosition();
});

//------------
$Agentpercent_rangeslider.on('input', function() {
  var agentpercent = $Agentpercent_amount[0].value = this.value;
  var agentpercent_text = parseInt(agentpercent);
  ip_Agentpercent = this.value * 1;
  $("#textagentpercent").html("<strong>" + numberWithCommas(ip_Agentpercent.toFixed(1)) + "</strong>");
op_Agentamount = parseFloat(ip_PropertyPrice) * parseFloat(ip_Agentpercent/100); 
$("#textagentamount").html("<strong>" + numberWithCommas(op_Agentamount.toFixed(0)) + "</strong>");
getCashPayment();
getFinalCashPosition();
});

$Agentpercent_amount.on('input', function() {
  $Agentpercent_rangeslider.val(this.value).change();
  ip_Agentpercent = this.value * 1;  
  $("#textagentpercent").html("<strong>" + numberWithCommas(ip_Agentpercent.toFixed(1)) + "</strong>");
op_Agentamount = parseFloat(ip_PropertyPrice) * parseFloat(ip_Agentpercent/100); 
$("#textagentamount").html("<strong>" + numberWithCommas(op_Agentamount.toFixed(0)) + "</strong>");
getCashPayment();
getFinalCashPosition();
});

//functions written below this line
//--------------------------------------------------
//function to display numbers with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getSSD() {
    if (ip_NumYears === ">3") {
 var numyears = 0;
    } else if (ip_NumYears != ">3") {
 var numyears = parseFloat(ip_NumYears);
        if (numyears == 1) {
          op_SSD = ip_PropertyPrice * 0.12;
        } else if (numyears == 2) {
          op_SSD = ip_PropertyPrice * 0.08;
        } else if (numyears == 3) {
          op_SSD = ip_PropertyPrice * 0.04;
        } 
    }
$("#textssd").html("<strong>" + op_SSD + "</strong>");
getCashPayment();
getFinalCashPosition();
}

function getAgentFee() {
 op_Agentamount = parseFloat(ip_PropertyPrice) * parseFloat(ip_Agentpercent/100);
$("#textagentamount").html("<strong>" + numberWithCommas(op_Agentamount.toFixed(0)) + "</strong>");
getCashPayment();
getFinalCashPosition();
}
function getCashProceeds() {
op_CashProceeds = parseFloat(ip_PropertyPrice) - parseFloat(ip_OL) - parseFloat(ip_CPF)-parseFloat(ip_RL) ;
$("#textcashproceeds").html("<strong>" + numberWithCommas(parseFloat(op_CashProceeds).toFixed(0)) + "</strong>");  
}

function getCashPayment() {
  op_CashPayment = parseFloat(op_SSD) + parseFloat(ip_Legal) + parseFloat(op_Agentamount);
$("#textcashpayment").html("<strong>" + numberWithCommas(parseFloat(op_CashPayment).toFixed(0)) + "</strong>");
$("#textfinalcashposition").html("<strong>" + numberWithCommas(parseFloat(op_CashProceeds - op_CashPayment).toFixed(0)) + "</strong>");    
}

function getFinalCashPosition() {
$("#textfinalcashposition").html("<strong>" + numberWithCommas(parseFloat(op_CashProceeds - op_CashPayment).toFixed(0)) + "</strong>");    
}

