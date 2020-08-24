// Assign the data from `data.js` to a descriptive variable
var UFO_Data = data;

// YOUR CODE HERE!

// Select table body
var $tbody = d3.select("tbody")

// Filter button
var button = d3.select("#filter-btn")

// Input Field
var inputFieldDate = d3.select("#datetime")

var columns = ["datetime","city","state","country","shape","durationMinutes","comments"]



// Add data into HTML
var addData = (dataInput) => {
    //console.log("Data Input: ", dataInput)
    dataInput.forEach(ufoSightings => {
             
        var row = $tbody.append("tr");
        
        columns.forEach(column => row.append("td").text(ufoSightings[column])   
        )
        
    });
}

addData(UFO_Data);

// Event listener for Button
button.on("click", () => {
        console.log(inputFieldDate)
        d3.event.preventDefault();
        var inputDate = inputFieldDate.property('value').trim();
        var filterDate = UFO_Data.filter(UFO_Data => UFO_Data.datetime == inputDate);
$tbody.html("")

let response = {
    filterDate
}

if(response.filterDate.length != 0) {
    addData(filterDate);
}

else {
    $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
}

        
    });

