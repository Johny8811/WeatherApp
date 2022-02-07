import { WeatherApp } from './routes/main/WeatherApp'
import { CoordProvider } from './state/CoordProvider'

const App = () => {
  return (
    <CoordProvider>
      <WeatherApp />
    </CoordProvider>
  );
}

export default App;
