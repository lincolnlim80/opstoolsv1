//define variables to be used in JS
var ip_purchaseprice1 = 2000000;
var ip_purchaseprice2 = 2000000;
var ip_purchaseprice3 = 2000000;
var ip_purchaseprice4 = 2000000;
var ip_ltv1 = 75;
var ip_ltv2 = 75;
var ip_ltv3 = 75;
var ip_ltv4 = 75;
var ip_loan1 = 1500000;
var ip_loan2 = 1500000;
var ip_loan3 = 1500000;
var ip_loan4 = 1500000;
var ip_dp1 = 500000;
var ip_dp2 = 500000;
var ip_dp3 = 500000;
var ip_dp4 = 500000;
var ip_tenure1 = 25;
var ip_tenure2 = 25;
var ip_tenure3 = 25;
var ip_tenure4 = 25;
var ip_intrate1 = 4;
var ip_intrate2 = 4;
var ip_intrate3 = 4;
var ip_intrate4 = 4;
var ip_invperiod1 = 10;
var ip_invperiod2 = 10;
var ip_invperiod3 = 10;
var ip_invperiod4 = 10;
var ip_vacantrate1 = 96;
var ip_vacantrate2 = 96;
var ip_vacantrate3 = 96;
var ip_vacantrate4 = 96;
var ip_rentalrate1 = 4000;
var ip_rentalrate2 = 4000;
var ip_rentalrate3 = 4000;
var ip_rentalrate4 = 4000;
var ip_gi1 = 5000;
var ip_gi2 = 5000;
var ip_gi3 = 5000;
var ip_gi4 = 5000;
var ip_opex1 = 0;
var ip_opex2 = 0;
var ip_opex3 = 0;
var ip_opex4 = 0;
var ip_opexmgmt1 = 0;
var ip_opexmgmt2 = 0;
var ip_opexmgmt3 = 0;
var ip_opexmgmt4 = 0;
var ip_opexmaint1 = 0;
var ip_opexmaint2 = 0;
var ip_opexmaint3 = 0;
var ip_opexmaint4 = 0;
var ip_opextax1 = 0;
var ip_opextax2 = 0;
var ip_opextax3 = 0;
var ip_opextax4 = 0;
var ip_opexinsure1 = 0;
var ip_opexinsure2 = 0;
var ip_opexinsure3 = 0;
var ip_opexinsure4 = 0;
var ip_opexutil1 = 0;
var ip_opexutil2 = 0;
var ip_opexutil3 = 0;
var ip_opexutil4 = 0;
var ip_opexagentfee1 = 0;
var ip_opexagentfee2 = 0;
var ip_opexagentfee3 = 0;
var ip_opexagentfee4 = 0;
var ip_totopex1 = 0;
var ip_totopex2 = 0;
var ip_totopex3 = 0;
var ip_totopex4 = 0;
var ip_finex1 = 0;  // finex monthly running costs
var ip_finex2 = 0;
var ip_finex3 = 0;
var ip_finex4 = 0;
var ip_finexoneoff1 = 0;
var ip_finexoneoff2 = 0;
var ip_finexoneoff3 = 0;
var ip_finexoneoff4 = 0;
var ip_finexprin1 = 0; // monthly
var ip_finexprin2 = 0; 
var ip_finexprin3 = 0;
var ip_finexprin4 = 0;
var ip_finexint1 = 0; // monthly
var ip_finexint2 = 0;
var ip_finexint3 = 0;
var ip_finexint4 = 0;
var ip_finexmort1 = 0; // monthly
var ip_finexmort2 = 0;
var ip_finexmort3 = 0;
var ip_finexmort4 = 0;
var ip_finexacquireoneoff1 = 0; // over investment period
var ip_finexacquireoneoff2 = 0;
var ip_finexacquireoneoff3 = 0;
var ip_finexacquireoneoff4 = 0;
var ip_finexdisposeoneoff1 = 0; // over investment period
var ip_finexdisposeoneoff2 = 0;
var ip_finexdisposeoneoff3 = 0;
var ip_finexdisposeoneoff4 = 0;
var ip_finexacquire1 = 0; // converted to monthly over investment period
var ip_finexacquire2 = 0;
var ip_finexacquire3 = 0;
var ip_finexacquire4 = 0;
var ip_finexdispose1 = 0; // converted to monthly over investment period
var ip_finexdispose2 = 0;
var ip_finexdispose3 = 0;
var ip_finexdispose4 = 0;
var ip_finexother1 = 0;
var ip_finexother2 = 0;
var ip_finexother3 = 0;
var ip_finexother4 = 0;
var ip_totfinex1 = 0;
var ip_totfinex2 = 0;
var ip_totfinex3 = 0;
var ip_totfinex4 = 0;
var ip_totequity1 = 0;
var ip_totequity2 = 0;
var ip_totequity3 = 0;
var ip_totequity4 = 0;
var ip_fv1 = 0;
var ip_fv2 = 0;
var ip_fv3 = 0;
var ip_fv4 = 0;
var ip_totcapgain1 = 0;
var ip_totcapgain2 = 0;
var ip_totcapgain3 = 0;
var ip_totcapgain4 = 0;
var ip_pcpy_capgain1 = 0;
var ip_pcpy_capgain2 = 0;
var ip_pcpy_capgain3 = 0;
var ip_pcpy_capgain4 = 0;
var ip_totfinexprin1 = 0;
var ip_totfinexprin2 = 0;
var ip_totfinexprin3 = 0;
var ip_totfinexprin4 = 0;
var ip_area1 = 1000;
var ip_area2 = 1000;
var ip_area3 = 1000;
var ip_area4 = 1000;
var ip_discountrate1 = 0.02;
var ip_discountrate2 = 0.02;
var ip_discountrate3 = 0.02;
var ip_discountrate4 = 0.02;
var ip_upfrontcash1 = 200000;
var ip_upfrontcash2 = 200000;
var ip_upfrontcash3 = 200000;
var ip_upfrontcash4 = 200000;
var ip_totoneoffcash1 = 200000;
var ip_totoneoffcash2 = 200000;
var ip_totoneoffcash3 = 200000;
var ip_totoneoffcash4 = 200000;

var op_grm1 = 100;
var op_grm2 = 100;
var op_grm3 = 100;
var op_grm4 = 100;
var op_noi1 = 10000; // noi is annual gi less opex 
var op_noi2 = 10000;
var op_noi3 = 10000;
var op_noi4 = 10000;
var op_cf1 = 10000; //cf here refers to annual net income which is noi less monthly finex. one off finex excluded.
var op_cf2 = 10000;
var op_cf3 = 10000;
var op_cf4 = 10000;
var op_cfpv1 = 8000; //cf present value
var op_cfpv2 = 8000;
var op_cfpv3 = 8000;
var op_cfpv4 = 8000;
var op_icp1 = -100000;
var op_icp2 = -100000;
var op_icp3 = -100000;
var op_icp4 = -100000;
var op_cfbe1 = 10;
var op_cfbe2 = 10;
var op_cfbe3 = 10;
var op_cfbe4 = 10;
var op_totcf1 = 10000; // total cashflow here is total over investment life which  includes one off costs to acquire and dispose property
var op_totcf2 = 10000;
var op_totcf3 = 10000;
var op_totcf4 = 10000;
var op_totcfpv1 = 5000; // present value
var op_totcfpv2 = 5000;
var op_totcfpv3 = 5000;
var op_totcfpv4 = 5000;
var op_sp1 = 250000; // sales proceeds is future value minus mortgage balance
var op_sp2 = 250000; 
var op_sp3 = 250000; 
var op_sp4 = 250000; 
var op_sppv1 = 255000; // sales proceeds is future value minus mortgage balance
var op_sppv2 = 255000; 
var op_sppv3 = 255000; 
var op_sppv4 = 255000; 
var op_mb1 = 10; //mortgage balance is loan minus principle paid
var op_mb2 = 10; 
var op_mb3 = 10; 
var op_mb4 = 10; 
var op_totcb1 = 10;  // cash balance is total sales proceeds - total cash flow balance
var op_totcb2 = 10; 
var op_totcb3 = 10;  
var op_totcb4 = 10;   
var op_ry1 = 5;
var op_ry2 = 5;
var op_ry3 = 5;
var op_ry4 = 5;
var op_oer1 = 30;
var op_oer2 = 30;
var op_oer3 = 30;
var op_oer4 = 30;
var op_gipsf1 = 30;
var op_gipsf2 = 30;
var op_gipsf3 = 30;
var op_gipsf4 = 30;
var op_coc1_firstyear = 30;
var op_coc2_firstyear = 30;
var op_coc3_firstyear = 30;
var op_coc4_firstyear = 30;
var op_coc1_invperiod = 30;
var op_coc2_invperiod = 30;
var op_coc3_invperiod = 30;
var op_coc4_invperiod = 30;
var op_roe1_firstyear = 30;
var op_roe2_firstyear = 30;
var op_roe3_firstyear = 30;
var op_roe4_firstyear = 30;
var op_roe1_invperiod = 30;
var op_roe2_invperiod = 30;
var op_roe3_invperiod = 30;
var op_roe4_invperiod = 30;
var op_ror1=5;
var op_ror2=5;
var op_ror3=5;
var op_ror4=5;
var op_cr1 = 30;
var op_cr2 = 30;
var op_cr3 = 30;
var op_cr4 = 30;
var op_irr1 = 3;
var op_irr2 = 3;
var op_irr3 = 3;
var op_irr4 = 3;
var op_irrnpv1 = 0;
var op_irrnpv2 = 0;
var op_irrnpv3 = 0;
var op_irrnpv4 = 0;
var op_irrnpvLogicText1 = "";
var op_irrnpvLogicText2 = "";
var op_irrnpvLogicText3 = "";
var op_irrnpvLogicText4 = "";

//define variables to be used in JS that links with HTML objects
// var $Totincome_rangeslider = $('#js-totincome-range');
var $duplicate1_number = $('#js-duplicate1-input');
var $duplicate2_number = $('#js-duplicate2-input');
var $duplicate3_number = $('#js-duplicate3-input');
var $duplicate4_number = $('#js-duplicate4-input');
var $purchaseprice1_amount = $('#js-purchaseprice1-input');
var $purchaseprice2_amount = $('#js-purchaseprice2-input');
var $purchaseprice3_amount = $('#js-purchaseprice3-input');
var $purchaseprice4_amount = $('#js-purchaseprice4-input');
var $ltv1_amount = $('#js-ltv1-input');
var $ltv2_amount = $('#js-ltv2-input');
var $ltv3_amount = $('#js-ltv3-input');
var $ltv4_amount = $('#js-ltv4-input');
var $tenure1_amount = $('#js-tenure1-input');
var $tenure2_amount = $('#js-tenure2-input');
var $tenure3_amount = $('#js-tenure3-input');
var $tenure4_amount = $('#js-tenure4-input');
var $intrate1_amount = $('#js-intrate1-input');
var $intrate2_amount = $('#js-intrate2-input');
var $intrate3_amount = $('#js-intrate3-input');
var $intrate4_amount = $('#js-intrate4-input');
var $invperiod1_amount = $('#js-invperiod1-input');
var $invperiod2_amount = $('#js-invperiod2-input');
var $invperiod3_amount = $('#js-invperiod3-input');
var $invperiod4_amount = $('#js-invperiod4-input');
var $vacantrate1_amount = $('#js-vacantrate1-input');
var $vacantrate2_amount = $('#js-vacantrate2-input');
var $vacantrate3_amount = $('#js-vacantrate3-input');
var $vacantrate4_amount = $('#js-vacantrate4-input');
var $rentalrate1_amount = $('#js-rentalrate1-input');
var $rentalrate2_amount = $('#js-rentalrate2-input');
var $rentalrate3_amount = $('#js-rentalrate3-input');
var $rentalrate4_amount = $('#js-rentalrate4-input');
var $opex1_amount = $('#js-opex1-input');
var $opex2_amount = $('#js-opex2-input');
var $opex3_amount = $('#js-opex3-input');
var $opex4_amount = $('#js-opex4-input');
var $opexmgmt1_amount = $('#js-opexmgmt1-input');
var $opexmgmt2_amount = $('#js-opexmgmt2-input');
var $opexmgmt3_amount = $('#js-opexmgmt3-input');
var $opexmgmt4_amount = $('#js-opexmgmt4-input');
var $opexmaint1_amount = $('#js-opexmaint1-input');
var $opexmaint2_amount = $('#js-opexmaint2-input');
var $opexmaint3_amount = $('#js-opexmaint3-input');
var $opexmaint4_amount = $('#js-opexmaint4-input');
var $opextax1_amount = $('#js-opextax1-input');
var $opextax2_amount = $('#js-opextax2-input');
var $opextax3_amount = $('#js-opextax3-input');
var $opextax4_amount = $('#js-opextax4-input');
var $opexinsure1_amount = $('#js-opexinsure1-input');
var $opexinsure2_amount = $('#js-opexinsure2-input');
var $opexinsure3_amount = $('#js-opexinsure3-input');
var $opexinsure4_amount = $('#js-opexinsure4-input');
var $opexutil1_amount = $('#js-opexutil1-input');
var $opexutil2_amount = $('#js-opexutil2-input');
var $opexutil3_amount = $('#js-opexutil3-input');
var $opexutil4_amount = $('#js-opexutil4-input');
var $opexagentfee1_amount = $('#js-opexagentfee1-input');
var $opexagentfee2_amount = $('#js-opexagentfee2-input');
var $opexagentfee3_amount = $('#js-opexagentfee3-input');
var $opexagentfee4_amount = $('#js-opexagentfee4-input');
var $finexacquireoneoff1_amount = $('#js-finexacquireoneoff1-input');
var $finexacquireoneoff2_amount = $('#js-finexacquireoneoff2-input');
var $finexacquireoneoff3_amount = $('#js-finexacquireoneoff3-input');
var $finexacquireoneoff4_amount = $('#js-finexacquireoneoff4-input');
var $finexdisposeoneoff1_amount = $('#js-finexdisposeoneoff1-input');
var $finexdisposeoneoff2_amount = $('#js-finexdisposeoneoff2-input');
var $finexdisposeoneoff3_amount = $('#js-finexdisposeoneoff3-input');
var $finexdisposeoneoff4_amount = $('#js-finexdisposeoneoff4-input');
var $finexother1_amount = $('#js-finexother1-input');
var $finexother2_amount = $('#js-finexother2-input');
var $finexother3_amount = $('#js-finexother3-input');
var $finexother4_amount = $('#js-finexother4-input');
var $pcpy_capgain1_amount = $('#js-pcpy_capgain1-input');
var $pcpy_capgain2_amount = $('#js-pcpy_capgain2-input');
var $pcpy_capgain3_amount = $('#js-pcpy_capgain3-input');
var $pcpy_capgain4_amount = $('#js-pcpy_capgain4-input');
var $area1_amount = $('#js-area1-input');
var $area2_amount = $('#js-area2-input');
var $area3_amount = $('#js-area3-input');
var $area4_amount = $('#js-area4-input');
var $discountrate1_amount = $('#js-discountrate1-input');
var $discountrate2_amount = $('#js-discountrate2-input');
var $discountrate3_amount = $('#js-discountrate3-input');
var $discountrate4_amount = $('#js-discountrate4-input');


//recalculate inputs Initalise
recalcInput1();
recalcInput2();
recalcInput3();
recalcInput4();

// PROPERTY 1 INPUT FUNCTION ON-CHANGE
$purchaseprice1_amount.on('input', function() {  
  ip_purchaseprice1 = this.value * 1;
   $("#textpurchaseprice1").html(numberWithCommas(ip_purchaseprice1));
   recalcloan_DP1();
   recalcinterest_principal1();
});

$ltv1_amount.on('input', function() {  
  ip_ltv1 = this.value * 1;
   $("#textltv1").html(numberWithCommas(ip_ltv1));
   recalcloan_DP1();
   recalcinterest_principal1();
});

$intrate1_amount.on('input', function() {  
  ip_intrate1 = this.value * 1;
   $("#textintrate1").html(numberWithCommas(ip_intrate1));
   recalcinterest_principal1();
});

$tenure1_amount.on('input', function() {  
  ip_tenure1 = this.value * 1;
   $("#texttenure1").html(numberWithCommas(ip_tenure1));
   recalcinterest_principal1();
});

$invperiod1_amount.on('input', function() {  
  ip_invperiod1 = Math.min(this.value * 1 , ip_tenure1);
  $invperiod1_amount[0].value = ip_invperiod1;
   $("#textinvperiod1").html(numberWithCommas(ip_invperiod1));
   recalcTOTFINEXPRIN1();
});

$vacantrate1_amount.on('input', function() {  
  ip_vacantrate1 = this.value * 1;
   $("#textvacantrate1").html(numberWithCommas(ip_vacantrate1));
  recalcGI1();
});

