import logo from "./logo.svg";
import "./App.css";
import Seats from "./components/Seats";
import "./components/style.css";
function App() {
  const render = () => {
    let arr = [];
    for (let i = 0; i < 50; i++) {
      arr.push(<Seats />);
    }
    return arr;
  };
  return (
    <div className="App">
      <div>
        <h2>Permium</h2>
        <div>
          {/* {render().map((e, i) => {
            return e;
          })} */}
          <Seats />
        </div>
      </div>
    </div>
  );
}

export default App;
