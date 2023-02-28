import { TodaysWeatherType } from "../../types/weather.types";

const Today: React.FC<{ weatherObj: TodaysWeatherType }> = (props) => {
  return (
    <ul className="pt-10">
      {/* weather forecast title */}
      <li className="font-semibold text-xs  text-white mb-3">
        Weather Forecast Today
      </li>
      {/* city, country */}
      <li className="font-semibold text-xl   text-white">
        {props.weatherObj.city}, {props.weatherObj.country}
      </li>
      {/* Temperature*/}
      <li>
        <ul className="flex items-center">
          <li>
            <img
              src={`../../../icons/${
                props.weatherObj.weather !== ""
                  ? props.weatherObj.weather.Day.Icon
                  : "1"
              }.svg`}
              alt=""
              className="filter invert"
            />
          </li>
          <ul className="flex flex-col">

          <li className="font-bold text-white text-5xl">
            {props.weatherObj.averageTemp}
            {"\u00b0"} F
          </li>
          <li className="font-normal text-white text-sm">Ave.</li>
          </ul>
        </ul>
      </li>
      <li className="font-medium text-2xl text-white">
        {props.weatherObj.weather !== ""
          ? props.weatherObj.weather.Day.IconPhrase
          : "No Data"}
      </li>
    </ul>
  );
};

export default Today;