$rentalrate1_amount.on('input', function() {  
  ip_rentalrate1 = this.value * 1;
   $("#textrentalrate1").html(numberWithCommas(ip_rentalrate1));
   recalcGI1();   
});

$opex1_amount.on('input', function() {  
  ip_opex1 = this.value * 1;
   $("#textopex1").html(numberWithCommas(ip_opex1));
   ip_opexmgmt1 = $opexmgmt1_amount[0].value = 0;
   $("#textopexmgmt1").html("");
   ip_opexmaint1 = $opexmaint1_amount[0].value = 0;
   $("#textopexmaint1").html("");
   ip_opextax1 = $opextax1_amount[0].value = 0;
   $("#textopextax1").html("");
   ip_opexinsure1 = $opexinsure1_amount[0].value = 0;
   $("#textopexinsure1").html("");
   ip_opexutil1 = $opexutil1_amount[0].value = 0;
   $("#textopexutil1").html("");
   ip_opexagentfee1 = $opexagentfee1_amount[0].value = 0;
   $("#textopexagentfee1").html("");
});

$opexmgmt1_amount.on('input', function() {  
  ip_opexmgmt1 = this.value * 1;
   $("#textopexmgmt1").html(numberWithCommas(ip_opexmgmt1));
   recalcOPEX1();
   
});

$opexmaint1_amount.on('input', function() {  
  ip_opexmaint1 = this.value * 1;
   $("#textopexmaint1").html(numberWithCommas(ip_opexmaint1));
   recalcOPEX1();
   
});

$opextax1_amount.on('input', function() {  
  ip_opextax1 = this.value * 1;
   $("#textopextax1").html(numberWithCommas(ip_opextax1));
   recalcOPEX1();
   
});

$opexinsure1_amount.on('input', function() {  
  ip_opexinsure1 = this.value * 1;
   $("#textopexinsure1").html(numberWithCommas(ip_opexinsure1));
   recalcOPEX1();
   
});

$opexutil1_amount.on('input', function() {  
  ip_opexutil1 = this.value * 1;
   $("#textopexutil1").html(numberWithCommas(ip_opexutil1));
   recalcOPEX1();
   
});

$opexagentfee1_amount.on('input', function() {  
  ip_opexagentfee1 = this.value * 1;
   $("#textopexagentfee1").html(numberWithCommas(ip_opexagentfee1));
   recalcOPEX1();
   
});

$finexacquireoneoff1_amount.on('input', function() {  
  ip_finexacquireoneoff1 = this.value * 1;
  ip_finexacquire1 = Math.round(this.value / (ip_invperiod1*12));
   $("#textfinexacquire1").html(numberWithCommas(ip_finexacquire1));
   recalcFINEXONEOFF1();
   
});

$finexdisposeoneoff1_amount.on('input', function() {   
  ip_finexdisposeoneoff1 = this.value * 1;
  ip_finexdispose1 = Math.round(this.value / (ip_invperiod1*12));
   $("#textfinexdispose1").html(numberWithCommas(ip_finexdispose1));
   recalcFINEXONEOFF1();
   
});

$finexother1_amount.on('input', function() {  
  ip_finexother1 = this.value * 1;
   $("#textfinexother1").html(numberWithCommas(ip_finexother1));
   recalcFINEX1();
   
});

$pcpy_capgain1_amount.on('input', function() {  
  ip_pcpy_capgain1 = this.value * 1;
  recalcTOTCAPGAIN1();   
});

$area1_amount.on('input', function() {  
  ip_area1 = this.value * 1;
   $("#textarea1").html(numberWithCommas(ip_area1));
   
});


$discountrate1_amount.on('input', function() {  
  ip_discountrate1 = this.value /100;
   $("#textdiscountrate1").html(numberWithCommas(ip_discountrate1));
});


// --------------------------------------------------------
// PROPERTY 2 INPUT FUNCTION ON-CHANGE
$purchaseprice2_amount.on('input', function() {  
  ip_purchaseprice2 = this.value * 1;
   $("#textpurchaseprice2").html(numberWithCommas(ip_purchaseprice2));
   recalcloan_DP2();
   recalcinterest_principal2();
   
});

$ltv2_amount.on('input', function() {  
  ip_ltv2 = this.value * 1;
   $("#textltv2").html(numberWithCommas(ip_ltv2));
   recalcloan_DP2();
   recalcinterest_principal2();
   
});

$intrate2_amount.on('input', function() {  
  ip_intrate2 = this.value * 1;
   $("#textintrate2").html(numberWithCommas(ip_intrate2));
   recalcinterest_principal2();
   
});

$tenure2_amount.on('input', function() {  
  ip_tenure2 = this.value * 1;
   $("#texttenure2").html(numberWithCommas(ip_tenure2));
   recalcinterest_principal2();
   
});

$invperiod2_amount.on('input', function() {  
  ip_invperiod2 = Math.min(this.value * 1 , ip_tenure2);
  $invperiod2_amount[0].value = ip_invperiod2;
   $("#textinvperiod2").html(numberWithCommas(ip_invperiod2));
   recalcTOTFINEXPRIN2();
   
});

$vacantrate2_amount.on('input', function() {  
  ip_vacantrate2 = this.value * 1;
   $("#textvacantrate2").html(numberWithCommas(ip_vacantrate2));
   recalcGI2();
});

$rentalrate2_amount.on('input', function() {  
  ip_rentalrate2 = this.value * 1;
   $("#textrentalrate2").html(numberWithCommas(ip_rentalrate2));
   recalcGI2();
});

$opex2_amount.on('input', function() {  
  ip_opex2 = this.value * 1;
   $("#textopex2").html(numberWithCommas(ip_opex2));
   ip_opexmgmt2 = $opexmgmt2_amount[0].value = 0;
   $("#textopexmgmt2").html("");
   ip_opexmaint2 = $opexmaint2_amount[0].value = 0;
   $("#textopexmaint2").html("");
   ip_opextax2 = $opextax2_amount[0].value = 0;
   $("#textopextax2").html("");
   ip_opexinsure2 = $opexinsure2_amount[0].value = 0;
   $("#textopexinsure2").html("");
   ip_opexutil2 = $opexutil2_amount[0].value = 0;
   $("#textopexutil2").html("");
   ip_opexagentfee2 = $opexagentfee2_amount[0].value = 0;
   $("#textopexagentfee2").html("");
});

$opexmgmt2_amount.on('input', function() {  
  ip_opexmgmt2 = this.value * 1;
   $("#textopexmgmt2").html(numberWithCommas(ip_opexmgmt2));
   recalcOPEX2();
   
});

$opexmaint2_amount.on('input', function() {  
  ip_opexmaint2 = this.value * 1;
   $("#textopexmaint2").html(numberWithCommas(ip_opexmaint2));
   recalcOPEX2();
   
});

$opextax2_amount.on('input', function() {  
  ip_opextax2 = this.value * 1;
   $("#textopextax2").html(numberWithCommas(ip_opextax2));
   recalcOPEX2();
   
});

$opexinsure2_amount.on('input', function() {  
  ip_opexinsure2 = this.value * 1;
   $("#textopexinsure2").html(numberWithCommas(ip_opexinsure2));
   recalcOPEX2();
   
});

$opexutil2_amount.on('input', function() {  
  ip_opexutil2 = this.value * 1;
   $("#textopexutil2").html(numberWithCommas(ip_opexutil2));
   recalcOPEX2();
   
});

$opexagentfee2_amount.on('input', function() {  
  ip_opexagentfee2 = this.value * 1;
   $("#textopexagentfee2").html(numberWithCommas(ip_opexagentfee2));
   recalcOPEX2();
   
});

$finexacquireoneoff2_amount.on('input', function() {  
  ip_finexacquireoneoff2 = this.value * 1;
  ip_finexacquire2 = Math.round(this.value / (ip_invperiod2*12));
   $("#textfinexacquire2").html(numberWithCommas(ip_finexacquire2));
   recalcFINEXONEOFF2();
   
});

$finexdisposeoneoff2_amount.on('input', function() {   
  ip_finexdisposeoneoff2 = this.value * 1;
  ip_finexdispose2 = Math.round(this.value / (ip_invperiod2*12));
   $("#textfinexdispose2").html(numberWithCommas(ip_finexdispose2));
   recalcFINEXONEOFF2();
   
});

$finexother2_amount.on('input', function() {  
  ip_finexother2 = this.value * 1;
   $("#textfinexother2").html(numberWithCommas(ip_finexother2));
   recalcFINEX2();
   
});

$pcpy_capgain2_amount.on('input', function() {  
  ip_pcpy_capgain2 = this.value * 1;
  recalcTOTCAPGAIN2();   
});

$area2_amount.on('input', function() {  
  ip_area2 = this.value * 1;
   $("#textarea2").html(numberWithCommas(ip_area2));
   
});


$discountrate2_amount.on('input', function() {  
  ip_discountrate2 = this.value  /100;
   $("#textdiscountrate2").html(numberWithCommas(ip_discountrate2));
});


// --------------------------------------------------------
// PROPERTY 3 INPUT FUNCTION ON-CHANGE
$purchaseprice3_amount.on('input', function() {  
  ip_purchaseprice3 = this.value * 1;
   $("#textpurchaseprice3").html(numberWithCommas(ip_purchaseprice3));
   recalcloan_DP3();
   recalcinterest_principal3();
   
});

$ltv3_amount.on('input', function() {  
  ip_ltv3 = this.value * 1;
   $("#textltv3").html(numberWithCommas(ip_ltv3));
   recalcloan_DP3();
   recalcinterest_principal3();
   
});

$intrate3_amount.on('input', function() {  
  ip_intrate3 = this.value * 1;
   $("#textintrate3").html(numberWithCommas(ip_intrate3));
   recalcinterest_principal3();
   
});

$tenure3_amount.on('input', function() {  
  ip_tenure3 = this.value * 1;
   $("#texttenure3").html(numberWithCommas(ip_tenure3));
   recalcinterest_principal3();
   
});

$invperiod3_amount.on('input', function() {  
  ip_invperiod3 = Math.min(this.value * 1 , ip_tenure3);
  $invperiod3_amount[0].value = ip_invperiod3;
   $("#textinvperiod3").html(numberWithCommas(ip_invperiod3));
   recalcTOTFINEXPRIN3();
   
});

$vacantrate3_amount.on('input', function() {  
  ip_vacantrate3 = this.value * 1;
   $("#textvacantrate3").html(numberWithCommas(ip_vacantrate3));
   recalcGI3(); 
});

$rentalrate3_amount.on('input', function() {  
  ip_rentalrate3 = this.value * 1;
   $("#textrentalrate3").html(numberWithCommas(ip_rentalrate3));
   recalcGI3();
});

$opex3_amount.on('input', function() {  
  ip_opex3 = this.value * 1;
   $("#textopex3").html(numberWithCommas(ip_opex3));
   ip_opexmgmt3 = $opexmgmt3_amount[0].value = 0;
   $("#textopexmgmt3").html("");
   ip_opexmaint3 = $opexmaint3_amount[0].value = 0;
   $("#textopexmaint3").html("");
   ip_opextax3 = $opextax3_amount[0].value = 0;
   $("#textopextax3").html("");
   ip_opexinsure3 = $opexinsure3_amount[0].value = 0;
   $("#textopexinsure3").html("");
   ip_opexutil3 = $opexutil3_amount[0].value = 0;
   $("#textopexutil3").html("");
   ip_opexagentfee3 = $opexagentfee3_amount[0].value = 0;
   $("#textopexagentfee3").html("");
   
});

$opexmgmt3_amount.on('input', function() {  
  ip_opexmgmt3 = this.value * 1;
   $("#textopexmgmt3").html(numberWithCommas(ip_opexmgmt3));
   recalcOPEX3();
   
});

$opexmaint3_amount.on('input', function() {  
  ip_opexmaint3 = this.value * 1;
   $("#textopexmaint3").html(numberWithCommas(ip_opexmaint3));
   recalcOPEX3();
   
});

$opextax3_amount.on('input', function() {  
  ip_opextax3 = this.value * 1;
   $("#textopextax3").html(numberWithCommas(ip_opextax3));
   recalcOPEX3();
   
});

$opexinsure3_amount.on('input', function() {  
  ip_opexinsure3 = this.value * 1;
   $("#textopexinsure3").html(numberWithCommas(ip_opexinsure3));
   recalcOPEX3();
   
});

$opexutil3_amount.on('input', function() {  
  ip_opexutil3 = this.value * 1;
   $("#textopexutil3").html(numberWithCommas(ip_opexutil3));
   recalcOPEX3();
   
});

$opexagentfee3_amount.on('input', function() {  
  ip_opexagentfee3 = this.value * 1;
   $("#textopexagentfee3").html(numberWithCommas(ip_opexagentfee3));
   recalcOPEX3();
   
});

$finexacquireoneoff3_amount.on('input', function() {  
  ip_finexacquireoneoff3 = this.value * 1;
  ip_finexacquire3 = Math.round(this.value / (ip_invperiod3*12));
   $("#textfinexacquire3").html(numberWithCommas(ip_finexacquire3));
   recalcFINEXONEOFF3();
   
});

$finexdisposeoneoff3_amount.on('input', function() {   
  ip_finexdisposeoneoff3 = this.value * 1;
  ip_finexdispose3 = Math.round(this.value / (ip_invperiod3*12));
   $("#textfinexdispose3").html(numberWithCommas(ip_finexdispose3));
   recalcFINEXONEOFF3();
   
});

$finexother3_amount.on('input', function() {  
  ip_finexother3 = this.value * 1;
   $("#textfinexother3").html(numberWithCommas(ip_finexother3));
   recalcFINEX3();
   
});

$pcpy_capgain3_amount.on('input', function() {  
  ip_pcpy_capgain3 = this.value * 1;
  recalcTOTCAPGAIN3();   
});

$area3_amount.on('input', function() {  
  ip_area3 = this.value * 1;
   $("#textarea3").html(numberWithCommas(ip_area3));
   
});


$discountrate3_amount.on('input', function() {  
  ip_discountrate3 = this.value  /100;
   $("#textdiscountrate3").html(numberWithCommas(ip_discountrate3));
});


// --------------------------------------------------------
// PROPERTY 4 INPUT FUNCTION ON-CHANGE
$purchaseprice4_amount.on('input', function() {  
  ip_purchaseprice4 = this.value * 1;
   $("#textpurchaseprice4").html(numberWithCommas(ip_purchaseprice4));
   recalcloan_DP4();
   recalcinterest_principal4();
   
});

$ltv4_amount.on('input', function() {  
  ip_ltv4 = this.value * 1;
   $("#textltv4").html(numberWithCommas(ip_ltv4));
   recalcloan_DP4();
   recalcinterest_principal4();
   
});

$intrate4_amount.on('input', function() {  
  ip_intrate4 = this.value * 1;
   $("#textintrate4").html(numberWithCommas(ip_intrate4));
   recalcinterest_principal4();
   
});

$tenure4_amount.on('input', function() {  
  ip_tenure4 = this.value * 1;
   $("#texttenure4").html(numberWithCommas(ip_tenure4));
   recalcinterest_principal4();
   
});

$invperiod4_amount.on('input', function() { 
  ip_invperiod4 = Math.min(this.value * 1 , ip_tenure4);
  $invperiod4_amount[0].value = ip_invperiod4;
   $("#textinvperiod4").html(numberWithCommas(ip_invperiod4));
   recalcTOTFINEXPRIN4();
   
});

$vacantrate4_amount.on('input', function() {  
  ip_vacantrate4 = this.value * 1;
   $("#textvacantrate4").html(numberWithCommas(ip_vacantrate4));
   recalcGI4(); 
});

$rentalrate4_amount.on('input', function() {  
  ip_rentalrate4 = this.value * 1;
   $("#textrentalrate4").html(numberWithCommas(ip_rentalrate4));
   recalcGI4();
});

$opex4_amount.on('input', function() {  
  ip_opex4 = this.value * 1;
   $("#textopex4").html(numberWithCommas(ip_opex4));
   ip_opexmgmt4 = $opexmgmt4_amount[0].value = 0;
   $("#textopexmgmt4").html("");
   ip_opexmaint4 = $opexmaint4_amount[0].value = 0;
   $("#textopexmaint4").html("");
   ip_opextax4 = $opextax4_amount[0].value = 0;
   $("#textopextax4").html("");
   ip_opexinsure4 = $opexinsure4_amount[0].value = 0;
   $("#textopexinsure4").html("");
   ip_opexutil4 = $opexutil4_amount[0].value = 0;
   $("#textopexutil4").html("");
   ip_opexagentfee4 = $opexagentfee4_amount[0].value = 0;
   $("#textopexagentfee4").html("");
   
});

