
// Function to fetch the CSV data
let dataArray = [];
async function fetchCSVData() {
  const response = await fetch('./rsc/pastprojectsdata.csv');
  const csvData = await response.text();
  dataArray = csvData
    .split('\n')
    .map((row) => row.split(','))
    .slice(1) // Skip the header row
    .map(([name, type, zone, category, top, psf1, psf1_date, psf2, psf2_date, notes, link, psf1_max, psf1_max_date, psf2_max, psf2_max_date, psf1_avg, psf1_avg_date, psf2_avg, psf2_avg_date, psf1_new, psf1_new_date, psf2_new, psf2_new_date, psf1_2018, psf1_2018_date, psf2_2018, psf2_2018_date, psf1_2019, psf1_2019_date, psf2_2019, psf2_2019_date, psf1_2020, psf1_2020_date, psf2_2020, psf2_2020_date, psf1_2021, psf1_2021_date, psf2_2021, psf2_2021_date, psf1_2022, psf1_2022_date, psf2_2022, psf2_2022_date, psf1_2023, psf1_2023_date, psf2_2023, psf2_2023_date]) => ({
      name,
      type,
      zone,
      category,
      top,
      psf1,
      psf1_date,
      psf2,
      psf2_date,
      notes,
      link,
      psf1_max, 
      psf1_max_date, 
      psf2_max, 
      psf2_max_date, 
      psf1_avg, 
      psf1_avg_date, 
      psf2_avg, 
      psf2_avg_date, 
      psf1_new, 
      psf1_new_date, 
      psf2_new, 
      psf2_new_date, 
      psf1_2018, 
      psf1_2018_date, 
      psf2_2018, 
      psf2_2018_date, 
      psf1_2019, 
      psf1_2019_date, 
      psf2_2019, 
      psf2_2019_date, 
      psf1_2020, 
      psf1_2020_date, 
      psf2_2020, 
      psf2_2020_date, 
      psf1_2021, 
      psf1_2021_date, 
      psf2_2021, 
      psf2_2021_date, 
      psf1_2022, 
      psf1_2022_date, 
      psf2_2022, 
      psf2_2022_date, 
      psf1_2023, 
      psf1_2023_date, 
      psf2_2023, 
      psf2_2023_date,
      psf1_last: psf1,
      psf2_last: psf2,
      psf1_last_date: psf1_date,
      psf2_last_date: psf2_date
    }));
  dataArray.pop(); // Remove the last element
  return dataArray;
}

// Function to display the data
function displayData(items) {
  const dataList = document.getElementById("dataList");
  dataList.innerHTML = "";

  items.forEach((item, index) => {
  
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const typeCell = document.createElement("td");
    const zoneCell = document.createElement("td");
    const categoryCell = document.createElement("td");
    const topCell = document.createElement("td");
    const psf1Cell = document.createElement("td");
    const psf1_dateCell = document.createElement("td");
    const psf2Cell = document.createElement("td");
    const psf2_dateCell = document.createElement("td");
    const notesCell = document.createElement("td");
    const linkCell = document.createElement("td");

    nameCell.textContent = item.name;
    typeCell.textContent = item.type;
    zoneCell.textContent = item.zone;
    categoryCell.textContent = item.category;
 
    topCell.textContent = item.top 
    psf1Cell.textContent = item.psf1;
    psf1_dateCell.textContent = item.psf1_date;
    psf2Cell.textContent = item.psf2;
    psf2_dateCell.textContent = item.psf2_date;
    notesCell.textContent = item.notes;
    
    const link = document.createElement("a");
    link.href = item.link;
    link.textContent = "More...";
    linkCell.appendChild(link);
    
    row.appendChild(nameCell);
    row.appendChild(typeCell);
    row.appendChild(zoneCell);
    row.appendChild(categoryCell);
    row.appendChild(topCell);
    row.appendChild(psf1Cell);
    row.appendChild(psf1_dateCell);
    row.appendChild(psf2Cell);
    row.appendChild(psf2_dateCell);
    row.appendChild(notesCell);
    row.appendChild(linkCell);

    dataList.appendChild(row);
  });
}

// Function to initialize the page
async function initializePage() {
  const data = await fetchCSVData();
  filteredData = data; // Assign the fetched data to filteredData initially
  displayData(filteredData);
}

