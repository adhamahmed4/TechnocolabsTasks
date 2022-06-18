// Foursquare API Info
const clientId = '5VMV2PRO4VUM2DAYULEJMDVEY1U2YKDTZJQXW5MTKND4VXRI';
const clientSecret = '1HS1S44XR0AZYZ5B0350XCWGPI0OPJJ3V3OEOC4OWKGESORX';
const url = 'https://www.absegy.com?near=';

// OpenWeather Info
//GitGuard removed it from the repo
// const openWeatherKey = '34b986e84b5b514a73873a15d7d5ec73';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// This API from foursquare is deprecated.
// Add AJAX functions here:
const getVenues = async () => {
    try {
        const city = $input.val();
        const urlToFetch = `https://api.foursquare.com/v2/venues/search?near=${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20180323`;
        console.log(urlToFetch);
        const response = await fetch(urlToFetch);
        const jsonifiedResponse = await response.json();
        console.log(jsonifiedResponse);
        return jsonifiedResponse.response.venues;
    } catch (error) {
        console.log(error);
    }
}

const getForecast = async () => {
    const urlToFetch = `${weatherUrl}?q=${$input.val()}&appid=${openWeatherKey}`;
    try
    {
        const response = await fetch(urlToFetch);
        const jsonifiedResponse = await response.json();
        console.log(jsonifiedResponse);
        return jsonifiedResponse;
    }
    catch(error)
    {
        console.log(error);
    }
}


// Render functions
const renderVenues = (venues) => {
    $venueDivs.forEach(($venue, index) => {
        // Add your code here:

        let venueContent = '';
        $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
    // Add your code here:

    let weatherContent = '';
    $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
    $venueDivs.forEach(venue => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "visible");
    getVenues()
    getForecast()
    return false;
}

$submit.click(executeSearch)