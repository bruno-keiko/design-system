import React from "react";
import { Spacing } from "@b.ds/foundation/lib";
interface ColorProps {
    hexCode: string;
    height?: keyof typeof Spacing;
    width?: keyof typeof Spacing;
}
declare const Color: React.FunctionComponent<ColorProps>;
export default Color;
