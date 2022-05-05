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
export const Floor = ({ floor, data, setData, floorNumber }) => {
  console.table("floor", floorNumber);
  console.table(data);

  return (
    <div style={floorStyle}>
      <p>Floor {floorNumber}</p>
      <div style={{ display: "flex" }}>
        <div>
          {floorNumber !== data.length ? (
            <button style={{ ...btn, ...up }}>Up</button>
          ) : null}{" "}
          <br />
          {floorNumber !== 1 ? (
            <button style={{ ...btn, ...down }}>Down</button>
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
