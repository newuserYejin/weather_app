import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox.js';
import WeatherButton from './component/WeatherButton.js';

// 1. 앱이 실해되면 현재 위치 기반 날씨 추출(현재의 위도와 경도 받아내기)
// 2. api를 통해 도시, 날씨상태, 섭씨와 화씨로 표현
// 3. 5개의 버튼(1개는 현재위치, 4개는 다른나라 위치)
// 4. 버튼마다 도시의 날씨로 출력
// 5. 현재위치 버튼을 누르면 현재위치 기반의 날씨 다시 출력
// 6. 로딩스피너

function App() {
  const API_KEY = "e7056fa76f6a6b7d8be7d23179c66858"
  const [weather, setWeather] = useState(null)

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      getWeatherByCuurentLocation(latitude, longitude);
    });
  }

  const getWeatherByCuurentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setWeather(data)
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  // useEffect(() => {
  //   console.log("lat:", lat, "lon:", lon)
  //   getWeather(lat, lon)
  // }, [lat, lon])

  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather} />
        <WeatherButton />
      </div>
      {/* <div>
        cityName: {cityName}
      </div>
      <div>
        cityTemp(K): {cityTemp}
      </div>
      <div>
        cityTemp(F): {((cityTemp - 273.15) * 9 / 5 + 32).toFixed(2)}
      </div>
      <div>
        cityTemp(C): {(cityTemp - 273.15).toFixed(2)}
      </div> */}
    </div>
  );
}

export default App;