$opexmgmt4_amount.on('input', function() {  
  ip_opexmgmt4 = this.value * 1;
   $("#textopexmgmt4").html(numberWithCommas(ip_opexmgmt4));
   recalcOPEX4();
   
});

$opexmaint4_amount.on('input', function() {  
  ip_opexmaint4 = this.value * 1;
   $("#textopexmaint4").html(numberWithCommas(ip_opexmaint4));
   recalcOPEX4();
   
});

$opextax4_amount.on('input', function() {  
  ip_opextax4 = this.value * 1;
   $("#textopextax4").html(numberWithCommas(ip_opextax4));
   recalcOPEX4();
   
});

$opexinsure4_amount.on('input', function() {  
  ip_opexinsure4 = this.value * 1;
   $("#textopexinsure4").html(numberWithCommas(ip_opexinsure4));
   recalcOPEX4();
   
});

$opexutil4_amount.on('input', function() {  
  ip_opexutil4 = this.value * 1;
   $("#textopexutil4").html(numberWithCommas(ip_opexutil4));
   recalcOPEX4();
   
});

$opexagentfee4_amount.on('input', function() {  
  ip_opexagentfee4 = this.value * 1;
   $("#textopexagentfee4").html(numberWithCommas(ip_opexagentfee4));
   recalcOPEX4();
   
});


$finexacquireoneoff4_amount.on('input', function() {  
  ip_finexacquireoneoff4 = this.value * 1;
  ip_finexacquire4 = Math.round(this.value / (ip_invperiod4*12));
   $("#textfinexacquire4").html(numberWithCommas(ip_finexacquire4));
   recalcFINEXONEOFF4();
   
});

$finexdisposeoneoff4_amount.on('input', function() {   
  ip_finexdisposeoneoff4 = this.value * 1;
  ip_finexdispose4 = Math.round(this.value / (ip_invperiod4*12));
   $("#textfinexdispose4").html(numberWithCommas(ip_finexdispose4));
   recalcFINEXONEOFF4();
   
});

$finexother4_amount.on('input', function() {  
  ip_finexother4 = this.value * 1;
   $("#textfinexother4").html(numberWithCommas(ip_finexother4));
   recalcFINEX4();
   
});

$pcpy_capgain4_amount.on('input', function() {  
  ip_pcpy_capgain4 = this.value * 1;
  recalcTOTCAPGAIN4();   
});

$area4_amount.on('input', function() {  
  ip_area4 = this.value * 1;
   $("#textarea4").html(numberWithCommas(ip_area4));
   
});


$discountrate4_amount.on('input', function() {  
  ip_discountrate4 = this.value  /100;
   $("#textdiscountrate4").html(numberWithCommas(ip_discountrate4));
});


//functions written below this line
//--------------------------------------------------

//General function to display numbers with commas
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// --------------------------------------------------------
// PROPERTY 1 OUTPUT FUNCTION
function recalcGI1() {
  ip_gi1 = ip_rentalrate1 * ip_vacantrate1/100;
  $("#textgi1").html(numberWithCommas(Math.round(ip_gi1)));
}

function recalcOPEX1() {
  ip_opex1 = ip_opexmgmt1 + ip_opexmaint1 + ip_opextax1 + ip_opexinsure1 + ip_opexutil1 + ip_opexagentfee1;
  ip_totopex1 = ip_opex1 * ip_invperiod1 * 12;
  $opex1_amount[0].value = ip_opex1;
  $("#textopex1").html(numberWithCommas(ip_opex1));
}

function recalcloan_DP1() {
  ip_loan1 = Math.round(ip_ltv1/100 * ip_purchaseprice1);
  $("#textloan1").html(numberWithCommas(ip_loan1));
  ip_dp1 = Math.round((1 - ip_ltv1/100) * ip_purchaseprice1);
  $("#textdp1").html(numberWithCommas(ip_dp1));
  recalcTOTEQUITY1();
}

function recalcinterest_principal1() {
  const monthlyInterestRate = ip_intrate1 / 12 / 100;
  // Calculate the monthly payment using the formula for a fixed-rate loan with fixed monthly payments
  const monthlyPayment = (ip_loan1 * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -(ip_tenure1 * 12)));
  // Calculate the total interest paid
  const totalInterestPaid = monthlyPayment * (ip_tenure1 * 12) - ip_loan1;
  ip_finexprin1 = monthlyPayment-(totalInterestPaid/ip_tenure1/12);
  ip_finexint1 = totalInterestPaid/ip_tenure1/12;
  ip_finexmort1 = ip_finexprin1 + ip_finexint1;
  $("#textfinexmort1").html(numberWithCommas(Math.round(ip_finexmort1)));
  $("#textfinexprin1").html(numberWithCommas(Math.round(ip_finexprin1)));
  $("#textfinexint1").html(numberWithCommas(Math.round(ip_finexint1)));
  recalcFINEX1();
  recalcTOTFINEX1();
  recalcTOTFINEXPRIN1();
  recalcTOTCAPGAIN1();
}

function recalcFINEX1() {
  ip_finex1 = ip_finexprin1 + ip_finexint1 + ip_finexother1;
  $("#textfinex1").html(numberWithCommas(Math.round(ip_finex1)));
}

function recalcTOTFINEX1() {
  ip_totfinex1 = ip_finex1 * ip_invperiod1 * 12;
}

function recalcFINEXONEOFF1() {
  ip_finexoneoff1 = ip_finexacquireoneoff1 + ip_finexdisposeoneoff1;
  $("#textfinexoneoff1").html(numberWithCommas(ip_finexoneoff1));
}

function recalcTOTFINEXPRIN1() {
  ip_totfinexprin1 = ip_finexprin1 * ip_invperiod1 * 12;
  $("#texttotfinexprin1").html(numberWithCommas(Math.round(ip_totfinexprin1)));
  op_mb1 = ip_loan1 - ip_totfinexprin1;
  $("#textmb1").html(numberWithCommas(Math.round(op_mb1)));
  recalcTOTEQUITY1();
}

function recalcTOTCAPGAIN1() {
  ip_fv1 = Math.max(0,ip_purchaseprice1 * (1+ip_pcpy_capgain1* ip_invperiod1/100) / 1);
  ip_totcapgain1 = ip_fv1 - ip_purchaseprice1;
  $("#textfv1").html(numberWithCommas(parseFloat(ip_fv1).toFixed(0)));
  $("#texttotcapgain1").html(numberWithCommas(parseFloat(ip_totcapgain1).toFixed(0)));
  recalcTOTEQUITY1();
}

function recalcTOTEQUITY1() {
  ip_totequity1 = (ip_totfinexprin1 + ip_dp1 + ip_totcapgain1);  //this is exactly the same as 'sales proceeds' 
  $("#texttotequity1").html(numberWithCommas(parseFloat(ip_totequity1).toFixed(0)));
}

function recalcGRM1() {
  op_grm1 = Math.round(ip_purchaseprice1 / (ip_gi1*12));
  $("#textgrm1").html(numberWithCommas(op_grm1));
}

function recalcNOI1() {
  op_noi1 = Math.round((ip_gi1-ip_opex1)*12);
  $("#textnoi1").html(numberWithCommas(op_noi1));
}

function recalcCF1() {
  ip_upfrontcash1 = ip_dp1+ip_finexacquireoneoff1;
  ip_totoneoffcash1 = ip_upfrontcash1+ip_finexdisposeoneoff1;
  op_sp1 = ip_fv1 - op_mb1;  // this can be understood as 'equity'
  op_cf1 = (ip_gi1-ip_opex1-ip_finex1)*12;
  op_totcf1 = op_cf1*ip_invperiod1;
  op_totcb1 = op_sp1 + op_totcf1 - ip_totoneoffcash1;
  op_icp1 = -ip_upfrontcash1;
  op_cfbe1 = -op_icp1/op_cf1;
  if (op_cfbe1 < 0) {
    op_cfbe1 = 999;
  }
  op_totcfpv1 = ((op_cf1 * (1 - Math.pow(1 + ip_discountrate1, - ip_invperiod1)) / ip_discountrate1));
  op_sppv1 = (op_sp1 / Math.pow(1 + ip_discountrate1, ip_invperiod1));
  op_totcbpv1 = op_totcfpv1 - ip_upfrontcash1 + op_sppv1 - (ip_finexdisposeoneoff1 / Math.pow(1 + ip_discountrate1, - ip_invperiod1));
  $("#texttotcfpv1").html(numberWithCommas(Math.round(op_totcfpv1)));
  $("#textsppv1").html(numberWithCommas(Math.round(op_sppv1)));
  $("#texttotcbpv1").html(numberWithCommas(Math.round(op_totcbpv1)));
  $("#texticp1").html(numberWithCommas(Math.round(op_icp1)));
  $("#textcfbe1").html(numberWithCommas(Math.round(op_cfbe1)));
  $("#textcf1").html(numberWithCommas(Math.round(op_cf1)));
  $("#texttotcf1").html(numberWithCommas(Math.round(op_totcf1)));
  $("#textsp1").html(numberWithCommas(Math.round(op_sp1)));
  $("#texttotcb1").html(numberWithCommas(Math.round(op_totcb1)));
}

function recalcRY1() {
  op_ry1 = (op_noi1 / ip_purchaseprice1) * 100;
  $("#textry1").html(numberWithCommas(parseFloat(op_ry1).toFixed(1)));
}

function recalcOER1() {
  op_oer1 = (ip_opex1 / ip_gi1) * 100;
  $("#textoer1").html(numberWithCommas(parseFloat(op_oer1).toFixed(1)));
}

function recalcGIPSF1() {
  op_gipsf1 = (ip_gi1 / ip_area1);
  $("#textgipsf1").html(numberWithCommas(parseFloat(op_gipsf1).toFixed(1)));
}

function recalcCOC1_FirstYear() {
  op_coc1_firstyear = op_cf1/(ip_dp1 + ip_finexacquireoneoff1)*100;
  $("#textcoc1_firstyear").html(numberWithCommas(parseFloat(op_coc1_firstyear).toFixed(1)));
}

function recalcCOC1_INVPERIOD() {
  //net outflow before tax = downpayment, opex, finex, i.e. all the cash committed.
  //net inflow before tax = future market value - o/s loan, i.e. all the cash that will return include downpayment
  op_coc1_invperiod = (op_totcb1)/(ip_dp1 + ip_totopex1 + ip_totfinex1 + ip_finexoneoff1) *100; // denominator should be downpayment plus any excess cash committed or returned during the investment. if cash flow is large, then coc will turn negative. A big negative coc means sales proceeds outweight the cash income and a small negative means a high cash income.
  $("#textcoc1_invperiod").html(parseFloat(op_coc1_invperiod).toFixed(1));
}

function recalcROE1_FirstYear() {
  op_roe1_firstyear = op_cf1/ip_dp1*100;  
  $("#textroe1_firstyear").html(numberWithCommas(parseFloat(op_roe1_firstyear).toFixed(1)));
}

function recalcROE1_INVPERIOD() {
  op_roe1_invperiod = Math.min(100,(op_cf1*ip_invperiod1) / op_sp1 *100);
  $("#textroe1_invperiod").html(numberWithCommas(parseFloat(op_roe1_invperiod).toFixed(1)));
}


function recalcROR1() {
  op_ror1 = ((op_totcf1 + (ip_fv1 - ip_purchaseprice1))  / ((ip_opex1+ip_finex1) * 12 * ip_invperiod1 + ip_totoneoffcash1)) * 100;
  $("#textror1").html(numberWithCommas(parseFloat(op_ror1).toFixed(1)));
}

function recalcCR1() {
  op_cr1 = (op_noi1 / ip_purchaseprice1)*100;
  $("#textcr1").html(numberWithCommas(parseFloat(op_cr1).toFixed(1)));
}

function recalcIRR1() {
  const f = (op_irr1) => ((op_cf1 * (1 - Math.pow(1 + op_irr1, - ip_invperiod1)) / op_irr1) - (ip_dp1 + ip_finexacquireoneoff1) + ((op_sp1 - ip_finexdisposeoneoff1) / Math.pow(1 + op_irr1, ip_invperiod1)));  // calculates net present value after deducting initial investment, which are downpayment and total one off finex
  // npv = present value of my operating cashflow - initial cash invested + present value of capital gain
  op_irr1 = 0.00001;

  // Step 1: Calculate NPV for rate = 0, if negative, then exit function.
  const npvAtZeroRate = f(op_irr1);
  
  if (npvAtZeroRate < 0) {
    op_irr1 = 0; // NPV is negative, so IRR is effectively 0
    op_irrnpv1 = npvAtZeroRate; 
    $("#textirr1").html(op_irr1);
    //$("#textirrnpv1").html(numberWithCommas(parseFloat(op_irrnpv1).toFixed(0)));  // can use this line to find out how negative the number is and how near it is to getting to zero.
    op_irrnpvLogicText1 = "Converged";
    $("#textirrnpv1").html(op_irrnpvLogicText1);
    return;
  }

  // Step 2: There is a solution for discount rate. Use halving method for IRR calculation
  let irrl = 0.00001;
  let irrh = 0.05;

  // first step is to find out an initial discount rate that will give negative npv
  let npv = 500;
  op_irr1 = 0.05; 
  while ((npv) > 0) {
    npv = f(op_irr1);
    if (npv > 0) {
      op_irr1 = op_irr1 + 0.05;
    } else {
      irrh = op_irr1;
    }
  }

  op_irr1 = irrl; // reset to a low irr 
  while ((irrh-irrl)>0.0001) { // Stop when step is very small i.e. 0.1%
    npv = f(op_irr1);
      if (npv > 0 && npv < 2000) {   //$2000 is tolerance
        op_irrnpv1 = npv; // IRR found within tolerance
        $("#textirr1").html(parseFloat(op_irr1*100).toFixed(1));
        op_irrnpvLogicText1 = "Converged";
        $("#textirrnpv1").html(op_irrnpvLogicText1);
        irrl = 0.00001;
        irrh = 0.05;
        npv = 500;
        return;
      } else if (npv > 0) {
        irrl = op_irr1;
      } else {
        irrh = op_irr1;
      }
    op_irr1 = (irrh+irrl)/2;
    }
    console.log("i got here without converging");
    op_irrnpvLogicText1 = "Not Converged";
    $("#textirrnpv1").html(op_irrnpvLogicText1);
    }

function recalcInput1() {
  recalcGI1();
  recalcOPEX1();
  recalcloan_DP1();
  recalcinterest_principal1();
  recalcFINEX1();
  recalcTOTFINEX1();
  recalcFINEXONEOFF1();
  recalcTOTFINEXPRIN1();
  recalcTOTCAPGAIN1();
  recalcTOTEQUITY1();
}

function recalcOutput1() {
  recalcGRM1();
  recalcNOI1();
  recalcCF1();
  recalcRY1();
  recalcOER1();
  recalcGIPSF1();
  recalcCOC1_FirstYear();
  recalcCOC1_INVPERIOD();
  recalcROE1_FirstYear();
  recalcROE1_INVPERIOD();
  recalcROR1();
  recalcCR1();
  recalcIRR1();
}
// --------------------------------------------------------
// PROPERTY 2 OUTPUT FUNCTION
function recalcGI2() {
  ip_gi2 = ip_rentalrate2 * ip_vacantrate2/100;
  $("#textgi2").html(numberWithCommas(Math.round(ip_gi2)));
}

function recalcOPEX2() {
  ip_opex2 = ip_opexmgmt2 + ip_opexmaint2 + ip_opextax2 + ip_opexinsure2 + ip_opexutil2 + ip_opexagentfee2;
  ip_totopex2 = ip_opex2 * ip_invperiod2 * 12;
  $opex2_amount[0].value = ip_opex2;
  $("#textopex2").html(numberWithCommas(ip_opex2));
}

function recalcloan_DP2() {
  ip_loan2 = Math.round(ip_ltv2/100 * ip_purchaseprice2);
  $("#textloan2").html(numberWithCommas(ip_loan2));
  ip_dp2 = Math.round((1 - ip_ltv2/100) * ip_purchaseprice2);
  $("#textdp2").html(numberWithCommas(ip_dp2));
  recalcTOTEQUITY2();
}

function recalcinterest_principal2() {
  const monthlyInterestRate = ip_intrate2 / 12 / 100;
  // Calculate the monthly payment using the formula for a fixed-rate loan with fixed monthly payments
  const monthlyPayment = (ip_loan2 * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -(ip_tenure2 * 12)));
  // Calculate the total interest paid
  const totalInterestPaid = monthlyPayment * (ip_tenure2 * 12) - ip_loan2;
  ip_finexprin2 = monthlyPayment-(totalInterestPaid/ip_tenure2/12);
  ip_finexint2 = totalInterestPaid/ip_tenure2/12;
  ip_finexmort2 = ip_finexprin2 + ip_finexint2;
  $("#textfinexmort2").html(numberWithCommas(Math.round(ip_finexmort2)));
  $("#textfinexprin2").html(numberWithCommas(Math.round(ip_finexprin2)));
  $("#textfinexint2").html(numberWithCommas(Math.round(ip_finexint2)));
  recalcFINEX2();
  recalcTOTFINEX2();
  recalcTOTFINEXPRIN2();
  recalcTOTCAPGAIN2();
}

