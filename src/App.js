import "./App.css";
import WeatherComponent from "./components/WeatherComponents/WeatherComponent";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <Input />
        {/* <WeatherComponent /> */}
      </div>
    </div>
  );
}

export default App;
