import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementButton = getByRole("button", { name: "Increment" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementButton);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  it("count should decrement by 1 if the decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrementButton = getByRole("button", { name: "Decrement" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);
    fireEvent.click(decrementButton);
    expect(Number(getByTestId("count").textContent)).toEqual(-1);
  });

  it("count should be 0 if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const restartButton = getByRole("button", { name: "Reset" });
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(restartButton);
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });

  it("count should invert sign if the switch sign button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const switchButton = getByRole("button", { name: "Switching Sign" });
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(switchButton);
    expect(Number(getByTestId("count").textContent)).toEqual(-50);
  });
});
