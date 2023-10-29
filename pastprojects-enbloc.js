
// Function to fetch the CSV data
let dataArray = [];
async function fetchCSVData() {
  const response = await fetch('./rsc/pastprojectsdata-enbloc.csv');
  const csvData = await response.text();
  dataArray = csvData
    .split('\n')
    .map((row) => row.split(','))
    .slice(1) // Skip the header row
    .map(([name, category, street, top, tenure, psf1, psf2, notes]) => ({
      name,
      category,
      street,
      top,
      tenure,
      psf1,
      psf2,
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
    const categoryCell = document.createElement("td");
    const streetCell = document.createElement("td");
    const topCell = document.createElement("td");
    const tenureCell = document.createElement("td");
    const psf1Cell = document.createElement("td");
    const psf2Cell = document.createElement("td");
    const notesCell = document.createElement("td");

    nameCell.textContent = item.name;
    categoryCell.textContent = item.category;
    streetCell.textContent = item.street;
      // Split the date string using "/"
      const [day, month, year] = item.top.split("/");
      const formattedDate = `${month}/${year}`;
    topCell.textContent = item.top ? formattedDate : "TBC";
    tenureCell.textContent = item.tenure;
      var formattedpsf1 = Number(item.psf1).toLocaleString();
      var formattedpsf2 = Number(item.psf2).toLocaleString();
    psf1Cell.textContent = formattedpsf1;
    psf2Cell.textContent = formattedpsf2;
    notesCell.textContent = item.notes;
    
    row.appendChild(nameCell);
    row.appendChild(categoryCell);
    row.appendChild(streetCell);
    row.appendChild(topCell);
    row.appendChild(tenureCell);
    row.appendChild(psf1Cell);
    row.appendChild(psf2Cell);
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
    const categoryMatch = item.street.toLowerCase().includes(filterValue);
    const streetMatch = item.category.toLowerCase().includes(filterValue);
    const topMatch = item.top.toLowerCase().includes(filterValue);
    const tenureMatch = item.tenure.toLowerCase().includes(filterValue);
    const psf1Match = item.psf1.toLowerCase().includes(filterValue);
    const psf2Match = item.psf2.toLowerCase().includes(filterValue);
    const notesMatch = item.notes.toLowerCase().includes(filterValue);

    return nameMatch || categoryMatch || streetMatch|| topMatch || tenureMatch || psf1Match || psf2Match || notesMatch;
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
  } else if (sortProperty === 'category') {
    result = a.category.localeCompare(b.category);
  } else if (sortProperty === 'street') {
    result = a.street.localeCompare(b.street);
  } else if (sortProperty === 'top') {
    const topA = new Date(a.top);
    const topB = new Date(b.top);
    result = topA - topB;
  } else if (sortProperty === 'tenure') {
    result = a.tenure.localeCompare(b.tenure);
  } else if (sortProperty === 'psf1') {
    result = Number(a.psf1.replace(/,/g, '')) - Number(b.psf1.replace(/,/g, ''));
  } else if (sortProperty === 'psf2') {
    result = Number(a.psf2.replace(/,/g, '')) - Number(b.psf2.replace(/,/g, ''));
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

