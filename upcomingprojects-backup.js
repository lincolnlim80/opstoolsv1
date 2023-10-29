
// Function to fetch the CSV data
let dataArray = [];
async function fetchCSVData() {
  const response = await fetch('./rsc/upcomingprojectsdata.csv');
  const csvData = await response.text();
  dataArray = csvData
    .split('\n')
    .map((row) => row.split(','))
    .slice(1) // Skip the header row
    .map(([name, zone, category, top, numunits, tenure, preview, booking, notes, link]) => ({
      name,
      zone,
      category,
      top,
      numunits,
      tenure,
      preview,
      booking,
      notes,
      link,
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
    const topCell = document.createElement("td");
    const numunitsCell = document.createElement("td");
    const tenureCell = document.createElement("td");
    const previewCell = document.createElement("td");
    const bookingCell = document.createElement("td");
    const notesCell = document.createElement("td");
    const linkCell = document.createElement("td");

    nameCell.textContent = item.name;
    zoneCell.textContent = item.zone;
    categoryCell.textContent = item.category;
      // Split the date string using "/"
      const [day, month, year] = item.top.split("/");
      const formattedDate = `${month}/${year}`;
    topCell.textContent = item.top ? formattedDate : "TBC";
    numunitsCell.textContent = item.numunits;
    tenureCell.textContent = item.tenure;
      const [day1, month1, year1] = item.preview.split("/");
      const formattedDate1 = `${month1}/${year1}`;
    previewCell.textContent = item.preview ? formattedDate1 : "TBC";
      const [day2, month2, year2] = item.booking.split("/");
      const formattedDate2 = `${month2}/${year2}`;
    bookingCell.textContent = item.booking ? formattedDate2 : "TBC";
    notesCell.textContent = item.notes;
    
    const link = document.createElement("a");
    link.href = item.link;
    link.textContent = "More...";
    linkCell.appendChild(link);
    
    row.appendChild(nameCell);
    row.appendChild(zoneCell);
    row.appendChild(categoryCell);
    row.appendChild(topCell);
    row.appendChild(numunitsCell);
    row.appendChild(tenureCell);
    row.appendChild(previewCell);
    row.appendChild(bookingCell);
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
    const zoneMatch = item.zone.toLowerCase().includes(filterValue);
    const categoryMatch = item.category.toLowerCase().includes(filterValue);
    const topMatch = item.top.toLowerCase().includes(filterValue);
    const numunitsMatch = item.numunits.toLowerCase().includes(filterValue);
    const tenureMatch = item.tenure.toLowerCase().includes(filterValue);
    const notesMatch = item.notes.toLowerCase().includes(filterValue);
  
      return nameMatch || zoneMatch || categoryMatch  || topMatch || numunitsMatch || tenureMatch|| notesMatch;
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
  } else if (sortProperty === 'top') {
    const topA = new Date(a.top);
    const topB = new Date(b.top);
    result = topA - topB;
  } else if (sortProperty === 'numunits') {
    result = a.numunits.localeCompare(b.numunits);
  } else if (sortProperty === 'tenure') {
    result = a.tenure.localeCompare(b.tenure);
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
