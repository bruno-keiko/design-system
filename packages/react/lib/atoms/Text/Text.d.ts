import { FC } from "react";
import { FontSizes } from "@ds.e/foundation";
interface TextProps {
    children: string;
    size?: keyof typeof FontSizes;
}
declare const Text: FC<TextProps>;
export default Text;
