import FetchCity from "./FetchCity.jsx";
import WeatherInfo from "./WeatherInfo.jsx";
import { getCity } from "./FetchCity.jsx";
import { useState, useRef } from "react";

let isFirstTime = true;

function App() {
  const [city, setCity] = useState({});
  const inputRef = useRef(null);

  if (isFirstTime) {
    getCity("Istanbul")
      .then(city => setCity(city))
      .then(() => isFirstTime = false)
  }

  function handleCity() {
    const cityName = inputRef.current.value;
    getCity(cityName)
      .then((city) => setCity(city));
  }

  return (
    <main
      id="container"
      className="bg-gray-900 h-screen w-full flex flex-col justify-center text-gray-50 py-8 md:max-w-xl md:h-auto md:rounded-lg"
    >
      <WeatherInfo city={city} />
      <FetchCity handleCity={handleCity} inputRef={inputRef} />
    </main>
  );
}

export default App;
