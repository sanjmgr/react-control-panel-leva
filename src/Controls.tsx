import React from "react";
import { button, useControls, folder } from "leva";

const Controls = () => {
  const controls = useControls({
    Name: "Sanjay Magar",
    Checked: true,
    Number: {
      min: 0,
      max: 10,
      value: 4,
      step: 0.5,
      suffix: "cm"
    },
    Interval: {
      value: [10, 20],
      min: 1,
      max: 20
    },
    Button: button(() => alert("Hey! I am alerted")),
    Color: "#00ff00",
    options: {
      value: "x",
      options: ["x", "y"]
    }
  });

  const folders = useControls("Reactjs", {
    "React and Threejs": folder(
      {
        Label: "React Three Fiber",
        website:
          "https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
      },
      { collapsed: true }
    )
  });

  return (
    <code>
      <pre>{JSON.stringify(controls, null, " ")}</pre>
      <pre>{JSON.stringify(folders, null, " ")}</pre>
    </code>
  );
};

export default Controls;