// Call the initializePage() function when the page loads
window.addEventListener('load', initializePage);

let filteredData = []; // Add this line at the beginning, outside any function
// Function to filter the data
function filterData() {
  const searchInput = document.getElementById("searchInput");
  const filterValue = searchInput.value.toLowerCase();
  
  filteredData = dataArray.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(filterValue);
    const typeMatch = item.type.toLowerCase().includes(filterValue);
    const zoneMatch = item.zone.toLowerCase().includes(filterValue);
    const categoryMatch = item.category.toLowerCase().includes(filterValue);
    const topMatch = item.top.toLowerCase().includes(filterValue);

    return nameMatch || typeMatch || zoneMatch|| categoryMatch || topMatch;
  });

  displayData(filteredData);
}

// Event listener for the search input
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", filterData);

// Select the column headers
const headers = document.querySelectorAll('th[data-sort]');

// Create an object to keep track of the sort order
const sortOrders = {};

// Loop through each header and attach the event listener
headers.forEach(header => {
header.addEventListener('click', () => {
  const sortProperty = header.dataset.sort;
  let sortOrder = sortOrders[sortProperty] || 'asc'; // Get the current sort order or default to 'asc'

  // Toggle the sort order
  if (sortOrder === 'asc') {
    sortOrder = 'desc';
  } else {
    sortOrder = 'asc';
  }

  sortOrders[sortProperty] = sortOrder; // Update the sort order

  // Call the sorting function or perform any desired action
  sortData(sortProperty, sortOrder);
});
});


// Function to sort the data
function sortData(sortProperty, sortOrder) {


const arrowIcon = document.getElementById(`${sortProperty}ArrowIcon`);
// Toggle arrow direction between asc and desc
if (arrowIcon.classList.contains('asc')) {
    arrowIcon.classList.remove('asc');
    arrowIcon.classList.add('desc');
} else if (arrowIcon.classList.contains('desc')) {
    arrowIcon.classList.remove('desc');
    arrowIcon.classList.add('asc');
} else {
    // this is only for the first click.
    arrowIcon.classList.add('asc');
}

const sortedData = [...filteredData].sort((a, b) => {
  let result;
  if (sortProperty === 'name') {
    result = a.name.localeCompare(b.name);
  } else if (sortProperty === 'type') {
    result = a.type.localeCompare(b.type);
  } else if (sortProperty === 'zone') {
    result = a.zone.localeCompare(b.zone);
  } else if (sortProperty === 'category') {
    result = a.category.localeCompare(b.category);
  } else if (sortProperty === 'top') {
    const topA = new Date(a.top);
    const topB = new Date(b.top);
    result = topA - topB;
  } else if (sortProperty === 'psf1') {
    result = parseInt(a.psf1) - parseInt(b.psf1);
  } else if (sortProperty === 'psf2') {
    result = parseInt(a.psf2) - parseInt(b.psf2);
  } else if (sortProperty === 'notes') {
    result = a.notes.localeCompare(b.notes);
  } else {
    result = 0; // Default sorting order if sortProperty is not recognized
  }

      // Apply sort order based on sortOrder value
      if (sortOrder === 'desc') {
        result *= -1; // Reverse the sorting order
      }

      return result;
});

  displayData(sortedData);
}


// Function to clear the search input
function clearSearchInput() {
  searchInput.value = ""; // Clear the search input value
  filterData(); // Call the filterData function to update the displayed data
}

// Event listener for the clear icon
const clearIcon = document.getElementById("clearIcon");
clearIcon.addEventListener("click", clearSearchInput);


// Get the button elements
var lastNewSaleButton = document.getElementById("LastNewSale");
var lastResaleButton = document.getElementById("LastResale");
var maxValueButton = document.getElementById("MaxValue");
var averageHalfYearButton = document.getElementById("AverageHalfYear");
var averageY2018Button = document.getElementById("Y2018");
var averageY2019Button = document.getElementById("Y2019");
var averageY2020Button = document.getElementById("Y2020");
var averageY2021Button = document.getElementById("Y2021");
var averageY2022Button = document.getElementById("Y2022");
var averageY2023Button = document.getElementById("Y2023");

