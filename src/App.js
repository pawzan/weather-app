import "./App.css";
import WeatherComponent from "./components/WeatherComponents/WeatherComponent";
import Input from "./components/Input/Input";
import FavoritesCity from "./components/FavoritesCity/FavoritesCity";

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <Input />
        <WeatherComponent />
      </div>
      <FavoritesCity />
    </div>
  );
}

export default App;
