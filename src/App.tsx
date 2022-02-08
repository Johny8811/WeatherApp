import { WeatherApp } from './main/WeatherApp';
import { CoordProvider } from './state/CoordProvider';
import { WeatherDataProvider } from './state/weather/WeatherDataProvider';
import { ForecastDataProvider } from './state/forecast/ForecastDataProvider';

const App = () => {
  return (
    <CoordProvider>
      <WeatherDataProvider>
        <ForecastDataProvider>
          <WeatherApp />
        </ForecastDataProvider>
      </WeatherDataProvider>
    </CoordProvider>
  );
}

export default App;
