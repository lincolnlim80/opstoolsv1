
// retrieve data from csv file for clickable cells
async function fetchCSVData(soughtafterinfo) {
    // Define a mapping object for soughtafterinfo values to soughtColumnIndex values
    const infoToIndexMapping = {
        Cell0: 0,
        Cell1: 1,
        Cell2: 2,
        Cell3: 3,
        Cell4: 4,
        Cell5: 5,
        Cell6: 6,
        Cell7: 7,
        Cell8: 8,
        Cell9: 9,
        Cell10: 10,
        Cell11: 11,
        Cell12: 12,
        Cell13: 13,
        Cell14: 14,
        Cell15: 15,
        Cell16: 16,
        Cell17: 17,
        Cell18: 18,
        Cell19: 19,
        Cell20: 20,
        Cell21: 21,
        Cell22: 22,
        Cell23: 23,
        Cell24: 24,
        Cell25: 25,
        Cell26: 26,
        Cell27: 27,
        Cell28: 28,
        Cell29: 29,
        Cell30: 30,
        Cell31: 31,
        Cell32: 32,
        Cell33: 33,
        Cell34: 34,
        Cell35: 35,
        Cell36: 36,
        Cell37: 37,
        Cell38: 38,
        Cell39: 39,
        Cell40: 40,
        Cell41: 41,
        Cell42: 42,
        Cell43: 43,
        Cell44: 44,
        Cell45: 45,
        Cell46: 46,
        Cell47: 47,
        Cell48: 48,
        Cell49: 49,
        Cell50: 50,
        Cell51: 51,
        Cell52: 52,
        Cell53: 53,
        Cell54: 54,
        Cell55: 55,
        Cell56: 56,
        Cell57: 57,
        Cell58: 58,
        Cell59: 59,
        Cell60: 60,
        Cell61: 61,
        Cell62: 62,
        Cell63: 63,
        Cell64: 64,
        Cell65: 65,
        Cell66: 66,
        Cell67: 67,
        Cell68: 68,
        Cell69: 69
            // Add more mappings as needed
    };
    
    // Check if the soughtafterinfo value is in the mapping
    if (infoToIndexMapping.hasOwnProperty(soughtafterinfo)) {
        soughtColumnIndex = infoToIndexMapping[soughtafterinfo];
    } else {
        console.error(`Mapping not found for "${soughtafterinfo}"`);
    }


    const response = await fetch('./rsc/hdbnotes.csv');
    const csvContent = await response.text();
    const lines = csvContent.split('\n'); // Split CSV into lines
    const headers = lines[0].split(','); // Extract column headers

    // Create an array to store data from the sought column
    const soughtColumnData = [];

    // Populate the sought column data
    lines.slice(1).forEach(line => {
    const columns = line.split(',');
    if (columns.length > soughtColumnIndex) {
        soughtColumnData.push(columns[soughtColumnIndex]);
    }
    });
    // Display header for the sought column
    // const soughtColumnHeaderElement = document.createElement('div');   //add this line if want to append to html
    const soughtColumnHeaderElement = document.getElementById('csvHeader');
    soughtColumnHeaderElement.innerHTML = `${headers[soughtColumnIndex]}`;
    // document.getElementById('csvHeader').appendChild(soughtColumnHeaderElement);    //add this line if want to append to html
    // Display data for the sought column
    // const soughtColumnDataElement = document.createElement('div');    //add this line if want to append to html
    const soughtColumnDataElement = document.getElementById('csvData');
    soughtColumnDataElement.innerHTML = `${soughtColumnData.join(', ')}`;
    // document.getElementById('csvData').appendChild(soughtColumnDataElement);    //add this line if want to append to html
  }
// End of function to retrieve notes / data from csv file.
// Add click event listeners to the table cells
const cells = document.querySelectorAll('.equal-columns td');
cells.forEach(cell => {
  cell.addEventListener('click', () => {
  // Retrieve and display the text content of the clicked cell
  const info = cell.getAttribute('data-info');  
  // cellData is an array with reference values and the data-info attribute is consistent
  const referenceValue = cellData[info]; // Get the reference value from your data array
  // fetch data from csv file if pressed
    fetchCSVData(info);
  // Toggle the "pressed" class on the cell when clicked unless click cell is illegal i.e. reference value is 0.
  if (referenceValue === 1 || referenceValue === 2) {
    if (info !== 'Cell0' && info !== 'Cell10' && info !== 'Cell20' && info !== 'Cell30' && info !== 'Cell40' && info !== 'Cell50' && info !== 'Cell60'){
      cell.classList.toggle('pressed');
      if (cell.classList.contains('pressed') && referenceValue === 1) {
        // Set background color blue when pressed
        cell.style.backgroundColor = '#80e5ff';
        cellData[info] = 2; // Replace someNewValue with the new reference value
      } else if (referenceValue === 2){
        // Reset background color on release
        cell.style.backgroundColor = referenceColors[info]; // This clears any inline background color style
        cellData[info] = 1; // Replace with the new reference value
      }
    }
  }
  });
});

