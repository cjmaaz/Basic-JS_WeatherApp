
const key = 'abcXYz';
const getWeather = async id => {
    const baseURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(baseURI + query);
    const data = await response.json();
    return data[0];
};

const getCity = async city => {
    const baseURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(baseURI + query);
    const data = await response.json();
    return data[0];
};