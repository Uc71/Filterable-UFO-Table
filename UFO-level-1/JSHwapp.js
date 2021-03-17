var people=data
var tbody1=d3.select("tbody");
for (i=0 ; i<people.length; i++){
    var row=tbody1.append("tr");
    for (let key in people[i]){
        row.append("td").text(people[i][key]);
    }
}
var button = d3.select("#filter-btn");
var form = d3.select(".form-group");
function runEnter() {
form.on("submit",runEnter);
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var filteredData = people.filter(people => people.datetime === inputValue);
console.log(inputValue);
tbody1.html("");
for (i = 0; i < filteredData.length; i++) {
    var tbody2=d3.select("tbody");
    var row1=tbody2.append("tr");
    for (let key in filteredData[i]){
        row1.append("td").text(filteredData[i][key]);
    }
  }
}
button.on("click", runEnter);