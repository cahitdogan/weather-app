export default function WeatherInfo({ city }) {
    return (
        <section id="weather-info-container" className="w-5/6 flex flex-col items-center mx-auto pb-6 border-b text-center">
            <h1 className="text-3xl font-semibold mb-1">{city.name}, {city.country}</h1>
            <p className="mb-1 text-base font-thin">{city.condition}</p>
            <img src={city.conditionIcon} alt="condition icon" className='h-20 mb-2'/>
            <p className="mb-6 text-7xl font-bold">{city.temperature}°</p>
            <div className="w-1/2 flex flex-col">
                <p className="flex justify-between border-b py-2">
                    <span>Feels Like</span>   <span>{city.feelsLike}°C</span>
                </p>
                <p className="flex justify-between border-b py-2">
                    <span>Wind</span>   <span>{city.wind} KM/H</span>
                </p>
                <p className="flex justify-between py-2">
                    <span>Humidity</span>   <span>{city.humidity}%</span>
                </p>
            </div>
        </section>
    );
}