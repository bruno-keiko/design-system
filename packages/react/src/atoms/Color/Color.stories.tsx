import React from "react";
import Color from "./Color";
import { withKnobs, text } from "@storybook/addon-knobs";
import "@b.ds/scss/lib/atoms/Utilities.css";

export default {
  title: "Atoms/Color",
  decorators: [withKnobs],
};

export const Default = () => <Color hexCode={text("hexCode", "#000000")} />;
