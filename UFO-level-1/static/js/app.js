// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Create function to load table with data
function loadTable (ufoData) {

    // Reset HTML table
    tbody.html("");
    
    // Loop through each UFO sighting and add the data to the table
    ufoData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

loadTable(tableData);

// Select the button and create event handler
var button = d3.select("#filter-btn");
button.on("click", runEnter);

// Create the function to filter and load data by date when user clicks button
function runEnter() {

    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select date input element and get value; filter by the date input by the user
    var dateInput = d3.select("#datetime").property("value");
    var filteredTableData = tableData.filter(ufoSighting => ufoSighting.datetime === dateInput);

    loadTable(filteredTableData);
};
