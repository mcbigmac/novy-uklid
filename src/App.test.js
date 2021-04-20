import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";

test("colorButtontest", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Jarní úklid/i));
  expect(screen.getByText(/Jarní úklid/i)).toHaveStyle({
    backgroundColor: "rgb(126, 197, 194)",
  });
});

test("colorBackgroundTest", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Jarní úklid/i));
  expect(screen.getByTestId("background")).toHaveStyle({
    backgroundColor: "#e6f6e6",
  });
});

test("colorRadioMama", () => {
  render(<App />);
  fireEvent.click(screen.getAllByTestId("radio-mama")[0]);
  expect(screen.getAllByTestId("formcell")[0]).toHaveStyle({
    backgroundColor: "pink",
  });
});

// test("cell disappears when x clicked", () => {
//   render(<App />);
//   fireEvent.click(screen.getAllByTestId("delete")[0]);
//   expect(screen.queryByText("Kuchyň a veranda")).not.toBeInTheDocument();
// });

test("task appears on the right when clicked", () => {
  render(<App />);
  fireEvent.click(screen.getAllByTestId("radio-mama")[0]);
  expect(screen.getAllByText("Kuchyň a veranda")).toHaveLength(2);
});

test("snapshot1", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  render(<App />);
  fireEvent.click(screen.getAllByTestId("radio-mama")[0]);
  expect(tree).toMatchSnapshot();
});

test("snapshot2", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  render(<App />);
  fireEvent.click(screen.getByText(/Jarní úklid/i));
  expect(tree).toMatchSnapshot();
});
