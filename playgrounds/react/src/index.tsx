import React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "@ds/react";
import "@ds.e/scss/lib/atoms/Button.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<Button label="hello world" />);