function recalcFINEX2() {
  ip_finex2 = ip_finexprin2 + ip_finexint2 + ip_finexother2;
  $("#textfinex2").html(numberWithCommas(Math.round(ip_finex2)));
}

function recalcTOTFINEX2() {
  ip_totfinex2 = ip_finex2 * ip_invperiod2 * 12;
}

function recalcFINEXONEOFF2() {
  ip_finexoneoff2 = ip_finexacquireoneoff2 + ip_finexdisposeoneoff2;
  $("#textfinexoneoff2").html(numberWithCommas(ip_finexoneoff2));
}


function recalcTOTFINEXPRIN2() {
  ip_totfinexprin2 = ip_finexprin2 * ip_invperiod2 * 12;
  $("#texttotfinexprin2").html(numberWithCommas(Math.round(ip_totfinexprin2)));
  op_mb2 = ip_loan2 - ip_totfinexprin2;
  $("#textmb2").html(numberWithCommas(Math.round(op_mb2)));
  recalcTOTEQUITY2();
}

function recalcTOTCAPGAIN2() {
  ip_fv2 = Math.max(0,ip_purchaseprice2 * (1+ip_pcpy_capgain2* ip_invperiod2/100) / 1);
  ip_totcapgain2 = ip_fv2 - ip_purchaseprice2;
  $("#textfv2").html(numberWithCommas(parseFloat(ip_fv2).toFixed(0)));
  $("#texttotcapgain2").html(numberWithCommas(parseFloat(ip_totcapgain2).toFixed(0)));
  recalcTOTEQUITY2();
}



function recalcTOTEQUITY2() {
  ip_totequity2 = ip_totfinexprin2 + ip_dp2 + ip_totcapgain2;
  $("#texttotequity2").html(numberWithCommas(parseFloat(ip_totequity2).toFixed(0)));
}

function recalcGRM2() {
  op_grm2 = Math.round(ip_purchaseprice2 / (ip_gi2*12));
  $("#textgrm2").html(numberWithCommas(op_grm2));
}

function recalcNOI2() {
  op_noi2 = Math.round((ip_gi2-ip_opex2)*12);
  $("#textnoi2").html(numberWithCommas(op_noi2));
}

function recalcCF2() {
  ip_upfrontcash2 = ip_dp2+ip_finexacquireoneoff2;
  ip_totoneoffcash2 = ip_upfrontcash2+ip_finexdisposeoneoff2;
  op_sp2 = ip_fv2 - op_mb2;
  op_cf2 = (ip_gi2-ip_opex2-ip_finex2)*12;
  op_totcf2 = op_cf2*ip_invperiod2;
  op_totcb2 = op_sp2 + op_totcf2 - ip_totoneoffcash2;
  op_icp2 = -ip_upfrontcash2;
  op_cfbe2 = -op_icp2/op_cf2;
  if (op_cfbe2 < 0) {
    op_cfbe2 = 999;
  }
  op_totcfpv2 = ((op_cf2 * (1 - Math.pow(1 + ip_discountrate2, - ip_invperiod2)) / ip_discountrate2));
  op_sppv2 = (op_sp2 / Math.pow(1 + ip_discountrate2, ip_invperiod2));
  op_totcbpv2 = op_totcfpv2 - ip_upfrontcash2 + op_sppv2 - (ip_finexdisposeoneoff2 / Math.pow(1 + ip_discountrate2, - ip_invperiod2));
  $("#texttotcfpv2").html(numberWithCommas(Math.round(op_totcfpv2)));
  $("#textsppv2").html(numberWithCommas(Math.round(op_sppv2)));
  $("#texttotcbpv2").html(numberWithCommas(Math.round(op_totcbpv2)));
  $("#texticp2").html(numberWithCommas(Math.round(op_icp2)));
  $("#textcfbe2").html(numberWithCommas(Math.round(op_cfbe2)));
  $("#textcf2").html(numberWithCommas(Math.round(op_cf2)));
  $("#texttotcf2").html(numberWithCommas(Math.round(op_totcf2)));
  $("#textsp2").html(numberWithCommas(Math.round(op_sp2)));
  $("#texttotcb2").html(numberWithCommas(Math.round(op_totcb2)));
}

function recalcRY2() {
  op_ry2 = op_noi2 / ip_purchaseprice2 * 100;
  $("#textry2").html(numberWithCommas(parseFloat(op_ry2).toFixed(1)));
}

function recalcOER2() {
  op_oer2 = ip_opex2 / ip_gi2 * 100;
  $("#textoer2").html(numberWithCommas(parseFloat(op_oer2).toFixed(1)));
}

function recalcGIPSF2() {
  op_gipsf2 = ip_gi2 / ip_area2;
  $("#textgipsf2").html(numberWithCommas(parseFloat(op_gipsf2).toFixed(1)));
}

function recalcCOC2_FirstYear() {
  op_coc2_firstyear = op_cf2/(ip_dp2 + ip_finexacquireoneoff2)*100;
  $("#textcoc2_firstyear").html(numberWithCommas(parseFloat(op_coc2_firstyear).toFixed(1)));
}

function recalcCOC2_INVPERIOD() {
  //net outflow before tax = downpayment, opex, finex, i.e. all the cash committed.
  //net inflow before tax = future market value - o/s loan, i.e. all the cash that will return include downpayment
  op_coc2_invperiod = (op_totcb2)/(ip_dp2 + ip_totopex2 + ip_totfinex2 + ip_finexoneoff2) *100; // denominator should be downpayment plus any excess cash committed or returned during the investment. if cash flow is large, then coc will turn negative. A big negative coc means sales proceeds outweight the cash income and a small negative means a high cash income.
  $("#textcoc2_invperiod").html(numberWithCommas(parseFloat(op_coc2_invperiod).toFixed(1)));
}

function recalcROE2_FirstYear() {
  op_roe2_firstyear = op_cf2/ip_dp2*100;  
  $("#textroe2_firstyear").html(numberWithCommas(parseFloat(op_roe2_firstyear).toFixed(1)));
}

function recalcROE2_INVPERIOD() {
  op_roe2_invperiod = Math.min(100,(op_cf2*ip_invperiod2) / op_sp2 *100);
  $("#textroe2_invperiod").html(numberWithCommas(parseFloat(op_roe2_invperiod).toFixed(1)));
}

function recalcROR2() {
  op_ror2 = ((op_totcf2 + (ip_fv2 - ip_purchaseprice2))  / ((ip_opex2+ip_finex2) * 12 * ip_invperiod2  + ip_totoneoffcash2)) * 100;
  $("#textror2").html(numberWithCommas(parseFloat(op_ror2).toFixed(1)));
}

function recalcCR2() {
  op_cr2 = (op_noi2 / ip_purchaseprice2)*100;
  $("#textcr2").html(numberWithCommas(parseFloat(op_cr2).toFixed(1)));
}

function recalcIRR2() {
  const f = (op_irr2) => ((op_cf2 * (1 - Math.pow(1 + op_irr2, - ip_invperiod2)) / op_irr2) - (ip_dp2 + ip_finexacquireoneoff2) + ((op_sp2 - ip_finexdisposeoneoff2) / Math.pow(1 + op_irr2, ip_invperiod2)));  // calculates net present value after deducting initial investment, which are downpayment and total one off finex
  // npv = present value of my operating cashflow - initial cash invested + present value of capital gain
  op_irr2 = 0.00001;

  // Step 2: Calculate NPV for rate = 0, if negative, then exit function.
  const npvAtZeroRate = f(op_irr2);
  
  if (npvAtZeroRate < 0) {
    op_irr2 = 0; // NPV is negative, so IRR is effectively 0
    op_irrnpv2 = npvAtZeroRate; 
    $("#textirr2").html(op_irr2);
    op_irrnpvLogicText2 = "Converged";
    $("#textirrnpv2").html(op_irrnpvLogicText2);
    return;
  }

  // Step 2: There is a solution for discount rate. Use halving method for IRR calculation
  let irrl = 0.00001;
  let irrh = 0.05;

  // first step is to find out an initial discount rate that will give negative npv
  let npv = 500;
  op_irr2 = 0.05; 
  while ((npv) > 0) {
    npv = f(op_irr2);
    if (npv > 0) {
      op_irr2 = op_irr2 + 0.05;
    } else {
      irrh = op_irr2;
    }
  }

  op_irr2 = irrl; // reset to a low irr 
  while ((irrh-irrl)>0.0001) { // Stop when step is very small i.e. 0.1%
    npv = f(op_irr2);
    if (npv > 0 && npv < 2000) {   //$2000 is tolerance
      op_irrnpv2 = npv; // IRR found within tolerance
      $("#textirr2").html(parseFloat(op_irr2*100).toFixed(1));
      op_irrnpvLogicText2 = "Converged";
      $("#textirrnpv2").html(op_irrnpvLogicText2);
      irrl = 0.00001;
      irrh = 0.05;
      npv = 500;
      return;
    } else if (npv > 0) {
      irrl = op_irr2;
    } else {
      irrh = op_irr2;
    }
    op_irr2 = (irrh+irrl)/2;
  }
    console.log("i got here without converging");
    op_irrnpvLogicText2 = "Not Converged";
    $("#textirrnpv2").html(op_irrnpvLogicText2);
}


function recalcInput2() {
  recalcGI2();
  recalcOPEX2();
  recalcloan_DP2();
  recalcinterest_principal2();
  recalcFINEX2();
  recalcTOTFINEX2();
  recalcFINEXONEOFF2();
  recalcTOTFINEXPRIN2();
  recalcTOTCAPGAIN2();
  recalcTOTEQUITY2();}

function recalcOutput2() {
  recalcGRM2();
  recalcNOI2();
  recalcCF2();
  recalcRY2();
  recalcOER2();
  recalcGIPSF2();
  recalcCOC2_FirstYear();
  recalcCOC2_INVPERIOD();
  recalcROE2_FirstYear();
  recalcROE2_INVPERIOD();
  recalcROR2();
  recalcCR2();
  recalcIRR2();
}

// --------------------------------------------------------
// PROPERTY 3 OUTPUT FUNCTION
function recalcGI3() {
  ip_gi3 = ip_rentalrate3 * ip_vacantrate3/100;
  $("#textgi3").html(numberWithCommas(Math.round(ip_gi3)));
}

function recalcOPEX3() {
  ip_opex3 = ip_opexmgmt3 + ip_opexmaint3 + ip_opextax3 + ip_opexinsure3 + ip_opexutil3 + ip_opexagentfee3;
  ip_totopex3 = ip_opex3 * ip_invperiod3 * 12;
  $opex3_amount[0].value = ip_opex3;
  $("#textopex3").html(numberWithCommas(ip_opex3));
}

function recalcloan_DP3() {
  ip_loan3 = Math.round(ip_ltv3/100 * ip_purchaseprice3);
  $("#textloan3").html(numberWithCommas(ip_loan3));
  ip_dp3 = Math.round((1 - ip_ltv3/100) * ip_purchaseprice3);
  $("#textdp3").html(numberWithCommas(ip_dp3));
  recalcTOTEQUITY3();
}

function recalcinterest_principal3() {
  const monthlyInterestRate = ip_intrate3 / 12 / 100;
  // Calculate the monthly payment using the formula for a fixed-rate loan with fixed monthly payments
  const monthlyPayment = (ip_loan3 * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -(ip_tenure3 * 12)));
  // Calculate the total interest paid
  const totalInterestPaid = monthlyPayment * (ip_tenure3 * 12) - ip_loan3;
  ip_finexprin3 = monthlyPayment-(totalInterestPaid/ip_tenure3/12);
  ip_finexint3 = totalInterestPaid/ip_tenure3/12;
  ip_finexmort3 = ip_finexprin3 + ip_finexint3;
  $("#textfinexmort3").html(numberWithCommas(Math.round(ip_finexmort3)));
  $("#textfinexprin3").html(numberWithCommas(Math.round(ip_finexprin3)));
  $("#textfinexint3").html(numberWithCommas(Math.round(ip_finexint3)));
  recalcFINEX3();
  recalcTOTFINEX3();
  recalcTOTFINEXPRIN3();
  recalcTOTCAPGAIN3();
}

function recalcFINEX3() {
  ip_finex3 = ip_finexprin3 + ip_finexint3 + ip_finexother3;
  $("#textfinex3").html(numberWithCommas(Math.round(ip_finex3)));
}

function recalcTOTFINEX3() {
  ip_totfinex3 = ip_finex3 * ip_invperiod3 * 12;
}

function recalcFINEXONEOFF3() {
  ip_finexoneoff3 = ip_finexacquireoneoff3 + ip_finexdisposeoneoff3;
  $("#textfinexoneoff3").html(numberWithCommas(ip_finexoneoff3));
}

function recalcTOTFINEXPRIN3() {
  ip_totfinexprin3 = ip_finexprin3 * ip_invperiod3 * 12;
  $("#texttotfinexprin3").html(numberWithCommas(Math.round(ip_totfinexprin3)));
  op_mb3 = ip_loan3 - ip_totfinexprin3;
  $("#textmb3").html(numberWithCommas(Math.round(op_mb3)));
  recalcTOTEQUITY3();
}

function recalcTOTCAPGAIN3() {
  ip_fv3 = Math.max(0,ip_purchaseprice3 * (1+ip_pcpy_capgain3* ip_invperiod3/100) / 1);
  ip_totcapgain3 = ip_fv3 - ip_purchaseprice3;
  $("#textfv3").html(numberWithCommas(parseFloat(ip_fv3).toFixed(0)));
  $("#texttotcapgain3").html(numberWithCommas(parseFloat(ip_totcapgain3).toFixed(0)));
  recalcTOTEQUITY3();
}

function recalcTOTEQUITY3() {
  ip_totequity3 = ip_totfinexprin3 + ip_dp3 + ip_totcapgain3;
  $("#texttotequity3").html(numberWithCommas(parseFloat(ip_totequity3).toFixed(0)));
}

function recalcGRM3() {
  op_grm3 = Math.round(ip_purchaseprice3 / (ip_gi3*12));
  $("#textgrm3").html(numberWithCommas(op_grm3));
}

function recalcNOI3() {
  op_noi3 = Math.round((ip_gi3-ip_opex3)*12);
  $("#textnoi3").html(numberWithCommas(op_noi3));
}

function recalcCF3() {
  ip_upfrontcash3 = ip_dp3+ip_finexacquireoneoff3;
  ip_totoneoffcash3 = ip_upfrontcash3+ip_finexdisposeoneoff3;
  op_sp3 = ip_fv3 - op_mb3;
  op_cf3 = (ip_gi3-ip_opex3-ip_finex3)*12;
  op_totcf3 = op_cf3*ip_invperiod3;
  op_totcb3 = op_sp3 + op_totcf3 - ip_totoneoffcash3;
  op_icp3 = -ip_upfrontcash3;
  op_cfbe3 = -op_icp3/op_cf3;
  if (op_cfbe3 < 0) {
    op_cfbe3 = 999;
  }
  op_totcfpv3 = ((op_cf3 * (1 - Math.pow(1 + ip_discountrate3, - ip_invperiod3)) / ip_discountrate3));
  op_sppv3 = (op_sp3 / Math.pow(1 + ip_discountrate3, ip_invperiod3));
  op_totcbpv3 = op_totcfpv3 - ip_upfrontcash3 + op_sppv3 - (ip_finexdisposeoneoff3 / Math.pow(1 + ip_discountrate3, - ip_invperiod3));
  $("#texttotcfpv3").html(numberWithCommas(Math.round(op_totcfpv3)));
  $("#textsppv3").html(numberWithCommas(Math.round(op_sppv3)));
  $("#texttotcbpv3").html(numberWithCommas(Math.round(op_totcbpv3)));
  $("#texticp3").html(numberWithCommas(Math.round(op_icp3)));
  $("#textcfbe3").html(numberWithCommas(Math.round(op_cfbe3)));
  $("#textcf3").html(numberWithCommas(Math.round(op_cf3)));
  $("#texttotcf3").html(numberWithCommas(Math.round(op_totcf3)));
  $("#textsp3").html(numberWithCommas(Math.round(op_sp3)));
  $("#texttotcb3").html(numberWithCommas(Math.round(op_totcb3)));
}

