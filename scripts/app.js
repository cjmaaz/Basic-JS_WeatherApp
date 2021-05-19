const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = data => {
    const { cityData, weatherData } = data;
    details.innerHTML = `<h5 class="my-3">${cityData.EnglishName}</h5>
                            <div class="my-3">${weatherData.WeatherText}</div>
                            <div class="display-4 my-4">
                                <span>${weatherData.Temperature.Metric.Value}</span>
                                <span>&deg;C</span>
                            </div>`;
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
    //Images
    const iconSrc = `./assets/img/icons/${weatherData.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    let timeSrc = weatherData.IsDayTime ? './assets/img/day.svg' : './assets/img/night.svg';
    time.setAttribute('src', timeSrc);
};

const updateCity = async city => {
    const cityData = await getCity(city);
    const weatherData = await getWeather(cityData.Key);
    return { cityData, weatherData };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city).then(data => { updateUI(data) }).catch(err => { console.log(err); });
});