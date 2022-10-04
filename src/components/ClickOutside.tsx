import { useRef } from "react";

import { useOnClickOutside } from "../hooks/useOnClickOutside";

export const ClickOutside = () => {
  const ref = useRef(null);
  const onClickOutside = () => {
    console.log("Click Outside!");
  };

  useOnClickOutside(ref, onClickOutside);

  return (
    <div
      ref={ref}
      style={{
        width: 200,
        height: 200,
        background: "blue",
      }}
    />
  );
};
