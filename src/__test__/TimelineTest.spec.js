import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Header from "../components/HeaderCopy";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with Title", () => {
  act(() => {
    render(<Header/>, container);
  });
  expect(
      container.querySelector("[data-testid='title']").textContent).toBe('!');
  });