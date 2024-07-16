import React from "react";
import { Spacing } from "@ds.e/foundation";

interface ColorProps {
  hexCode: string;
  height?: keyof typeof Spacing;
  width?: keyof typeof Spacing;
}

const Color: React.FunctionComponent<ColorProps> = ({
  hexCode,
  height = Spacing.sm,
  width = Spacing.sm,
}) => {
  const className = `dse-width-${width} dse-height-${height}`;
  return <div className={className} style={{ backgroundColor: hexCode }}></div>;
};

export default Color;
