export const Lift = ({ data, setData, floorNumber, liftNumber }) => {
  const liftStyle = {
    height: "80px",
    width: "50px",
    backgroundColor: "blue",
    marginLeft: "10%"
  };
  // console.table("lift", floorNumber, liftNumber);
  // console.table(data)
  return (
    <div style={liftStyle}>
      {/* <p style={{ color: "white" }}>{liftNumber + 1}</p> */}
    </div>
  );
};
