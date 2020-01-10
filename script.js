// Project Weather


(function () {

    document.getElementById("run").addEventListener("click", function () {

        /*  getCity().catch(error => {
              console.log("error");
              console.error(error);
          });

         */

        getWeatherBoy().catch(error => {
            console.log("error");
            console.error(error);
        });


    })


})();

/*
async function getCity() {
    const response = await fetch('city.list.json');
    const cityList = await response.json();
   // let varOutputCity = document.getElementById("output");
    console.log(cityList);
}


 */

// Application state object.

async function getWeatherBoy() {
    let varInput = document.getElementById("input1");
    let varInputTwo = document.getElementById("input2");
    let varOutputWeather = document.getElementById("output");
    // let varCity = "http://api.openweathermap.org/data/2.5/forecast?q=" + varInput.value + varInputTwo.value + "&mode=xml"; // +  // + varInputTwo + "&mode=xml";
    // let theKey = "&appid=21e65cce6bce035b3e041877c941e391";
    // let varFetch = varCity + theKey + "&units=metric";
    const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + varInput.value + ',' + varInputTwo.value + '&appid=21e65cce6bce035b3e041877c941e391'+ '&units=metric');
    const weatherList = await response.json();
    varOutputWeather.innerText = weatherList;
    console.log("hello");
    console.log(weatherList.list);


    /*
        const input = {
            jsonText: weatherList.json,
            jsonPretty: null,
            headers: weatherList.headers,
            activeTab: 0,
            prettified: false,
            expandedNodes: new Set(),
        };
        console.log(input)
    */

}




