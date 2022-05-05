import { Lift } from "./Lift";

export const Floor = ({ floor, data, floorNumber }) => {
  const floorBase = {
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

  return (
    <div style={floorBase}>
      <p>Floor {floorNumber + 1}</p>
      <div style={{ display: "flex" }}>
        <div>
          {floorNumber !== data.length - 1 ? (
            <button style={{ ...btn, ...up }}>Up</button>
          ) : null}{" "}
          <br />
          {floorNumber !== 0 ? (
            <button style={{ ...btn, ...down }}>Down</button>
          ) : null}
        </div>
        {floor.map((lift, idx) => (
          <>{lift === 1 ? <Lift lift={lift} key={idx} /> : null}</>
        ))}
      </div>
    </div>
  );
};
