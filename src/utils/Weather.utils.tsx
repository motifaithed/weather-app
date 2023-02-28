class WeatherObj {
  city: string;
  constructor(city: string) {
    this.city = city;
  }
  async getCityDetails() {
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_API_KEY}&q=${this.city}`
    );
    const jsonRespone = await response.json();
    let returnObj = {
      city: '',
      country: '',
      key: '',
      status: 0,
    };
    if (jsonRespone.length > 0) {
      returnObj = {
        city: jsonRespone[0].LocalizedName,
        country: jsonRespone[0].Country.EnglishName,
        key: jsonRespone[0].Key,
        status: response.status,
      };
    }
    return returnObj;
  }
  async getWeatherDetails(key: string) {
    const response = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${process.env.REACT_APP_API_KEY}`
    );
    const jsonRespone = await response.json();
    return jsonRespone;
  }
  async setTemp(minTemp: number, maxTemp: number) {
    const averageTemp = Math.round((minTemp + maxTemp) / 2).toFixed(0);
    return averageTemp.toString();
  }
}

export default WeatherObj;
