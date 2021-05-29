// First, I will make the table which users will initially see, with all the unfiltered data.
// I declare "people" to be a variable for data.
var people=data

// I select the table body in the HTML, to put data into it.
var tbody1=d3.select("tbody");

// I make a for loop to run the full length of "people", one datum at a time.
for (i=0 ; i<people.length; i++){

  // I append a table row to the html table with each iteration.
    var row=tbody1.append("tr");

    // I make a for loop to append a "people" entry into each row.
    for (let key in people[i]){
        row.append("td").text(people[i][key]);
    }
}

// I use d3 to select the button and the form-group created in my HTML and CSS, to make an event handler for each.
var button = d3.select("#filter-btn");
var form = d3.select(".form-group");

// I make a function to serve as the event handler for the form-group.
function runEnter() {

  // I define the function and, within it, tell d3 to look for the datetime value info in the form and filter
  // "people" by the datetime info. Then, the filtered entries are put into filteredData, to make a new table.
form.on("submit",runEnter);
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var filteredData = people.filter(people => people.datetime === inputValue);

// I tell the table body to return to blank whenever a new datetime has been received, 
// so that a new table with only the filtered entries can be made.
tbody1.html("");

// Now, I will make a new, filtered table and replace the old with the new each time a new date has been put 
// into the form and the button has been clicked.
// I make a for loop to run through the filtered data and append a row to the new table for each entry.
for (i = 0; i < filteredData.length; i++) {
    var tbody2=d3.select("tbody");
    var row1=tbody2.append("tr");

    // I fill each new table row with a new data entry from filteredData.
    for (let key in filteredData[i]){
        row1.append("td").text(filteredData[i][key]);
    }
  }
}

// I define the function which will restart the filtering of the table with each button click.
button.on("click", runEnter);