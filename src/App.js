import "./styles.css";
import { useState } from "react";
// import { Lift } from "./components/Lift";
// import { Floor } from "./components/Floor";
import { Building } from "./components/Building";

export default function App() {
  const [floor, setFloor] = useState(0);
  const [lift, setLift] = useState(0);
  const [data, setData] = useState(null);

  const createUI = () => {
    let floorArr = [];
    for (let i = 0; i < floor; i++) {
      let liftArr = [];
      for (let j = 0; j < lift; j++) {
        liftArr.push(i === 0 ? 1 : 0);
      }
      floorArr.push(liftArr);
    }
    setData(floorArr);
  };

  return (
    <div className="App">
      <h1>Lift Simulation</h1>
      <label>Floors </label>
      <input type="text" onChange={(e) => setFloor(e.target.value)} /> <br />
      <label>Lifts </label>
      <input type="text" onChange={(e) => setLift(e.target.value)} /> <br />
      <button onClick={createUI}>Create</button>
      {data && <Building data={data} setData={setData} />}
    </div>
  );
}