// start of function to color the table cells. also can use reset button to initialise cell colors
// first, define a default color list. initially, this will be default green color (color #85e085 for first three columns and #b3ffcc for remainder) showing possibility of all options, apart from those that are empty.
let referenceColors;
function initialiseCellColors() {
  referenceColors = {
    Cell1: '#85e085',
    Cell2: '#85e085',
    Cell3: '#85e085',
    Cell4: '#85e085',
    Cell5: '#85e085',
    Cell6: '#85e085',
    Cell7: '#85e085',
    Cell8: '#85e085',
    Cell9: '#85e085',
    Cell11: '#85e085',
    Cell12: '#85e085',
    Cell13: '#85e085',
    Cell14: '#85e085',
    Cell15: '#85e085',
    Cell16: '#85e085',
    Cell17: '#85e085',
    Cell18: '#85e085',
    Cell19: '#ffffff',
    Cell21: '#85e085',
    Cell22: '#85e085',
    Cell23: '#85e085',
    Cell24: '#85e085',
    Cell25: '#85e085',
    Cell26: '#85e085',
    Cell27: '#85e085',
    Cell28: '#85e085',
    Cell29: '#ffffff',
    Cell31: '#b3ffcc',
    Cell32: '#b3ffcc',
    Cell33: '#b3ffcc',
    Cell34: '#b3ffcc',
    Cell35: '#b3ffcc',
    Cell36: '#b3ffcc',
    Cell37: '#b3ffcc',
    Cell38: '#b3ffcc',
    Cell39: '#ffffff',
    Cell41: '#b3ffcc',
    Cell42: '#b3ffcc',
    Cell43: '#b3ffcc',
    Cell44: '#b3ffcc',
    Cell45: '#b3ffcc',
    Cell46: '#b3ffcc',
    Cell47: '#ffffff',
    Cell48: '#ffffff',
    Cell49: '#ffffff',
    Cell51: '#b3ffcc',
    Cell52: '#b3ffcc',
    Cell53: '#b3ffcc',
    Cell54: '#b3ffcc',
    Cell55: '#ffffff',
    Cell56: '#ffffff',
    Cell57: '#ffffff',
    Cell58: '#ffffff',
    Cell59: '#ffffff',
    Cell61: '#b3ffcc',
    Cell62: '#b3ffcc',
    Cell63: '#b3ffcc',
    Cell64: '#b3ffcc',
    Cell65: '#b3ffcc',
    Cell66: '#b3ffcc',
    Cell67: '#b3ffcc',
    Cell68: '#b3ffcc',
    Cell69: '#ffffff'  
  }
};
// second, define a list showing the clicked cells (for subsequent assessment of compatibility). 
// 0 means not available and not selected, 1 means available and not selected, 2 means available and selected.
let cellData; 
function initialisecellData() {
  cellData= {
    Cell1: 1,
    Cell2: 1,
    Cell3: 1,
    Cell4: 1,
    Cell5: 1,
    Cell6: 1,
    Cell7: 1,
    Cell8: 1,
    Cell9: 1,
    Cell11: 1,
    Cell12: 1,
    Cell13: 1,
    Cell14: 1,
    Cell15: 1,
    Cell16: 1,
    Cell17: 1,
    Cell18: 1,
    Cell19: 0,
    Cell21: 1,
    Cell22: 1,
    Cell23: 1,
    Cell24: 1,
    Cell25: 1,
    Cell26: 1,
    Cell27: 1,
    Cell28: 1,
    Cell29: 0,
    Cell31: 1,
    Cell32: 1,
    Cell33: 1,
    Cell34: 1,
    Cell35: 1,
    Cell36: 1,
    Cell37: 1,
    Cell38: 1,
    Cell39: 0,
    Cell41: 1,
    Cell42: 1,
    Cell43: 1,
    Cell44: 1,
    Cell45: 1,
    Cell46: 1,
    Cell47: 0,
    Cell48: 0,
    Cell49: 0,
    Cell51: 1,
    Cell52: 1,
    Cell53: 1,
    Cell54: 1,
    Cell55: 0,
    Cell56: 0,
    Cell57: 0,
    Cell58: 0,
    Cell59: 0,
    Cell62: 1,
    Cell63: 1,
    Cell64: 1,
    Cell65: 1,
    Cell66: 1,
    Cell67: 1,
    Cell68: 1,
    Cell69: 0,  
  // Add more objects for other cells
  }
};

// Call the function to set initial cell colors when the page is first loaded
initialiseCellColors();
initialisecellData();
setReferenceCellColors();
// Call the function to set initial cell colors when table color is reset by User.
function resetCellColors(){
  initialiseCellColors();
  initialisecellData();
  setReferenceCellColors();
}

// Function to set the initialise background color of the table cells
function setReferenceCellColors() {
  // Retrieve all the table cells
  const cells = document.querySelectorAll('.equal-columns td');
  // Loop through the cells and set their initial background color
  cells.forEach(cell => {
    const info = cell.getAttribute('data-info');
    if (referenceColors.hasOwnProperty(info)) {
      cell.style.backgroundColor = referenceColors[info];
      cell.classList.remove('pressed');
    }
  });
}


// Routine to determine if a cell color needs to be changed. Update cell colors and reference color list.
function evaluateOptionsAvailable() {
  checkSchemes()
  // if conditions met then update color
  if (1 == 1) {
    // referenceColors["Cell1"] = '#ffffff';
    // cellData["Cell1"] = 0; // Replace with the new reference value
    // Retrieve the cell that corresponds to the info
    const cell = document.querySelector(`[data-info="${"Cell1"}"]`);
    if (cell) {
      cell.style.backgroundColor = referenceColors["Cell1"];
    }
  } else {
    // Handle the case when conditions are not met
  }
}
// Call the function to re-evaluate options when profile input is changed
// evaluateOptionsAvailable();


function initialiseCellColor() {
    // Retrieve all the cells with the matching data-info attribute
    const cells = document.querySelectorAll('.equal-columns td');
    // Update the background color for each matching cell
    cells.forEach(cell => {
      const info = cell.getAttribute('data-info'); // Retrieve the data-info attribute
      if (defaultColors.hasOwnProperty(info)) {
      cell.style.backgroundColor = defaultColors[info];
      }
    });
  }


