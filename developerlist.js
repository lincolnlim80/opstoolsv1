
// Function to fetch the CSV data
let dataArray = [];
async function fetchCSVData() {
  const response = await fetch('./rsc/developerlist.csv');
  const csvData = await response.text();
  dataArray = csvData
    .split('\n')
    .map((row) => row.split(','))
    .slice(1) // Skip the header row
    .map(([dev, name, zone, category, top, link]) => ({
      dev,
      name,
      zone,
      category,
      top,
      link
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
    const devCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const zoneCell = document.createElement("td");
    const categoryCell = document.createElement("td");
    const topCell = document.createElement("td");
    const linkCell = document.createElement("td");

    devCell.textContent = item.dev;
    nameCell.textContent = item.name;
    zoneCell.textContent = item.zone;
    categoryCell.textContent = item.category;
    topCell.textContent = item.top 
    const link = document.createElement("a");
    link.href = item.link;
    link.textContent = "More...";
    linkCell.appendChild(link);
    
    row.appendChild(devCell);
    row.appendChild(nameCell);
    row.appendChild(zoneCell);
    row.appendChild(categoryCell);
    row.appendChild(topCell);
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
    const devMatch = item.dev.toLowerCase().includes(filterValue);
    const nameMatch = item.name.toLowerCase().includes(filterValue);
    const zoneMatch = item.zone.toLowerCase().includes(filterValue);
    const categoryMatch = item.category.toLowerCase().includes(filterValue);
    const topMatch = item.top.toLowerCase().includes(filterValue);

    return  devMatch|| nameMatch || zoneMatch|| categoryMatch || topMatch;
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
  if (sortProperty === 'dev') {
    result = a.dev.localeCompare(b.dev);
  } else if (sortProperty === 'name') {
    result = a.name.localeCompare(b.name);
  } else if (sortProperty === 'zone') {
    result = a.zone.localeCompare(b.zone);
  } else if (sortProperty === 'category') {
    result = a.category.localeCompare(b.category);
  } else if (sortProperty === 'top') {
    const topA = new Date(a.top);
    const topB = new Date(b.top);
    result = topA - topB;
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

