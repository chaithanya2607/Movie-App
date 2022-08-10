import { useState } from "react";
import { ColorBox } from "./Colorbox";

export function AddColor() {
  // const color = "skyblue";
  const [color, setColor] = useState("orange");
  const [colorList, setColorList] = useState([
    "skyblue",
    "pink",
    "red",
    "purple",
  ]);
  const styles = {
    fontSize: "25px",
    backgroundColor: color,
  };
  return (
    <div>
      <div className="add-color">
        <input
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
          value={color}
        />
        <button onClick={() => setColorList([...colorList, color])}>
          Add Color
        </button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