// Add event listeners to the buttons
lastNewSaleButton.addEventListener("click", function() {
  // Code to execute when the Last Transacted button is clicked
  filteredData.forEach((item) => {
    item.psf1 = item.psf1_new;
    item.psf1_date = item.psf1_new_date;
    item.psf2 = item.psf2_new;
    item.psf2_date = item.psf2_new_date;
  });
  displayData(filteredData);
});

lastResaleButton.addEventListener("click", function() {
  // Code to execute when the Last Transacted button is clicked
  filteredData.forEach((item) => {
    item.psf1 = item.psf1_last;
    item.psf1_date = item.psf1_last_date;
    item.psf2 = item.psf2_last;
    item.psf2_date = item.psf2_last_date;
  });
  displayData(filteredData);
});

maxValueButton.addEventListener("click", function() {
    // Code to execute when the Max Value button is clicked
  filteredData.forEach((item) => {
    item.psf1 = item.psf1_max;
    item.psf1_date = item.psf1_max_date;
    item.psf2 = item.psf2_max;
    item.psf2_date = item.psf2_max_date;
  });
  displayData(filteredData);
});

averageHalfYearButton.addEventListener("click", function() {
  // Code to execute when the Average Half Year button is clicked
  filteredData.forEach((item) => {
    item.psf1 = item.psf1_avg;
    item.psf1_date = item.psf1_avg_date;
    item.psf2 = item.psf2_avg;
    item.psf2_date = item.psf2_avg_date;
  });
  displayData(filteredData);
});

averageY2018Button.addEventListener("click", function() {
  // Code to execute when the Y2018 button is clicked
  filteredData.forEach((item) => {
    item.psf1 = item.psf1_2018;
    item.psf1_date = item.psf1_2018_date;
    item.psf2 = item.psf2_2018;
    item.psf2_date = item.psf2_2018_date;
  });
  displayData(filteredData);
});

averageY2019Button.addEventListener("click", function() {
  // Code to execute when the Y2019 button is clicked
  filteredData.forEach((item) => {
    item.psf1 = item.psf1_2019;
    item.psf1_date = item.psf1_2019_date;
    item.psf2 = item.psf2_2019;
    item.psf2_date = item.psf2_2019_date;
  });
  displayData(filteredData);
});

averageY2020Button.addEventListener("click", function() {
  // Code to execute when the Y2020 button is clicked
  filteredData.forEach((item) => {
    item.psf1 = item.psf1_2020;
    item.psf1_date = item.psf1_2020_date;
    item.psf2 = item.psf2_2020;
    item.psf2_date = item.psf2_2020_date;
  });
  displayData(filteredData);
});

averageY2021Button.addEventListener("click", function() {
  // Code to execute when the Y2021 button is clicked
  filteredData.forEach((item) => {
    item.psf1 = item.psf1_2021;
    item.psf1_date = item.psf1_2021_date;
    item.psf2 = item.psf2_2021;
    item.psf2_date = item.psf2_2021_date;
  });
  displayData(filteredData);
});

averageY2022Button.addEventListener("click", function() {
  // Code to execute when the Y2022 button is clicked
  filteredData.forEach((item) => {
    item.psf1 = item.psf1_2022;
    item.psf1_date = item.psf1_2022_date;
    item.psf2 = item.psf2_2022;
    item.psf2_date = item.psf2_2022_date;
  });
  displayData(filteredData);
});

averageY2023Button.addEventListener("click", function() {
  // Code to execute when the Y2023 button is clicked
  filteredData.forEach((item) => {
    item.psf1 = item.psf1_2023;
    item.psf1_date = item.psf1_2023_date;
    item.psf2 = item.psf2_2023;
    item.psf2_date = item.psf2_2023_date;
  });
  displayData(filteredData);
});

// Get all the buttons
const buttons = document.querySelectorAll("#searchContainer button");
// Define the lighter shade of pastel green
const pastelGreen = "#b3ffb3";
// Add click event listener to each button
// Set initial background color of LastResale button
document.getElementById("LastResale").style.backgroundColor = pastelGreen;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove the green background color from all buttons
    buttons.forEach(btn => {
      btn.style.backgroundColor = "";
    });

    // Add green background color to the clicked button
    button.style.backgroundColor = pastelGreen;
  });
});
