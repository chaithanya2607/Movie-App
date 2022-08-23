import { useState } from "react";
import { ColorBox } from "./Colorbox";

export function AddColor() {
  const [color, setColor] = useState("orange");
  const [colorList, setColorList] = useState([]);
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
        value={color} />
        <button
        //copy the colorList and add newColor to it
        onClick={()=> setColorList([...colorList, color])}
        >Add Color</button>
        </div>
       {colorList.map((clr) => (
         <ColorBox color={clr} />
       ))      
       }
        
    </div>
  );
      }