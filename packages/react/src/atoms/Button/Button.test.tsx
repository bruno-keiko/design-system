import React from "react";
import Button from "./Button";
import { render } from "@testing-library/jest-dom";

test("renders Button", () => {
  render(<Button label="hello world" />);
});
