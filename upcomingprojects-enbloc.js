
// Function to fetch the CSV data
let dataArray = [];
async function fetchCSVData() {
  const response = await fetch('./rsc/upcomingprojectsdata-enbloc.csv');
  const csvData = await response.text();
  dataArray = csvData
    .split('\n')
    .map((row) => row.split(','))
    .slice(1) // Skip the header row
    .map(([name, zone, category, tenderdate, type, use, tenure, landsize, gfa, top, glslink, notes]) => ({
      name,
      zone,
      category,
      tenderdate,
      type,
      use,
      tenure,
      landsize,
      gfa,
      top,
      glslink,
      notes
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
    const zoneCell = document.createElement("td");
    const categoryCell = document.createElement("td");
    const tenderdateCell = document.createElement("td");
    const typeCell = document.createElement("td");
    const useCell = document.createElement("td");
    const tenureCell = document.createElement("td");
    const landsizeCell = document.createElement("td");
    const gfaCell = document.createElement("td");
    const topCell = document.createElement("td");
    const glslinkCell = document.createElement("td");
    const notesCell = document.createElement("td");

    nameCell.textContent = item.name;
    zoneCell.textContent = item.zone;
    categoryCell.textContent = item.category;
    // Split the date string using "/"
    const [day1, month1, year1] = item.tenderdate.split("/");
    const formattedDate1 = `${month1}/${year1}`;
    tenderdateCell.textContent = item.tenderdate ? formattedDate1 : "TBC";
    typeCell.textContent = item.type;
    useCell.textContent = item.use;
    tenureCell.textContent = item.tenure;
    landsizeCell.textContent = item.landsize;
    gfaCell.textContent = item.gfa;
      // Split the date string using "/"
      const [day2, month2, year2] = item.top.split("/");
      const formattedDate2 = `${month2}/${year2}`;
    topCell.textContent = item.top ? formattedDate2 : "TBC";

    const glslink = document.createElement("a");
    glslink.href = item.glslink;
    glslink.textContent = "More...";
    glslinkCell.appendChild(glslink);
    notesCell.textContent = item.notes;

    row.appendChild(nameCell);
    row.appendChild(zoneCell);
    row.appendChild(categoryCell);
    row.appendChild(tenderdateCell);
    row.appendChild(typeCell);
    row.appendChild(useCell);
    row.appendChild(tenureCell);
    row.appendChild(landsizeCell);
    row.appendChild(gfaCell);
    row.appendChild(topCell);
    row.appendChild(glslinkCell);
    row.appendChild(notesCell);

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
    const zoneMatch = item.zone.toLowerCase().includes(filterValue);
    const categoryMatch = item.category.toLowerCase().includes(filterValue);
    const typeMatch = item.type.toLowerCase().includes(filterValue);
    const useMatch = item.use.toLowerCase().includes(filterValue);
    const tenureMatch = item.tenure.toLowerCase().includes(filterValue);
    const topMatch = item.top.toLowerCase().includes(filterValue);
    const notesMatch = item.notes.toLowerCase().includes(filterValue);
  
      return nameMatch || zoneMatch || categoryMatch  || typeMatch || useMatch || tenureMatch || topMatch || notesMatch;
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
  } else if (sortProperty === 'zone') {
    result = a.zone.localeCompare(b.zone);
  } else if (sortProperty === 'category') {
    result = a.category.localeCompare(b.category);
  } else if (sortProperty === 'tenderdate') {
    const tenderdateA = new Date(a.tenderdate);
    const tenderdateB = new Date(b.tenderdate);
    result = tenderdateA - tenderdateB;
  } else if (sortProperty === 'type') {
    result = a.type.localeCompare(b.type);
  } else if (sortProperty === 'use') {
    result = a.use.localeCompare(b.use);
  } else if (sortProperty === 'tenure') {
    result = a.tenure.localeCompare(b.tenure);
  } else if (sortProperty === 'landsize') {
    result = a.landsize.localeCompare(b.landsize);
  } else if (sortProperty === 'gfa') {
    result = a.gfa.localeCompare(b.gfa);
  } else if (sortProperty === 'top') {
    const topA = new Date(a.top);
    const topB = new Date(b.top);
    result = topA - topB;
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
