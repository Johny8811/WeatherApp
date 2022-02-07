import { WeatherApp } from './main/WeatherApp'
import { CoordProvider } from './state/CoordProvider'
import { WeatherDataProvider } from './state/WeatherDataProvider'

const App = () => {
  return (
    <CoordProvider>
      <WeatherDataProvider>
        <WeatherApp />
      </WeatherDataProvider>
    </CoordProvider>
  );
}

export default App;