function recalcRY3() {
  op_ry3 = op_noi3 / ip_purchaseprice3 * 100;
  $("#textry3").html(numberWithCommas(parseFloat(op_ry3).toFixed(1)));
}

function recalcOER3() {
  op_oer3 = ip_opex3 / ip_gi3 * 100;
  $("#textoer3").html(numberWithCommas(parseFloat(op_oer3).toFixed(1)));
}

function recalcGIPSF3() {
  op_gipsf3 = ip_gi3 / ip_area3;
  $("#textgipsf3").html(numberWithCommas(parseFloat(op_gipsf3).toFixed(1)));
}

function recalcCOC3_FirstYear() {
  op_coc3_firstyear = op_cf3/(ip_dp3 + ip_finexacquireoneoff3)*100;
  $("#textcoc3_firstyear").html(numberWithCommas(parseFloat(op_coc3_firstyear).toFixed(1)));
}

function recalcCOC3_INVPERIOD() {
  //net outflow before tax = downpayment, opex, finex, i.e. all the cash committed.
  //net inflow before tax = future market value - o/s loan, i.e. all the cash that will return include downpayment
  op_coc3_invperiod = (op_totcb3)/(ip_dp3 + ip_totopex3 + ip_totfinex3 + ip_finexoneoff3) *100; // denominator should be downpayment plus any excess cash committed or returned during the investment. if cash flow is large, then coc will turn negative. A big negative coc means sales proceeds outweight the cash income and a small negative means a high cash income.
  $("#textcoc3_invperiod").html(numberWithCommas(parseFloat(op_coc3_invperiod).toFixed(1)));
}

function recalcROE3_FirstYear() {
  op_roe3_firstyear = op_cf3/ip_dp3*100;  
  $("#textroe3_firstyear").html(numberWithCommas(parseFloat(op_roe3_firstyear).toFixed(1)));
}

function recalcROE3_INVPERIOD() {
  op_roe3_invperiod = Math.min(100,(op_cf3*ip_invperiod3) / op_sp3 *100);
  $("#textroe3_invperiod").html(numberWithCommas(parseFloat(op_roe3_invperiod).toFixed(1)));
}

function recalcROR3() {
  op_ror3 = ((op_totcf3 + (ip_fv3 - ip_purchaseprice3))  / ((ip_opex3 + ip_finex3) * 12 * ip_invperiod3  + ip_totoneoffcash3)) * 100;
  $("#textror3").html(numberWithCommas(parseFloat(op_ror3).toFixed(1)));
}

function recalcCR3() {
  op_cr3 = (op_noi3 / ip_purchaseprice3)*100;
  $("#textcr3").html(numberWithCommas(parseFloat(op_cr3).toFixed(1)));
}

function recalcIRR3() {
  const f = (op_irr3) => ((op_cf3 * (1 - Math.pow(1 + op_irr3, - ip_invperiod3)) / op_irr3) - (ip_dp3 + ip_finexacquireoneoff3) + ((op_sp3 - ip_finexdisposeoneoff3) / Math.pow(1 + op_irr3, ip_invperiod3)));  // calculates net present value after deducting initial investment, which are downpayment and total one off finex
  // npv = present value of my operating cashflow - initial cash invested + present value of capital gain
  op_irr3 = 0.00001;

  // Step 3: Calculate NPV for rate = 0, if negative, then exit function.
  const npvAtZeroRate = f(op_irr3);
  
  if (npvAtZeroRate < 0) {
    op_irr3 = 0; // NPV is negative, so IRR is effectively 0
    op_irrnpv3 = npvAtZeroRate; 
    $("#textirr3").html(op_irr3);
    op_irrnpvLogicText3 = "Converged";
    $("#textirrnpv3").html(op_irrnpvLogicText3);
    return;
  }

  // Step 2: There is a solution for discount rate. Use halving method for IRR calculation
  let irrl = 0.00001;
  let irrh = 0.05;

  // first step is to find out an initial discount rate that will give negative npv
  let npv = 500;
  op_irr3 = 0.05; 
  while ((npv) > 0) {
    npv = f(op_irr3);
    if (npv > 0) {
      op_irr3 = op_irr3 + 0.05;
    } else {
      irrh = op_irr3;
    }
  }

  op_irr3 = irrl; // reset to a low irr 
  while ((irrh-irrl)>0.0001) { // Stop when step is very small i.e. 0.1%
    npv = f(op_irr3);
    if (npv > 0 && npv < 2000) {   //$2000 is tolerance
      op_irrnpv3 = npv; // IRR found within tolerance
      $("#textirr3").html(parseFloat(op_irr3*100).toFixed(1));
      op_irrnpvLogicText3 = "Converged";
      $("#textirrnpv3").html(op_irrnpvLogicText3);
      irrl = 0.00001;
      irrh = 0.05;
      npv = 500;
      return;
    } else if (npv > 0) {
      irrl = op_irr3;
    } else {
      irrh = op_irr3;
    }
    op_irr3 = (irrh+irrl)/2;
  }
    console.log("i got here without converging");
    op_irrnpvLogicText3 = "Not Converged";
    $("#textirrnpv3").html(op_irrnpvLogicText3);
}

function recalcInput3() {
  recalcGI3();
  recalcOPEX3();
  recalcloan_DP3();
  recalcinterest_principal3();
  recalcFINEX3();
  recalcTOTFINEX3();
  recalcFINEXONEOFF3();
  recalcTOTFINEXPRIN3();
  recalcTOTCAPGAIN3();
  recalcTOTEQUITY3();
}

function recalcOutput3() {
  recalcGRM3();
  recalcNOI3();
  recalcCF3();
  recalcRY3();
  recalcOER3();
  recalcGIPSF3();
  recalcCOC3_FirstYear();
  recalcCOC3_INVPERIOD();
  recalcROE3_FirstYear();
  recalcROE3_INVPERIOD();
  recalcROR3();
  recalcCR3();
  recalcIRR3();
}

// --------------------------------------------------------
// PROPERTY 4 OUTPUT FUNCTION
function recalcGI4() {
  ip_gi4 = ip_rentalrate4 * ip_vacantrate4/100;
  $("#textgi4").html(numberWithCommas(Math.round(ip_gi4)));
}

function recalcOPEX4() {
  ip_opex4 = ip_opexmgmt4 + ip_opexmaint4 + ip_opextax4 + ip_opexinsure4 + ip_opexutil4 + ip_opexagentfee4;
  ip_totopex4 = ip_opex4 * ip_invperiod4 * 12;
  $opex4_amount[0].value = ip_opex4;
  $("#textopex4").html(numberWithCommas(ip_opex4));
}

function recalcloan_DP4() {
  ip_loan4 = Math.round(ip_ltv4/100 * ip_purchaseprice4);
  $("#textloan4").html(numberWithCommas(ip_loan4));
  ip_dp4 = Math.round((1 - ip_ltv4/100) * ip_purchaseprice4);
  $("#textdp4").html(numberWithCommas(ip_dp4));
  recalcTOTEQUITY4();
}

function recalcinterest_principal4() {
  const monthlyInterestRate = ip_intrate4 / 12 / 100;
  // Calculate the monthly payment using the formula for a fixed-rate loan with fixed monthly payments
  const monthlyPayment = (ip_loan4 * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -(ip_tenure4 * 12)));
  // Calculate the total interest paid
  const totalInterestPaid = monthlyPayment * (ip_tenure4 * 12) - ip_loan4;
  ip_finexprin4 = monthlyPayment-(totalInterestPaid/ip_tenure4/12);
  ip_finexint4 = totalInterestPaid/ip_tenure4/12;
  ip_finexmort4 = ip_finexprin4 + ip_finexint4;
  $("#textfinexmort4").html(numberWithCommas(Math.round(ip_finexmort4)));
  $("#textfinexprin4").html(numberWithCommas(Math.round(ip_finexprin4)));
  $("#textfinexint4").html(numberWithCommas(Math.round(ip_finexint4)));
  recalcFINEX4();
  recalcTOTFINEX4();
  recalcTOTFINEXPRIN4();
  recalcTOTCAPGAIN4();
}

function recalcFINEX4() {
  ip_finex4 = ip_finexprin4 + ip_finexint4 + ip_finexother4;
  $("#textfinex4").html(numberWithCommas(Math.round(ip_finex4)));
}

function recalcTOTFINEX4() {
  ip_totfinex4 = ip_finex4 * ip_invperiod4 * 12;
}

function recalcFINEXONEOFF4() {
  ip_finexoneoff4 = ip_finexacquireoneoff4 + ip_finexdisposeoneoff4;
  $("#textfinexoneoff4").html(numberWithCommas(ip_finexoneoff4));
}


function recalcTOTFINEXPRIN4() {
  ip_totfinexprin4 = ip_finexprin4 * ip_invperiod4 * 12;
  $("#texttotfinexprin4").html(numberWithCommas(Math.round(ip_totfinexprin4)));
  op_mb4 = ip_loan4 - ip_totfinexprin4;
  $("#textmb4").html(numberWithCommas(Math.round(op_mb4)));
  recalcTOTEQUITY4();
}

function recalcTOTCAPGAIN4() {
  ip_fv4 = Math.max(0,ip_purchaseprice4 * (1+ip_pcpy_capgain4* ip_invperiod4/100) / 1);
  ip_totcapgain4 = ip_fv4 - ip_purchaseprice4;
  $("#textfv4").html(numberWithCommas(parseFloat(ip_fv4).toFixed(0)));
  $("#texttotcapgain4").html(numberWithCommas(parseFloat(ip_totcapgain4).toFixed(0)));
  recalcTOTEQUITY4();
}

function recalcTOTEQUITY4() {
  ip_totequity4 = (ip_totfinexprin4 + ip_dp4 + ip_totcapgain4);
  $("#texttotequity4").html(numberWithCommas(parseFloat(ip_totequity4).toFixed(0)));
}

function recalcGRM4() {
  op_grm4 = Math.round(ip_purchaseprice4 / (ip_gi4*12));
  $("#textgrm4").html(numberWithCommas(op_grm4));
}

function recalcNOI4() {
  op_noi4 = Math.round((ip_gi4-ip_opex4)*12);
  $("#textnoi4").html(numberWithCommas(op_noi4));
}


function recalcCF4() {
  ip_upfrontcash4 = ip_dp4+ip_finexacquireoneoff4;
  ip_totoneoffcash4 = ip_upfrontcash4+ip_finexdisposeoneoff4;
  op_sp4 = ip_fv4 - op_mb4;
  op_cf4 = (ip_gi4-ip_opex4-ip_finex4)*12;
  op_totcf4 = op_cf4*ip_invperiod4;
  op_totcb4 = op_sp4 + op_totcf4 - ip_totoneoffcash4;
  op_icp4 = -ip_upfrontcash4;
  op_cfbe4 = -op_icp4/op_cf4;
  if (op_cfbe4 < 0) {
    op_cfbe4 = 999;
  }
  op_totcfpv4 = ((op_cf4 * (1 - Math.pow(1 + ip_discountrate4, - ip_invperiod4)) / ip_discountrate4));
  op_sppv4 = (op_sp4 / Math.pow(1 + ip_discountrate4, ip_invperiod4));
  op_totcbpv4 = op_totcfpv4 - ip_upfrontcash4 + op_sppv4 - (ip_finexdisposeoneoff4 / Math.pow(1 + ip_discountrate4, - ip_invperiod4));
  $("#texttotcfpv4").html(numberWithCommas(Math.round(op_totcfpv4)));
  $("#textsppv4").html(numberWithCommas(Math.round(op_sppv4)));
  $("#texttotcbpv4").html(numberWithCommas(Math.round(op_totcbpv4)));
  $("#texticp4").html(numberWithCommas(Math.round(op_icp4)));
  $("#textcfbe4").html(numberWithCommas(Math.round(op_cfbe4)));
  $("#textcf4").html(numberWithCommas(Math.round(op_cf4)));
  $("#texttotcf4").html(numberWithCommas(Math.round(op_totcf4)));
  $("#textsp4").html(numberWithCommas(Math.round(op_sp4)));
  $("#texttotcb4").html(numberWithCommas(Math.round(op_totcb4)));
}

function recalcRY4() {
  op_ry4 = op_noi4 / ip_purchaseprice4 * 100;
  $("#textry4").html(numberWithCommas(parseFloat(op_ry4).toFixed(1)));
}

function recalcOER4() {
  op_oer4 = ip_opex4 / ip_gi4 * 100;
  $("#textoer4").html(numberWithCommas(parseFloat(op_oer4).toFixed(1)));
}

function recalcGIPSF4() {
  op_gipsf4 = ip_gi4 / ip_area4;
  $("#textgipsf4").html(numberWithCommas(parseFloat(op_gipsf4).toFixed(1)));
}

function recalcCOC4_FirstYear() {
  op_coc4_firstyear = op_cf4/(ip_dp4 + ip_finexacquireoneoff4)*100;
  $("#textcoc4_firstyear").html(numberWithCommas(parseFloat(op_coc4_firstyear).toFixed(1)));
}

function recalcCOC4_INVPERIOD() {
  //net outflow before tax = downpayment, opex, finex, i.e. all the cash committed.
  //net inflow before tax = future market value - o/s loan, i.e. all the cash that will return include downpayment
  op_coc4_invperiod = (op_totcb4)/(ip_dp4 + ip_totopex4 + ip_totfinex4 + ip_finexoneoff4) *100; // denominator should be downpayment plus any excess cash committed or returned during the investment. if cash flow is large, then coc will turn negative. A big negative coc means sales proceeds outweight the cash income and a small negative means a high cash income.
  $("#textcoc4_invperiod").html(numberWithCommas(parseFloat(op_coc4_invperiod).toFixed(1)));
}


function recalcROE4_FirstYear() {
  op_roe4_firstyear = op_cf4/ip_dp4*100;  
  $("#textroe4_firstyear").html(numberWithCommas(parseFloat(op_roe4_firstyear).toFixed(1)));
}

function recalcROE4_INVPERIOD() {
  op_roe4_invperiod = Math.min(100,(op_cf4*ip_invperiod4) / op_sp4 *100);
  $("#textroe4_invperiod").html(numberWithCommas(parseFloat(op_roe4_invperiod).toFixed(1)));
}

function recalcROR4() {
  op_ror4 = ((op_totcf4 + (ip_fv4 - ip_purchaseprice4))  / ((ip_opex4 + ip_finex4) * 12 * ip_invperiod4  + ip_totoneoffcash4)) * 100;
  $("#textror4").html(numberWithCommas(parseFloat(op_ror4).toFixed(1)));
}

function recalcCR4() {
  op_cr4 = (op_noi4 / ip_purchaseprice4)*100;
  $("#textcr4").html(numberWithCommas(parseFloat(op_cr4).toFixed(1)));
}

function recalcIRR4() {
  const f = (op_irr4) => ((op_cf4 * (1 - Math.pow(1 + op_irr4, - ip_invperiod4)) / op_irr4) - (ip_dp4 + ip_finexacquireoneoff4) + ((op_sp4 - ip_finexdisposeoneoff4) / Math.pow(1 + op_irr4, ip_invperiod4)));  // calculates net present value after deducting initial investment, which are downpayment and total one off finex
  // npv = present value of my operating cashflow - initial cash invested + present value of capital gain
  op_irr4 = 0.00001;

  // Step 4: Calculate NPV for rate = 0, if negative, then exit function.
  const npvAtZeroRate = f(op_irr4);
  
  if (npvAtZeroRate < 0) {
    op_irr4 = 0; // NPV is negative, so IRR is effectively 0
    op_irrnpv4 = npvAtZeroRate; 
    $("#textirr4").html(op_irr4);
    op_irrnpvLogicText4 = "Converged";
    $("#textirrnpv4").html(op_irrnpvLogicText4);
    return;
  }

  // Step 2: There is a solution for discount rate. Use halving method for IRR calculation
  let irrl = 0.00001;
  let irrh = 0.05;

  // first step is to find out an initial discount rate that will give negative npv
  let npv = 500;
  op_irr4 = 0.05; 
  while ((npv) > 0) {
    npv = f(op_irr4);
    if (npv > 0) {
      op_irr4 = op_irr4 + 0.05;
    } else {
      irrh = op_irr4;
    }
  }

  op_irr4 = irrl; // reset to a low irr 
  while ((irrh-irrl)>0.0001) { // Stop when step is very small i.e. 0.1%
    npv = f(op_irr4);
    if (npv > 0 && npv < 2000) {   //$2000 is tolerance
      op_irrnpv4 = npv; // IRR found within tolerance
      $("#textirr4").html(parseFloat(op_irr4*100).toFixed(1));
      op_irrnpvLogicText4 = "Converged";
      $("#textirrnpv4").html(op_irrnpvLogicText4);
      irrl = 0.00001;
      irrh = 0.05;
      npv = 500;
      return;
    } else if (npv > 0) {
      irrl = op_irr4;
    } else {
      irrh = op_irr4;
    }
    op_irr4 = (irrh+irrl)/2;
  }
    console.log("i got here without converging");
    op_irrnpvLogicText4 = "Not Converged";
    $("#textirrnpv4").html(op_irrnpvLogicText4);
}

