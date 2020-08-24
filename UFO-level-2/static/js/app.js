// Assign data to variable
var UFO_Data = data;

// Select table body
var $tbody = d3.select("tbody")

// Get references to the tbody element, input field and button
var $Input = document.querySelector("#search");

// Output columns
var columns = ["datetime","city","state","country","shape","durationMinutes","comments"]

// Add data into HTML

var addData = (dataInput) => {
  console.log("add data: ", dataInput.length)  
  dataInput.forEach(ufoSightings => {
           
      var row = $tbody.append("tr");
      
      columns.forEach(column => row.append("td").text(ufoSightings[column])
     
      )
      
  });
}
//console.log(UFO_Data.length)
addData(UFO_Data);





// Find value of searchBtn
const searchBtn = document.querySelectorAll(".btn");
for (let i = 0; i < searchBtn.length; i++) {
     searchBtn[i].addEventListener("click", function() {
       console.log(searchBtn[i].id);
       myObj = {}
      var searchValue = searchBtn[i].id;
      myObj["searchValue"] = searchBtn[i].id;
      console.log(myObj.searchValue)

      $tbody.html("")
      UFO_Data = data;
          switch(searchValue) {
            case "datetime":
              console.log("datetime was selected");
              datetime();
              break;
            case "city":
              console.log("city was selected");
              city();
              break;
            case "state":
              console.log("state was selected");
              state();
              break;
            case "country":
              console.log("country was selected");
              country();
              break;
            case "shape":
              console.log("shape was selected")
              shape();
            default:
              console.log("anthing else")
              reset();
          }
     });
 }


// reset function to reset values.
function reset()
{
  //console.log("Reset")
  UFO_Data = data;
  $Input.value = "";
  addData(UFO_Data)
}

function datetime() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filteritem = $Input.value.trim().toLowerCase();
  
  // Set filteredAddresses to an array of all addresses whose "datetime" matches the filter
  UFO_Data = UFO_Data.filter(function(address) {
    var addressState = address.datetime.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressState === filteritem;
  });
  //renderTable();
  addData(UFO_Data);
}

function city() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filteritem = $Input.value.trim().toLowerCase();
  console.log("city function: ",filteritem)

  // Set filteredAddresses to an array of all addresses whose "city" matches the filter
  UFO_Data = UFO_Data.filter(function(address) {
    var addressState = address.city.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressState === filteritem;
  });
  addData(UFO_Data);
}

function state() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filteritem = $Input.value.trim().toLowerCase();
  console.log("state function ",filteritem)

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  UFO_Data = UFO_Data.filter(function(address) {
    var addressState = address.state.toLowerCase();
    console.log("addressState: ", addressState)

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressState === filteritem;
  });
  addData(UFO_Data);
}

function country() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filteritem = $Input.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "country" matches the filter
  UFO_Data = UFO_Data.filter(function(address) {
    var addressState = address.country.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressState === filteritem;
  });
  addData(UFO_Data)
}

function shape() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filteritem = $Input.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "shape" matches the filter
  UFO_Data = UFO_Data.filter(function(address) {
    var addressState = address.shape.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressState === filteritem;
  });
  addData(UFO_Data)
}