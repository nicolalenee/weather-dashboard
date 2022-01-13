var formSubmitHandler = function(event) {
  // prevent page refresh after form submission
  event.preventDefault();
  // get value from input element
  var city = $("#searchterm").val().trim();

  if (city) {
    getTodaysForecast(city);

    // clear form data
    city = "";
  } else {
    alert("Please enter a city!")
  }

};

var getTodaysForecast = function(city) {
  // open weather api key 
  var apiKey = "de4084fe21aab085a9b43a06f4ecd035";
  // format the open weather api url
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
  
  // make a get request to apiUrl
  fetch(apiUrl)
  .then(function(response) {
    // if response was successful
    if (response.ok) {
      console.log("the response was successful");

      response.json().then(function(data) {
        console.log(data);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  })
  .catch(function(error) {
    alert("Unable to connect to OpenWeather. Try again later.")
  })
}

// event handlers
$("#search-form").on("submit", formSubmitHandler);