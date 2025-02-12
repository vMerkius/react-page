import React from "react";

type DotProps = {
  color: string;
  small?: boolean;
};

const Dot: React.FC<DotProps> = ({ color, small }) => {
  const dotClass = small ? "0.6rem" : "1rem";
  return (
    <div
      style={{
        backgroundColor: color,
        width: dotClass,
        height: dotClass,
        borderRadius: "50%",
        display: "inline-block",
      }}
    />
  );
};

export default Dot;
