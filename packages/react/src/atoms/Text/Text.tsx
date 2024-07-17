import React, { FC } from "react";
import {FontSizes} from "@b.ds/foundation";

interface TextProps {
  children: string;
  size?: keyof typeof FontSizes;
}

const Text: FC<TextProps> = ({ children, size = FontSizes.base }) => {
  const className = `dse-text-${size}`;
  return <p className={className}> {children}</p>;
};

export default Text;
