import moment from "moment-timezone";
const NextFourDays: React.FC<{ weatherObj: any }> = (props) => {
  return (
    <ul className="pt-8">
      {props.weatherObj.length > 0 ? props.weatherObj.map((day: any) => {
        return (
          <li
            className="flex justify-between items-center border-b border-white py-2"
            key={day.Date}
          >
            <ul>
              <li className="font-semibold text-sm  text-white">
                {moment(day.Date.slice(0,10)).format("dddd")}
              </li>
              <li className="font-normal text-sm  text-white">
                {moment(day.Date.slice(0,10))
                  .format("MMMM D, YYYY")}
              </li>
             
            </ul>
            <ul className="flex-col items-center justify-evenly">
            <li>
              <img
              src={`../../../icons/${day.Day.Icon}.svg`}
              alt=""
              className="filter invert w-10 h-10"
            />
              </li>
              <li className="text-white font-bold text-2xl">
                {props.weatherObj.length > 0 ? Math.round(
                  (day.Temperature.Minimum.Value +
                    day.Temperature.Maximum.Value) /
                    2
                )
                  .toFixed(0)
                  .toString(): '0'}
                {"\u00b0"} F
              </li>
            </ul>
          </li>
        );
      }): null}
    </ul>
  );
};

export default NextFourDays;
