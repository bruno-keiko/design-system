import React from "react";
import { createRoot } from "react-dom/client";
import { Button, Color } from "@b.ds/react";
import "@b.ds/scss/lib/atoms/Button.css";
import "@b.ds/scss/lib/atoms/Utilities.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <div>
    <Button label="hello world" /> <Color hexCode="red" />
  </div>
);
