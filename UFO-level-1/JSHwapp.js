people=data
for (i=0 ; i<people.length; i++){
    var tbody=d3.select("tbody");
    var row=tbody.append("tr");
    for (let key in people[i]){
        row.append("td").text(people[i][key]);
    }
}