// use clear button to clear group data
// JavaScript to attach an onclick event handler
document.getElementById("clearWifeDataButton").onclick = function() {
  // Your JavaScript code to handle the button click goes here
  clearDataGroup("timer-wife");
  clearDataGroup("citizenship-wife");
  clearDataGroup("age-wife");
};
document.getElementById("clearHubbyDataButton").onclick = function() {
  // Your JavaScript code to handle the button click goes here
  clearDataGroup("timer-hubby");
  clearDataGroup("citizenship-hubby");
  clearDataGroup("age-hubby");
};
document.getElementById("clearFianceDataButton").onclick = function() {
  // Your JavaScript code to handle the button click goes here
  clearDataGroup("timer-fiance");
  clearDataGroup("citizenship-fiance");
  clearDataGroup("age-fiance");
};
document.getElementById("clearFianceeDataButton").onclick = function() {
  // Your JavaScript code to handle the button click goes here
  clearDataGroup("timer-fiancee");
  clearDataGroup("citizenship-fiancee");
  clearDataGroup("age-fiancee");
};
document.getElementById("clearSingle1DataButton").onclick = function() {
  // Your JavaScript code to handle the button click goes here
  clearDataGroup("timer-single1");
  clearDataGroup("citizenship-single1");
  clearDataGroup("age-single1");
};
document.getElementById("clearSingle2DataButton").onclick = function() {
  // Your JavaScript code to handle the button click goes here
  clearDataGroup("timer-single2");
  clearDataGroup("citizenship-single2");
  clearDataGroup("age-single2");
};
document.getElementById("clearSingle3DataButton").onclick = function() {
  // Your JavaScript code to handle the button click goes here
  clearDataGroup("timer-single3");
  clearDataGroup("citizenship-single3");
  clearDataGroup("age-single3");
};
document.getElementById("clearSingle4DataButton").onclick = function() {
  // Your JavaScript code to handle the button click goes here
  clearDataGroup("timer-single4");
  clearDataGroup("citizenship-single4");
  clearDataGroup("age-single4");
};
document.getElementById("clearKidsDataButton").onclick = function() {
  // Your JavaScript code to handle the button click goes here
  clearDataGroup("timer-kids");
  clearDataGroup("citizenship-kids");
  clearDataGroup("age-kids");
  clearDataGroup("proximity-kids");
};
document.getElementById("clearParentsDataButton").onclick = function() {
  // Your JavaScript code to handle the button click goes here
  clearDataGroup("timer-parents");
  clearDataGroup("citizenship-parents");
  clearDataGroup("age-parents");
  clearDataGroup("proximity-parents");
};
// Function to clear the selected radio button within a group
function clearDataGroup(groupName) {
  const radioButtons = document.getElementsByName(groupName);
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
}

// End of Function for Clear Button


// Listen to radio button selection and allow toggle
// Add a click event listener to all radio buttons with the class "radio-button"
// only for reference, the below will not work
// const radioButton = document.getElementById('timer-wife1'); this method calls the ID
// const radioButton = document.getElementByName('timer-wife'); this method calls the group name
// const radioButtons = document.querySelectorAll('.radio-button');  this method calls the class identifier
// const radios = document.querySelectorAll('input[type="radio"][class="radio-button"]');  this method calls the type and class
// radios.forEach(radio => {
//   radio.addEventListener('click', () => {
//     if (radio.checked) {
//       console.log("im here");
//       radio.checked = false;
//     }
//   });
// });

  
// function handleRadioChange() {
//   const radioButtons = document.getElementsByName('subBulletRadio');
//   if (radioButtons[0].checked) {
//     const section2 = document.querySelector('.right-panel .section:nth-child(2)');
//     section2.textContent = 'hello';
//   }
// }

// looping radio example
// const radioButtons = document.getElementsByName('timer-wife');
// radioButtons.forEach(radio => {
//   if (radio.checked) {
//   // wife has been selected
//   const radioButtons = document.getElementsByName('citizenship-wife');
//   }
// });

// the below will define Eligibility Scheme. 0 means not eligible and 1 means eligible.
let ES_Pub = 0;
let ES_FF = 0;
let ES_SS = 0;
let ES_JS = 0;
let ES_NCS = 0;
let ES_NCF = 0;
let ES_O = 0;
let ES_C = 0;
let ES_S = 0;

let PS_FT = 0;
let PS_FPPS = 0;
let PS_MGPS = 0;
let PS_MCPS = 0;
let PS_TCPS = 0;
let PS_ASSIST = 0;
let PS_TPS = 0;
let PS_SPS = 0;

let ToF_2R = 0;
let ToF_2RS = 0;
let ToF_3R = 0;
let ToF_4R = 0;
let ToF_5R = 0;
let ToF_3G = 0;
let ToF_DBSS = 0;
let ToF_EC = 0;

let LOC_MSTD = 0;
let LOC_MPLUS = 0;
let LOC_MPRIME = 0;
let LOC_NMSTD = 0;
let LOC_NMPLUS = 0;
let LOC_NMPRIME = 0;

let MoS_R = 0;
let MoS_BTO = 0;
let MoS_SOB = 0;
let MoS_OB = 0;

let FO_HDBLOAN = 0;
let FO_BANKLOAN = 0;
let FO_CPF = 0;
let FO_CONTRA = 0;
let FO_ENHCONTRA = 0;
let FO_TEMP = 0;
let FO_DEF = 0;
let FO_STAG = 0;

//the below will define check varables
let wife_hubby_dataCompleted = 0;
let fiancee_fiance_dataCompleted = 0;
let single_dataCompleted = 0;
let multiple_singles_dataCompleted = 0;
let kids_dataCompleted = 0;
let parents_dataCompleted = 0;


//First thing is to check that inputs make sense
// criteria is one option is chosen in subsequent categories if first column is selected.
function checkInputs() {
  let txtstring = "";
  let txtstringbasis = "";
  //the below will define check varables
  wife_hubby_dataCompleted = 0;
  fiancee_fiance_dataCompleted = 0;
  single_dataCompleted = 0;
  multiple_singles_dataCompleted = 0;
  kids_dataCompleted = 0;
  parents_dataCompleted = 0;
  // check "timer-wife"
  let radioButtons = document.querySelectorAll('input[name="timer-wife"]');
  // Count selected radio buttons
  let selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  if(selectedCount != 0){
    // if wife is selected then hubby must also be selected
    // let's assume data for the couple is completed for now
    wife_hubby_dataCompleted = 1;
    radioButtons = document.querySelectorAll('input[name="timer-hubby"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    if(selectedCount === 0) {
    txtstring = txtstring + "hubby must be selected (or clear wife data if unintended); ";
    wife_hubby_dataCompleted = 0;
    }
  }
  radioButtons = document.querySelectorAll('input[name="timer-wife"]');
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  if(selectedCount != 0){
    // if wife is selected then must check the rest of the inputs
    radioButtons = document.querySelectorAll('input[name="citizenship-wife"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    txtstring = txtstring + "[wife selected; ";
    if(selectedCount === 0){
    txtstring = txtstring + "pls select wife citizenship; ";
    wife_hubby_dataCompleted = 0;
    } else {
      txtstring = txtstring + "]; ";
    }
    radioButtons = document.querySelectorAll('input[name="age-wife"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    if(selectedCount === 0){
    txtstring = txtstring + "pls select wife age; ";
    wife_hubby_dataCompleted = 0;
    } else {
      txtstring = txtstring + "]; ";
    }
  }
  // check "timer-hubby"
  radioButtons = document.querySelectorAll('input[name="timer-hubby"]');
  // Count selected radio buttons
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  if(selectedCount != 0){
    // if hubby is selected then wife must also be selected
    // let's assume data for the couple is completed for now
    wife_hubby_dataCompleted = Math.min(1, wife_hubby_dataCompleted);
    radioButtons = document.querySelectorAll('input[name="timer-wife"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    if(selectedCount === 0) {
    txtstring = txtstring + "wife must be selected (or clear hubby data if unintended); ";
    wife_hubby_dataCompleted = 0;
    }
  }
  radioButtons = document.querySelectorAll('input[name="timer-hubby"]');
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  if(selectedCount != 0){
    // if hubby is selected then must check the rest of the inputs
    radioButtons = document.querySelectorAll('input[name="citizenship-hubby"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    txtstring = txtstring + "[hubby selected; ";
    if(selectedCount === 0){
    txtstring = txtstring + "pls select hubby citizenship; ";
    wife_hubby_dataCompleted = 0;
    } else {
      txtstring = txtstring + "]; ";
    }
    radioButtons = document.querySelectorAll('input[name="age-hubby"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    if(selectedCount === 0){
    txtstring = txtstring + "pls select hubby age; ";
    wife_hubby_dataCompleted = 0;
    } else {
      txtstring = txtstring + "]; ";
    }
  }

  // check "timer-fiancee"
  radioButtons = document.querySelectorAll('input[name="timer-fiancee"]');
  // Count selected radio buttons
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  if(selectedCount != 0){
    // if fiancee is selected then fiance must also be selected
    // let's assume data for the couple is completed for now
    fiancee_fiance_dataCompleted = 1;
    radioButtons = document.querySelectorAll('input[name="timer-fiance"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    if(selectedCount === 0){
    txtstring = txtstring + "fiance must be selected (or clear fiancee data if unintended); ";
    fiancee_fiance_dataCompleted = 0;
    }
  }
  radioButtons = document.querySelectorAll('input[name="timer-fiancee"]');
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  if(selectedCount != 0){
    // if fiancee is selected then must check the rest of the inputs
    radioButtons = document.querySelectorAll('input[name="citizenship-fiancee"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    txtstring = txtstring + "[fiancee selected; ";
    if(selectedCount === 0){
    txtstring = txtstring + "pls select fiancee citizenship; ";
    fiancee_fiance_dataCompleted = 0;
    } else {
      txtstring = txtstring + "]; ";
    }
  }
  // check "timer-fiance"
  radioButtons = document.querySelectorAll('input[name="timer-fiance"]');
  // Count selected radio buttons
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  if(selectedCount != 0){
    // if fiance is selected then fiancee must also be selected
    // let's assume data for the couple is completed for now
    fiancee_fiance_dataCompleted = Math.min(1, fiancee_fiance_dataCompleted);
    radioButtons = document.querySelectorAll('input[name="timer-fiancee"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    if(selectedCount === 0){
    txtstring = txtstring + "fiancee must be selected (or clear fiance data if unintended); ";
    fiancee_fiance_dataCompleted = 0;
    }
  }
  radioButtons = document.querySelectorAll('input[name="timer-fiance"]');
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  if(selectedCount != 0){
    // if fiance is selected then must check the rest of the inputs
    radioButtons = document.querySelectorAll('input[name="citizenship-fiance"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    txtstring = txtstring + "[fiance selected; ";
    if(selectedCount === 0){
    txtstring = txtstring + "pls select fiance citizenship; ";
    fiancee_fiance_dataCompleted = 0;
    } else {
    txtstring = txtstring + "]; ";
    }
  }

  // check "timer-single1"
  radioButtons = document.querySelectorAll('input[name="timer-single1"]');
  // Count selected radio buttons
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  radioButtons = document.querySelectorAll('input[name="timer-single1"]');
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  if(selectedCount != 0){
    // if single1 is selected then must check the rest of the inputs
    // let's assume data for the single is completed for now
    single_dataCompleted = 1;
    radioButtons = document.querySelectorAll('input[name="citizenship-single1"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    txtstring = txtstring + "[single1 selected; ";
    if(selectedCount === 0){
    txtstring = txtstring + "pls select single1 citizenship; ";
    single_dataCompleted = 0;
    } else {
      txtstring = txtstring + "]; ";
    }
    radioButtons = document.querySelectorAll('input[name="age-single1"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    if(selectedCount === 0){
    txtstring = txtstring + "pls select single1 age; ";
    single_dataCompleted = 0;
    } else {
      txtstring = txtstring + "]; ";
    }
  }
  // check "timer-single2"
  radioButtons = document.querySelectorAll('input[name="timer-single2"]');
  // Count selected radio buttons
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  radioButtons = document.querySelectorAll('input[name="timer-single2"]');
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  if(selectedCount != 0){
    // if single2 is selected then must check the rest of the inputs
    // let's assume data for the single is completed for now
    multiple_singles_dataCompleted = 1;
    radioButtons = document.querySelectorAll('input[name="citizenship-single2"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    txtstring = txtstring + "[single2 selected; ";
    if(selectedCount === 0){
    txtstring = txtstring + "pls select single2 citizenship; ";
    multiple_singles_dataCompleted = 0;
    } else {
    txtstring = txtstring + "]; ";
    }
    radioButtons = document.querySelectorAll('input[name="age-single2"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    if(selectedCount === 0){
    txtstring = txtstring + "pls select single2 age; ";
    multiple_singles_dataCompleted = 0;
    } else {
      txtstring = txtstring + "]; ";
    }
  }
  // check "timer-single3"
  radioButtons = document.querySelectorAll('input[name="timer-single3"]');
  // Count selected radio buttons
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  radioButtons = document.querySelectorAll('input[name="timer-single3"]');
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  if(selectedCount != 0){
    // if single3 is selected then must check the rest of the inputs
    // let's assume data for the single is completed for now
    multiple_singles_dataCompleted = 1;
    radioButtons = document.querySelectorAll('input[name="citizenship-single3"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    txtstring = txtstring + "[single3 selected; ";
    if(selectedCount === 0){
    txtstring = txtstring + "pls select single3 citizenship; ";
    multiple_singles_dataCompleted = 0;
    } else {
    txtstring = txtstring + "]; ";
    }
    radioButtons = document.querySelectorAll('input[name="age-single3"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    if(selectedCount === 0){
    txtstring = txtstring + "pls select single3 age; ";
    multiple_singles_dataCompleted = 0;
    } else {
      txtstring = txtstring + "]; ";
    }
  }
  // check "timer-single4"
  radioButtons = document.querySelectorAll('input[name="timer-single4"]');
  // Count selected radio buttons
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  radioButtons = document.querySelectorAll('input[name="timer-single4"]');
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  if(selectedCount != 0){
    // if single4 is selected then must check the rest of the inputs
    // let's assume data for the single is completed for now
    multiple_singles_dataCompleted = 1;
    radioButtons = document.querySelectorAll('input[name="citizenship-single4"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    txtstring = txtstring + "[single4 selected; ";
    if(selectedCount === 0){
    txtstring = txtstring + "pls select single4 citizenship; ";
    multiple_singles_dataCompleted = 0;
    } else {
    txtstring = txtstring + "]; ";
    }
    radioButtons = document.querySelectorAll('input[name="age-single4"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    if(selectedCount === 0){
    txtstring = txtstring + "pls select single4 age; ";
    multiple_singles_dataCompleted = 0;
    } else {
      txtstring = txtstring + "]; ";
    }
  }
  // check "timer-kids"
  radioButtons = document.querySelectorAll('input[name="timer-kids"]');
  // Count selected radio buttons
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  radioButtons = document.querySelectorAll('input[name="timer-kids"]');
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  if(selectedCount != 0){
    // if kids is selected then must check the rest of the inputs
    // let's assume data for the single is completed for now
    kids_dataCompleted = 1;
    radioButtons = document.querySelectorAll('input[name="citizenship-kids"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    txtstring = txtstring + "[kids selected; ";
    if(selectedCount === 0){
    txtstring = txtstring + "pls select kids citizenship; ";
   kids_dataCompleted = 0;
    } else {
    txtstring = txtstring + "]; ";
    }
    radioButtons = document.querySelectorAll('input[name="age-kids"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    if(selectedCount === 0){
    txtstring = txtstring + "pls select kids age; ";
    kids_dataCompleted = 0;
    } else {
      txtstring = txtstring + "]; ";
    }
    radioButtons = document.querySelectorAll('input[name="proximity-kids"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    if(selectedCount === 0){
    txtstring = txtstring + "pls select kids proximity; ";
    kids_dataCompleted = 0;
    } else {
      txtstring = txtstring + "]; ";
    }
  }
  // check "timer-parents"
  radioButtons = document.querySelectorAll('input[name="timer-parents"]');
  // Count selected radio buttons
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  radioButtons = document.querySelectorAll('input[name="timer-parents"]');
  selectedCount = [...radioButtons].filter(radio => radio.checked).length;
  if(selectedCount != 0){
    // if parents is selected then must check the rest of the inputs
    // let's assume data for the single is completed for now
    parents_dataCompleted = 1;
    radioButtons = document.querySelectorAll('input[name="citizenship-parents"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    txtstring = txtstring + "[parents selected; ";
    if(selectedCount === 0){
    txtstring = txtstring + "pls select parents citizenship; ";
   parents_dataCompleted = 0;
    } else {
    txtstring = txtstring + "]; ";
    }
    radioButtons = document.querySelectorAll('input[name="proximity-parents"]');
    selectedCount = [...radioButtons].filter(radio => radio.checked).length;
    if(selectedCount === 0){
    txtstring = txtstring + "pls select parents proximity; ";
    parents_dataCompleted = 0;
    } else {
      txtstring = txtstring + "]; ";
    }
  }

  const displayInputCheckOutcome = document.getElementById('checkInputOutcome');
  if (txtstring === ""){
    txtstring = "Please enter your profile above.";
    displayInputCheckOutcome.innerHTML = txtstring;
  }
  displayInputCheckOutcome.innerHTML = txtstring;
  // more message
  const displayInputBasis = document.getElementById('inputBasis');
  if (wife_hubby_dataCompleted === 1){
    txtstringbasis = "Wife/Hubby consideration.<br>";
    displayInputBasis.innerHTML = txtstringbasis;
  } else {
    txtstringbasis = "Wife/Hubby not consideration.<br>";
    displayInputBasis.innerHTML = txtstringbasis;
  }
  if (fiancee_fiance_dataCompleted === 1){
    txtstringbasis = txtstringbasis + "Fiancee/Fiance consideration.<br>";
    displayInputBasis.innerHTML = txtstringbasis;
  } else {
    txtstringbasis = txtstringbasis + "Fiancee/Fiance not consideration.<br>";
    displayInputBasis.innerHTML = txtstringbasis;
  }
  if (single_dataCompleted === 1){
    txtstringbasis = txtstringbasis + "Singaporean Single consideration.<br>";
    displayInputBasis.innerHTML = txtstringbasis;
  } else {
    txtstringbasis = txtstringbasis + "Singaporean Single not consideration.<br>";
    displayInputBasis.innerHTML = txtstringbasis;
  }
  if (multiple_singles_dataCompleted === 1){
    txtstringbasis = txtstringbasis + "Multiple Singles consideration.<br>";
    displayInputBasis.innerHTML = txtstringbasis;
  } else {
    txtstringbasis = txtstringbasis + "Multiple Singles not consideration.<br>";
    displayInputBasis.innerHTML = txtstringbasis;
  }
  if (kids_dataCompleted === 1){
    txtstringbasis = txtstringbasis + "Kids data consideration.<br>";
    displayInputBasis.innerHTML = txtstringbasis;
  } else {
    txtstringbasis = txtstringbasis + "Kids data not consideration.<br>";
    displayInputBasis.innerHTML = txtstringbasis;
  }
  if (parents_dataCompleted === 1){
    txtstringbasis = txtstringbasis + "Parents data consideration.<br>";
    displayInputBasis.innerHTML = txtstringbasis;
  } else {
    txtstringbasis = txtstringbasis + "Parents data not consideration.<br>";
    displayInputBasis.innerHTML = txtstringbasis;
  }
}

//Go into details to determine which eligibility scheme
function checkSchemes() {
ES_Pub = 0;
ES_FF = 0;
ES_SS = 0;
ES_JS = 0;
ES_NCS = 0;
ES_NCF = 0;
ES_O = 0;
ES_C = 0;
ES_S = 0;

PS_FT = 0;
PS_FPPS = 0;
PS_MGPS = 0;
PS_MCPS = 0;
PS_TCPS = 0;
PS_ASSIST = 0;
PS_TPS = 0;
PS_SPS = 0;

Grant_PG= 0;
Grant_HGF= 0;
Grant_HGS= 0;
Grant_EHGF= 0;
Grant_EHGS= 0;
Grant_HHG= 0;
Grant_CTG= 0;
Grant_SUG= 0;

ToF_2R = 0;
ToF_2RS = 0;
ToF_3R = 0;
ToF_4R = 0;
ToF_5R = 0;
ToF_3G = 0;
ToF_DBSS = 0;
ToF_EC = 0;

LOC_MSTD = 1;
LOC_MPLUS = 1;
LOC_MPRIME = 1;
LOC_NMSTD = 1;
LOC_NMPLUS = 1;
LOC_NMPRIME = 1;

MoS_R = 0;
MoS_BTO = 0;
MoS_SOB = 0;
MoS_OB = 0;

FO_HDBLOAN = 0;
FO_BANKLOAN = 0;
FO_CPF = 0;
FO_CONTRA = 0;
FO_ENHCONTRA = 0;
FO_TEMP = 0;
FO_DEF = 0;
FO_STAG = 0;

const str_info = "";
//if wife/hubby data completed, then check following before confirming eligibility of Public / Non-Citizen Spouse
if (wife_hubby_dataCompleted === 1){
  const wifeTimer1 = document.getElementById('timer-wife1').checked;
  const wifeTimer2 = document.getElementById('timer-wife2').checked;
  const wifeCitizenship1 = document.getElementById('citizenship-wife1').checked;
  const wifeCitizenship2 = document.getElementById('citizenship-wife2').checked;
  const wifeCitizenship3 = document.getElementById('citizenship-wife3').checked;
  const hubbyTimer1 = document.getElementById('timer-hubby1').checked;
  const hubbyTimer2 = document.getElementById('timer-hubby2').checked;
  const hubbyCitizenship1 = document.getElementById('citizenship-hubby1').checked;
  const hubbyCitizenship2 = document.getElementById('citizenship-hubby2').checked;
  const hubbyCitizenship3 = document.getElementById('citizenship-hubby3').checked;
  const wifeIncome = parseFloat(document.getElementById('js-wifeincome-input').value);   //read this in as as number
  const hubbyIncome = parseFloat(document.getElementById('js-hubbyincome-input').value); //read this in as as number
  const kidsCitizenship1 = document.getElementById('citizenship-kids1').checked;
  const statusKids1 = document.getElementById('status-kids1').checked;
  const statusKids2 = document.getElementById('status-kids2').checked;
  const proximityKids1 = document.getElementById('proximity-kids1').checked;
  const proximityKids2 = document.getElementById('proximity-kids2').checked;
  const proximityParents1 = document.getElementById('proximity-parents1').checked;
  const proximityParents2 = document.getElementById('proximity-parents2').checked;
  
  console.log(MoS_BTO);
  if (!wifeCitizenship3 && !hubbyCitizenship3){
    if ((!wifeCitizenship2 || !hubbyCitizenship2) || (!wifeCitizenship2 && !hubbyCitizenship2)) {
      // Code to execute if both are Singaporeans or if one or the other is SPR
      ES_Pub = 1;
      //check income
      if (wifeIncome + hubbyIncome > 14000){
        
        if (wifeTimer1 && hubbyTimer1){  //qualify if both are first timer
          Grant_EHGF= 1;
        }
        if (wifeIncome + hubbyIncome > 16000){  //qualify if both are first timer
        Grant_EHGF= 0;
        }
        ToF_EC = 1;
        MoS_R = 1;
        if((statusKids2 || (kidsCitizenship1 && statusKids1)) && (proximityKids1 || proximityKids2) && (MoS_R === 1)){
          Grant_PG = 1;
        }
        if((proximityParents1 || proximityParents2) && (MoS_R === 1)){
          Grant_PG = 1;
        }
        MoS_BTO = 1;
        FO_BANKLOAN = 1;
        FO_CPF = 1;
      } else {
        if (wifeTimer1 && hubbyTimer1){  //qualify if both are first timer
          Grant_HGF= 1;
          Grant_EHGF= 1;
        } 
        if ((wifeCitizenship1 && hubbyCitizenship1) && (wifeTimer1 || hubbyTimer1) && (wifeTimer2 || hubbyTimer2)) {
          Grant_HHG= 1;
        } 
        Grant_SUG= 1;
        ToF_2R = 1;
        ToF_3R = 1;
        ToF_4R = 1;
        ToF_5R = 1;
        ToF_DBSS = 1;
        ToF_EC = 1;
        MoS_R = 1;
        if((statusKids2 || (kidsCitizenship1 && statusKids1)) && (proximityKids1 || proximityKids2) && (MoS_R === 1)){
          Grant_PG = 1;
        }
        if((proximityParents1 || proximityParents2) && (MoS_R === 1)){
          Grant_PG = 1;
        }
        MoS_BTO = 1;
        MoS_SOB = 1;
        MoS_OB = 1;
        FO_HDBLOAN = 1;
        FO_BANKLOAN = 1;
        FO_CPF = 1;
        FO_CONTRA = 1;
        FO_ENHCONTRA = 1;
        FO_TEMP = 1;
        FO_STAG = 1;
      }
    } else if (wifeCitizenship2 && hubbyCitizenship2) {
      // Code to execute if both are SPR
      console.log(MoS_BTO);
      ES_Pub = 1;
      ToF_2R = 1;
      ToF_3R = 1;
      ToF_4R = 1;
      ToF_5R = 1;
      ToF_DBSS = 1;
      ToF_EC = 1;
      MoS_R = 1;
      FO_BANKLOAN = 1;
      FO_CPF = 1;
    } else {
      // Code to execute if foreigner
    }


  }
  // print info
    const evaulationOutcome = document.getElementById('csvData');
    evaulationOutcome.innerHTML = str_info;
}
    

// before exiting, readjust color and cell data
if (ES_Pub === 0){
  referenceColors["Cell1"] = '#ffffff';
  cellData["Cell1"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell1"] = '#85e085';
  cellData["Cell1"] = 1; // Replace with the new reference value
}
if (ES_FF === 0){
  referenceColors["Cell2"] = '#ffffff';
  cellData["Cell2"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell2"] = '#85e085';
  cellData["Cell2"] = 1; // Replace with the new reference value
}
if (ES_SS === 0){
  referenceColors["Cell3"] = '#ffffff';
  cellData["Cell3"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell3"] = '#85e085';
  cellData["Cell3"] = 1; // Replace with the new reference value
}
if (ES_JS === 0){
  referenceColors["Cell4"] = '#ffffff';
  cellData["Cell4"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell4"] = '#85e085';
  cellData["Cell4"] = 1; // Replace with the new reference value
}
if (ES_NCS === 0){
  referenceColors["Cell5"] = '#ffffff';
  cellData["Cell5"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell5"] = '#85e085';
  cellData["Cell5"] = 1; // Replace with the new reference value
}
if (ES_NCF === 0){
  referenceColors["Cell6"] = '#ffffff';
  cellData["Cell6"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell6"] = '#85e085';
  cellData["Cell6"] = 1; // Replace with the new reference value
}
if (ES_O === 0){
  referenceColors["Cell7"] = '#ffffff';
  cellData["Cell7"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell7"] = '#85e085';
  cellData["Cell7"] = 1; // Replace with the new reference value
}
if (ES_C === 0){
  referenceColors["Cell8"] = '#ffffff';
  cellData["Cell8"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell8"] = '#85e085';
  cellData["Cell8"] = 1; // Replace with the new reference value
}
if (ES_S === 0){
  referenceColors["Cell9"] = '#ffffff';
  cellData["Cell9"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell9"] = '#85e085';
  cellData["Cell9"] = 1; // Replace with the new reference value
}

if (PS_FT === 0){
  referenceColors["Cell11"] = '#ffffff';
  cellData["Cell11"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell11"] = '#85e085';
  cellData["Cell11"] = 1; // Replace with the new reference value
}
if (PS_FPPS === 0){
  referenceColors["Cell12"] = '#ffffff';
  cellData["Cell12"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell12"] = '#85e085';
  cellData["Cell12"] = 1; // Replace with the new reference value
}
if (PS_MGPS === 0){
  referenceColors["Cell13"] = '#ffffff';
  cellData["Cell13"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell13"] = '#85e085';
  cellData["Cell13"] = 1; // Replace with the new reference value
}
if (PS_MCPS === 0){
  referenceColors["Cell14"] = '#ffffff';
  cellData["Cell14"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell14"] = '#85e085';
  cellData["Cell14"] = 1; // Replace with the new reference value
}
if (PS_TCPS === 0){
  referenceColors["Cell15"] = '#ffffff';
  cellData["Cell15"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell15"] = '#85e085';
  cellData["Cell15"] = 1; // Replace with the new reference value
}
if (PS_ASSIST === 0){
  referenceColors["Cell16"] = '#ffffff';
  cellData["Cell16"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell16"] = '#85e085';
  cellData["Cell16"] = 1; // Replace with the new reference value
}
if (PS_TPS === 0){
  referenceColors["Cell17"] = '#ffffff';
  cellData["Cell17"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell17"] = '#85e085';
  cellData["Cell17"] = 1; // Replace with the new reference value
}
if (PS_SPS === 0){
  referenceColors["Cell18"] = '#ffffff';
  cellData["Cell18"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell18"] = '#85e085';
  cellData["Cell18"] = 1; // Replace with the new reference value
}

if (Grant_PG === 0){
  referenceColors["Cell21"] = '#ffffff';
  cellData["Cell21"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell21"] = '#85e085';
  cellData["Cell21"] = 1; // Replace with the new reference value
}
if (Grant_HGF === 0){
  referenceColors["Cell22"] = '#ffffff';
  cellData["Cell22"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell22"] = '#85e085';
  cellData["Cell22"] = 1; // Replace with the new reference value
}
if (Grant_HGS === 0){
  referenceColors["Cell23"] = '#ffffff';
  cellData["Cell23"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell23"] = '#85e085';
  cellData["Cell23"] = 1; // Replace with the new reference value
}
if (Grant_EHGF === 0){
  referenceColors["Cell24"] = '#ffffff';
  cellData["Cell24"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell24"] = '#85e085';
  cellData["Cell24"] = 1; // Replace with the new reference value
}
if (Grant_EHGS === 0){
  referenceColors["Cell25"] = '#ffffff';
  cellData["Cell25"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell25"] = '#85e085';
  cellData["Cell25"] = 1; // Replace with the new reference value
}
if (Grant_HHG === 0){
  referenceColors["Cell26"] = '#ffffff';
  cellData["Cell26"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell26"] = '#85e085';
  cellData["Cell26"] = 1; // Replace with the new reference value
}
if (Grant_CTG === 0){
  referenceColors["Cell27"] = '#ffffff';
  cellData["Cell27"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell27"] = '#85e085';
  cellData["Cell27"] = 1; // Replace with the new reference value
}
if (Grant_SUG === 0){
  referenceColors["Cell28"] = '#ffffff';
  cellData["Cell28"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell28"] = '#85e085';
  cellData["Cell28"] = 1; // Replace with the new reference value
}

if (ToF_2R === 0){
  referenceColors["Cell31"] = '#ffffff';
  cellData["Cell31"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell31"] = '#b3ffcc';
  cellData["Cell31"] = 1; // Replace with the new reference value
}
if (ToF_2RS === 0){
  referenceColors["Cell32"] = '#ffffff';
  cellData["Cell32"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell32"] = '#b3ffcc';
  cellData["Cell32"] = 1; // Replace with the new reference value
}
if (ToF_3R === 0){
  referenceColors["Cell33"] = '#ffffff';
  cellData["Cell33"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell33"] = '#b3ffcc';
  cellData["Cell33"] = 1; // Replace with the new reference value
}
if (ToF_4R === 0){
  referenceColors["Cell34"] = '#ffffff';
  cellData["Cell34"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell34"] = '#b3ffcc';
  cellData["Cell34"] = 1; // Replace with the new reference value
}
if (ToF_5R === 0){
  referenceColors["Cell35"] = '#ffffff';
  cellData["Cell35"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell35"] = '#b3ffcc';
  cellData["Cell35"] = 1; // Replace with the new reference value
}
if (ToF_3G === 0){
  referenceColors["Cell36"] = '#ffffff';
  cellData["Cell36"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell36"] = '#b3ffcc';
  cellData["Cell36"] = 1; // Replace with the new reference value
}
if (ToF_DBSS === 0){
  referenceColors["Cell37"] = '#ffffff';
  cellData["Cell37"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell37"] = '#b3ffcc';
  cellData["Cell37"] = 1; // Replace with the new reference value
}
if (ToF_EC === 0){
  referenceColors["Cell38"] = '#ffffff';
  cellData["Cell38"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell38"] = '#b3ffcc';
  cellData["Cell38"] = 1; // Replace with the new reference value
}

if (LOC_MSTD === 0){
  referenceColors["Cell41"] = '#ffffff';
  cellData["Cell41"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell41"] = '#b3ffcc';
  cellData["Cell41"] = 1; // Replace with the new reference value
}
if (LOC_MPLUS === 0){
  referenceColors["Cell42"] = '#ffffff';
  cellData["Cell42"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell42"] = '#b3ffcc';
  cellData["Cell42"] = 1; // Replace with the new reference value
}
if (LOC_MPRIME === 0){
  referenceColors["Cell43"] = '#ffffff';
  cellData["Cell43"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell43"] = '#b3ffcc';
  cellData["Cell43"] = 1; // Replace with the new reference value
}
if (LOC_NMSTD === 0){
  referenceColors["Cell44"] = '#ffffff';
  cellData["Cell44"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell44"] = '#b3ffcc';
  cellData["Cell44"] = 1; // Replace with the new reference value
}
if (LOC_NMPLUS === 0){
  referenceColors["Cell45"] = '#ffffff';
  cellData["Cell45"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell45"] = '#b3ffcc';
  cellData["Cell45"] = 1; // Replace with the new reference value
}
if (LOC_NMPRIME === 0){
  referenceColors["Cell46"] = '#ffffff';
  cellData["Cell46"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell46"] = '#b3ffcc';
  cellData["Cell46"] = 1; // Replace with the new reference value
}

if (MoS_R === 0){
  referenceColors["Cell51"] = '#ffffff';
  cellData["Cell51"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell51"] = '#b3ffcc';
  cellData["Cell51"] = 1; // Replace with the new reference value
}
if (MoS_BTO === 0){
  referenceColors["Cell52"] = '#ffffff';
  cellData["Cell52"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell52"] = '#b3ffcc';
  cellData["Cell52"] = 1; // Replace with the new reference value
}
if (MoS_SOB === 0){
  referenceColors["Cell53"] = '#ffffff';
  cellData["Cell53"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell53"] = '#b3ffcc';
  cellData["Cell53"] = 1; // Replace with the new reference value
}
if (MoS_OB === 0){
  referenceColors["Cell54"] = '#ffffff';
  cellData["Cell54"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell54"] = '#b3ffcc';
  cellData["Cell54"] = 1; // Replace with the new reference value
}

if (FO_HDBLOAN === 0){
  referenceColors["Cell61"] = '#ffffff';
  cellData["Cell61"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell61"] = '#b3ffcc';
  cellData["Cell61"] = 1; // Replace with the new reference value
}
if (FO_BANKLOAN === 0){
  referenceColors["Cell62"] = '#ffffff';
  cellData["Cell62"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell62"] = '#b3ffcc';
  cellData["Cell62"] = 1; // Replace with the new reference value
}
if (FO_CPF === 0){
  referenceColors["Cell63"] = '#ffffff';
  cellData["Cell63"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell63"] = '#b3ffcc';
  cellData["Cell63"] = 1; // Replace with the new reference value
}
if (FO_CONTRA === 0){
  referenceColors["Cell64"] = '#ffffff';
  cellData["Cell64"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell64"] = '#b3ffcc';
  cellData["Cell64"] = 1; // Replace with the new reference value
}
if (FO_ENHCONTRA === 0){
  referenceColors["Cell65"] = '#ffffff';
  cellData["Cell65"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell65"] = '#b3ffcc';
  cellData["Cell65"] = 1; // Replace with the new reference value
}
if (FO_TEMP === 0){
  referenceColors["Cell66"] = '#ffffff';
  cellData["Cell66"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell66"] = '#b3ffcc';
  cellData["Cell66"] = 1; // Replace with the new reference value
}
if (FO_DEF === 0){
  referenceColors["Cell67"] = '#ffffff';
  cellData["Cell67"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell67"] = '#b3ffcc';
  cellData["Cell67"] = 1; // Replace with the new reference value
}
if (FO_STAG === 0){
  referenceColors["Cell68"] = '#ffffff';
  cellData["Cell68"] = 0; // Replace with the new reference value
} else{
  referenceColors["Cell68"] = '#b3ffcc';
  cellData["Cell68"] = 1; // Replace with the new reference value
}

// reset color
setReferenceCellColors();
}

