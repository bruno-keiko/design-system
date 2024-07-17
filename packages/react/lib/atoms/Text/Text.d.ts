import { FC } from "react";
import { FontSizes } from "@b.ds/foundation";
interface TextProps {
    children: string;
    size?: keyof typeof FontSizes;
}
declare const Text: FC<TextProps>;
export default Text;