function recalcInput4() {
  recalcGI4();
  recalcOPEX4();
  recalcloan_DP4();
  recalcinterest_principal4();
  recalcFINEX4();
  recalcTOTFINEX4();
  recalcFINEXONEOFF4();
  recalcTOTFINEXPRIN4();
  recalcTOTCAPGAIN4();
  recalcTOTEQUITY4();
}

function recalcOutput4() {
  recalcGRM4();
  recalcNOI4();
  recalcCF4();
  recalcRY4();
  recalcOER4();
  recalcGIPSF4();
  recalcCOC4_FirstYear();
  recalcCOC4_INVPERIOD();
  recalcROE4_FirstYear();
  recalcROE4_INVPERIOD();
  recalcROR4();
  recalcCR4();
  recalcIRR4();
}

// --------------------------------------

function duplicate1(){
  const ip_duplicate1 = document.getElementById("js-duplicate1-input").value;

  let purchasepriceVarName = 'ip_purchaseprice' + ip_duplicate1;
  let ltvVarName = 'ip_ltv' + ip_duplicate1;
  let loanVarName = 'ip_loan' + ip_duplicate1;
  let dpVarName = 'ip_dp' + ip_duplicate1;
  let tenureVarName = 'ip_tenure' + ip_duplicate1;
  let intrateVarName = 'ip_intrate' + ip_duplicate1;
  let invperiodVarName = 'ip_invperiod' + ip_duplicate1;
  let vacantrateVarName = 'ip_vacantrate' + ip_duplicate1;
  let rentalrateVarName = 'ip_rentalrate' + ip_duplicate1;
  let opexVarName = 'ip_opex' + ip_duplicate1;
  let opexmgmtVarName = 'ip_opexmgmt' + ip_duplicate1;
  let opexmaintVarName = 'ip_opexmaint' + ip_duplicate1;
  let opextaxVarName = 'ip_opextax' + ip_duplicate1;
  let opexinsureVarName = 'ip_opexinsure' + ip_duplicate1;
  let opexutilVarName = 'ip_opexutil' + ip_duplicate1;
  let opexagentfeeVarName = 'ip_opexagentfee' + ip_duplicate1;
  let finexVarName = 'ip_finex' + ip_duplicate1;
  let finexprinVarName = 'ip_finexprin' + ip_duplicate1;
  let finexintVarName = 'ip_finexint' + ip_duplicate1;
  let finexmortVarName = 'ip_finexmort' + ip_duplicate1;
  let finexacquireVarName = 'ip_finexacquire' + ip_duplicate1;
  let finexdisposeVarName = 'ip_finexdispose' + ip_duplicate1;
  let finexacquireoneoffVarName = 'ip_finexacquireoneoff' + ip_duplicate1;
  let finexdisposeoneoffVarName = 'ip_finexdisposeoneoff' + ip_duplicate1;
  let finexotherVarName = 'ip_finexother' + ip_duplicate1;
  let finexoneoffVarName = 'ip_finexoneoff' + ip_duplicate1;
  let giVarName = 'ip_gi' + ip_duplicate1;
  let totequityVarName = 'ip_totequity' + ip_duplicate1;
  let totfvVarName = 'ip_fv' + ip_duplicate1;
  let totcapgainVarName = 'ip_totcapgain' + ip_duplicate1;
  let pcpy_capgainVarName = 'ip_pcpy_capgain' + ip_duplicate1;
  let totfinexprinVarName = 'ip_totfinexprin' + ip_duplicate1;
  let areaVarName = 'ip_area' + ip_duplicate1;

  ip_purchaseprice1 = window[purchasepriceVarName];
  ip_ltv1 = window[ltvVarName];
  ip_loan1 = window[loanVarName];
  ip_dp1 = window[dpVarName];
  ip_tenure1 = window[tenureVarName];
  ip_intrate1 = window[intrateVarName];
  ip_invperiod1 = window[invperiodVarName];
  ip_vacantrate1 = window[vacantrateVarName];
  ip_rentalrate1 = window[rentalrateVarName];
  ip_opexmgmt1 = window[opexmgmtVarName];
  ip_opexmaint1 = window[opexmaintVarName];
  ip_opextax1 = window[opextaxVarName];
  ip_opexinsure1 = window[opexinsureVarName];
  ip_opexutil1 = window[opexutilVarName];
  ip_opexagentfee1 = window[opexagentfeeVarName];
  ip_opex1 = window[opexVarName];
  ip_finex1 = window[finexVarName];
  ip_finexprin1 = window[finexprinVarName];
  ip_finexint1 = window[finexintVarName];
  ip_finexmort1 = window[finexmortVarName];
  ip_finexacquire1 = window[finexacquireVarName];
  ip_finexdispose1 = window[finexdisposeVarName];
  ip_finexacquireoneoff1 = window[finexacquireoneoffVarName];
  ip_finexdisposeoneoff1 = window[finexdisposeoneoffVarName];
  ip_finexother1 = window[finexotherVarName];
  ip_finexoneoff1 = window[finexoneoffVarName];
  ip_gi1 = window[giVarName];
  ip_area1 = window[areaVarName];
  ip_totequity1 = window[totequityVarName];
  ip_fv1 = window[totfvVarName];
  ip_totcapgain1 = window[totcapgainVarName];
  ip_pcpy_capgain1 = window[pcpy_capgainVarName];
  ip_totfinexprin1 = window[totfinexprinVarName];

  $purchaseprice1_amount[0].value = ip_purchaseprice1;
  $("#textpurchaseprice1").html(numberWithCommas(ip_purchaseprice1));
  $ltv1_amount[0].value = ip_ltv1;
  $("#textloan1").html(numberWithCommas(ip_loan1));
  $("#textdp1").html(numberWithCommas(ip_dp1));
  $tenure1_amount[0].value = ip_tenure1;
  $intrate1_amount[0].value = ip_intrate1;
  $vacantrate1_amount[0].value = ip_vacantrate1;
  $invperiod1_amount[0].value = ip_invperiod1;
  $rentalrate1_amount[0].value = ip_rentalrate1;
  $opex1_amount[0].value = ip_opex1;
  $opexmgmt1_amount[0].value = ip_opexmgmt1;
  $opexmaint1_amount[0].value = ip_opexmaint1;
  $opextax1_amount[0].value = ip_opextax1;
  $opexinsure1_amount[0].value = ip_opexinsure1;
  $opexutil1_amount[0].value = ip_opexutil1;
  $opexagentfee1_amount[0].value = ip_opexagentfee1;
  $("#textfinex1").html(numberWithCommas(ip_finex1));
  $("#textfinexprin1").html(numberWithCommas(ip_finexprin1));
  $("#textfinexint1").html(numberWithCommas(ip_finexint1));
  $("#textfinexmort1").html(numberWithCommas(ip_finexmort1));
  $finexacquireoneoff1_amount[0].value = ip_finexacquireoneoff1;
  $("#textfinexacquire1").html(numberWithCommas(ip_finexacquire1));
  $finexdisposeoneoff1_amount[0].value = ip_finexdisposeoneoff1;
  $("#textfinexdispose1").html(numberWithCommas(ip_finexdispose1));
  $finexother1_amount[0].value = ip_finexother1;
  $("#textfinexother1").html(numberWithCommas(ip_finexother1));
  $("#textfinexoneoff1").html(numberWithCommas(ip_finexoneoff1));
  $("#textgi1").html(numberWithCommas(ip_gi1));
  $("#texttotequity1").html(numberWithCommas(ip_totequity1));
  $("#texttotfinexprin1").html(numberWithCommas(ip_totfinexprin1));
  $("#texttotcapgain1").html(numberWithCommas(ip_totcapgain1));
  $pcpy_capgain1_amount[0].value = ip_pcpy_capgain1;
  $area1_amount[0].value = ip_area1;  
  recalcInput1();
}

function duplicate2(){
  const ip_duplicate2 = document.getElementById("js-duplicate2-input").value;

  let purchasepriceVarName = 'ip_purchaseprice' + ip_duplicate2;
  let ltvVarName = 'ip_ltv' + ip_duplicate2;
  let loanVarName = 'ip_loan' + ip_duplicate2;
  let dpVarName = 'ip_dp' + ip_duplicate2;
  let tenureVarName = 'ip_tenure' + ip_duplicate2;
  let intrateVarName = 'ip_intrate' + ip_duplicate2;
  let invperiodVarName = 'ip_invperiod' + ip_duplicate2;
  let vacantrateVarName = 'ip_vacantrate' + ip_duplicate2;
  let rentalrateVarName = 'ip_rentalrate' + ip_duplicate2;
  let opexVarName = 'ip_opex' + ip_duplicate2;
  let opexmgmtVarName = 'ip_opexmgmt' + ip_duplicate2;
  let opexmaintVarName = 'ip_opexmaint' + ip_duplicate2;
  let opextaxVarName = 'ip_opextax' + ip_duplicate2;
  let opexinsureVarName = 'ip_opexinsure' + ip_duplicate2;
  let opexutilVarName = 'ip_opexutil' + ip_duplicate2;
  let opexagentfeeVarName = 'ip_opexagentfee' + ip_duplicate2;
  let finexVarName = 'ip_finex' + ip_duplicate2;
  let finexprinVarName = 'ip_finexprin' + ip_duplicate2;
  let finexintVarName = 'ip_finexint' + ip_duplicate2;
  let finexmortVarName = 'ip_finexmort' + ip_duplicate2;
  let finexacquireVarName = 'ip_finexacquire' + ip_duplicate2;
  let finexdisposeVarName = 'ip_finexdispose' + ip_duplicate2;
  let finexacquireoneoffVarName = 'ip_finexacquireoneoff' + ip_duplicate2;
  let finexdisposeoneoffVarName = 'ip_finexdisposeoneoff' + ip_duplicate2;
  let finexotherVarName = 'ip_finexother' + ip_duplicate2;
  let finexoneoffVarName = 'ip_finexoneoff' + ip_duplicate2;
  let giVarName = 'ip_gi' + ip_duplicate2;
  let totequityVarName = 'ip_totequity' + ip_duplicate2;
  let totfvVarName = 'ip_fv' + ip_duplicate2;
  let totcapgainVarName = 'ip_totcapgain' + ip_duplicate2;
  let pcpy_capgainVarName = 'ip_pcpy_capgain' + ip_duplicate2;
  let totfinexprinVarName = 'ip_totfinexprin' + ip_duplicate2;
  let areaVarName = 'ip_area' + ip_duplicate2;

  ip_purchaseprice2 = window[purchasepriceVarName];
  ip_ltv2 = window[ltvVarName];
  ip_loan2 = window[loanVarName];
  ip_dp2 = window[dpVarName];
  ip_tenure2 = window[tenureVarName];
  ip_intrate2 = window[intrateVarName];
  ip_invperiod2 = window[invperiodVarName];
  ip_vacantrate2 = window[vacantrateVarName];
  ip_rentalrate2 = window[rentalrateVarName];
  ip_opexmgmt2 = window[opexmgmtVarName];
  ip_opexmaint2 = window[opexmaintVarName];
  ip_opextax2 = window[opextaxVarName];
  ip_opexinsure2 = window[opexinsureVarName];
  ip_opexutil2 = window[opexutilVarName];
  ip_opexagentfee2 = window[opexagentfeeVarName];
  ip_opex2 = window[opexVarName];
  ip_finex2 = window[finexVarName];
  ip_finexprin2 = window[finexprinVarName];
  ip_finexint2 = window[finexintVarName];
  ip_finexmort2 = window[finexmortVarName];
  ip_finexacquire2 = window[finexacquireVarName];
  ip_finexdispose2 = window[finexdisposeVarName];
  ip_finexacquireoneoff2 = window[finexacquireoneoffVarName];
  ip_finexdisposeoneoff2 = window[finexdisposeoneoffVarName];
  ip_finexother2 = window[finexotherVarName];
  ip_finexoneoff2 = window[finexoneoffVarName];
  ip_gi2 = window[giVarName];
  ip_area2 = window[areaVarName];
  ip_totequity2 = window[totequityVarName];
  ip_fv2 = window[totfvVarName];
  ip_totcapgain2 = window[totcapgainVarName];
  ip_pcpy_capgain2 = window[pcpy_capgainVarName];
  ip_totfinexprin2 = window[totfinexprinVarName];

  $purchaseprice2_amount[0].value = ip_purchaseprice2;
  $("#textpurchaseprice2").html(numberWithCommas(ip_purchaseprice2));
  $ltv2_amount[0].value = ip_ltv2;
  $("#textloan2").html(numberWithCommas(ip_loan2));
  $("#textdp2").html(numberWithCommas(ip_dp2));
  $tenure2_amount[0].value = ip_tenure2;
  $intrate2_amount[0].value = ip_intrate2;
  $vacantrate2_amount[0].value = ip_vacantrate2;
  $invperiod2_amount[0].value = ip_invperiod2;
  $rentalrate2_amount[0].value = ip_rentalrate2;
  $opex2_amount[0].value = ip_opex2;
  $opexmgmt2_amount[0].value = ip_opexmgmt2;
  $opexmaint2_amount[0].value = ip_opexmaint2;
  $opextax2_amount[0].value = ip_opextax2;
  $opexinsure2_amount[0].value = ip_opexinsure2;
  $opexutil2_amount[0].value = ip_opexutil2;
  $opexagentfee2_amount[0].value = ip_opexagentfee2;
  $("#textfinex2").html(numberWithCommas(ip_finex2));
  $("#textfinexprin2").html(numberWithCommas(ip_finexprin2));
  $("#textfinexint2").html(numberWithCommas(ip_finexint2));
  $("#textfinexmort2").html(numberWithCommas(ip_finexmort2));
  $finexacquireoneoff2_amount[0].value = ip_finexacquireoneoff2;
  $("#textfinexacquire2").html(numberWithCommas(ip_finexacquire2));
  $finexdisposeoneoff2_amount[0].value = ip_finexdisposeoneoff2;
  $("#textfinexdispose2").html(numberWithCommas(ip_finexdispose2));
  $finexother2_amount[0].value = ip_finexother2;
  $("#textfinexother2").html(numberWithCommas(ip_finexother2));
  $("#textfinexoneoff2").html(numberWithCommas(ip_finexoneoff2));
  $("#textgi2").html(numberWithCommas(ip_gi2));
  $("#texttotequity2").html(numberWithCommas(ip_totequity2));
  $("#texttotfinexprin2").html(numberWithCommas(ip_totfinexprin2));
  $("#texttotcapgain2").html(numberWithCommas(ip_totcapgain2));
  $pcpy_capgain2_amount[0].value = ip_pcpy_capgain2;
  $area2_amount[0].value = ip_area2;  
  recalcInput2();
}

