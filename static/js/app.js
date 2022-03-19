// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//Typically, functions are named after what they do
//Basically, this entire line tells JavaScript to use an empty 
//string when creating the table; in other words, 
//create a blank canvas
function buildTable(data) {
    tbody.html("");
}

//using forEach function
//let instead of var to declare the row variable. 
//That's because this variable is limited to just this 
//block of code. It's more appropriate to use var when 
//we want the variable to be available globally.
data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
});