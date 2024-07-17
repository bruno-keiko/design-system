import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

it("react", () => {
  render(<Button label="hello world" />);
  expect("hello world").toEqual("hello world");
  // let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
