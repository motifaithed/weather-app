import { useState } from "react";
import Today from "../../components/weather/Today";
import NextFourDays from "../../components/weather/NextFourDays";
import WeatherObj from "../../utils/Weather.utils";
import Card from "../../components/ui/Card";
import Spinner from "../../components/ui/Spinner";
import NotFound from "../../components/error/NotFound";
import FormInput from "../../components/weather/FormInput";
const Weather = () => {
  
  const [input, hasInput] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [todaysWeather, setTodaysWeather] = useState<string>("");
  const [nextFourDaysWeather, setNextFourDaysWeather] = useState<any>([]);
  const [averageTempToday, setAverageTempToday] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

  
  const handleSubmit = async (city: string) => {
    setIsLoading(true);
    
    hasInput(city);
    const weather = new WeatherObj(city);
    const cityDetails = await weather.getCityDetails();

    if (cityDetails.status === 200) {
      setIsNotFound(false);
    } else {
      setIsNotFound(true);
      setIsLoading(false);
    }

    const weatherDetails = await weather.getWeatherDetails(cityDetails.key);

    setCity(cityDetails.city);
    setCountry(cityDetails.country);
    setTodaysWeather(weatherDetails.DailyForecasts[0]);

    const temp = await weather.setTemp(
      weatherDetails.DailyForecasts[0].Temperature.Minimum.Value,
      weatherDetails.DailyForecasts[0].Temperature.Maximum.Value
    );
    setAverageTempToday(temp);

    //get the next four days
    setNextFourDaysWeather(weatherDetails.DailyForecasts.slice(1));
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <FormInput onSubmit={handleSubmit} />
          {input !== "" && input !== null && (
            <Card>
              {isNotFound ? (
                <NotFound />
              ) : (
                <div>
                  <Today
                    weatherObj={{
                      city: city,
                      country: country,
                      averageTemp: averageTempToday,
                      weather: todaysWeather,
                    }}
                  />
                  <NextFourDays weatherObj={nextFourDaysWeather} />
                </div>
              )}
            </Card>
          )}
        </div>
      )}
    </>
  );
};

export default Weather;
