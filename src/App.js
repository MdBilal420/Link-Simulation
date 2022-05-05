import "./styles.css";
import { useState } from "react";
// import { Lift } from "./components/Lift";
// import { Floor } from "./components/Floor";
import { Building } from "./components/Building";
let mst = [
  [1, 0, 1],
  [0, 1, 1],
  [0, 0, 0]
];
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

  const test = (x, y) => {
    let m = [];
    for (let i = 0; i < data.length; i++) {
      let n = [];
      for (let j = 0; j < data[0].length; j++) {
        if (i === x && y === j) n.push(1);
        else n.push(data[i][j]);
      }
      m.push(n);
    }
    //console.table("arr", m);
    setData(m);
  };
  console.table("table", data);
  return (
    <div className="App">
      <h1>Lift Simulation</h1>
      <label>Floors </label>
      <input type="text" onChange={(e) => setFloor(e.target.value)} /> <br />
      <label>Lifts </label>
      <input type="text" onChange={(e) => setLift(e.target.value)} /> <br />
      <button onClick={createUI}>Create</button>
      <button onClick={() => test(2, 3)}>test</button>
      {/* {data && <Building data={data} />} */}
    </div>
  );
}
