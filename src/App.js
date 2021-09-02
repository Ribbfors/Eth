import "./App.css";
import NewsFeed from "./NewsFeed";
import Value from "./CurrentValue";
import "./main.css";

function App() {
  return (
    <div className="App">
      <div className={"box"}>
        <NewsFeed />
        <Value />
      </div>
    </div>
  );
}

export default App;
