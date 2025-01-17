export default function FetchCity({ handleCity, inputRef, buttonClass, buttonContent }) {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <section>
            <form onSubmit={handleSubmit} className="pt-6 flex flex-col items-center gap-6">
                <label htmlFor="city-name" className="text-lg font-semibold">City Name</label>
                <input id="city-name" ref={inputRef} type="text" name="cityName" className="w-4/5 h-11 bg-gray-50 border-none rounded-3xl ps-6 outline-gray-950 text-xl text-black"/>
                <button onClick={handleCity} type="submit" className="bg-gray-50 px-9 py-1 text-gray-900 text-lg border-none rounded-3xl font-semibold">
                    {buttonContent}
                </button>
            </form>
        </section>
    );
}

export function getCity(cityName) {
    const url = `https://api.weatherapi.com/v1/current.json?key=a8aacc3c5aa940fda0e132231242906&q=${cityName}&aqi=no`;
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error(response.status);
            }
        })
        .then(data => {
            const city = {};
            city.location = data.location.name + ", " + data.location.country;
            city.temperature = data.current.temp_c + "°";
            city.condition = data.current.condition.text;
            city.conditionIcon = data.current.condition.icon
            city.feelsLike = data.current.feelslike_c + "°C";
            city.wind = data.current.wind_kph + " KM/H";
            city.humidity = data.current.humidity + "%";

            return city;
        })
        .catch(error => {
            if (error.message === "400") {
                alert("Please enter a valid city name.");
            }
            else {
                console.error(error);
                alert("An error occured!");
            }
            
            throw error;
        })
}