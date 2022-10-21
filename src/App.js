import "./index.css";
import Search from "./Search.js";
export default function App() {
  return (
    <div className="App">
      <h1>Weather forecast</h1>
      <div className="container_maim">
        {" "}
        <Search />
      </div>
    </div>
  );
}