function duplicate3(){
  const ip_duplicate3 = document.getElementById("js-duplicate3-input").value;

  let purchasepriceVarName = 'ip_purchaseprice' + ip_duplicate3;
  let ltvVarName = 'ip_ltv' + ip_duplicate3;
  let loanVarName = 'ip_loan' + ip_duplicate3;
  let dpVarName = 'ip_dp' + ip_duplicate3;
  let tenureVarName = 'ip_tenure' + ip_duplicate3;
  let intrateVarName = 'ip_intrate' + ip_duplicate3;
  let invperiodVarName = 'ip_invperiod' + ip_duplicate3;
  let vacantrateVarName = 'ip_vacantrate' + ip_duplicate3;
  let rentalrateVarName = 'ip_rentalrate' + ip_duplicate3;
  let opexVarName = 'ip_opex' + ip_duplicate3;
  let opexmgmtVarName = 'ip_opexmgmt' + ip_duplicate3;
  let opexmaintVarName = 'ip_opexmaint' + ip_duplicate3;
  let opextaxVarName = 'ip_opextax' + ip_duplicate3;
  let opexinsureVarName = 'ip_opexinsure' + ip_duplicate3;
  let opexutilVarName = 'ip_opexutil' + ip_duplicate3;
  let opexagentfeeVarName = 'ip_opexagentfee' + ip_duplicate3;
  let finexVarName = 'ip_finex' + ip_duplicate3;
  let finexprinVarName = 'ip_finexprin' + ip_duplicate3;
  let finexintVarName = 'ip_finexint' + ip_duplicate3;
  let finexmortVarName = 'ip_finexmort' + ip_duplicate3;
  let finexacquireVarName = 'ip_finexacquire' + ip_duplicate3;
  let finexdisposeVarName = 'ip_finexdispose' + ip_duplicate3;
  let finexacquireoneoffVarName = 'ip_finexacquireoneoff' + ip_duplicate3;
  let finexdisposeoneoffVarName = 'ip_finexdisposeoneoff' + ip_duplicate3;
  let finexotherVarName = 'ip_finexother' + ip_duplicate3;
  let finexoneoffVarName = 'ip_finexoneoff' + ip_duplicate3;
  let giVarName = 'ip_gi' + ip_duplicate3;
  let totequityVarName = 'ip_totequity' + ip_duplicate3;
  let totfvVarName = 'ip_fv' + ip_duplicate3;
  let totcapgainVarName = 'ip_totcapgain' + ip_duplicate3;
  let pcpy_capgainVarName = 'ip_pcpy_capgain' + ip_duplicate3;
  let totfinexprinVarName = 'ip_totfinexprin' + ip_duplicate3;
  let areaVarName = 'ip_area' + ip_duplicate3;

  ip_purchaseprice3 = window[purchasepriceVarName];
  ip_ltv3 = window[ltvVarName];
  ip_loan3 = window[loanVarName];
  ip_dp3 = window[dpVarName];
  ip_tenure3 = window[tenureVarName];
  ip_intrate3 = window[intrateVarName];
  ip_invperiod3 = window[invperiodVarName];
  ip_vacantrate3 = window[vacantrateVarName];
  ip_rentalrate3 = window[rentalrateVarName];
  ip_opexmgmt3 = window[opexmgmtVarName];
  ip_opexmaint3 = window[opexmaintVarName];
  ip_opextax3 = window[opextaxVarName];
  ip_opexinsure3 = window[opexinsureVarName];
  ip_opexutil3 = window[opexutilVarName];
  ip_opexagentfee3 = window[opexagentfeeVarName];
  ip_opex3 = window[opexVarName];
  ip_finex3 = window[finexVarName];
  ip_finexprin3 = window[finexprinVarName];
  ip_finexint3 = window[finexintVarName];
  ip_finexmort3 = window[finexmortVarName];
  ip_finexacquire3 = window[finexacquireVarName];
  ip_finexdispose3 = window[finexdisposeVarName];
  ip_finexacquireoneoff3 = window[finexacquireoneoffVarName];
  ip_finexdisposeoneoff3 = window[finexdisposeoneoffVarName];
  ip_finexother3 = window[finexotherVarName];
  ip_finexoneoff3 = window[finexoneoffVarName];
  ip_gi3 = window[giVarName];
  ip_area3 = window[areaVarName];
  ip_totequity3 = window[totequityVarName];
  ip_fv3 = window[totfvVarName];
  ip_totcapgain3 = window[totcapgainVarName];
  ip_pcpy_capgain3 = window[pcpy_capgainVarName];
  ip_totfinexprin3 = window[totfinexprinVarName];

  $purchaseprice3_amount[0].value = ip_purchaseprice3;
  $("#textpurchaseprice3").html(numberWithCommas(ip_purchaseprice3));
  $ltv3_amount[0].value = ip_ltv3;
  $("#textloan3").html(numberWithCommas(ip_loan3));
  $("#textdp3").html(numberWithCommas(ip_dp3));
  $tenure3_amount[0].value = ip_tenure3;
  $intrate3_amount[0].value = ip_intrate3;
  $vacantrate3_amount[0].value = ip_vacantrate3;
  $invperiod3_amount[0].value = ip_invperiod3;
  $rentalrate3_amount[0].value = ip_rentalrate3;
  $opex3_amount[0].value = ip_opex3;
  $opexmgmt3_amount[0].value = ip_opexmgmt3;
  $opexmaint3_amount[0].value = ip_opexmaint3;
  $opextax3_amount[0].value = ip_opextax3;
  $opexinsure3_amount[0].value = ip_opexinsure3;
  $opexutil3_amount[0].value = ip_opexutil3;
  $opexagentfee3_amount[0].value = ip_opexagentfee3;
  $("#textfinex3").html(numberWithCommas(ip_finex3));
  $("#textfinexprin3").html(numberWithCommas(ip_finexprin3));
  $("#textfinexint3").html(numberWithCommas(ip_finexint3));
  $("#textfinexmort3").html(numberWithCommas(ip_finexmort3));
  $finexacquireoneoff3_amount[0].value = ip_finexacquireoneoff3;
  $("#textfinexacquire3").html(numberWithCommas(ip_finexacquire3));
  $finexdisposeoneoff3_amount[0].value = ip_finexdisposeoneoff3;
  $("#textfinexdispose3").html(numberWithCommas(ip_finexdispose3));
  $finexother3_amount[0].value = ip_finexother3;
  $("#textfinexother3").html(numberWithCommas(ip_finexother3));
  $("#textfinexoneoff3").html(numberWithCommas(ip_finexoneoff3));
  $("#textgi3").html(numberWithCommas(ip_gi3));
  $("#texttotequity3").html(numberWithCommas(ip_totequity3));
  $("#texttotfinexprin3").html(numberWithCommas(ip_totfinexprin3));
  $("#texttotcapgain3").html(numberWithCommas(ip_totcapgain3));
  $pcpy_capgain3_amount[0].value = ip_pcpy_capgain3;
  $area3_amount[0].value = ip_area3;  
  recalcInput3();
}

function duplicate4(){
  const ip_duplicate4 = document.getElementById("js-duplicate4-input").value;

  let purchasepriceVarName = 'ip_purchaseprice' + ip_duplicate4;
  let ltvVarName = 'ip_ltv' + ip_duplicate4;
  let loanVarName = 'ip_loan' + ip_duplicate4;
  let dpVarName = 'ip_dp' + ip_duplicate4;
  let tenureVarName = 'ip_tenure' + ip_duplicate4;
  let intrateVarName = 'ip_intrate' + ip_duplicate4;
  let invperiodVarName = 'ip_invperiod' + ip_duplicate4;
  let vacantrateVarName = 'ip_vacantrate' + ip_duplicate4;
  let rentalrateVarName = 'ip_rentalrate' + ip_duplicate4;
  let opexVarName = 'ip_opex' + ip_duplicate4;
  let opexmgmtVarName = 'ip_opexmgmt' + ip_duplicate4;
  let opexmaintVarName = 'ip_opexmaint' + ip_duplicate4;
  let opextaxVarName = 'ip_opextax' + ip_duplicate4;
  let opexinsureVarName = 'ip_opexinsure' + ip_duplicate4;
  let opexutilVarName = 'ip_opexutil' + ip_duplicate4;
  let opexagentfeeVarName = 'ip_opexagentfee' + ip_duplicate4;
  let finexVarName = 'ip_finex' + ip_duplicate4;
  let finexprinVarName = 'ip_finexprin' + ip_duplicate4;
  let finexintVarName = 'ip_finexint' + ip_duplicate4;
  let finexmortVarName = 'ip_finexmort' + ip_duplicate4;
  let finexacquireVarName = 'ip_finexacquire' + ip_duplicate4;
  let finexdisposeVarName = 'ip_finexdispose' + ip_duplicate4;
  let finexacquireoneoffVarName = 'ip_finexacquireoneoff' + ip_duplicate4;
  let finexdisposeoneoffVarName = 'ip_finexdisposeoneoff' + ip_duplicate4;
  let finexotherVarName = 'ip_finexother' + ip_duplicate4;
  let finexoneoffVarName = 'ip_finexoneoff' + ip_duplicate4;
  let giVarName = 'ip_gi' + ip_duplicate4;
  let totequityVarName = 'ip_totequity' + ip_duplicate4;
  let totfvVarName = 'ip_fv' + ip_duplicate4;
  let totcapgainVarName = 'ip_totcapgain' + ip_duplicate4;
  let pcpy_capgainVarName = 'ip_pcpy_capgain' + ip_duplicate4;
  let totfinexprinVarName = 'ip_totfinexprin' + ip_duplicate4;
  let areaVarName = 'ip_area' + ip_duplicate4;

  ip_purchaseprice4 = window[purchasepriceVarName];
  ip_ltv4 = window[ltvVarName];
  ip_loan4 = window[loanVarName];
  ip_dp4 = window[dpVarName];
  ip_tenure4 = window[tenureVarName];
  ip_intrate4 = window[intrateVarName];
  ip_invperiod4 = window[invperiodVarName];
  ip_vacantrate4 = window[vacantrateVarName];
  ip_rentalrate4 = window[rentalrateVarName];
  ip_opexmgmt4 = window[opexmgmtVarName];
  ip_opexmaint4 = window[opexmaintVarName];
  ip_opextax4 = window[opextaxVarName];
  ip_opexinsure4 = window[opexinsureVarName];
  ip_opexutil4 = window[opexutilVarName];
  ip_opexagentfee4 = window[opexagentfeeVarName];
  ip_opex4 = window[opexVarName];
  ip_finex4 = window[finexVarName];
  ip_finexprin4 = window[finexprinVarName];
  ip_finexint4 = window[finexintVarName];
  ip_finexmort4 = window[finexmortVarName];
  ip_finexacquire4 = window[finexacquireVarName];
  ip_finexdispose4 = window[finexdisposeVarName];
  ip_finexacquireoneoff4 = window[finexacquireoneoffVarName];
  ip_finexdisposeoneoff4 = window[finexdisposeoneoffVarName];
  ip_finexother4 = window[finexotherVarName];
  ip_finexoneoff4 = window[finexoneoffVarName];
  ip_gi4 = window[giVarName];
  ip_area4 = window[areaVarName];
  ip_totequity4 = window[totequityVarName];
  ip_fv4 = window[totfvVarName];
  ip_totcapgain4 = window[totcapgainVarName];
  ip_pcpy_capgain4 = window[pcpy_capgainVarName];
  ip_totfinexprin4 = window[totfinexprinVarName];

  $purchaseprice4_amount[0].value = ip_purchaseprice4;
  $("#textpurchaseprice4").html(numberWithCommas(ip_purchaseprice4));
  $ltv4_amount[0].value = ip_ltv4;
  $("#textloan4").html(numberWithCommas(ip_loan4));
  $("#textdp4").html(numberWithCommas(ip_dp4));
  $tenure4_amount[0].value = ip_tenure4;
  $intrate4_amount[0].value = ip_intrate4;
  $vacantrate4_amount[0].value = ip_vacantrate4;
  $invperiod4_amount[0].value = ip_invperiod4;
  $rentalrate4_amount[0].value = ip_rentalrate4;
  $opex4_amount[0].value = ip_opex4;
  $opexmgmt4_amount[0].value = ip_opexmgmt4;
  $opexmaint4_amount[0].value = ip_opexmaint4;
  $opextax4_amount[0].value = ip_opextax4;
  $opexinsure4_amount[0].value = ip_opexinsure4;
  $opexutil4_amount[0].value = ip_opexutil4;
  $opexagentfee4_amount[0].value = ip_opexagentfee4;
  $("#textfinex4").html(numberWithCommas(ip_finex4));
  $("#textfinexprin4").html(numberWithCommas(ip_finexprin4));
  $("#textfinexint4").html(numberWithCommas(ip_finexint4));
  $("#textfinexmort4").html(numberWithCommas(ip_finexmort4));
  $finexacquireoneoff4_amount[0].value = ip_finexacquireoneoff4;
  $("#textfinexacquire4").html(numberWithCommas(ip_finexacquire4));
  $finexdisposeoneoff4_amount[0].value = ip_finexdisposeoneoff4;
  $("#textfinexdispose4").html(numberWithCommas(ip_finexdispose4));
  $finexother4_amount[0].value = ip_finexother4;
  $("#textfinexother4").html(numberWithCommas(ip_finexother4));
  $("#textfinexoneoff4").html(numberWithCommas(ip_finexoneoff4));
  $("#textgi4").html(numberWithCommas(ip_gi4));
  $("#texttotequity4").html(numberWithCommas(ip_totequity4));
  $("#texttotfinexprin4").html(numberWithCommas(ip_totfinexprin4));
  $("#texttotcapgain4").html(numberWithCommas(ip_totcapgain4));
  $pcpy_capgain4_amount[0].value = ip_pcpy_capgain4;
  $area4_amount[0].value = ip_area4;  
  recalcInput4();
}

// Function to handle the button click event
document.getElementById('refreshOutputCalcButton').addEventListener('click', refreshOutputCalc);

function refreshOutputCalc() {
  recalcOutput1();
  recalcOutput2();
  recalcOutput3();
  recalcOutput4();

  const table = document.getElementById('OutputTable');
  const rows = table.querySelectorAll('tr');

  // Loop through each row (excluding the header row)
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].querySelectorAll('td');
    // uncolor first
    cells[cells.length - 4].style.color = 'black';
    cells[cells.length - 3].style.color = 'black';
    cells[cells.length - 2].style.color = 'black';
    cells[cells.length - 1].style.color = 'black';
    // Call the compareMinMax function for the last two cells in each row
    compareMinMax(cells[cells.length - 4], cells[cells.length - 3], cells[cells.length - 2], cells[cells.length - 1], i);
  }
}

