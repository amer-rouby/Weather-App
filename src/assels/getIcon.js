const weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
}

const getIcon = (id) => {
    switch(true){
      case id >= 200 && id <= 232:
        return weatherIcon.Thunderstorm

      case id >= 300 && id <= 321:
        return weatherIcon.Drizzle

      case id >= 500 && id <= 531:
        return weatherIcon.Rain

      case id >= 600 && id <= 622:
        return weatherIcon.Snow

      case id >= 701 && id <= 781:
        return weatherIcon.Atmosphere

      case id === 800:
        return weatherIcon.Clear

      case id >= 801 && id <= 804:
        return weatherIcon.Clouds

        default:
          return weatherIcon.Clouds
      }
  }

export default getIcon;