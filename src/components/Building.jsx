import { Floor } from "./Floor";

export const Building = ({ data }) => {
  return (
    <div>
      {data.map((floor, idx) => (
        //console.log(floor,idx)
        <Floor floor={floor} data={data} floorNumber={idx} key={floor[idx]} />
      ))}
    </div>
  );
};