function compareMinMax(cell1, cell2, cell3, cell4, i) {
  if (i==1){
    // Compare the values and change the font color to green for the minimum and maximum
      const minValue = Math.min(op_grm1, op_grm2, op_grm3, op_grm4);
      if (op_grm1 === minValue) {
        cell1.style.color = 'green';
      }
      if (op_grm2 === minValue) {
        cell2.style.color = 'green';
      } 
      if (op_grm3 === minValue) {
        cell3.style.color = 'green';
      } 
      if (op_grm4 === minValue) {
        cell4.style.color = 'green';
      } 
    }
    if (i==2){
      // Compare the values and change the font color to green for the minimum and maximum
        const maxValue = Math.max(op_noi1, op_noi2, op_noi3, op_noi4);
        if (op_noi1 === maxValue) {
          cell1.style.color = 'green';
        }
        if (op_noi2 === maxValue) {
          cell2.style.color = 'green';
        } 
        if (op_noi3 === maxValue) {
          cell3.style.color = 'green';
        } 
        if (op_noi4 === maxValue) {
          cell4.style.color = 'green';
        } 
      }
      if (i==3){
        // Compare the values and change the font color to green for the minimum and maximum
          const maxValue = Math.max(op_icp1, op_icp2, op_icp3, op_icp4);
          if (op_icp1 === maxValue) {
            cell1.style.color = 'green';
          }
          if (op_icp2 === maxValue) {
            cell2.style.color = 'green';
          } 
          if (op_icp3 === maxValue) {
            cell3.style.color = 'green';
          } 
          if (op_icp4 === maxValue) {
            cell4.style.color = 'green';
          } 
        }
        
    if (i==4){
      // Compare the values and change the font color to green for the minimum and maximum
        const maxValue = Math.max(op_totcf1, op_totcf2, op_totcf3, op_totcf4);
        if (op_totcf1 === maxValue) {
          cell1.style.color = 'green';
        }
        if (op_totcf2 === maxValue) {
          cell2.style.color = 'green';
        } 
        if (op_totcf3 === maxValue) {
          cell3.style.color = 'green';
        } 
        if (op_totcf4 === maxValue) {
          cell4.style.color = 'green';
        } 
      }
     
      if (i==5){
        // Compare the values and change the font color to green for the minimum and maximum
          const minValue = Math.min(op_cfbe1, op_cfbe2, op_cfbe3, op_cfbe4);
          if (op_cfbe1 === minValue) {
            cell1.style.color = 'green';
          }
          if (op_cfbe2 === minValue) {
            cell2.style.color = 'green';
          } 
          if (op_cfbe3 === minValue) {
            cell3.style.color = 'green';
          } 
          if (op_cfbe4 === minValue) {
            cell4.style.color = 'green';
          } 
        }
      if (i==6){
      // Compare the values and change the font color to green for the minimum and maximum
        const maxValue = Math.max(op_sp1, op_sp2, op_sp3, op_sp4);
        if (op_sp1 === maxValue) {
          cell1.style.color = 'green';
        }
        if (op_sp2 === maxValue) {
          cell2.style.color = 'green';
        } 
        if (op_sp3 === maxValue) {
          cell3.style.color = 'green';
        } 
        if (op_sp4 === maxValue) {
          cell4.style.color = 'green';
        } 
      }

      if (i==7){
      // Compare the values and change the font color to green for the minimum and maximum
        const maxValue = Math.max(op_totcb1, op_totcb2, op_totcb3, op_totcb4);
        if (op_totcb1 === maxValue) {
          cell1.style.color = 'green';
        }
        if (op_totcb2 === maxValue) {
          cell2.style.color = 'green';
        } 
        if (op_totcb3 === maxValue) {
          cell3.style.color = 'green';
        } 
        if (op_totcb4 === maxValue) {
          cell4.style.color = 'green';
        } 
      }
      if (i==8){
      // Compare the values and change the font color to green for the minimum and maximum
      const maxValue = Math.max(op_coc1_firstyear, op_coc2_firstyear, op_coc3_firstyear, op_coc4_firstyear);
      if (op_coc1_firstyear === maxValue) {
        cell1.style.color = 'green';
      }
      if (op_coc2_firstyear === maxValue) {
        cell2.style.color = 'green';
      } 
      if (op_coc3_firstyear === maxValue) {
        cell3.style.color = 'green';
      } 
      if (op_coc4_firstyear === maxValue) {
        cell4.style.color = 'green';
      } 
    }
    
    if (i==9){
      // Compare the values and change the font color to green for the minimum and maximum
      const maxValue = Math.max(op_coc1_invperiod, op_coc2_invperiod, op_coc3_invperiod, op_coc4_invperiod);
      if (op_coc1_invperiod === maxValue) {
        cell1.style.color = 'green';
      }
      if (op_coc2_invperiod === maxValue) {
        cell2.style.color = 'green';
      } 
      if (op_coc3_invperiod === maxValue) {
        cell3.style.color = 'green';
      } 
      if (op_coc4_invperiod === maxValue) {
        cell4.style.color = 'green';
      } 
    }

    if (i==10){
      // Compare the values and change the font color to green for the minimum and maximum
      const maxValue = Math.max(op_roe1_firstyear, op_roe2_firstyear, op_roe3_firstyear, op_roe4_firstyear);
      if (op_roe1_firstyear === maxValue) {
        cell1.style.color = 'green';
      }
      if (op_roe2_firstyear === maxValue) {
        cell2.style.color = 'green';
      } 
      if (op_roe3_firstyear === maxValue) {
        cell3.style.color = 'green';
      } 
      if (op_roe4_firstyear === maxValue) {
        cell4.style.color = 'green';
      } 
    }
    
    if (i==11){
      // Compare the values and change the font color to green for the minimum and maximum
      const maxValue = Math.max(op_roe1_invperiod, op_roe2_invperiod, op_roe3_invperiod, op_roe4_invperiod);
      if (op_roe1_invperiod === maxValue) {
        cell1.style.color = 'green';
      }
      if (op_roe2_invperiod === maxValue) {
        cell2.style.color = 'green';
      } 
      if (op_roe3_invperiod === maxValue) {
        cell3.style.color = 'green';
      } 
      if (op_roe4_invperiod === maxValue) {
        cell4.style.color = 'green';
      } 
    }

    if (i==12){
      // Compare the values and change the font color to green for the minimum and maximum
      const maxValue = Math.max(op_ror1, op_ror2, op_ror3, op_ror4);
      if (op_ror1 === maxValue) {
        cell1.style.color = 'green';
      }
      if (op_ror2 === maxValue) {
        cell2.style.color = 'green';
      } 
      if (op_ror3 === maxValue) {
        cell3.style.color = 'green';
      } 
      if (op_ror4 === maxValue) {
        cell4.style.color = 'green';
      } 
    }

    if (i==13){
        // Compare the values and change the font color to green for the minimum and maximum
        const maxValue = Math.max(op_ry1, op_ry2, op_ry3, op_ry4);
        if (op_ry1 === maxValue) {
          cell1.style.color = 'green';
        }
        if (op_ry2 === maxValue) {
          cell2.style.color = 'green';
        } 
        if (op_ry3 === maxValue) {
          cell3.style.color = 'green';
        } 
        if (op_ry4 === maxValue) {
          cell4.style.color = 'green';
        } 
      }
        if (i==14){
        // Compare the values and change the font color to green for the minimum and maximum
        const minValue = Math.min(op_oer1, op_oer2, op_oer3, op_oer4);
        if (op_oer1 === minValue) {
          cell1.style.color = 'green';
        }
        if (op_oer2 === minValue) {
          cell2.style.color = 'green';
        } 
        if (op_oer3 === minValue) {
          cell3.style.color = 'green';
        } 
        if (op_oer4 === minValue) {
          cell4.style.color = 'green';
        } 
      }
      if (i==15){
      // Compare the values and change the font color to green for the minimum and maximum
      const maxValue = Math.max(op_gipsf1, op_gipsf2, op_gipsf3, op_gipsf4);
      if (op_gipsf1 === maxValue) {
        cell1.style.color = 'green';
      }
      if (op_gipsf2 === maxValue) {
        cell2.style.color = 'green';
      } 
      if (op_gipsf3 === maxValue) {
        cell3.style.color = 'green';
      } 
      if (op_gipsf4 === maxValue) {
        cell4.style.color = 'green';
      } 
    }
    if (i==16){
      // Compare the values and change the font color to green for the minimum and maximum
      const maxValue = Math.max(op_cr1, op_cr2, op_cr3, op_cr4);
      if (op_cr1 === maxValue) {
        cell1.style.color = 'green';
      }
      if (op_cr2 === maxValue) {
        cell2.style.color = 'green';
      } 
      if (op_cr3 === maxValue) {
        cell3.style.color = 'green';
      } 
      if (op_cr4 === maxValue) {
        cell4.style.color = 'green';
      } 
    }

    if (i==17){
      // Compare the values and change the font color to green for the minimum and maximum
      
      const maxValue = Math.max(op_irr1, op_irr2, op_irr3, op_irr4);
      if (op_irr1 === maxValue) {
        cell1.style.color = 'green';
      }
      if (op_irr2 === maxValue) {
        cell2.style.color = 'green';
      } 
      if (op_irr3 === maxValue) {
        cell3.style.color = 'green';
      } 
      if (op_irr4 === maxValue) {
        cell4.style.color = 'green';
      } 
    }
  }


// Get references to the input table and the save button

document.addEventListener('DOMContentLoaded', function () {
// Get references to the input table and the save button
const inputTable = document.getElementById('inputTable');
const saveButton = document.getElementById('saveData');
const retrieveButton = document.getElementById('retrieveData');
const generateReportButton = document.getElementById('generateReport');

  // Add click event listener to the save button
  saveButton.addEventListener('click', () => {
  // Get all the input elements within the table
  const inputElements = inputTable.querySelectorAll('input');

  // Create an object to store the input values
  const data = {};

  // Loop through each input element and store the value in the data object
  inputElements.forEach((input) => {
    data[input.id] = input.value;
  });

  // Save the data object to localStorage
  localStorage.setItem('myData', JSON.stringify(data));

  // Alert to indicate successful saving (you can customize this message)
  alert('Data saved successfully!');
  });

  // Add click event listener to the retrieve button
  retrieveButton.addEventListener('click', () => {
    // Retrieve the data object from localStorage
    const storedData = localStorage.getItem('myData');

    // Check if data exists in localStorage
    if (storedData) {
      // Parse the JSON string back into an object
      const data = JSON.parse(storedData);

  // Loop through the data object to set the values to the input fields
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const value = data[key];
      const inputElement = document.getElementById(key);
      if (inputElement) {
        inputElement.value = value;
      }
    }
  }
  // Alert to indicate successful retrieval (you can customize this message)
  alert('Data retrieved successfully!');
} else {
  // Data doesn't exist in localStorage or it was cleared
  console.log('No data found in localStorage.');
}
});

  // Add click event listener to the clear button
  clearData.addEventListener('click', () => {
    // Clear the localStorage
    localStorage.clear();

    // Alert to indicate successful clearing (you can customize this message)
    alert('Data cleared successfully!');
  });

// Add click event listener to the generate Report button
generateReportButton.addEventListener('click', () => {
  // Create a new jsPDF instance
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  // Get the user-specified filename from the input field
  const reportfilename = document.getElementById('reportfilenameInput').value || 'InvestmentReport';
  doc.text("Investment Analysis for " + reportfilename, 20, 10);
            // Create a table
            doc.autoTable({
              startY: 20, // Y position where the table will start
              head: [['Inputs', 'Option 1', 'Option 2', 'Option 3', 'Option 4']], // Table header
              body: [
                ['[1] Purchase Price $', ip_purchaseprice1, ip_purchaseprice2, ip_purchaseprice3, ip_purchaseprice4],
                ['[1A] LTV %', ip_ltv1, ip_ltv2, ip_ltv3, ip_ltv4],
                ['[1B] Loan $', ip_loan1, ip_loan2, ip_loan3, ip_loan4],
                ['[1C] Downpayment $', ip_dp1, ip_dp2, ip_dp3, ip_dp4],
                ['[1D] Loan Tenure (years)', ip_tenure1, ip_tenure2, ip_tenure3, ip_tenure4],
                ['[1E] Interest Rate %', ip_intrate1, ip_intrate2, ip_intrate3, ip_intrate4],
                ['[1F] Assumed Investment Period (years)', ip_invperiod1, ip_invperiod2, ip_invperiod3, ip_invperiod4],
                ['[1G] Total Principal Paid', ip_totfinexprin1, ip_totfinexprin2, ip_totfinexprin3, ip_totfinexprin4],
                ['[1H] Mortgage Balance', op_mb1, op_mb2, op_mb3, op_mb4],
                ['[2] Occupancy Rate %', ip_vacantrate1, ip_vacantrate2, ip_vacantrate3, ip_vacantrate4],
                ['[3] Rental Rate $/mth', ip_rentalrate1, ip_rentalrate2, ip_rentalrate3, ip_rentalrate4],
                ['[4] Operating Expense $/mth', ip_opex1, ip_opex2, ip_opex3, ip_opex4],
                ['[4A] OpEx - Prop. Management $/mth', ip_opexmgmt1, ip_opexmgmt2, ip_opexmgmt3, ip_opexmgmt4],
                ['[4B] OpEx - Maintainence $/mth', ip_opexmaint1, ip_opexmaint2, ip_opexmaint3, ip_opexmaint4],
                ['[4C] OpEx - Property Tax $/mth', ip_opextax1, ip_opextax2, ip_opextax3, ip_opextax4],
                ['[4D] OpEx - Insurance $/mth', ip_opexinsure1, ip_opexinsure2, ip_opexinsure3, ip_opexinsure4],
                ['[4E] OpEx - Utilities $/mth', ip_opexutil1, ip_opexutil2, ip_opexutil3, ip_opexutil4],
                ['[4F] OpEx - Agent Fee $/mth', ip_opexagentfee1, ip_opexagentfee2, ip_opexagentfee3, ip_opexagentfee4],
                ['[5] Financing Expense, Running $/mth', ip_finex1, ip_finex2, ip_finex3, ip_finex4],
                ['[5A] FinEx - Mortgage Principal $/mth', ip_finexprin1, ip_finexprin2, ip_finexprin3, ip_finexprin4],
                ['[5B] FinEx - Mortgage Interest $/mth', ip_finexint1, ip_finexint2, ip_finexint3, ip_finexint4],
                ['[5C] FinEx - Mortgage Total $/mth', ip_finexmort1, ip_finexmort2, ip_finexmort3, ip_finexmort4],
                ['[5D] FinEx - Others $/mth', ip_finexother1, ip_finexother2, ip_finexother3, ip_finexother4],
                ['[6] Financing Expense, One-Off $', ip_finexoneoff1, ip_finexoneoff2, ip_finexoneoff3, ip_finexoneoff4],
                ['[6A] Costs to Acquire Property $', ip_finexacquireoneoff1, ip_finexacquireoneoff2, ip_finexacquireoneoff3, ip_finexacquireoneoff4],
                ['[6B] Costs to Dispose Property $', ip_finexdisposeoneoff1, ip_finexdisposeoneoff2, ip_finexdisposeoneoff3, ip_finexdisposeoneoff4],
                ['[7] Gross Income $/mth', ip_gi1, ip_gi2, ip_gi3, ip_gi4],
                ['[8] Total Equity $ at end of investment period', parseFloat(ip_totequity1).toFixed(1), parseFloat(ip_totequity2).toFixed(1), parseFloat(ip_totequity3).toFixed(1), parseFloat(ip_totequity4).toFixed(1)],
                ['[8A] Capital Gain or Depreciation $ at end of investment period', parseFloat(ip_totcapgain1).toFixed(1), parseFloat(ip_totcapgain2).toFixed(1), parseFloat(ip_totcapgain3).toFixed(1), parseFloat(ip_totcapgain4).toFixed(1)],
                ['[8A] Future Value $ at end of investment period', parseFloat(ip_fv1).toFixed(1), parseFloat(ip_fv2).toFixed(1), parseFloat(ip_fv3).toFixed(1), parseFloat(ip_fv4).toFixed(1)],
                ['[9] Floor Area', ip_area1, ip_area2, ip_area3, ip_area4],
              ],
            });
            doc.autoTable({
              startY: doc.lastAutoTable.finalY + 20, // Y position for the second table (below the first one)
              head: [['Calculated Metrics', 'Option 1', 'Option 2', 'Option 3', 'Option 4']], // Table header
              body: [
                ['[1] Gross Rent Multiplier (GRM)', op_grm1, op_grm2, op_grm3, op_grm4],
                ['[2] Net Operating Income (NOI)', op_noi1, op_noi2, op_noi3, op_noi4],
                ['[3] Cash Flow Balance', parseFloat(op_cf1).toFixed(1), parseFloat(op_cf2).toFixed(1), parseFloat(op_cf3).toFixed(1), parseFloat(op_cf4).toFixed(1)],
                  ['[3] Sales Proceeds', parseFloat(op_sp1).toFixed(1), parseFloat(op_sp2).toFixed(1), parseFloat(op_sp3).toFixed(1), parseFloat(op_sp4).toFixed(1)],
                  ['[3] Cash Balance', parseFloat(op_totcb1).toFixed(1), parseFloat(op_totcb2).toFixed(1), parseFloat(op_totcb3).toFixed(1), parseFloat(op_totcb4).toFixed(1)],
                  ['[4] Cash on Cash (CoC) - 1st Year', parseFloat(op_coc1_firstyear).toFixed(1), parseFloat(op_coc2_firstyear).toFixed(1), parseFloat(op_coc3_firstyear).toFixed(1), parseFloat(op_coc4_firstyear).toFixed(1)],
                  ['[4] Cash on Cash (CoC) - Over Period', parseFloat(op_coc1_invperiod).toFixed(1), parseFloat(op_coc2_invperiod).toFixed(1), parseFloat(op_coc3_invperiod).toFixed(1), parseFloat(op_coc4_invperiod).toFixed(1)],
                  ['[5] Return on Equity (RoE) - 1st Year', parseFloat(op_roe1_firstyear).toFixed(1), parseFloat(op_roe2_firstyear).toFixed(1), parseFloat(op_roe3_firstyear).toFixed(1), parseFloat(op_roe4_firstyear).toFixed(1)],
                  ['[5] Return on Equity (RoE) - Over Period', parseFloat(op_roe1_invperiod).toFixed(1), parseFloat(op_roe2_invperiod).toFixed(1), parseFloat(op_roe3_invperiod).toFixed(1), parseFloat(op_roe4_invperiod).toFixed(1)],
                  ['[6] Return on Investment (ROR)', parseFloat(op_ror1).toFixed(1), parseFloat(op_ror2).toFixed(1), parseFloat(op_ror3).toFixed(1), parseFloat(op_ror4).toFixed(1)],
                  ['[7] Net Yield (Rental Yield)', parseFloat(op_ry1).toFixed(1), parseFloat(op_ry2).toFixed(1), parseFloat(op_ry3).toFixed(1), parseFloat(op_ry4).toFixed(1)],
                  ['[8] Operating Expense Ratio (OER)', parseFloat(op_oer1).toFixed(1), parseFloat(op_oer2).toFixed(1), parseFloat(op_oer3).toFixed(1), parseFloat(op_oer4).toFixed(1)],
                  ['[9] Gross Income psf', parseFloat(op_gipsf1).toFixed(1), parseFloat(op_gipsf2).toFixed(1), parseFloat(op_gipsf3).toFixed(1), parseFloat(op_gipsf4).toFixed(1)],
                  ['[10] Capitalisation Rate', parseFloat(op_cr1).toFixed(1), parseFloat(op_cr2).toFixed(1), parseFloat(op_cr3).toFixed(1), parseFloat(op_cr4).toFixed(1)],
                  ['[11] Internal Rate of Return (IRR)', parseFloat(op_irr1).toFixed(1), parseFloat(op_irr2).toFixed(1), parseFloat(op_irr3).toFixed(1), parseFloat(op_irr4).toFixed(1)],
                ['[11] Internal Rate of Return (IRR) - Check', op_irrnpvLogicText1, op_irrnpvLogicText2, op_irrnpvLogicText3, op_irrnpvLogicText4],                  
                  // Add more rows as needed
              ],
            });
  
  doc.save(reportfilename + '.pdf');  
});

});

  

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value) && value <= Number.MAX_VALUE;
}

// console.log(isNumber(xxxx)); // false