import { Floor } from "./Floor";

export const Building = ({ data, setData }) => {
  return (
    <div>
      {data
        .slice(0)
        .reverse()
        .map((floor, idx) => (
          //console.log(floor,idx)
          <Floor
            floor={floor}
            data={data}
            setData={setData}
            floorNumber={data.length - idx}
            key={floor[idx]}
          />
        ))}
    </div>
  );
};
