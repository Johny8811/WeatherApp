import { WeatherApp } from './main/WeatherApp'
import { CoordProvider } from './state/CoordProvider'

const App = () => {
  return (
    <CoordProvider>
      <WeatherApp />
    </CoordProvider>
  );
}

export default App;
