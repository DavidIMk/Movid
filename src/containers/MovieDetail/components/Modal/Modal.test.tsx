import React from "react";
import { render, cleanup } from "@testing-library/react";
import Modal from "./";

afterEach(cleanup);

it("should be visible", () => {
  const { getByTestId } = render(
    <Modal
      isShowing={true}
      onClose={() => {}}
      image="https://via.placeholder.com/150"
    />
  );
  expect(getByTestId("container")).toHaveStyle("display: block");
});

it("should be invisible", () => {
  const { getByTestId } = render(
    <Modal
      isShowing={false}
      onClose={() => {}}
      image="https://via.placeholder.com/150"
    />
  );
  expect(getByTestId("container")).toHaveStyle("display: none");
});
