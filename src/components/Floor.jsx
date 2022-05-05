import { Lift } from "./Lift";
const floorStyle = {
  height: "115px",
  marginTop: "5px",
  borderBottom: "1px solid black"
};
const btn = {
  border: "white",
  borderRadius: "5px",
  width: "100%",
  padding: "3px",
  margin: "5px",
  cursor: "pointer"
};
const up = {
  background: "green"
};
const down = {
  background: "yellow"
};

let ms = [
  [1, 0, 1],
  [0, 0, 0],
  [0, 1, 0]
];
export const Floor = ({ floor, data, setData, floorNumber }) => {
  //1	0	1       1 0 1
  //0	1	0  -->  0 0 0
  //0	0	0       0 1 0

  // for(let i=0;i<data[f].length;i++){
  //   console.log("i",data[f][i])
  // }
  const checkForLift = (f) => {
    for (let i = 0; i < data[f].length; i++) {
      if (data[f][i] === 1) {
        return [f, i];
      }
      //console.log(data[f][i]);
    }
    return;
  };

  const goUp = (op) => {
    let f = floorNumber - 1;
    let point = checkForLift(f);
    let val = op === "up" ? +1 : -1;

    if (point) {
      console.table("floor", f, point);
      let m = [];
      for (let i = 0; i < data.length; i++) {
        let n = [];
        for (let j = 0; j < data[0].length; j++) {
          if (i === point[0] && j === point[1]) n.push(0);
          else if (i === point[0] + val && j === point[1]) n.push(1);
          else n.push(data[i][j]);
        }
        m.push(n);
      }
      console.table("test", m);
      setData(m);
    } else {
      console.log("no points");
    }
  };

  return (
    <div style={floorStyle}>
      <p>Floor {floorNumber}</p>
      <div style={{ display: "flex" }}>
        <div>
          {floorNumber !== data.length ? (
            <button onClick={() => goUp("up")} style={{ ...btn, ...up }}>
              Up
            </button>
          ) : null}{" "}
          <br />
          {floorNumber !== 1 ? (
            <button onClick={() => goUp("down")} style={{ ...btn, ...down }}>
              Down
            </button>
          ) : null}
        </div>
        {floor.map((lift, idx) => (
          <>
            {lift === 1 ? (
              <Lift
                lift={lift}
                floorNumber={floorNumber - 1}
                liftNumber={idx}
                data={data}
                setData={setData}
                key={idx}
              />
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
};
