var people=data
for (i=0 ; i<people.length; i++){
    var tbody=d3.select("tbody");
    var row=tbody.append("tr");
    for (let key in people[i]){
        row.append("td").text(people[i][key]);
    }
}
var button = d3.select("#button");
var form = d3.select(".form-group");
// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
// Complete the event handler function for the form
function runEnter() {
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.("text");
//   var filteredData = people.filter(people[i] => people[i].datetime === inputValue);
}
console.log(inputValue)
// for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }